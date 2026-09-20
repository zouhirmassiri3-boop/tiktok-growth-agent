# Handoff brief — for the next AI operator (e.g. OpenAI/GPT)

Read this file first. It tells you what this project is, what you need before you
can run it, and what to read next in this same repo.

**Repo (public):** https://github.com/zouhirmassiri3-boop/tiktok-growth-agent

## 1. What this is

An end-to-end growth workflow for the TikTok account **@bubble.mousse01**
(display name شامبو العشبي الاخضر, bio "الحل الفوري للشيب", links to
bubblemousse.store — a GCC gray-hair-coverage product, Gulf-Arabic audience).

Goal: post 3 photo-slideshows/day (Morning / Afternoon / Evening slots), grow
followers, and drive traffic to the store — with a human (Zouhir) approving
every post before it goes live. No official TikTok API is used or approved for
this account; everything runs through TikTok's normal web UI via browser
automation.

Read `main-skill/SKILL.md` for the exact workflow steps, `main-skill/AGENTS.md`
for the safety rules that apply to **any** AI operating this (not
Claude-specific), and `main-skill/GROWTH-STRATEGY.md` +
`main-skill/CONTENT-CALENDAR-SEP.md` for the current content plan. Also read
`main-skill/NOTES.md` for settled decisions — don't re-litigate things marked
"don't re-open these."

## 2. The one thing to understand before anything else

**This was built and run through Claude Code — a local CLI agent with direct
access to Zouhir's Windows PC (shell, file system, and a local browser via
CDP).** It was never run through a plain hosted chat interface. If you are
running as hosted ChatGPT with no access to Zouhir's machine, you **cannot**
do the browser-automation half of this workflow (Section 4 below) — there is
no way for a cloud chat session to open a Chrome window on someone else's
laptop. Say so plainly if that's your situation, rather than pretending to
have posted something.

What you *can* do without local machine access: draft captions, plan the
content calendar, do TikTok algorithm/strategy research, and prepare rows for
the Google Sheet (Section 3) — the "Brain" half of this project. The "Hands"
half (Section 4, actually driving the browser to post) needs either (a) Zouhir
running you through a tool that gives you real local execution on his PC
(equivalent to what Claude Code provided), or (b) Zouhir doing that specific
step himself while you prepare everything else.

## 3. Google Sheet — the shared queue

**Sheet:** "Bubble Mousse TikTok Growth Agent"
https://docs.google.com/spreadsheets/d/1FdbWKltuxIcUA0K6tK_Wy4zuzah69SCHdbsVbLm_Q_g

Tabs: `README`, `Content`, `Competitors`, `Performance`, `Playbook`.

`Content` columns: (blank A) | POST NUMBER | SLIDE 1 LINK | SLIDE 2 LINK |
SLIDE 3 LINK | CAPTION (Arabic, hashtags inline) | SLOT | APPROVE (YES) |
STATUS. A row is safe to post only when `APPROVE = YES` and `STATUS` is
blank. After posting, write STATUS as `POSTED (auto) - <url> - <timestamp>`
or `SKIPPED - <reason>`.

**Connector you need:** something with read/write access to Google Sheets
under Zouhir's Google account (zouhirmassiri3@gmail.com) — e.g. the Google
Sheets API with OAuth, a Zapier/Make Google Sheets action, or Composio if your
platform supports it. Claude Code used a Composio MCP connector for this;
that specific connector will not carry over to you — you need your own
Sheets-capable connector, authorized separately.

## 4. Browser automation — posting to TikTok

- Publishing goes through a **dedicated, isolated Chrome profile** (not
  Zouhir's everyday browser — that path was tried and Chrome refuses
  `--remote-debugging-port` on a default profile dir). The profile lives at
  `tiktok-growth-agent/chrome-profile/` (gitignored, ~587MB, not in the repo —
  it only exists on Zouhir's machine) and is launched via
  `main-skill/open-main-chrome-debug.bat`, which opens Chrome with
  `--remote-debugging-port=9222 --disable-extensions --disable-sync` pointed
  at that profile.
- TikTok is already logged into `bubble.mousse01` inside that profile —
  **the login session does not travel with the repo.** If you're on a
  different machine, you'd need Zouhir to log in fresh in a Chrome profile you
  control, or you run on his machine directly.
- Whatever agent framework you're using needs a way to drive a
  CDP-connected browser (Playwright, Puppeteer, or similar) pointed at
  `http://localhost:9222`. Claude Code used a Playwright MCP server
  (`playwright-tiktok`) configured for this — you need your own equivalent
  wired to the same port.
- Composing a post = Photos tab → upload the row's 3 slide images in order →
  type the caption into the DraftJS editor. `main-skill/SKILL.md` has the
  exact, hard-won mechanics (e.g. caption text must be inserted via a single
  atomic `fill()`-style call, not char-by-char — char-by-char silently drops
  spaces and English words on this TikTok Studio build).
- **Hard rule, non-negotiable (Phase 1):** stop after composing, before
  publishing. Zouhir picks the sound and taps Post himself. Never call a
  "publish" action without his explicit go-ahead for that specific post. This
  is in `AGENTS.md` — follow it exactly.

## 5. Image hosting

Slide images are hosted on **Corenexis Image CDN** to get public URLs for the
sheet (`duration=168` → 7-day link expiry — post before the link expires).
The API key lives in a local `.env` (gitignored, not in the repo) — Zouhir
needs to give you your own copy of it, or his own if you're operating in his
environment. `main-skill/.env.example` shows the expected shape
(`CORENEXIS_API_KEY=...`).

## 6. Analytics (not yet connected)

The "Brain" half (pulling performance data to inform what to post next) was
planned to use Windsor.ai's `tiktok_organic` connector, but it was never
successfully connected for `bubble.mousse01` specifically (only a different,
unused account was connected). Until that's fixed, performance data comes
from manually reading TikTok Studio in the browser — see
`main-skill/GROWTH-STRATEGY.md` for the last real audit (2026-09-17).

## 7. Summary — connector checklist

| Need | Have in this repo? | What you must supply |
|---|---|---|
| GitHub repo access | ✅ Public, clone freely | — |
| Google Sheets read/write | ❌ Not portable | Your own Sheets connector, OAuth'd to zouhirmassiri3@gmail.com |
| TikTok posting (browser) | ❌ Not portable | Local machine access + CDP browser control + an already-logged-in `bubble.mousse01` Chrome profile |
| Corenexis image hosting | ❌ Key not in repo | Your own key or Zouhir's, passed to you directly (never commit it) |
| TikTok analytics (Windsor.ai) | ❌ Never finished | Windsor.ai connector authorized against `bubble.mousse01` |

If any of the ❌ items aren't available to you, say so to Zouhir explicitly
rather than skipping the step silently or fabricating a result — that's the
same rule Claude follows on this project.

## 8. When you're stuck

Claude (this repo's original builder) stays on as the fallback — if something
in this handoff is unclear, a step fails in a way `SKILL.md`/`AGENTS.md`
doesn't cover, or you're not sure whether an action is safe to take, flag it
to Zouhir and ask him to bring it back to Claude rather than guessing.
