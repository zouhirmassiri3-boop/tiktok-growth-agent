# SETUP — tracking skill

Lighter than the main skill's setup (`../main-skill/SETUP.md`) — it reuses the same
content store and (as a fallback) the same browser. Work through in order.

## Phase 0 — Prerequisites

- [ ] The **posting skill is already running** and marking posted rows with a
      `STATUS` that contains the live post URL. Without posted rows there's nothing
      to track.
- [ ] Read/write access to the **same content store** (Google Sheet) the posting
      skill uses.
- [ ] **One** analytics source:
  - **Preferred:** Windsor.ai `tiktok_organic` connector authorised for
    `bubble.mousse01` (connect flow:
    `https://onboard.windsor.ai/connect?connector=tiktok_organic&next=/tiktok_organic/authorize`).
  - **Fallback:** the dedicated Chrome from the posting skill, reachable over CDP at
    `http://localhost:9222`, logged into `bubble.mousse01`. Used for read-only
    navigation of TikTok Studio Analytics.
- [ ] A scheduler for a **daily** run (cloud cron is fine — this skill needs no local
      browser if Windsor is connected).

**Checkpoint:** you can list posted rows from the sheet, and at least one analytics
source responds with data for a real `bubble.mousse01` post.

## Phase 1 — Create the tabs

In the shared sheet, add two tabs with the schemas from `SKILL.md`:

- `Performance` — one row per post per checkpoint (+24h / +72h / +7d).
- `Playbook` — running insights with evidence + confidence.
- `Briefs` — recommendations the posting skill / operator builds the next posts from.

**Checkpoint:** the three tabs exist with header rows.

## Phase 2 — First measurement run (manual)

1. Read posted rows from `Content` (STATUS contains a URL).
2. For each, compute which checkpoints are due (`now - posted_at` ≥ 24h / 72h / 7d
   and not already logged).
3. Pull the metrics for each due checkpoint (Windsor, or scrape TikTok Studio
   Analytics for that video).
4. Write the `Performance` rows. If a field is missing, record the gap in `notes` —
   never estimate.
5. Skip the analysis pass until there are **≥ 5 posts** with a +72h checkpoint. Until
   then just accumulate data and write "not enough data yet" to the digest.

**Checkpoint:** `Performance` has real rows for every due checkpoint; no fabricated
numbers.

## Phase 3 — Analysis + Playbook (once ≥ 5 posts have +72h data)

1. Tag each post with its variables (from its `Content` row + caption).
2. Compute per-variable means for the north-star metrics (see `SKILL.md`).
3. Only write an insight to `Playbook` where N ≥ 5 for that value; set `confidence`
   honestly.
4. Maintain the experiment ledger — exactly one variable under test at a time.
5. Write `Briefs` for the next post numbers and send the operator a short digest.

**Checkpoint:** `Playbook` reflects only rules-permitted insights; `Briefs` gives the
next batch a concrete, single-variable test.

## Phase 4 — Schedule

- Daily cloud cron. No local browser needed if Windsor is connected.
- If running on the browser-scrape fallback, it must run on the machine with the
  dedicated Chrome, and the posting skill's session watchdog must have that Chrome up.

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `Performance` row has blank reach at +24h | TikTok delivers reach 24–48h late | Expected — the +72h checkpoint will have it |
| Windsor returns nothing for the account | `bubble.mousse01` not authorised (only `صفاء_الشعر` is) | Run the connect flow for this account specifically |
| Studio Analytics page won't load / layout changed | UI change, or Chrome not up | Fall back to Windsor; if scraping, re-snapshot and adjust selectors |
| Playbook keeps flip-flopping | Acting on < 5 posts, or multiple variables changed at once | Enforce the N ≥ 5 and one-variable rules; widen to rolling means |
| Two analytics sources disagree | Different attribution windows / timing | Prefer Windsor; note the discrepancy, don't average blindly |
