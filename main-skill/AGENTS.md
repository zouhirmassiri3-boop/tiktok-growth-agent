# AGENTS.md — for any AI agent operating this skill

If you are an AI agent picking this repo up, read this before doing anything.

## Capabilities you need

You cannot run this skill without all of:

1. **A browser automation tool attached to a real Chrome over CDP** — the dedicated
   Chrome runs with `--remote-debugging-port=9222`; you connect to
   `http://localhost:9222`, you do **not** launch your own fresh browser. A fresh
   browser has no login and triggers TikTok's login/OTP/captcha flow.
2. **Shell access** on the machine running that Chrome (to launch/check it).
3. **File read/write** (to read the image folder and this repo).
4. **Image hosting** — an HTTP client + a Corenexis Image CDN key (or equivalent host
   that returns a public direct-image URL).
5. **A content queue** — this operator uses one Google Sheet. Any shared, readable
   store works; the schema is in `SKILL.md`.
6. *(For the growth half, not yet active)* read access to the account's TikTok
   organic analytics (this operator uses Windsor.ai's `tiktok_organic` connector).

If you are missing #1 or #2, stop and tell the operator — the rest is pointless
without them.

## Hard safety rules — do not break these

- **Never press Post.** Phase 1 = you compose the slideshow (photos + caption) and
  stop on the final screen. The human picks the sound and publishes. This is the
  operator's explicit standing instruction, not a default.
- **Never invent a price, discount, promo, or product claim.** Only use facts the
  operator has confirmed. If a caption needs a number you don't have, leave a
  placeholder and flag it.
- **Never post without the human's approval** of that specific content.
- **Never use a third-party captcha solver.** If a captcha appears: stop, screenshot,
  alert the human, wait for them to clear it in the visible window, then continue.
- **Never commit `.env` or `chrome-profile/`.** They hold credentials and the live
  session.
- **One post per run.** No burst posting. Human-like pacing.

## On failure

TikTok changes its upload UI regularly and the caption editor is fragile. If a step
fails:

- **Do not retry the same action in a loop.** Re-snapshot, screenshot, and read what
  actually happened.
- If the browser/port is unreachable, or the account is logged out, or a captcha /
  "action required" wall appears — **stop and alert the human.** Do not attempt an
  automated re-login (it will hit an OTP only they can answer).
- Report which step failed and what you saw. Never silently mark a post as published
  when it isn't.

## The gotchas that already cost hours (all detailed in `SKILL.md`)

- Caption box is a **DraftJS editor**. Only real per-character typing
  (`pressSequentially` / type-slowly) into a freshly loaded editor registers in its
  state. Paste events, bulk `execCommand('insertText')`, and `locator.fill()` all
  look like they worked but don't actually save.
- File-upload paths must use a **lowercase `d:\` drive letter** or they're rejected.
- The "Select photos" button and the Photos tab are **click-flaky** — click them via
  injected JS (`element.click()`), not the automation tool's normal click.
- The dedicated Chrome **closes itself often** — always verify port 9222 is live
  before assuming the browser is there.
- If that Chrome profile ever gets signed into a Google account, it syncs in ~20
  extensions that break automation and include a VPN. The launcher already passes
  `--disable-extensions --disable-sync` — keep those flags.

## Where the state lives

`NOTES.md` has the current status, past decisions, and the open punch list. Read it
so you don't re-litigate things that are already settled or re-hit known dead ends.
