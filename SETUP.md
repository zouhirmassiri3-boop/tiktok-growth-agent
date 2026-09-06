# SETUP — from zero to the same working state

A complete runbook for an operator + AI agent to stand this skill up from a fresh
clone and get it to the state it was built in: **composing a real TikTok photo
slideshow end-to-end, stopping before Post, human publishes.**

Work through the phases in order. Each phase ends with a checkpoint — don't move on
until it passes.

---

## Phase 0 — Prerequisites

You need ALL of these. If any is missing, stop here.

- [ ] **Windows machine** that stays powered on and awake at posting times (the
      publish half cannot run in the cloud — it drives a local browser).
- [ ] **Google Chrome** installed.
- [ ] A **shell** the agent can run (bash / PowerShell).
- [ ] **File read/write** for the agent.
- [ ] A **browser-automation tool that attaches to Chrome over CDP** (Chrome DevTools
      Protocol) at `http://localhost:9222`. Reference setup: Claude Code with the
      `@playwright/mcp` server started as
      `npx @playwright/mcp@latest --cdp-endpoint http://localhost:9222`.
      Any equivalent (Playwright/Puppeteer `connectOverCDP`) works.
- [ ] An **HTTP client** + an image host that returns a public direct-image URL
      (this build uses Corenexis Image CDN).
- [ ] A **shared content store** the agent can read/write (this build uses one Google
      Sheet; schema in `SKILL.md`).
- [ ] *(Growth half only, optional for first run)* read access to the account's
      **TikTok organic analytics** (this build uses Windsor.ai `tiktok_organic`).
- [ ] The **TikTok account credentials** (username + password) for the account you're
      running.

**Checkpoint:** you can tick every box above.

---

## Phase 1 — The dedicated Chrome

The single most important piece. Automation attaches to *this* Chrome; it never
launches its own.

1. **Clone the repo** and enter it:
   ```
   gh repo clone <your-org>/tiktok-growth-agent
   cd tiktok-growth-agent
   ```

2. **Create `.env`** from the template and fill in real values:
   ```
   cp .env.example .env
   ```
   Put the real `TIKTOK_USERNAME` / `TIKTOK_PASSWORD` in it. `.env` is gitignored —
   keep it that way.

3. **Edit `open-main-chrome-debug.bat`** — change the hardcoded paths to your machine:
   - Chrome exe path (`C:\Program Files\Google\Chrome\Application\chrome.exe`)
   - `--user-data-dir=...` → an absolute path to a **new empty folder** named
     `chrome-profile` inside this repo (it's gitignored). This becomes the dedicated
     profile.
   - Keep `--remote-debugging-port=9222`, `--disable-extensions`, `--disable-sync`
     exactly as they are. Do not remove those last two.

4. **Fully quit Chrome first.** All windows. Check Task Manager / `taskkill` for any
   leftover `chrome.exe`. If Chrome is already running, the debug flag is silently
   ignored.
   > Chrome refuses `--remote-debugging-port` on the OS-default `User Data` directory
   > (hardcoded security policy). That's why this uses its own `chrome-profile` dir.
   > Don't try to point it at your normal profile — no flag combo gets past it.

5. **Run the `.bat`.** A new Chrome window opens on the TikTok upload page.

6. **Verify the debug port is live:**
   ```
   curl -s http://127.0.0.1:9222/json/version
   ```
   You want a JSON blob with a `"Browser": "Chrome/..."` line. Connection refused =
   Chrome isn't running with the flag (go back to step 4).

**Checkpoint:** `curl http://127.0.0.1:9222/json/version` returns Chrome version JSON.

---

## Phase 2 — Log in (once, by hand)

The login session is NOT in the repo. A human does this once, in the visible window.

1. In the dedicated Chrome window, log into the TikTok account manually — type the
   username and password yourself.
2. If TikTok sends an SMS/email verification code, enter it. This is expected on a
   fresh profile.
3. Once you're on the TikTok home feed logged in, **leave the window open.** Treat it
   like a permanently-open tab. If it closes, reopen it with the same `.bat` — the
   login persists on disk in `chrome-profile/`.

**Do not** let the agent attempt an automated login. It will hit the OTP wall and
stall.

**Checkpoint:** the agent connects over CDP, navigates to
`https://www.tiktok.com/tiktokstudio/upload`, and sees the upload UI (not a login
wall).

---

## Phase 3 — Services

### 3a. Image hosting (Corenexis)
- Get a Corenexis Image CDN key. Put it in `.env` as `CORENEXIS_API_KEY` (or in the
  separate file `SKILL.md` points to).
- Upload test: `POST https://api.corenexis.com/image-cdn/v3` with
  `-F "image=@<a local png>" -F "duration=168"` and header `X-API-Key: <key>`.
  Response `data.url` is the public link.
- Note the free tier: 300 uploads/month, links die after 168h. See punch list.

### 3b. Content queue (Google Sheet or equivalent)
- Create a sheet with the `Content` tab schema from `SKILL.md`:
  `POST NUMBER | SLIDE 1 LINK | SLIDE 2 LINK | SLIDE 3 LINK | CAPTION | SLOT | STATUS`
- Give the agent read/write access (this build uses a Composio Google Sheets
  connection; any method works).

### 3c. Analytics (optional for first run)
- Authorise the account in Windsor.ai's `tiktok_organic` connector (or your
  analytics source). Needed for the "Brain" / optimisation half, not for publishing.

