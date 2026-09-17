# TikTok Slideshow Posting Pipeline — bubble.mousse01

Turns locally-generated slide images into hosted links + GCC-targeted captions/hashtags, queued into the control sheet for approval and publish. Companion to [[tiktok_growth_agent_project]].

**Goal every single time this runs:** grow @bubble.mousse01 as fast as possible AND drive sales to bubblemousse.store. Every caption/hashtag choice is judged against both, not just reach.

## Watched folder

`D:\CLAUDE CODE\CONTENT DEPARTEMENT\TIKTOK POSTS` — Zouhir drops generated images (and eventually videos) here and says "go." List it fresh each run; don't assume a stale listing.

Older folder `THE SECOND ING - POSTS` already has 6 unprocessed 3-slide sets sitting in it (post-01/02/03/04 + v5-post-02/03/05/06) from before this pipeline existed — confirm with Zouhir whether to fold those into the queue or leave them, don't assume either way.

## Step by step

1. **List files**, sort by filename. Grouping convention: **sequential filenames, 3 at a time, in that order = one slideshow/post.** If Zouhir names things differently (subfolders, explicit post numbers in the filename), follow his naming instead of forcing the default.
2. **Assign SLOT** by rotating Morning → Afternoon → Evening → Morning... across the next open `POST NUMBER` rows in `Content`.
3. **Match content type to SLOT** per the settled structure in [[safaashaar_tiktok_content_system]] v5:
   - **Morning — Real Testimonial**: only if Zouhir supplied an actual WhatsApp screenshot (never invent one). If a Morning slot's images aren't a real testimonial, ask him before treating it as one.
   - **Afternoon — Social/Relatable**: AI lifestyle scene, growth mechanic (comment/save/follow trigger), not a claim.
   - **Evening — Benefit + Before/After**: hook → proof → offer, sales-focused, CTA = "الرابط في البايو".
4. **Host each image**: corenexis Image CDN API, `POST https://api.corenexis.com/image-cdn/v3`, `-F "image=@<local file>" -F "duration=168"`. Key lives at `D:\CLAUDE CODE\FB DEPARTEMENT\instagram-image-post\.env` (`CORENEXIS_API_KEY`) — read via `source`, never echo it. Respect the 5 requests/minute cap. Response `data.url` is the link to use; `data.expiry` is when it dies (168h from upload) — upload close to the post's actual send time, not all at once for a whole week.
5. **Write caption + hashtags**: Gulf Arabic, voice matches Zouhir's live posts (see [[bubble_mousse_customer_support_kb]] for pricing/offer facts — never invent a price or promo). 4-7 hashtags mixing broad discovery (`#العناية_بالشعر #الشيب`) with geo (`#عمان #الامارات #السعودية`).
   **Mandatory engagement checklist (see `GROWTH-STRATEGY.md` — a post failing any of these goes back for a rewrite, not queued as-is):**
   1. Hook baked into slide 1 that lands in under 1 second, not the caption.
   2. A comment-bait question answerable in one word/number — not generic "شاركنا رأيك".
   3. A real, currently-trending Khaleeji/Arabic sound noted for Zouhir to add (type, not silence/original) — check Studio's Royalty-free sounds / Discover trending each batch.
   4. ONE primary CTA — either the comment-bait question (engagement posts) or "الرابط في البايو" (sales posts), never both stacked with equal weight.
