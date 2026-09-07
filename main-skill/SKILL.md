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
5. **Write caption + hashtags**: Gulf Arabic, voice matches Zouhir's live posts (see [[bubble_mousse_customer_support_kb]] for pricing/offer facts — never invent a price or promo). Hook line on slide 1, short body, CTA per SLOT type above, 4-7 hashtags mixing broad discovery (`#العناية_بالشعر #الشيب`) with geo (`#عمان #الامارات #السعودية`).
6. **Write the row(s)** into `Content`: `POST NUMBER`, `SLIDE 1/2/3 LINK`, `CAPTION`, `SLOT`. Leave `APPROVE (YES)` and `STATUS` blank — Zouhir approves, nothing auto-posts.
7. **Report back**: what was added (post numbers, slots, one-line summary of each), and flag anything ambiguous (a Morning slot with no real testimonial supplied, a leftover file that doesn't divide evenly into 3, etc.) rather than guessing silently.

## Publishing via the dedicated Chrome (browser automation notes, learned 2026-09-06)

Post through `playwright-tiktok` MCP tools ONLY (CDP → `http://localhost:9222`, the dedicated `chrome-profile`). Never the plain `playwright` server. Launch/relaunch with `open-main-chrome-debug.bat` — it now carries `--disable-extensions --disable-sync` (the profile got synced to Zouhir's Google account and pulled in ~22 extensions incl. a VPN; those broke automation and were an account risk — keep both flags).

Flow that works:
1. Navigate `https://www.tiktok.com/tiktokstudio/upload?tab=photo`. If a `beforeunload` dialog blocks navigation, accept it (`browser_handle_dialog accept:true`).
2. The "Select photos" button and the Photos tab are click-flaky — click them via `browser_evaluate` (`[...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='Select photos').click()`), not `browser_click`.
3. Right after that JS click, a file chooser opens → `browser_file_upload` with the 3 local paths. **Paths must use a lowercase `d:\` drive letter** — `D:\...` is rejected as "outside allowed roots".
4. Caption: the description box is a **DraftJS editor**. Only one method registers text in its internal state (counter goes to N/4000 AND text renders):
   - `browser_type` with **`slowly: true`** (→ `pressSequentially`, real per-char keystrokes) targeting `div.public-DraftEditor-content[contenteditable="true"]`, into a **freshly loaded** editor.
   - Do NOT use: synthetic `ClipboardEvent` paste (ignored), `execCommand('insertText')` (renders but counter stays 0 — not saved), `locator.fill()` (counter updates but renders empty — corrupts state). All three were tried and fail.
   - If the editor is already dirty/corrupted, reload the upload page (accept the beforeunload) and re-upload photos rather than trying to clear it.
5. **Stop before publishing** (Phase 1). Do not add sound, do not click Post. Zouhir picks the sound, reviews, and hits Post himself, every time — he has stated this explicitly.

Known-cosmetic, not a blocker: hashtags typed programmatically stay plain black in the composer (no blue chip). TikTok parses `#token` from the description server-side on publish, so they still become real hashtags on the live post — but verify this on the first published post; if they're genuinely not clickable live, switch to entering them through the composer's "# Hashtags" helper button.

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

- Video files: sheet currently only has 3 image-link columns. If a video shows up instead of 3 images, stop and ask Zouhir how he wants that row shaped before inventing a column layout.
- `THE SECOND ING - POSTS` backlog — resolve with Zouhir before it's silently lost or silently reused.
- **Geo signal:** the automation machine's IP is residential Portugal, target market is GCC. No VPN (rejected — free ones are datacenter IPs, worse). Relying on content signals (Arabic, GCC hashtags, warm-up engagement, TikTok region setting) to teach the algorithm the audience. Watch the first posts' analytics for wrong-country reach; revisit a paid residential GCC proxy only if reach skews badly.