**Checkpoint:** a test image upload returns a working URL; the agent can read the
content queue.

---

## Phase 4 — First supervised post

Follow `SKILL.md` step by step. Summary of the flow that works:

1. Agent: navigate `https://www.tiktok.com/tiktokstudio/upload?tab=photo`
   (accept any `beforeunload` dialog).
2. Agent: click "Select photos" via injected JS (`element.click()`), not a normal
   automated click — it's flaky.
3. Agent: on the file chooser, upload the 3 local slide images. **Paths must use a
   lowercase `d:\` drive letter.**
4. Agent: type the caption into the DraftJS editor with **real per-character typing**
   (`pressSequentially` / type-slowly) into a freshly loaded editor. Verify the
   char counter moves (e.g. `245/4000`) AND the text renders. If the counter stays 0
   or the box renders empty, the state didn't take — reload and redo, don't patch it.
5. Agent: **STOP.** Screenshot the composed post. Do not add sound. Do not click Post.
6. Human: pick a sound, review, press Post.
7. Human: open the live post and confirm the hashtags are blue/clickable.
8. Agent: write `STATUS` back to the queue (`POSTED (auto) - <url> - <timestamp>`).

**Checkpoint:** one real post is live, hashtags are clickable, the queue row is
marked.

---

## Phase 5 — Hardening (do ALL of this before Phase 6)

From `NOTES.md`, these are mandatory before any unattended run:

1. **Session watchdog** — wrap the publish job so it: checks port 9222 → relaunches
   the `.bat` if down → confirms still logged in → alerts the human (and stops) if
   logged out. Add a "run the `.bat` at machine logon" scheduled task.
2. **Failure alerting + daily digest** — every run reports what posted / failed /
   is queued. Never mark a post published unless it actually is. No blind retries.
3. **Just-in-time image hosting** — host each post's images within 24h of its publish
   time (7-day link expiry). Re-host if a queued link is stale.
4. **Hosting capacity** — the free Corenexis tier can't sustain 3×3/day with retry
   headroom. Size up the plan or switch host.
5. **Content-supply guard** — if the image folder is empty or a set is already
   marked posted, skip and alert; never repost.
6. **Ramp** — start 1 post/day, increase to 3/day over ~2 weeks.
7. **Connect analytics** (Phase 3c) and build the Brain, or accept it's a blind
   autoposter.

**Checkpoint:** you can kill the Chrome window mid-day and the next scheduled run
recovers on its own and/or alerts you — without corrupting the queue.

---

## Phase 6 — Schedule it

- **Hands (publish)** — local Windows Task Scheduler, one task per slot. Times from
  `POSTING-TIMES.md` (remember the DST shift). Each task: run watchdog → read queue →
  compose next due post → stop for human, OR (Phase 2 of the project) auto-publish.
- **Brain (analytics + drafting)** — a cloud cron is fine here; it only touches the
  queue and analytics, no local browser. ~daily.
- They coordinate ONLY through the content queue.

**Checkpoint:** a full day runs unattended (or human-in-the-loop for Post), the
digest is accurate, and the account shows no friction (no captcha walls, no reach
collapse).

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `curl :9222` connection refused | Chrome not running with the flag, or a plain Chrome instance is holding the profile | Fully quit all `chrome.exe`, rerun the `.bat` |
| Login wall on the upload page | Session expired / wrong profile | Human re-logs in manually in the window; never automate this |
| Caption box: counter stays `0/4000` or renders empty after fill | Used paste / `execCommand` / `fill()` | Use real per-char typing into a freshly loaded editor only |
| File upload rejected "outside allowed roots" | Uppercase `D:\` path | Use lowercase `d:\` |
| Clicks time out on "Select photos" / Photos tab | Page repaint churn (often extensions) | Click via injected JS; confirm `.bat` has `--disable-extensions` |
| A VPN tab opens on launch / weird IP | Profile got signed into Google sync, pulled extensions | Confirm `--disable-extensions --disable-sync`; consider signing the profile out of Chrome |
| Post composed but hashtags plain black | Cosmetic; programmatic input skips the decorator | Publish and check the live post; if truly broken use the composer's "# Hashtags" button |
| Navigation hangs 60s then times out | TikTok Studio is heavy / a `beforeunload` dialog is blocking | Accept the dialog, wait, re-snapshot |
| Chrome window vanished between runs | It closes itself often | Watchdog must relaunch the `.bat` and re-verify before every run |
