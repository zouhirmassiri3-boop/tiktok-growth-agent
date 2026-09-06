# Tracking Skill — TikTok performance sub-agent (bubble.mousse01)

A **read-only** sub-agent. It measures how posted content performed, keeps a
Playbook of what's working, and feeds briefs back to the posting skill. It never
uploads, never publishes, never edits a live post.

Companion to the main skill in `../main-skill/`. They share one content store
(the Google Sheet). Division of labour:

| Posting skill | Tracking skill (this one) |
|---|---|
| writes `Content` rows, sets `STATUS` when a post goes live | reads posted rows, writes `Performance` + `Playbook`, writes recommendations into `Briefs` |
| drives the browser to compose/publish | only reads analytics (Windsor, or read-only browser navigation) |

## Run cadence

Once daily is enough. Each run does two things:

1. **Measure** — for every posted row that's due a checkpoint.
2. **Analyse** — recompute the Playbook and write a digest (only asserts patterns
   once there's enough data — see rules).

## Data sources

- **Primary: Windsor.ai `tiktok_organic`** connector for `bubble.mousse01`. Gives
  per-video metrics without a browser. Needs the account authorised once.
- **Fallback / interim: browser-scrape TikTok Studio Analytics** via the same
  dedicated Chrome the posting skill uses (`http://localhost:9222`). Navigate
  `https://www.tiktok.com/tiktokstudio/analytics` → the post → read the numbers off
  the page. Read-only navigation only. Fragile to UI changes — prefer Windsor once
  connected.

## Measurement checkpoints

For each posted post, capture metrics at **+24h, +72h, +7d** after `posted_at`
(three rows in `Performance`, one per checkpoint). Rationale: TikTok delivers reach
and several metrics 24–48h late, so the +24h read is provisional and +72h is the
first one to trust.

### Metrics to capture per checkpoint

| Field | Notes |
|---|---|
| `views` | total video views |
| `reach` | unique viewers (delivered late; may under-report high-volume posts) |
| `avg_watch_sec` | average watch time in seconds |
| `full_watch_rate` | % who watched the whole thing |
| `completion_or_retention_notes` | retention at slide 1→2→3 transitions if visible |
| `likes` `comments` `shares` `saves` | engagement |
| `new_followers` | followers gained *from this post* |
| `profile_views` | profile visits from this post |
| `link_clicks` | bio-link / website clicks attributed to this post |
| `pct_foryou` `pct_hashtag` `pct_sound` `pct_search` `pct_follow` `pct_profile` | traffic-source split — the most decision-useful field |
| `pct_new_viewers` | new vs returning |

## `Performance` sheet schema

`post_id | live_url | posted_at | checkpoint(24h/72h/7d) | measured_at | views | reach | avg_watch_sec | full_watch_rate | likes | comments | shares | saves | new_followers | profile_views | link_clicks | pct_foryou | pct_hashtag | pct_sound | pct_search | pct_new_viewers | notes`

## Analysis pass

1. **Tag each post** with its variables (pull from the `Content` row + the caption):
   `slot/time`, `post_type` (testimonial / relatable / before-after), `hook_style`,
   `slide_count`, `cta_type`, `hashtag_set_id`, `sound_type`.
2. **North-star metrics** to optimise, in priority order:
   1. `new_followers` per post (growth)
   2. `avg_watch_sec` / `full_watch_rate` (the thing the algorithm rewards)
   3. `link_clicks` + `saves` (intent / sales signal)
   4. `reach` (downstream of the above)
3. For each variable, compute the mean of each north-star metric across posts that
   share that value. Report differences **only** when the rules below allow.
4. **Experiment ledger** — at any time exactly ONE variable is under test. Record:
   `variable | baseline_value | test_value | baseline_mean | test_mean | n_each | verdict(inconclusive/keep/revert)`.

## `Playbook` sheet schema

`updated_at | section | insight | evidence(post_ids + numbers) | confidence(low/med/high) | action_next`

Sections: `BEST_POST_TIMES`, `BEST_HOOK_STYLES`, `BEST_POST_TYPE_BY_GOAL`,
`BEST_CTA`, `BEST_HASHTAG_SETS`, `SOUND`, `ACTIVE_EXPERIMENT`, `DONT`.

## Rules — do not break these

- **N ≥ 5 posts** sharing a value before you state anything about it. Below that,
  write "not enough data" and a confidence of `low`. Never rewrite the Playbook off
  one post.
- **Never judge a post before its +72h checkpoint.** The +24h numbers are provisional.
- **One variable at a time.** If two things changed between batches, the data is
  noise — say so, don't guess which one mattered.
- **Trend, not points.** A strong post that flopped or a weak post that popped is
  expected variance. Look at rolling means over the last 7–10 posts.
- **Never fabricate a metric.** If a pull fails or a field is missing, log the gap
  (`notes: "reach unavailable at pull"`) — don't estimate it.
- **Read-only.** This sub-agent never composes, uploads, publishes, deletes, or edits
  anything on TikTok. If asked to, refuse and point at the posting skill.

## Output each run

1. Update `Performance` (new checkpoint rows).
2. Update `Playbook` (only where the rules permit).
3. Write **briefs** into a `Briefs` tab for the next N post numbers: recommended
   `post_type`, `hook_style`, `slot`, `cta_type`, `hashtag_set`, and the one
   variable being tested — for the posting skill / operator to build against.
4. A short written digest to the operator: what got measured, how the last batch did
   vs the rolling baseline, and what the next batch is testing and why.
