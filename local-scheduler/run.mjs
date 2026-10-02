// Local-PC scheduled TikTok poster — connects to Zouhir's dedicated Chrome
// (the exact same profile/session proven to work in testing) over CDP,
// launching it if it isn't already running. Mirrors the VPS script's logic
// but runs via Windows Task Scheduler instead of cron, and uses the real
// installed Chrome (CDP) instead of a bundled headless browser, matching the
// setup that was actually proven to get distribution (see SKILL.md 2026-10-01).
import { chromium } from 'playwright';
import { google } from 'googleapis';
import fs from 'node:fs';
import path from 'node:path';
import { execFile, spawn } from 'node:child_process';
import { promisify } from 'node:util';

const execFileP = promisify(execFile);

const ROOT = 'D:\\CLAUDE CODE\\CONTENT DEPARTEMENT\\tiktok-growth-agent';
const CHROME_PROFILE_DIR = path.join(ROOT, 'chrome-profile');
const CHROME_EXE = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCRIPTS_DIR = path.join(ROOT, 'main-skill');
const RUN_LOGS = path.join(ROOT, 'local-scheduler', '.run-logs');
const TMP = path.join(ROOT, 'local-scheduler', '.tmp');
const SERVICE_ACCOUNT_KEY = path.join(ROOT, 'local-scheduler', 'service-account.json');
// Per-account sheet (video-only): "bubble.mousse01 - TikTok Posts"
// Columns: A POST NUMBER | B VIDEO LINK | C CAPTION | D STATUS | E LIVE URL
const SPREADSHEET_ID = '1_DGa3TRFOaXA_gDzf-s_9qy7SVR9B-0bDN2ZSHl26dI';
const SHEET_TAB = 'Sheet1';

for (const d of [RUN_LOGS, TMP]) fs.mkdirSync(d, { recursive: true });

function ts() { return new Date().toISOString().replace(/[:.]/g, '-'); }
function log(...args) {
  const line = `[${new Date().toISOString()}] ${args.join(' ')}`;
  console.log(line);
  fs.appendFileSync(path.join(RUN_LOGS, 'run.log'), line + '\n');
}
function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function ensureChromeRunning() {
  try {
    const res = await fetch('http://127.0.0.1:9222/json/version');
    if (res.ok) { log('Chrome debug port already up'); return; }
  } catch {}
  log('Launching dedicated Chrome profile...');
  spawn(CHROME_EXE, [
    '--remote-debugging-port=9222',
    `--user-data-dir=${CHROME_PROFILE_DIR}`,
    '--disable-extensions', '--disable-sync',
    'https://www.tiktok.com/tiktokstudio/upload',
  ], { detached: true, stdio: 'ignore' }).unref();
  for (let i = 0; i < 30; i++) {
    await sleep(1000);
    try {
      const r = await fetch('http://127.0.0.1:9222/json/version');
      if (r.ok) { log('Chrome debug port is up'); return; }
    } catch {}
  }
  throw new Error('Chrome debug port never came up');
}

async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({ keyFile: SERVICE_ACCOUNT_KEY, scopes: ['https://www.googleapis.com/auth/spreadsheets'] });
  const client = await auth.getClient();
  return google.sheets({ version: 'v4', auth: client });
}

// Video-only sheet: A POST NUMBER | B VIDEO LINK | C CAPTION | D STATUS | E LIVE URL
async function findNextRow(sheets) {
  const { data } = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: `${SHEET_TAB}!A2:E500` });
  const rows = data.values || [];
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    const videoLink = r[1] || '';
    const caption = r[2] || '';
    const status = r[3] || '';
    if (videoLink && caption && !status.trim()) {
      return { rowNumber: i + 2, postNumber: r[0] || '', videoLink, caption };
    }
  }
  return null;
}
async function writeStatus(sheets, rowNumber, statusText, liveUrl) {
  await sheets.spreadsheets.values.update({ spreadsheetId: SPREADSHEET_ID, range: `${SHEET_TAB}!D${rowNumber}:E${rowNumber}`, valueInputOption: 'USER_ENTERED', requestBody: { values: [[statusText, liveUrl || '']] } });
}
async function downloadFile(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download failed ${res.status} for ${url}`);
  fs.writeFileSync(destPath, Buffer.from(await res.arrayBuffer()));
  return destPath;
}

async function prepareVideo(row, workDir) {
  fs.mkdirSync(workDir, { recursive: true });
  const out = path.join(workDir, 'post.mp4');
  await downloadFile(row.videoLink, out);
  return out;
}

async function postToTikTok(videoPath, caption) {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find((p) => p.url().includes('tiktok')) || ctx.pages()[0] || (await ctx.newPage());

  await page.goto('https://www.tiktok.com/tiktokstudio/upload', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);
  if (/\/login/.test(page.url())) throw new Error('BLOCKED: redirected to login');

  await page.evaluate(() => { const b = document.querySelector('[data-e2e="select_video_button"]'); if (b) b.click(); });
  await page.waitForTimeout(500);
  await page.locator('input[type=file]').setInputFiles(videoPath, { timeout: 60000 });
  log('video file set, waiting for upload');
  await page.waitForSelector('text=Uploaded', { timeout: 180000 }).catch(() => log('no Uploaded text seen'));
  await page.waitForTimeout(3000);

  const editor = page.locator('div[contenteditable="true"].public-DraftEditor-content').first();
  await editor.waitFor({ state: 'visible', timeout: 30000 });
  await editor.fill(caption);
  await page.waitForTimeout(1500);
  await editor.fill(caption);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(5000);

  const clicked = await page.evaluate(() => {
    const b = Array.from(document.querySelectorAll('button')).find((x) => x.textContent.trim() === 'Post');
    if (!b) return false; b.click(); return true;
  });
  if (!clicked) throw new Error('Post button not found');
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    const b = Array.from(document.querySelectorAll('button')).find((x) => x.textContent.trim() === 'Post now');
    if (b) b.click();
  });
  await page.waitForURL('**/tiktokstudio/content**', { timeout: 90000 });
  await page.waitForTimeout(3000);
  const url = await page.evaluate(() => document.querySelector('a[href*="/video/"]')?.href || null);
  return { url };
}

async function main() {
  log('=== LOCAL SCHEDULED RUN START ===');
  await ensureChromeRunning();
  const sheets = await getSheetsClient();
  const row = await findNextRow(sheets);
  if (!row) { log('queue empty — nothing to post'); return; }
  log(`picked row ${row.rowNumber} — post #${row.postNumber}`);
  await writeStatus(sheets, row.rowNumber, `COMPOSING (auto-local) - ${new Date().toISOString()}`);

  const workDir = path.join(TMP, `row${row.rowNumber}-${Date.now()}`);
  let videoPath;
  try {
    videoPath = await prepareVideo(row, workDir);
  } catch (err) {
    log('video prep failed:', err.message);
    await writeStatus(sheets, row.rowNumber, `FAILED (auto-local) - video prep: ${err.message} - ${new Date().toISOString()}`);
    return;
  }

  try {
    const result = await postToTikTok(videoPath, row.caption);
    await writeStatus(sheets, row.rowNumber, `POSTED (auto-local) - ${new Date().toISOString()}`, result.url || '');
    log('POSTED:', result.url);
  } catch (err) {
    log('publish failed:', err.message);
    await writeStatus(sheets, row.rowNumber, `FAILED (auto-local) - ${err.message} - ${new Date().toISOString()}`);
  } finally {
    fs.rmSync(workDir, { recursive: true, force: true });
  }
  log('=== DONE ===');
}

main().catch((err) => log('FATAL:', err.stack || err.message));
