# TikTok Growth Agent — bubble.mousse01

A skill/playbook for running an organic TikTok account end-to-end with an AI agent:
generate slide images → host them → write GCC-targeted Arabic captions → publish
photo slideshows through a real logged-in browser (no TikTok API), then learn from
each post's analytics to improve the next one.

Built for the **Bubble Mousse** brand (GCC cash-on-delivery hair care, account
[`@bubble.mousse01`](https://www.tiktok.com/@bubble.mousse01), store bubblemousse.store).

## Two skills

| Skill | Role | State |
|---|---|---|
| **Posting** (repo root) | Compose + publish photo slideshows. Writes/publishes. | Semi-manual, working for compose; human presses Post |
| **Tracking** (`tracking-skill/`) | Measure how posts performed, keep a Playbook, feed briefs back. **Read-only** — never posts. | Spec only, not built |

They coordinate through one shared content store (a Google Sheet). Run the tracking
skill as a separate sub-agent / cron.

## Maturity — read this first

This is **semi-manual and supervised**, not a hands-off scheduler yet.

- A human still picks the sound and presses **Post** on every publish (Phase 1).
- There is **no watchdog, no retry logic, no failure alerting** yet.
- Analytics-driven optimisation (the "growth" half) is **not wired up** — the
  Windsor.ai `tiktok_organic` connector still needs authorising for this account.

Do **not** put this on an unattended cron until the punch list in `NOTES.md` is done.

## What's in here

| File | What it is |
|---|---|
| `SETUP.md` | **Start here.** Full runbook: fresh clone → same working state, phase by phase, with a troubleshooting table |
| `SKILL.md` | The operating playbook — the actual step-by-step an agent follows once set up |
| `AGENTS.md` | Ground rules for *any* AI agent picking this up (capabilities needed, safety rules) |
| `POSTING-TIMES.md` | Researched best posting windows for the GCC audience + how to schedule them |
| `NOTES.md` | Current state, decisions already made, and the open punch list |
| `open-main-chrome-debug.bat` | Launches the dedicated automation Chrome (Windows) |
| `.env.example` | Secrets template — copy to `.env` (gitignored) |
| `tracking-skill/` | The performance-tracking sub-agent — its own `SKILL.md`, `SETUP.md`, `NOTES.md` |

## What is deliberately NOT in here (and why it won't "just work" elsewhere)

- **`.env`** — real TikTok credentials. Gitignored. Create your own from `.env.example`.
- **`chrome-profile/`** — 500MB+, and it holds the live logged-in TikTok session.
  Gitignored. A fresh clone / new machine has **no login** — a human must log into
  `bubble.mousse01` once, by hand, in the dedicated Chrome window (handle any OTP).
- **External service auth** — Google Sheets (the content queue), Windsor.ai
  (analytics), Corenexis (image hosting) are all tied to this operator's accounts.
  Another agent's operator must connect their own.
- **The MCP / tool wiring** — this operator drives the browser through a Claude Code
  MCP server (`@playwright/mcp --cdp-endpoint http://localhost:9222`). Any agent that
  can attach to Chrome over CDP on port 9222 and run a shell + read/write files can
  run this; the specific wiring is environment-specific. See `AGENTS.md`.

## Machine-specific paths

`open-main-chrome-debug.bat` and `SKILL.md` contain absolute Windows paths from the
build machine (`D:\CLAUDE CODE\...`, `C:\Program Files\Google\Chrome\...`). Edit these
for your environment before running.
