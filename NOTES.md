# NOTES — state, decisions, punch list

Last updated 2026-09-06.

## Account

- `@bubble.mousse01` (display: شامبو العشبي الاخضر), bio "الحل الفوري للشيب", link
  bubblemousse.store.
- Real organic account. ~616 followers, ~4,200 likes, 2 videos, was dormant a while.
- `0 Following` — fix by following 10–15 relevant/competitor accounts (weak trust signal).
- Reactivation plan: 1–2 light days of scrolling/liking/following in the niche
  (`#العناية_بالشعر #الشيب #الشيب_المبكر`, GCC geo tags), then start the cadence.
- Check Settings → Account for restriction flags before relying on it, given the
  dormancy.

## Architecture

- **Brain** (can be cloud): pull analytics → update a Playbook → draft the next
  captions/hashtags/times into the content queue. NOT BUILT.
- **Hands** (must be local — needs the local Chrome): read the queue, drive the
  dedicated Chrome, compose the post, stop before publish. PARTIALLY WORKING (manual
  runs only).
- They coordinate only through the content queue (a Google Sheet). Schema in `SKILL.md`.

## Decisions already settled — don't re-open these

- **Dedicated Chrome profile**, not the operator's main browser. Chrome refuses
  `--remote-debugging-port` on the OS-default `User Data` dir (hardcoded security
  policy) — no flag combination gets around it.
- Launcher passes `--disable-extensions --disable-sync` — the profile had synced in
  ~20 extensions incl. a VPN; they broke automation and were an account risk. Keep both.
- **No VPN / proxy.** Free ones are datacenter IPs (worse for trust). Machine IP is
  residential Portugal; target market is GCC. Relying on content signals (Arabic,
  GCC hashtags, warm-up engagement, TikTok region setting) to teach the algorithm
  the audience. Revisit only a paid residential GCC proxy, and only if analytics show
  badly wrong-country reach.
- **Human presses Post.** Phase 1: agent composes, human picks sound + publishes.
- Photo slideshows, **3 image slides per post**, **3 posts/day** (see `POSTING-TIMES.md`).
- Images hosted via Corenexis Image CDN (`duration=168` → 7-day expiry).

## Content model (v5)

Rotate 3 post TYPES across the day's 3 slots:

1. **Morning — Real Testimonial**: all 3 slides are crops/banners over ONE real
   WhatsApp screenshot (never AI-generated). Operator supplies the screenshot; agent
   writes the Arabic banner text.
2. **Afternoon — Social / Relatable**: AI 3-slide lifestyle scene, growth mechanic
   (comment/save/follow trigger), no claims.
3. **Evening — Benefit + Before/After**: hook → proof → offer, sales-focused,
   CTA = "الرابط في البايو".

## Current status

- First end-to-end **compose** test (Post 1) succeeded through the dedicated Chrome:
  Photos tab → 3 images uploaded in order → caption typed and registered → stopped
  before publish. First actual publish still pending (operator does it).
- Content on hand: 4 usable 3-slide sets (`v5-second-ing-post-02/03/05/06` in the
  operator's image folder). ~1.5 days at 3/day. No Morning content (no real
  testimonial screenshot supplied yet).
- Hashtags render as plain text in the composer — believed cosmetic (TikTok parses
  `#token` server-side on publish). UNVERIFIED on a live post.

## Punch list — before this can run unattended on a schedule

1. **Session watchdog** on the Hands job: check port 9222 → relaunch the `.bat` if
   down → confirm still logged in → alert the operator if logged out (needs their OTP).
   Plus a "start the .bat at machine logon" task and a note that the machine must be
   awake at post times.
2. **Failure alerting + a daily digest** (what posted / what failed / what's queued).
   No silent success-marking.
3. **Connect Windsor.ai `tiktok_organic`** for this account, then build the Brain.
   Until then it's a blind autoposter, not a growth agent.
4. **Image hosting**: host within 24h of publish (7-day link expiry); the free
   Corenexis tier (300 uploads/month) barely covers 3×3/day with no retry headroom —
   size up the plan or change host.
5. **Content supply**: keep the image folder fed; add dedup so a set can't post twice.
6. **Verify hashtags** work on the first live post; if not, use the composer's
   "# Hashtags" button.
7. **Ramp**: start 1/day, build to 3/day over ~2 weeks — a dormant account jumping
   straight to 3 automated posts/day can read as inorganic.
8. **DST**: shift the local schedule ±1h at Portugal's clock changes (see
   `POSTING-TIMES.md`).