6. **Write the row(s)** into `Content`: `POST NUMBER`, `SLIDE 1/2/3 LINK`, `CAPTION`, `SLOT`. Leave `APPROVE (YES)` and `STATUS` blank — Zouhir approves, nothing auto-posts.
7. **Report back**: what was added (post numbers, slots, one-line summary of each), and flag anything ambiguous (a Morning slot with no real testimonial supplied, a leftover file that doesn't divide evenly into 3, etc.) rather than guessing silently.

## Posts go out as VIDEO, not photo slideshows (changed 2026-09-09)

TikTok **Photo mode** does not show slides fullscreen — it fits-to-width, letterboxes, and adds a slow auto Ken-Burns zoom that crops ~8-10% toward centre and drifts content off the top/bottom. Confirmed on live Post 5 (`7683546526366321942`): the review-card slide's card was pushed out of frame. A perfectly-sized 1080×1920 image still renders wrong in Photo mode. **So each post is now assembled into a 1080×1920 MP4 and uploaded through the normal Video flow** — true fullscreen, no zoom, no bars, subject stays put.

**Build step (before uploading a row):**
```
# 3-slide set:
bash "…/main-skill/slides-to-mp4.sh"  OUT.mp4  s1.png s2.png s3.png
# single all-in-one image (GPT 2:3 output): pad first, then one static clip:
bash "…/main-skill/pad-to-vertical.sh"  IN-1024x1536.png  PADDED-1080x1920.png
bash "…/main-skill/image-to-mp4.sh"     PADDED-1080x1920.png  OUT.mp4
```
Needs `ffmpeg` on PATH (winget: `…/Gyan.FFmpeg_…/ffmpeg-9.0-full_build/bin`). `slides-to-mp4` → h264 yuv420p 30fps, 2.8s/slide (~8.4s), silent AAC, `+faststart`. `pad-to-vertical` top-aligns a 2:3 creative on a 1080×1920 canvas with a blurred bottom strip (the "safe" zone under TikTok's UI). `image-to-mp4` → 6s static 1080×1920 clip. Image links go in the sheet as the record; the MP4 is built locally at post time, not stored.

**Single-image posts (added 2026-09-10):** Zouhir now also drops one all-in-one image per post (baked hook + engagement question + CTA banner) instead of 3 slides. Then: SLIDE 1 LINK = the (padded) image, SLIDE 2/3 LINK blank. Caption should *complement* the baked text (context + echo the on-image comment-trigger to drive comments + geo hashtags + COD/link-in-bio), not repeat it. **Watch the composition:** if the hook/CTA sit below ~60% of the frame they'll be hidden by TikTok's caption/handle UI — flag it and ask him to move text into the top half next time.

## Publishing via the dedicated Chrome (browser automation notes)

Post through `playwright-tiktok` MCP tools ONLY (CDP → `http://localhost:9222`, the dedicated `chrome-profile`). Never the plain `playwright` server. Launch/relaunch with `open-main-chrome-debug.bat` (carries `--disable-extensions --disable-sync` — the profile got synced to Zouhir's Google account and pulled in ~22 extensions incl. a VPN; keep both flags). **The profile Chrome accumulates 40+ stuck `effect_c.worker` / clip-forge worker targets after a compose session and then `playwright-tiktok` times out on connect — kill it (`Get-CimInstance Win32_Process -Filter "Name='chrome.exe'" | ? CommandLine -like '*tiktok-growth-agent*' | % { Stop-Process -Id $_.ProcessId -Force }`) and relaunch before each run.**

Flow that works:
1. Verify the previous post actually went live first: open `https://www.tiktok.com/tiktokstudio/content`, check the top row. Then navigate `https://www.tiktok.com/tiktokstudio/upload` (default **Videos** tab). Accept any `beforeunload` dialog.
2. Trigger the file chooser via JS, not `browser_click` (buttons are actionability-flaky — `browser_click` times out on "stable"): `document.querySelector('input[type=file]').click()` in `browser_evaluate`, then immediately `browser_file_upload` with the **MP4 path** (lowercase `d:\` drive letter — `D:\…` is rejected). Video ingest takes longer than photos; wait for the editor (`/tiktokstudio/upload/post` or the description box) to appear.
3. Caption — the description box is a **DraftJS editor** (`div.public-DraftEditor-content[contenteditable="true"]`). **Use `browser_type` WITHOUT `slowly`** (→ `locator.fill()`, atomic CDP `Input.insertText`): text + spaces + English words + emoji all land in one shot, counter goes to N/4000, one clean block. Multi-line captions with `\n` work (kept as soft breaks in one block). **On video uploads TikTok auto-fills the description with the MP4 filename after a short delay** — run the fill TWICE (the first can race the autofill and end up with `post6-video` prepended; the second replaces cleanly). Verify the first block doesn't start with the filename.
   - **Do NOT use `slowly: true`** on the current Studio build — it silently drops every space and every Latin word ("Bubble Mousse" vanished, words mash together). It used to be the only method that worked; it no longer is.
   - Synthetic `ClipboardEvent` paste is ignored (React). Keyboard `Ctrl+A` / `Backspace` / `Delete` do NOT reach the editor — to clear a bad attempt, reload the upload page and re-upload rather than trying to edit in place.
   - After filling, `browser_press_key Escape` to dismiss the hashtag autocomplete dropdown before screenshotting.
4. Verify: read back `div[data-contents="true"] > div` block text + take a screenshot.
5. **Stop before publishing** (Phase 1). Do not add sound, do not click Post. Zouhir picks the sound, reviews, and hits Post himself, every time — he has stated this explicitly. Then `SendUserFile` the screenshot + `PushNotification` him.

Known-cosmetic: hashtags typed programmatically stay plain black in the composer. TikTok parses `#token` from the description server-side on publish — confirmed clickable on the live posts, so this is fine.

### Editing an already-published post (recovery path)

TikTok photo posts CAN be edited after publishing — caption, title/headline, hashtags,
privacy/comment settings (NOT the photos, NOT the sound). Path (confirmed working
2026-09-07): `https://www.tiktok.com/tiktokstudio/content` → the post's row → click the
first Actions icon (the pencil) — flaky, click it via injected JS
(`document.querySelectorAll('div[data-tt="components_ActionCell_Container"]')[rowIndex].click()`)
→ lands on `/tiktokstudio/upload/post/photo?item_id=<id>` → fill the title textbox and
the DraftJS description exactly as in a fresh compose (title via `fill`/type, description
via `pressSequentially`) → click **Save**. It returns to the content list; re-open the
live post to confirm. Use this if a post went out with a missing/wrong caption.

## Open items

- Posts are assembled to MP4 at upload time (see "Posts go out as VIDEO" above). The sheet keeps 3 image-link columns as the record; no new column needed. If Zouhir ever drops a real pre-made video file instead of 3 slides, upload it directly and skip the build step.
- `THE SECOND ING - POSTS` backlog — resolve with Zouhir before it's silently lost or silently reused.
- **Geo signal:** the automation machine's IP is residential Portugal, target market is GCC. No VPN (rejected — free ones are datacenter IPs, worse). Relying on content signals (Arabic, GCC hashtags, warm-up engagement, TikTok region setting) to teach the algorithm the audience. Watch the first posts' analytics for wrong-country reach; revisit a paid residential GCC proxy only if reach skews badly.
