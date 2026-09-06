# TikTok Growth Agent — bubble.mousse01

Run an organic TikTok account end-to-end with an AI agent, no TikTok API:
generate slide images → host them → write GCC-targeted Arabic captions → publish
photo slideshows through a real logged-in browser → learn from each post's
analytics to improve the next one.

Built for the **Bubble Mousse** brand (GCC cash-on-delivery hair care, account
[`@bubble.mousse01`](https://www.tiktok.com/@bubble.mousse01), store bubblemousse.store).

## Structure — one main skill + one sub-agent

```
tiktok-growth-agent/
├── main-skill/            ← THE MAIN ONE: creates and publishes the posts
│   ├── SKILL.md               operating playbook
│   ├── SETUP.md               fresh-clone → working-state runbook (START HERE)
│   ├── AGENTS.md              ground rules for any AI agent running it
│   ├── POSTING-TIMES.md       researched GCC posting windows
│   ├── NOTES.md               state, settled decisions, punch list
│   ├── open-main-chrome-debug.bat
│   └── .env.example           → copy to main-skill/.env (gitignored)
│
└── tracking-sub-agent/   ← THE SUB-AGENT: tracks how posts performed (read-only)
    ├── SKILL.md
    ├── SETUP.md
    └── NOTES.md
```

**main-skill** writes: it composes and publishes. **tracking-sub-agent** only reads:
it measures posted content, keeps a Playbook of what works, and feeds briefs back.
They coordinate through one shared content store (a Google Sheet). Run the
sub-agent as a separate cron / agent invocation.

## Maturity — read before scheduling anything

- **main-skill** is semi-manual: a human still picks the sound and presses **Post**.
  No watchdog / retry / alerting yet. See `main-skill/NOTES.md` punch list.
- **tracking-sub-agent** is spec only — nothing built. Blocked on posts being live
  and an analytics source connected for the account.

Do **not** put either on an unattended cron until its punch list is done.

## Not in the repo (and why it won't "just work" elsewhere)

- **`main-skill/.env`** — real TikTok credentials. Gitignored (`.env` at any depth).
  Create from `main-skill/.env.example`.
- **`chrome-profile/`** at the repo root — 500MB+, holds the live logged-in TikTok
  session. Gitignored. A fresh clone has **no login**: a human logs into
  `bubble.mousse01` once, by hand, in the dedicated Chrome window.
- **External service auth** — Google Sheets, Windsor.ai, Corenexis are tied to this
  operator's accounts. Another operator connects their own.
- **Tool wiring** — this operator drives Chrome via a Claude Code MCP server
  (`@playwright/mcp --cdp-endpoint http://localhost:9222`). Any agent that can attach
  to Chrome over CDP on port 9222 + run a shell + read/write files can run it.

## Machine-specific paths

`main-skill/open-main-chrome-debug.bat` and `main-skill/SKILL.md` carry absolute
Windows paths from the build machine — edit them for your environment. The
`chrome-profile/` folder lives at the **repo root**, one level up from `main-skill/`.
