# NOTES — tracking skill

Last updated 2026-09-06.

## Status

Spec only. Not built, not running. Blocked on: the posting skill producing posted
rows, and an analytics source being live for `bubble.mousse01`.

- Windsor.ai `tiktok_organic` currently has only `صفاء_الشعر` connected — a different
  account. `bubble.mousse01` still needs authorising.
- Browser-scrape fallback is viable now (the dedicated Chrome is logged in and
  reachable over CDP), just fragile.
- Post 1 composed but not yet published as of this writing, so there is zero
  performance data.

## Why the rules are strict

The whole point of this sub-agent is to stop knee-jerk reactions to single posts.
TikTok reach has huge variance — a great post can flop and a mediocre one can pop.
The value is in disciplined, one-variable-at-a-time experiments read over rolling
windows, not in "post 3 did well, do more like post 3." The N ≥ 5 and +72h rules in
`SKILL.md` are load-bearing, not bureaucracy.

## North-star metric priority (from SKILL.md, repeated because it matters)

1. `new_followers` per post — growth
2. `avg_watch_sec` / `full_watch_rate` — what the algorithm rewards
3. `link_clicks` + `saves` — intent / sales
4. `reach` — mostly downstream of the above

## Variables the experiment ledger cycles through

`post_time` · `post_type` (testimonial / relatable / before-after) · `hook_style` ·
`slide_count` · `cta_type` · `hashtag_set` · `sound_type`

One at a time. Record baseline vs test, n each, verdict.

## Interfaces

- Reads: `Content` (posted rows).
- Writes: `Performance`, `Playbook`, `Briefs` (all in the shared sheet).
- Never writes to `Content` beyond nothing — the posting skill owns that tab. Briefs
  go in their own tab; the operator or posting skill pulls from them.
