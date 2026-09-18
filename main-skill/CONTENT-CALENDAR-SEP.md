# Content Calendar — Sep 18-30, 2026 (rest of the month)

Ready-to-use image-generation prompts + captions for **13 days, 3 core slots/day + a
4th bonus slot on 6 high-value days** (≈3.5 posts/day average, matching the 3-4/day
cadence). Every post follows the mandatory checklist from `GROWTH-STRATEGY.md`: a
1-second on-slide hook, a one-word/number comment-bait question, a real trending
sound (type noted, Zouhir picks the actual track), and ONE primary CTA.

**Every slide prompt below is fully standalone — paste one at a time into GPT
image generation, in any order, on their own.** None of them depend on reading
another prompt first.

## Size spec — read before generating anything

- **Generate at 1024×1792** (or 1024×1536 and run it through
  `main-skill/pad-to-vertical.sh` to get to 1080×1920 — both produce a clean 9:16).
- **All text and key visual elements stay in the TOP 55% of the frame.** TikTok's
  caption/handle/sound UI covers the bottom ~30-35% on photo posts.
- **Keep an 8% margin from all four edges** — TikTok Photo mode auto-zooms roughly
  8-10% into every slide.
- Post as a **photo (Photos tab)**, 2-3 slides per post.

## Getting realistic results out of GPT, not "AI-looking" ones

Every prompt below already has this baked in, but the short version: ask explicitly
for **candid smartphone photo realism**, not a polished render. Name the specific
tells to avoid — airbrushed/plastic skin, perfect symmetry, studio softbox
lighting, over-sharpened edges — and ask for the specific tells of a *real* photo
instead — visible skin texture and pores, natural asymmetry, uneven real-world
lighting, slight handheld imperfection, natural grain. If a batch still comes back
looking synthetic, regenerate with "make the lighting messier and less even" and
"reduce skin smoothness, add visible texture" — those two notes fix it most often.

## Use the real avatar reference photos — this is the biggest realism lever

`D:\CLAUDE CODE\AVATARS FOR CONTENT\` has 10 real reference photos of Gulf men
(catalogued in `SKILLS\image-analysis\references\avatars-library.md`). **For every
slide that shows a man's face, attach the assigned file below to GPT alongside its
text prompt** (GPT-4o/GPT-Image support image-to-image reference — upload the file,
then paste the text prompt in the same turn). Anchoring to a real photo instead of
letting GPT invent a face from pure text is what actually kills the synthetic look
— it's a bigger lever than any wording tweak.

**Hard rule, still applies even though some reference photos show real gray:** the
text prompt always specifies dark black hair and beard, never gray (per the
project's standing avatar rule) — the reference photo is for face/pose/setting
only, the text overrides hair color every time. Don't let a gray-haired reference
photo leak gray hair into the output.

### Avatar file key

| Code | File | Profile |
|---|---|---|
| A1 | `ChatGPT_Image_May_24,_2026,_20260911234907.jpeg` | Young (~25-30), sharp/modern, ghutra+agal+bisht |
| A2 | `Man_gesturing_and_smiling_in_20260911234812.jpeg` | Young professional (~30), office, no gray |
| A3 | `Man_gesturing_while_speaking_20260911234827.jpeg` | Mature (~45-50), office desk, mid-gesture |
| A4 | `Man_in_kandura_speaking_camera_20260911234938.jpeg` | Emirati (~35-40), native-UGC car selfie |
| A5 | `Man_presenting_product_bottle_20260911234820.jpeg` | ~35, hands presenting a product — best for close-up product/demo shots |
| A6 | `Man_recording_video_in_SUV_20260911234941.jpeg` | Young urban (~30-35), car selfie, Dubai-style skyline |
| A7 | `Man_speaking_to_camera_20260911234858.jpeg` | Mature (~50-55), driving, candid |
| A8 | `Omani_man_speaking_to_camera_20260911234933.jpeg` | ~35, street/souq candid, Muscat |
| A9 | `Replace_person_in_photo_20260911234928.jpeg` | Emirati (~45-50), car selfie |
| A10 | `Saudi_man_speaking_to_camera_20260911234944.jpeg` | ~45-50, majlis sofa, KSA-specific |

### Avatar assignment per post (rotated so no day repeats the same face twice)

| Day | Morning | Afternoon | Evening | Bonus |
|---|---|---|---|---|
| 1 (Sep 18) | A1 | A2 | A3 | — |
| 2 (Sep 19) | A4 | A5 | A6 | — |
| 3 (Sep 20) | A7 | A8 | A9 | — |
| 4 (Sep 21) | A10 | A1 | A2 | A3 |
| 5 (Sep 22) | A4 | A5 | A6 | — |
| 6 (Sep 23) | A7 | A8 | A9 | A10 |
| 7 (Sep 24) | A1 | A2 | A3 | — |
| 8 (Sep 25) | A4 | A5 | A6 | A7 |
| 9 (Sep 26) | A8 | A9 | A10 | — |
| 10 (Sep 27) | A1 | A2 | A3 | A4 |
| 11 (Sep 28) | A5 | A6 | A7 | — |
| 12 (Sep 29) | A8 | A9 | A10 | A1 |
| 13 (Sep 30) | A2 | A3 | A4 | A5 |

Where an Evening slide is pure product/ingredient close-up with no face (e.g. the
bottle-on-counter or hand-applying shots), the assigned avatar only applies to that
post's slide(s) that actually show a man's face (usually S3, the CTA slide) — skip
it for pure product shots.

---

## Day 1 — Sep 18 — 3 slots

### Morning · Review card — Reviewer: خالد الحارثي، صحار

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man in his 30s, dark black hair and beard (no gray), wearing a white kandura, standing at his home's front entrance in Sohar, Oman, warm late-afternoon light. He holds up a bright green "BISUTANG Bubble Mousse" pump bottle with a green/yellow clover-leaf label reading "BUBBLE MOUSSE, Mild and Moisturizing," smiling naturally at the camera as if taking his own photo. Photographic realism: visible skin texture and pores, natural facial asymmetry, uneven real sunlight with soft shadows, slight handheld camera imperfection and natural grain — no airbrushing, no plastic-smooth skin, no studio lighting, no perfect symmetry. Bold Arabic text baked in near the top third only, white speech-bubble style with black outline, bold sans-serif: "خالد يحكي تجربته 🌿". Keep all text and the subject's face within the top 55% of the frame, 8% safe margin from every edge, bottom 30-35% visually simple and uncluttered.

**S2 prompt:** A realistic candid smartphone-style photo, vertical 1024x1792, full-bleed, warm home interior background slightly out of focus. A clean overlay graphic of a 5-star review card (⭐⭐⭐⭐⭐) sits in the upper-middle of the frame with the Arabic quote "«جربته لين وحسيت بالفرق من أول مرة»" and a small label reading "خالد الحارثي — صحار" beneath it, styled like a native app review card with rounded corners and soft shadow, not a stock template. The background shows a softly blurred bright green Bubble Mousse pump bottle (BISUTANG label) resting on a bathroom counter. Keep it photographic and natural, not glossy or overly designed. All text within the top 55% of frame, 8% edge margin, bottom third kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man from before (dark black hair and beard, white kandura) in a relaxed close-up, holding the bright green BISUTANG Bubble Mousse bottle near his shoulder, genuine relaxed smile, natural indoor lighting with visible skin texture and imperfect symmetry — no airbrushing. A green rounded CTA banner near the bottom-middle-top area (still within the top 55%) reads in bold white Arabic text: "جربها انت كمان". Keep the very bottom 30% of the frame simple/empty, 8% safe margin on all sides.

**Caption:** خالد من صحار جرب Bubble Mousse… وهذا رأيه بصراحة 🌿\nتغطية طبيعية للشيب، من أول استخدام.\nجربتوا التركيبة؟ قيّموها من ١-٥ بالتعليق ⭐\n#بابل_موس #تجربة_عميل #الشيب #العناية_بالشعر #صحار #عمان
**Sound:** upbeat Khaleeji instrumental

### Afternoon · Social/relatable — Theme: morning coffee routine

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, bright natural morning light through a kitchen window. A Gulf Arab man, dark black hair and short beard (no gray), casual home clothes, pouring traditional Gulf coffee from a dallah into a small cup at his kitchen counter. A bright green BISUTANG Bubble Mousse pump bottle (clover-leaf label) sits slightly blurred on the counter edge nearby. Photographic realism: real skin texture, natural uneven window light, slight handheld imperfection, natural grain, no airbrushing or studio polish. Bold Arabic text baked in near the top: "قهوة الصبح… وروتين وحدة زايدة", white bubble style with black outline. All text and subject within top 55% of frame, 8% edge margin, bottom 30-35% kept simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, same kitchen/bathroom-adjacent home setting, warm natural light. The same Gulf Arab man now in front of a mirror, mid-motion applying mousse from the bright green BISUTANG Bubble Mousse bottle to his hair, playful candid expression caught mid-action, slightly imperfect framing like a real quick phone photo. Visible skin texture, natural asymmetry, no airbrushing. Bold Arabic text near top: "دقيقتين بس قبل القهوة الثانية ☕". Text and subject within top 55%, 8% edge margin, bottom kept clean.

**Caption:** قهوة الصبح ما تكتمل بدون روتيني الصغير 😄☕\nBubble Mousse — دقيقتين بس، وطلعت بأحسن شكل.\nوش أول شي تسويه صبحك؟ اكتبه بالتعليق 👇\n#بابل_موس #روتين_الصباح #الشيب #العناية_بالشعر #الامارات #عمان
**Sound:** light morning/lifestyle trending sound

### Evening · Benefit + before/after — Theme: ingredients reveal

**S1 prompt:** A realistic close-up smartphone photo, vertical 1024x1792, full-bleed, natural warm indoor light on a wooden bathroom counter. A bright green BISUTANG Bubble Mousse pump bottle (green/yellow clover-leaf label reading "BUBBLE MOUSSE, Mild and Moisturizing") stands upright with a few real clover leaves and small white flowers scattered naturally around its base, slightly imperfect arrangement like a real product photo, not a staged studio flat-lay. Visible surface texture on the wood, natural uneven lighting and soft shadow, slight grain, no glossy over-polish. Bold Arabic text baked in near the top: "شنو بالضبط جوا Bubble Mousse؟", white bubble with black outline. Text within top 55%, 8% edge margin, bottom third kept simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, same warm bathroom counter setting slightly wider shot with the bright green Bubble Mousse bottle centered. Two small clean icon graphics overlaid in the upper half: a leaf icon with Arabic label "مستخلص نباتي" and a droplet-with-slash icon labeled "بدون أمونيا", styled like simple native app icons, not glossy 3D renders. Natural lighting, visible texture, no airbrushing. Text and icons within top 55% of frame, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, close-up on a man's hand and forearm (naturally tanned skin, visible texture and hair, no airbrushing) applying white foam from the bright green BISUTANG Bubble Mousse bottle to dark black hair at the hairline, natural coverage visible, real bathroom lighting with soft uneven shadows. Bold Arabic text near top: "بسيطة… وتشتغل فعلاً". Text within top 55%, 8% edge margin, bottom third simple.

**Caption:** كثير يسألونا: شنو التركيبة اللي بتغطي الشيب بهالسهولة؟ 🌿\nمستخلصات نباتية لطيفة، بدون أمونيا، تركيبة رغوة سهلة الاستخدام بالبيت.\nالرابط في البايو 🔗\n#بابل_موس #تركيبة_نباتية #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** calm/informative trending sound

---

## Day 2 — Sep 19 — 4 slots (bonus day)

### Morning · Review card — Reviewer: ناصر السعدي، صلالة

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man in his late 20s-30s, dark black hair and beard (no gray), casual thobe, standing on a home balcony in Salalah, Oman with soft green hills visible in the background under hazy natural daylight (Salalah's monsoon-green landscape). He holds a bright green BISUTANG Bubble Mousse pump bottle (clover-leaf label), relaxed candid smile. Visible skin texture, natural uneven outdoor lighting, slight grain, no airbrushing or studio polish. Bold Arabic text near top: "ناصر من صلالة… تجربة حقيقية". Text and subject within top 55%, 8% edge margin, bottom third kept simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Salalah balcony/greenery background. A native-app-style review card overlay in the upper-middle of the frame: 5 gold stars, Arabic quote "«ريحته خفيفة وما تلخبط، والنتيجة أسرع مما توقعت»", label "ناصر السعدي — صلالة" beneath. Rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man from before, giving a natural thumbs-up gesture while holding the bright green Bubble Mousse bottle in his other hand, genuine candid smile, natural daylight with visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads in bold white Arabic: "الرابط في البايو". Bottom 30% of frame kept simple, 8% edge margin.

**Caption:** من صلالة… ناصر شارك تجربته مع Bubble Mousse 🌿\nرائحة خفيفة، تغطية طبيعية، وسهل بالاستخدام اليومي.\nمن وين تتابعونا؟ اكتبوا مدينتكم 👇\n#بابل_موس #تجربة_عميل #صلالة #عمان #العناية_بالشعر
**Sound:** warm acoustic Khaleeji

### Afternoon · Social/relatable — Theme: neighbor compliment

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, outdoor residential street in late afternoon light. Two Gulf Arab men (both dark black hair, no gray, casual clothing) chatting beside a parked car, one gesturing toward the other's hair with a surprised/curious expression, the other laughing naturally. Visible skin texture, natural uneven daylight and shadow, slight handheld imperfection, no airbrushing. Bold Arabic text near top: "جارك قالك إيش تسوي بشعرك؟ 😂". Text and subjects within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, close-up on one of the men from before, holding up a bright green BISUTANG Bubble Mousse pump bottle with a knowing grin, natural outdoor lighting, visible skin texture, no airbrushing or studio gloss. Bold Arabic text near top: "بابل موس… وخلاص". Text within top 55%, 8% edge margin, bottom third clean.

**Caption:** صار جيراني يسألوني إيش سري 😂🌿\nBubble Mousse — بسيط، سريع، ونتيجة طبيعية محد يلاحظ إنها "تركيبة".\nصار معك موقف مثل هذا؟ قول لنا 👇\n#بابل_موس #الشيب #جيران #العناية_بالشعر #الامارات #عمان
**Sound:** comedic/relatable trending sound

### Evening · Benefit + before/after — Theme: 3-week transformation timeline

**S1 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, bathroom counter scene with a bright green BISUTANG Bubble Mousse bottle in soft natural light. A simple calendar-style graphic overlay in the upper portion showing three marked weeks, styled like a native app widget, not glossy 3D. Bold Arabic text near top: "٣ أسابيع… هذا اللي صار". Natural lighting and texture throughout, no airbrushing. Text within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, split-frame comparison of the same Gulf Arab man's hairline: left half labeled "الأسبوع ١" showing subtle gray strands at the temples on otherwise dark black hair, right half labeled "الأسبوع ٣" showing fuller natural dark black coverage. Natural indoor lighting on both halves, visible skin/hair texture, no airbrushing, no exaggerated dramatic difference — subtle and believable. Labels in small bold Arabic text within the top 55% of frame, 8% edge margin.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man (dark black hair, no gray) looking confidently at himself in a bathroom mirror, natural relaxed expression, visible skin texture, real uneven bathroom lighting, no airbrushing. A rounded green CTA banner in the upper-middle area reads in bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** مو نتيجة يوم وحد… هذي ٣ أسابيع استخدام منتظم 🌿\nالفرق يبين تدريجياً، بمظهر طبيعي مب مبالغ فيه.\nجاهزين تجربون رحلة الـ٣ أسابيع؟\nالرابط في البايو 🔗\n#بابل_موس #قبل_وبعد #الشيب #العناية_بالشعر #السعودية #الامارات
**Sound:** motivational build-up trending sound

---

## Day 3 — Sep 20 — 3 slots

### Morning · Review card — Reviewer: راشد النعيمي، دبي

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), smart-casual clothing, standing in a modern Dubai apartment with a softly blurred marina/skyline view through the window behind him, natural daylight. He holds a bright green BISUTANG Bubble Mousse pump bottle, relaxed candid smile. Visible skin texture, natural uneven window lighting, slight grain, no airbrushing. Bold Arabic text near top: "راشد من دبي… وتجربته معانا". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred modern Dubai apartment background. A native-app-style 5-star review card overlay in the upper-middle: quote "«أسرع من أي صالون، وبنفس الجودة»", label "راشد النعيمي — دبي" beneath, rounded corners, soft realistic shadow. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle at chest height, natural indoor lighting, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "جربها انت كمان 🌿". Bottom 30% kept simple, 8% edge margin.

**Caption:** راشد من دبي جرب Bubble Mousse بدل الصالون 🌿\nنفس النتيجة، بوقت وجهد أقل، وبالبيت.\nآخر مرة رحت فيها صالون كانت إمتى؟ اكتب بالتعليق 👇\n#بابل_موس #تجربة_عميل #دبي #الامارات #الشيب #العناية_بالشعر
**Sound:** modern upbeat trending sound

### Afternoon · Social/relatable — Theme: barbershop chat

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, inside a real-looking local barbershop with visible mirrors, chairs, and natural interior lighting (not overly styled). A Gulf Arab man (dark black hair, no gray) seated in the barber chair, the barber standing beside him pointing playfully at his temples, both genuinely laughing. Visible skin texture on both men, natural uneven interior lighting, slight grain, no airbrushing. Bold Arabic text near top: "الحلاق نفسه قالها 😂". Text and subjects within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, close-up inside the same barbershop, the barber holding up a bright green BISUTANG Bubble Mousse pump bottle with an approving expression, natural interior lighting, visible skin texture, no airbrushing or studio gloss. Bold Arabic text near top: "ينصح فيها زباينه". Text within top 55%, 8% edge margin, bottom third clean.

**Caption:** حتى الحلاق صار يوصي فيها لزباينه 💈🌿\nBubble Mousse — تركيبة نباتية لطيفة يعرفها أهل الصنعة.\nحلاقك نصحك بمنتج قبل؟ 👇\n#بابل_موس #العناية_بالشعر #الشيب #السعودية #الامارات #عمان
**Sound:** trending barbershop/lifestyle sound

### Evening · Benefit + before/after — Theme: quick 10-minute routine

**S1 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, bathroom counter scene with a bright green BISUTANG Bubble Mousse bottle in natural light. A simple clock-face graphic overlay in the upper area reading "٠-١٠ دقائق", styled like a native app widget, not glossy 3D. Bold Arabic text near top: "١٠ دقايق… وخلصت". Natural texture and lighting throughout, no airbrushing. Text within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, bathroom scene showing three small sequential step icons in the upper portion of the frame: a pump-bottle icon labeled "ضع", a clock icon labeled "انتظر", and a water-droplet icon labeled "اشطف", simple flat native-app style icons over a softly blurred bathroom background with the green Bubble Mousse bottle visible. Natural lighting, no glossy over-render. Text and icons within top 55%, 8% edge margin.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man (dark black hair, no gray) looking at his finished natural hair coverage in a bathroom mirror, genuine satisfied expression, visible skin texture, real uneven bathroom lighting, no airbrushing. A rounded green CTA banner in the upper-middle reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** ١٠ دقايق بس من وقتك… وطلة جديدة كاملة ⏱️🌿\nBubble Mousse — بدون تعقيد، بدون موعد، بدون انتظار.\nالرابط في البايو 🔗\n#بابل_موس #روتين_سريع #الشيب #العناية_بالشعر #الامارات #عمان #السعودية
**Sound:** fast-paced trending countdown sound

---

## Day 4 — Sep 21 — 4 slots (bonus day)

### Morning · Review card — Reviewer: حمد الكعبي، أبوظبي

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), wearing a traditional ghutra and white kandura, seated in a majlis-style seating area with cushions and warm ambient light. He holds a bright green BISUTANG Bubble Mousse pump bottle, relaxed genuine expression. Visible skin texture, natural uneven indoor lighting, slight grain, no airbrushing. Bold Arabic text near top: "حمد من أبوظبي يشارك تجربته". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred majlis background. A native-app-style 5-star review card overlay in the upper-middle: quote "«توقعت شي معقد، طلع أبسط تركيبة جربتها»", label "حمد الكعبي — أبوظبي" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed, holding the bright green Bubble Mousse bottle, natural warm indoor lighting, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** حمد من أبوظبي كان متردد… وهذا رأيه بعد التجربة 🌿\nBubble Mousse — تركيبة أبسط مما تتوقع.\nإيش أكثر شي كان يخوفكم منها؟ 👇\n#بابل_موس #تجربة_عميل #ابوظبي #الامارات #الشيب #العناية_بالشعر
**Sound:** calm trust-building trending sound

### Afternoon · Social/relatable — Theme: Friday prayer prep

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, bathroom mirror scene with soft morning light. A Gulf Arab man (dark black hair, no gray) getting ready in front of the mirror, a neatly ironed white thobe visible on a hanger nearby, focused everyday expression. Visible skin texture, natural uneven lighting, slight grain, no airbrushing. Bold Arabic text near top: "قبل صلاة الجمعة… تحضير كامل". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, same bathroom setting, the man applying mousse from the bright green BISUTANG Bubble Mousse bottle quickly to his hairline, natural motion caught candidly, then a second implied moment of him fully dressed and confident. Visible skin texture, natural lighting, no airbrushing. Bold Arabic text near top: "بأحسن مظهر بخطوة وحدة". Text within top 55%, 8% edge margin, bottom kept clean.

**Caption:** قبل الجمعة لازم كل شي يكون مرتب 🤍\nBubble Mousse جزء من التحضير — تغطية شيب بدقائق قبل ما تطلع.\nروتينكم قبل الجمعة وش يشمل؟ 👇\n#بابل_موس #الجمعة #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** peaceful Friday-mood trending sound

### Evening · Benefit + before/after — Theme: ammonia/PPD-free callout

**S1 prompt:** A realistic close-up smartphone photo, vertical 1024x1792, full-bleed, natural warm bathroom counter lighting. A bright green BISUTANG Bubble Mousse pump bottle stands next to a small clean icon graphic of a chemical flask with a red slash through it, styled like a simple native app icon. Visible texture on the counter surface, natural uneven lighting, no glossy over-polish. Bold Arabic text near top: "بدون أمونيا ولا PPD ✅". Text within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic candid close-up smartphone photo, vertical 1024x1792, full-bleed, showing a natural human scalp and hairline at the temple, calm and healthy-looking, no irritation or redness, soft natural indoor lighting, visible realistic skin and hair texture, no airbrushing or overly smooth rendering. Bold Arabic text near top: "لطيفة على فروة الرأس". Text within top 55%, 8% edge margin, bottom third simple.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man (dark black hair, no gray) with a confident relaxed expression, natural indoor lighting, visible skin texture, no airbrushing. A rounded green CTA banner in the upper-middle reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** خالية من الأمونيا وPPD ✅🌿\nBubble Mousse تركيبة نباتية لطيفة على فروة الرأس والشعر، بدون رائحة نفاذة.\nأكثر شي يهمكم بمكونات أي منتج؟ 👇\n#بابل_موس #تركيبة_نباتية #الشيب #العناية_بالشعر #الامارات #عمان #السعودية
**Sound:** clean/informative trending sound

### Bonus · Benefit — Theme: scent/texture sensory appeal

**S1 prompt:** A realistic extreme close-up smartphone photo, vertical 1024x1792, full-bleed, natural soft indoor lighting. A hand (naturally textured skin, visible pores and creases, no airbrushing) holding a small amount of white foam from a bright green BISUTANG Bubble Mousse pump bottle, light and airy texture clearly visible, bottle softly visible in the background. Bold Arabic text near top: "ملمسها لطيف… وريحتها أخف". Text within top 55%, 8% edge margin, bottom kept clean.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man (dark black hair, no gray) with a relaxed, genuinely pleased expression after using the product, natural indoor lighting, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** أول شي يلفت انتباهك فيها… ملمس الرغوة الخفيف 🫧🌿\nBubble Mousse — تجربة حسية مريحة، مو بس نتيجة.\nتفضلون رائحة قوية ولا خفيفة بمنتجات الشعر؟ 👇\n#بابل_موس #العناية_بالشعر #الشيب #الامارات #عمان #السعودية
**Sound:** light sensory/ASMR-style trending sound

---

## Day 5 — Sep 22 — 3 slots

### Morning · Review card — Reviewer: سعيد الغافري، نزوى

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), traditional Omani dress, standing against a warm mud-brick wall backdrop typical of Nizwa, Oman, natural daylight. He holds a bright green BISUTANG Bubble Mousse pump bottle, genuine candid expression. Visible skin texture, natural uneven outdoor lighting, slight grain, no airbrushing. Bold Arabic text near top: "سعيد من نزوى… تجربته الأولى". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Nizwa mud-brick wall background. A native-app-style 5-star review card overlay in the upper-middle: quote "«ما كنت أتوقع نتيجة من أول استخدام»", label "سعيد الغافري — نزوى" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle, natural daylight, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "جربها انت كمان". Bottom 30% kept simple, 8% edge margin.

**Caption:** سعيد من نزوى جرب Bubble Mousse لأول مرة… وهذا رأيه 🌿\nنتيجة تبين من أول استخدام.\nأول مرة تسمعون عن التركيبة النباتية؟ 👇\n#بابل_موس #تجربة_عميل #نزوى #عمان #الشيب #العناية_بالشعر
**Sound:** warm traditional-fusion trending sound

### Afternoon · Social/relatable — Theme: car mirror check

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, inside a car, shot as if from the passenger seat or dashboard angle. A Gulf Arab man (dark black hair, no gray) checking his hair in the rearview or a hand mirror before driving off, natural daylight through the windshield, casual clothing. Visible skin texture, natural uneven lighting, slight grain, no airbrushing. Bold Arabic text near top: "آخر شي قبل لا تطلع من السيارة 🚗". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, same car interior setting, the man giving a confident nod with a slight smile, natural daylight, visible skin texture, no airbrushing. Bold Arabic text near top: "تشيك سريع… وثقة كاملة". Text within top 55%, 8% edge margin, bottom kept clean.

**Caption:** آخر تشيك قبل أي اجتماع أو زيارة… بالمرايا 🚗😄\nBubble Mousse يخليك مطمن من أول نظرة.\nوش آخر شي تسوونه قبل لا تطلعون من البيت؟ 👇\n#بابل_موس #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** upbeat driving/trending sound

### Evening · Benefit + before/after — Theme: satisfaction/quality reassurance

**S1 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, natural warm indoor lighting. A hand (natural texture, no airbrushing) holding up a bright green BISUTANG Bubble Mousse pump bottle at chest height, a small clean checkmark-in-circle icon overlaid near the bottle, styled like a native app badge, not glossy 3D. Bold Arabic text near top: "منتج أصلي 100%". Text within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic candid close-up smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man's hairline (dark black hair, no gray) showing natural even coverage, confident calm expression, soft natural indoor lighting, visible realistic skin and hair texture, no airbrushing or overly smooth rendering. Bold Arabic text near top: "نفس الجودة كل مرة". Text within top 55%, 8% edge margin, bottom third simple.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man (dark black hair, no gray) with a confident relaxed expression, natural indoor lighting, visible skin texture, no airbrushing. A rounded green CTA banner in the upper-middle reads bold white Arabic: "الرابط في البايو | الدفع عند الاستلام". Bottom 30% kept simple, 8% edge margin.

**Caption:** منتج أصلي، جودة ثابتة كل مرة تطلبون فيها ✅🌿\nBubble Mousse — نفس التركيبة، نفس النتيجة.\nالرابط في البايو 🔗\n#بابل_موس #منتج_اصلي #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** confident/trust trending sound

---

## Day 6 — Sep 23 — 4 slots
*(Saudi National Day is already queued as row 10 in the Content sheet from before — don't duplicate it; the bonus slot below is a second, community-focused angle, not the offer-style post already queued.)*

### Morning · Review card — Reviewer: فيصل الشامسي، الشارقة

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), casual smart clothing, standing along a Sharjah waterfront setting with softly blurred water and buildings behind him, natural daylight. He holds a bright green BISUTANG Bubble Mousse pump bottle, relaxed candid expression. Visible skin texture, natural uneven outdoor lighting, slight grain, no airbrushing. Bold Arabic text near top: "فيصل من الشارقة يشاركنا رأيه". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Sharjah waterfront background. A native-app-style 5-star review card overlay in the upper-middle: quote "«صرت أنصح فيها كل اللي يسألني عن الشيب»", label "فيصل الشامسي — الشارقة" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle, natural daylight, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** فيصل من الشارقة صار يوصي فيها لأصحابه 🌿\nBubble Mousse — تجربة تستاهل تتشارك.\nتنصحون فيها أصحابكم لو جربتوها؟ 👇\n#بابل_موس #تجربة_عميل #الشارقة #الامارات #الشيب #العناية_بالشعر
**Sound:** friendly recommendation trending sound

### Afternoon · Social/relatable — Theme: National Day gathering (community angle)

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, a warm majlis-style gathering setting with soft evening light, a small Saudi flag detail tastefully visible in the background decor (not overpowering). A small group of Gulf Arab men (dark black hair, no gray) sitting together relaxed, natural candid conversation moment, not posed. Visible skin texture, natural uneven ambient lighting, slight grain, no airbrushing. Bold Arabic text near top: "تجمعات اليوم الوطني… وطلة مرتبة". Text and subjects within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, same warm gathering setting, one of the men quickly applying mousse from a bright green BISUTANG Bubble Mousse bottle in a side mirror or reflective surface moments before guests arrive, natural candid motion. Visible skin texture, natural lighting, no airbrushing. Bold Arabic text near top: "دقيقتين، وجاهز للتجمع". Text within top 55%, 8% edge margin, bottom kept clean.

**Caption:** تجمعات اليوم الوطني تحتاج طلة مرتبة بأقل وقت 🇸🇦🌿\nBubble Mousse — خطوة وحدة بالبيت قبل ما يوصل الضيوف.\nوين رح تحتفلون هالسنة؟ 👇\n#بابل_موس #اليوم_الوطني #الشيب #العناية_بالشعر #السعودية #الرياض #جدة
**Sound:** celebratory trending National Day sound

### Evening · Benefit + before/after — Theme: easy foam application demo

**S1 prompt:** A realistic close-up smartphone photo, vertical 1024x1792, full-bleed, natural warm bathroom lighting. A hand (natural texture, visible creases and pores, no airbrushing) pressing the pump of a bright green BISUTANG Bubble Mousse bottle, white foam dispensing cleanly onto the palm, simple clean demo framing, not overly staged. Bold Arabic text near top: "شوف كيف بسيطة 👇". Text within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic candid close-up smartphone photo, vertical 1024x1792, full-bleed, a hand applying the white foam to dark black hair at the hairline, clean application with no mess or dripping visible, natural bathroom lighting, visible skin and hair texture, no airbrushing. Bold Arabic text near top: "بدون فوضى ولا تلطيخ". Text within top 55%, 8% edge margin, bottom third simple.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man (dark black hair, no gray) with a satisfied natural expression after finishing the application, natural indoor lighting, visible skin texture, no airbrushing. A rounded green CTA banner in the upper-middle reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** شوفوا كيف تستخدمونها بخطوة وحدة بسيطة 🫧🌿\nBubble Mousse — رغوة سهلة التوزيع، بدون فوضى على اليدين أو الحمام.\nالرابط في البايو 🔗\n#بابل_موس #طريقة_الاستخدام #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** satisfying demo/ASMR trending sound

### Bonus · Review card — Reviewer: ماجد البريكي، العين

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), casual clothing, standing in an Al Ain setting with a softly blurred palm grove visible behind him, natural daylight. He holds a bright green BISUTANG Bubble Mousse pump bottle, relaxed candid expression. Visible skin texture, natural uneven outdoor lighting, slight grain, no airbrushing. Bold Arabic text near top: "ماجد من العين… تجربة حقيقية". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred palm grove background. A native-app-style 5-star review card overlay in the upper-middle: quote "«جربتها فضول بس صارت روتين ثابت»", label "ماجد البريكي — العين" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle, natural daylight, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "جربها انت كمان". Bottom 30% kept simple, 8% edge margin.

**Caption:** بدأها ماجد فضول… وصارت روتين ثابت عنده 🌿\nBubble Mousse — تجربة بسيطة تتحول لعادة.\nصار عندكم منتج بدأتوه فضول وصار روتين؟ 👇\n#بابل_موس #تجربة_عميل #العين #الامارات #الشيب #العناية_بالشعر
**Sound:** light upbeat trending sound

---

## Day 7 — Sep 24 — 3 slots

### Morning · Review card — Reviewer: عبدالله الرواحي، مسقط

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), casual clothing, standing near the Muscat corniche with softly blurred sea and mountains behind him, natural daylight. He holds a bright green BISUTANG Bubble Mousse pump bottle, relaxed candid expression. Visible skin texture, natural uneven outdoor lighting, slight grain, no airbrushing. Bold Arabic text near top: "عبدالله من مسقط… رأيه الصريح". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Muscat corniche background. A native-app-style 5-star review card overlay in the upper-middle: quote "«صراحة توقعت أقل، بس النتيجة فاقت توقعاتي»", label "عبدالله الرواحي — مسقط" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle, natural daylight, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** عبدالله من مسقط كانت توقعاته أقل… وطلعت النتيجة أحسن 🌿\nBubble Mousse يفاجئكم بالنتيجة الحقيقية.\nجربتوا منتج فاق توقعاتكم؟ شاركونا 👇\n#بابل_موس #تجربة_عميل #مسقط #عمان #الشيب #العناية_بالشعر
**Sound:** warm surprised-reaction trending sound

### Afternoon · Social/relatable — Theme: weekend beard trim combo

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, bathroom mirror scene with natural daylight. A Gulf Arab man (dark black hair and beard, no gray) trimming his beard with a small trimmer in front of the mirror, a bright green BISUTANG Bubble Mousse bottle visible on the counter beside him. Visible skin texture, natural uneven lighting, slight grain, no airbrushing. Bold Arabic text near top: "روتين الويكند: لحية + شعر". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, same bathroom setting, the man now fully groomed, neat beard and natural dark hair coverage, confident relaxed expression, natural lighting, visible skin texture, no airbrushing. Bold Arabic text near top: "طلة كاملة بخطوتين". Text within top 55%, 8% edge margin, bottom kept clean.

**Caption:** روتين الويكند عندي: تعديل اللحية + Bubble Mousse للشيب 🌿✂️\nطلة مرتبة كاملة بأقل وقت.\nشنو روتين الويكند عندكم؟ 👇\n#بابل_موس #روتين_العناية #لحية #الشيب #السعودية #الامارات #عمان
**Sound:** grooming/lifestyle trending sound

### Evening · Benefit + before/after — Theme: compare salon vs home

**S1 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, split composition: left side shows a simple icon of a salon chair with scissors, right side shows a real home bathroom counter scene with the bright green BISUTANG Bubble Mousse bottle, natural lighting on both sides. Bold Arabic text near top: "صالون… ولا بالبيت؟". Icons kept simple and flat, not glossy 3D. Text within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic candid close-up smartphone photo, vertical 1024x1792, full-bleed, a Gulf Arab man's hairline (dark black hair, no gray) showing natural even coverage achieved at home, calm confident expression, soft natural bathroom lighting, visible realistic skin and hair texture, no airbrushing. Bold Arabic text near top: "نفس النتيجة، بدون موعد". Text within top 55%, 8% edge margin, bottom third simple.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man (dark black hair, no gray) with a confident relaxed expression, natural indoor lighting, visible skin texture, no airbrushing. A rounded green CTA banner in the upper-middle reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** ليش تحجز موعد صالون وانت تقدر تسويها بالبيت؟ 🏠🌿\nBubble Mousse — نفس التغطية، بدون انتظار ولا تنقل.\nتفضلون الصالون ولا الحل بالبيت؟ 👇\n#بابل_موس #بدون_صالون #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** comparison-style trending sound

---

## Day 8 — Sep 25 — 4 slots (bonus day)

### Morning · Review card — Reviewer: يوسف المزروعي، دبي

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), smart office-casual attire, seated at a modern office desk in Dubai, natural daylight through a window. He holds a bright green BISUTANG Bubble Mousse pump bottle near his desk, relaxed candid expression. Visible skin texture, natural uneven lighting, slight grain, no airbrushing. Bold Arabic text near top: "يوسف من دبي… تجربته بالمكتب". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Dubai office background. A native-app-style 5-star review card overlay in the upper-middle: quote "«تغيير بسيط بس زاد ثقتي بالاجتماعات»", label "يوسف المزروعي — دبي" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, confident relaxed smile, holding the bright green Bubble Mousse bottle, natural office lighting, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** يوسف من دبي يقول تجربته زادت ثقته بالشغل 💼🌿\nBubble Mousse — تفصيلة بسيطة تفرق بثقتك اليومية.\nوش أكثر شي يرفع ثقتكم قبل اجتماع مهم؟ 👇\n#بابل_موس #تجربة_عميل #دبي #الامارات #الشيب #العناية_بالشعر
**Sound:** professional/confident trending sound

### Afternoon · Social/relatable — Theme: road trip with friends

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, outdoor scene of friends loading bags into the trunk of a car in natural daylight, preparing for a road trip. One Gulf Arab man (dark black hair, no gray) holds a small travel-size bright green BISUTANG Bubble Mousse bottle while packing. Visible skin texture, natural uneven daylight, slight grain, no airbrushing. Bold Arabic text near top: "رحلة برية… وروتين ما ينفصل عني". Text and subjects within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, a desert highway rest-stop scene, the same man quickly applying the product using a car side mirror, natural candid motion, bright outdoor daylight, visible skin texture, no airbrushing. Bold Arabic text near top: "حتى بالسفر، دقيقتين بس". Text within top 55%, 8% edge margin, bottom kept clean.

**Caption:** ولا رحلة بدون الروتين الصغير هذا 🚙🌿\nBubble Mousse — يمشي وياك أي مكان، تطبيق سريع حتى بالسفر.\nوين آخر رحلة برية سويتوها؟ 👇\n#بابل_موس #سفر #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** road-trip/upbeat trending sound

### Evening · Benefit + before/after — Theme: first-use reveal

**S1 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, bathroom counter scene, natural lighting. An unopened bright green BISUTANG Bubble Mousse pump bottle standing on the counter with a small clean text-overlay tag reading "أول استخدام" near it, styled like a simple native badge. Bold Arabic text near top: "أول مرة أجربها… شوفوا النتيجة". Natural texture and lighting throughout, no glossy over-render. Text within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic candid close-up smartphone photo, vertical 1024x1792, full-bleed, a Gulf Arab man's hairline (dark black hair, no gray) immediately after one application, natural visible coverage, genuinely surprised-pleased expression caught candidly, soft natural bathroom lighting, visible realistic skin and hair texture, no airbrushing. Bold Arabic text near top: "من أول مرة!". Text within top 55%, 8% edge margin, bottom third simple.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man (dark black hair, no gray) with a confident relaxed expression, natural indoor lighting, visible skin texture, no airbrushing. A rounded green CTA banner in the upper-middle reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** هذا شكل النتيجة من أول استخدام… بدون مبالغة 🌿\nBubble Mousse تغطية تبين من أول مرة تجربها.\nتفضلون نتيجة فورية ولا تدريجية؟ 👇\n#بابل_موس #أول_استخدام #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** reveal/reaction trending sound

### Bonus · Social/relatable — Theme: grocery run appearance

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, inside a real-looking local grocery store/supermarket, natural fluorescent-mixed-with-daylight lighting. A Gulf Arab man (dark black hair, no gray) at the checkout counter, casual but put-together look, natural candid moment, not posed. Visible skin texture, natural uneven lighting, slight grain, no airbrushing. Bold Arabic text near top: "حتى المشوار السريع… أحسن طلة". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, same grocery store setting, a friendly cashier or acquaintance giving a subtle nod-of-approval moment, natural candid interaction, natural lighting, visible skin texture, no airbrushing. Bold Arabic text near top: "دقيقتين، وواثق طول اليوم". Text within top 55%, 8% edge margin, bottom kept clean.

**Caption:** حتى مشوار السوبرماركت السريع يستاهل تطلع بأحسن شكل 🛒🌿\nBubble Mousse يخليك واثق طول اليوم، مو بس بالمناسبات.\nكم مرة تطلعون بالأسبوع لمشاوير سريعة؟ 👇\n#بابل_موس #الشيب #العناية_بالشعر #الامارات #عمان #السعودية
**Sound:** casual everyday trending sound

---

## Day 9 — Sep 26 — 3 slots

### Morning · Review card — Reviewer: بدر السيابي، صلالة

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), casual clothing, standing near soft Salalah greenery with hazy natural daylight. He holds a bright green BISUTANG Bubble Mousse pump bottle, relaxed candid expression. Visible skin texture, natural uneven outdoor lighting, slight grain, no airbrushing. Bold Arabic text near top: "بدر من صلالة… تجربته". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Salalah greenery background. A native-app-style 5-star review card overlay in the upper-middle: quote "«سهلة، سريعة، وما تاخذ وقت من يومي»", label "بدر السيابي — صلالة" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle, natural daylight, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** بدر من صلالة يشارك تجربته البسيطة مع Bubble Mousse 🌿\nسهلة الاستخدام، وما تاخذ وقت من يومك.\nكم دقيقة تعطون لروتين العناية يومياً؟ 👇\n#بابل_موس #تجربة_عميل #صلالة #عمان #الشيب #العناية_بالشعر
**Sound:** relaxed trending sound

### Afternoon · Social/relatable — Theme: myth or fact

**S1 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, simple neutral home background slightly out of focus. A bold text card in the upper two-thirds of the frame styled like a native quiz-app card, clean rounded rectangle, reading in Arabic: "صح ولا غلط؟ الصبغة التقليدية تسرّع الشيب". Keep the card design clean and simple, not glossy 3D. Natural soft ambient lighting. Text within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man (dark black hair, no gray) holding a bright green BISUTANG Bubble Mousse bottle with a thoughtful, slightly playful expression, natural indoor lighting, visible skin texture, no airbrushing. Bold Arabic text near top: "الجواب بالتعليقات 👇". Text within top 55%, 8% edge margin, bottom third simple.

**Caption:** صح ولا غلط؟ 🧐 «الصبغة التقليدية تسرّع ظهور الشيب أكثر»\nخمّنوا ✅ ولا ❌ بالتعليقات، وبنكشف الجواب بمنشور الأسبوع الجاي!\n#بابل_موس #معلومة #الشيب #تفاعل #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** quiz/suspense trending sound

### Evening · Benefit + before/after — Theme: weekend-ready before Thursday night out

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, evening scene, a Gulf Arab man (dark black hair, no gray) getting ready near a window with soft city lights visible outside at dusk, casual-smart evening outfit. Visible skin texture, natural mixed evening lighting, slight grain, no airbrushing. Bold Arabic text near top: "قبل السهرة… تحضير سريع". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, same evening setting, the man now fully ready, confident expression, about to head out, natural mixed evening lighting, visible skin texture, no airbrushing. Bold Arabic text near top: "جاهز بخطوة وحدة". Text within top 55%, 8% edge margin, bottom kept clean.

**Caption:** قبل أي سهرة أو خرجة مساء… Bubble Mousse أول خطوة 🌙🌿\nتغطية سريعة، طلة مرتبة، وثقة طول السهرة.\nوين خرجتكم القادمة؟ 👇\n#بابل_موس #سهرة #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** evening/going-out trending sound

---

## Day 10 — Sep 27 — 4 slots (bonus day)

### Morning · Review card — Reviewer: وليد الكندي، مسقط

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), casual clothing, in a relaxed Muscat home or street setting with natural daylight. He holds a bright green BISUTANG Bubble Mousse pump bottle, genuine candid expression. Visible skin texture, natural uneven lighting, slight grain, no airbrushing. Bold Arabic text near top: "وليد من مسقط يشاركنا تجربته". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Muscat background. A native-app-style 5-star review card overlay in the upper-middle: quote "«كنت متردد أطلبها، وندمت إني ما جربتها من زمان»", label "وليد الكندي — مسقط" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle, natural daylight, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** وليد من مسقط تردد بالبداية… وندم إنه ما جربها بدري 😅🌿\nBubble Mousse — القرار البسيط اللي يفرق.\nصار عندكم شي ترددتوا فيه وندمتوا؟ 👇\n#بابل_موس #تجربة_عميل #مسقط #عمان #الشيب #العناية_بالشعر
**Sound:** relatable/honest trending sound

### Afternoon · Social/relatable — Theme: kids birthday party dad

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, a warm home setting with colorful balloons softly visible in the background (kids' birthday party), natural daylight. A Gulf Arab man (dark black hair, no gray), casual but neat clothing, standing among the decorations looking put-together. Visible skin texture, natural uneven lighting, slight grain, no airbrushing. Bold Arabic text near top: "حفلة عيد ميلاد الصغار… وطلة الوالد مرتبة". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, same birthday party setting, the man in a playful natural moment with children nearby (soft focus on the kids, him in focus), confident relaxed expression, natural lighting, visible skin texture, no airbrushing. Bold Arabic text near top: "دقيقتين قبل لا يوصل الضيوف". Text within top 55%, 8% edge margin, bottom kept clean.

**Caption:** حفلات الصغار ما تسامح وقت 😅🎈\nBubble Mousse يخليني جاهز بدقيقتين قبل ما يوصل كل أحد.\nآخر مناسبة عائلية حضرتوها؟ 👇\n#بابل_موس #عائلة #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** fun family trending sound

### Evening · Benefit + before/after — Theme: founder/why-we-made-this story

**S1 prompt:** A realistic smartphone-style photo, vertical 1024x1792, full-bleed, a bright green BISUTANG Bubble Mousse pump bottle standing on a simple wooden table, warm soft natural light, minimal styling like a genuine product-in-use photo, not a studio ad render. Bold Arabic text near top: "ليش سوينا Bubble Mousse؟". Visible surface texture, natural shadow, no glossy over-polish. Text within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic smartphone-style photo, vertical 1024x1792, full-bleed, simple neutral warm-toned background slightly out of focus. Large bold Arabic text centered in the upper two-thirds: "لأن العناية بالشعر ما لازم تكون معقدة", clean readable typography, no glossy 3D effects. Natural soft ambient lighting. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, a clean hero shot of the bright green BISUTANG Bubble Mousse bottle on a softly lit wooden surface, natural shadow and texture, not overly polished. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** بدأنا Bubble Mousse من فكرة وحدة بسيطة: العناية بالشعر ما لازم تكون معقدة 🌿\nكل تفصيلة بالتركيبة اختيرت بعناية.\nشكراً لكل واحد جزء من هذي الرحلة معنا 🤍\n#بابل_موس #قصتنا #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** emotional/storytelling trending sound

### Bonus · Review card — Reviewer: عمر الشحي، الفجيرة

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), casual clothing, standing with softly blurred Fujairah mountains visible behind him, natural daylight. He holds a bright green BISUTANG Bubble Mousse pump bottle, relaxed candid expression. Visible skin texture, natural uneven outdoor lighting, slight grain, no airbrushing. Bold Arabic text near top: "عمر من الفجيرة… تجربته". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Fujairah mountain background. A native-app-style 5-star review card overlay in the upper-middle: quote "«نصحتني فيها صديقتي، وطلعت فعلاً تستاهل»", label "عمر الشحي — الفجيرة" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle, natural daylight, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "جربها انت كمان". Bottom 30% kept simple, 8% edge margin.

**Caption:** عمر من الفجيرة جربها بنصيحة صديق… وما ندم 🌿\nBubble Mousse — توصية تستاهل تجربتها بنفسك.\nمين آخر شخص نصحكم بمنتج واستاهل؟ 👇\n#بابل_موس #تجربة_عميل #الفجيرة #الامارات #الشيب #العناية_بالشعر
**Sound:** friendly recommendation trending sound

---

## Day 11 — Sep 28 — 3 slots

### Morning · Review card — Reviewer: إبراهيم البلوشي، مسقط

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), casual clothing, standing in a Muscat old-town alley setting with warm natural daylight. He holds a bright green BISUTANG Bubble Mousse pump bottle, genuine candid expression. Visible skin texture, natural uneven outdoor lighting, slight grain, no airbrushing. Bold Arabic text near top: "إبراهيم من مسقط… تجربة صادقة". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Muscat old-town background. A native-app-style 5-star review card overlay in the upper-middle: quote "«بسيطة بمعنى الكلمة، ونتيجتها تدوم»", label "إبراهيم البلوشي — مسقط" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle, natural daylight, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** إبراهيم من مسقط يصف تجربته بكلمة وحدة: بسيطة 🌿\nBubble Mousse — نتيجة تدوم بدون تعقيد.\nإيش أهم شي تدورونه بمنتج العناية بالشعر؟ 👇\n#بابل_موس #تجربة_عميل #مسقط #عمان #الشيب #العناية_بالشعر
**Sound:** calm trending sound

### Afternoon · Social/relatable — Theme: Sunday reset / new week

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, a home desk or kitchen table scene, soft Sunday-morning natural light. A Gulf Arab man (dark black hair, no gray), casual home clothes, organizing a paper planner or notebook, a bright green BISUTANG Bubble Mousse bottle softly visible on a nearby shelf in his grooming kit. Visible skin texture, natural uneven lighting, slight grain, no airbrushing. Bold Arabic text near top: "أحد الصباح… بداية أسبوع جديد". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, bathroom scene, same man quickly using the product before starting his day, natural candid motion, soft morning lighting, visible skin texture, no airbrushing. Bold Arabic text near top: "روتين صغير، أسبوع أحسن". Text within top 55%, 8% edge margin, bottom kept clean.

**Caption:** بداية الأسبوع تبدأ من تفاصيل صغيرة 🗓️🌿\nBubble Mousse جزء من روتيني كل أحد قبل ما يبدأ الأسبوع.\nوش أول شي تسوونه أول يوم بالأسبوع؟ 👇\n#بابل_موس #روتين #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** fresh-start/motivational trending sound

### Evening · Benefit + before/after — Theme: monthly habit / subscribe mindset

**S1 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, bathroom counter scene with natural light. A simple calendar-style graphic overlay in the upper portion with a small bottle icon marking "كل شهر", styled like a native app widget, next to a real bright green BISUTANG Bubble Mousse bottle. Bold Arabic text near top: "صارت عادة شهرية عندي". Natural lighting and texture, no glossy over-render. Text within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man (dark black hair, no gray) with a confident natural expression, soft indoor lighting, visible skin texture, no airbrushing. Bold Arabic text near top: "روتين ثابت… نتيجة ثابتة". Text within top 55%, 8% edge margin, bottom third simple.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A hero shot of the bright green BISUTANG Bubble Mousse bottle on a bathroom counter, natural lighting and texture. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** من أول تجربة لعادة شهرية ثابتة 🌿📅\nBubble Mousse — نتيجة تدوم لين تحتاج التجديد الشهري.\nصار عندكم منتج تحولتوا لطلبه بشكل ثابت؟ 👇\n#بابل_موس #روتين_شهري #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** habit-building trending sound

---

## Day 12 — Sep 29 — 4 slots (bonus day)

### Morning · Review card — Reviewer: زايد الظاهري، أبوظبي

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), casual smart clothing, standing along the Abu Dhabi corniche with softly blurred sea and skyline behind him, natural daylight. He holds a bright green BISUTANG Bubble Mousse pump bottle, relaxed candid expression. Visible skin texture, natural uneven outdoor lighting, slight grain, no airbrushing. Bold Arabic text near top: "زايد من أبوظبي… رأيه الصريح". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Abu Dhabi corniche background. A native-app-style 5-star review card overlay in the upper-middle: quote "«كنت أستخدم منتجات تانية قبل، بس هذي فرقت فعلاً»", label "زايد الظاهري — أبوظبي" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle, natural daylight, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** زايد من أبوظبي جرب منتجات كثيرة قبل… وهذي فرقت معه 🌿\nBubble Mousse — الفرق يبين بالنتيجة، مو بس بالكلام.\nجربتوا منتجات ثانية قبل Bubble Mousse؟ شاركونا 👇\n#بابل_موس #تجربة_عميل #ابوظبي #الامارات #الشيب #العناية_بالشعر
**Sound:** confident comparison trending sound

### Afternoon · Social/relatable — Theme: coffee with friends (gahwa)

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, a warm home majlis setting, a small group of Gulf Arab men (dark black hair, no gray) seated together with traditional Gulf coffee (dallah and small cups) and dates on a low table, relaxed natural conversation, natural warm indoor lighting. Visible skin texture, slight grain, no airbrushing. Bold Arabic text near top: "قعدة قهوة… وسؤال طاف بينا". Text and subjects within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, same majlis gathering, one friend holding up a bright green BISUTANG Bubble Mousse bottle while the others lean in curiously, natural candid moment, warm indoor lighting, visible skin texture, no airbrushing. Bold Arabic text near top: "شلون تسوي كذا؟". Text within top 55%, 8% edge margin, bottom kept clean.

**Caption:** صارت قعدة القهوة نقاش عن العناية بالشعر 😄☕\nBubble Mousse — سهل تشرحه لأي أحد لأنه فعلاً بسيط.\nآخر نقاش غريب صار بقعدة قهوة عندكم؟ 👇\n#بابل_موس #قهوة #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** cozy gathering trending sound

### Evening · Benefit + before/after — Theme: gym-buddy noticed

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, inside a real-looking gym with natural mixed indoor lighting (not overly bright/staged). Two Gulf Arab men (dark black hair, no gray) mid-workout break, one pointing at the other's hair with a surprised, impressed expression. Visible skin texture and slight sweat sheen for realism, natural uneven gym lighting, slight grain, no airbrushing. Bold Arabic text near top: "صاحبي لاحظ الفرق بالنادي 👀". Text and subjects within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic candid close-up smartphone photo, vertical 1024x1792, full-bleed, a Gulf Arab man's hairline (dark black hair, no gray) under strong gym overhead lighting, natural even coverage clearly visible even under harsh light, confident expression, visible realistic skin and hair texture, no airbrushing. Bold Arabic text near top: "ولا حتى تحت الإضاءة القوية بيّن". Text within top 55%, 8% edge margin, bottom third simple.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man (dark black hair, no gray) in gym clothing, confident relaxed expression, natural indoor gym lighting, visible skin texture, no airbrushing. A rounded green CTA banner in the upper-middle reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** صاحبي بالنادي أول من لاحظ الفرق 👀🌿\nBubble Mousse — تغطية طبيعية حتى تحت إضاءة الجيم القوية.\nمين أول شخص يلاحظ عليكم أي تغيير؟ 👇\n#بابل_موس #نادي #رياضة #الشيب #العناية_بالشعر #السعودية #الامارات
**Sound:** gym/energetic trending sound

### Bonus · Review card — Reviewer: منصور الوهيبي، عبري

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), casual clothing, standing in an Ibri, Oman desert-adjacent setting with warm natural daylight and soft sandy-toned buildings behind him. He holds a bright green BISUTANG Bubble Mousse pump bottle, relaxed candid expression. Visible skin texture, natural uneven outdoor lighting, slight grain, no airbrushing. Bold Arabic text near top: "منصور من عبري… تجربته". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Ibri desert-town background. A native-app-style 5-star review card overlay in the upper-middle: quote "«حتى بمكان بعيد عن المدينة، التوصيل وصلني بسرعة والمنتج زين»", label "منصور الوهيبي — عبري" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle, natural daylight, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** منصور من عبري يشاركنا تجربته مع Bubble Mousse 🌿\nتوصيل يوصل لكل المناطق، والنتيجة نفس الجودة.\nمن أي مدينة أو ولاية تتابعوننا؟ 👇\n#بابل_موس #تجربة_عميل #عبري #عمان #الشيب #العناية_بالشعر
**Sound:** warm trending sound

---

## Day 13 — Sep 30 — 4 slots (bonus day — closing the month strong)

### Morning · Review card — Reviewer: جمعة السويدي، دبي

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), casual smart clothing, in a relaxed Dubai home or outdoor setting, natural daylight. He holds a bright green BISUTANG Bubble Mousse pump bottle, genuine candid expression. Visible skin texture, natural uneven lighting, slight grain, no airbrushing. Bold Arabic text near top: "جمعة من دبي يختم الشهر بتجربته". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Dubai background. A native-app-style 5-star review card overlay in the upper-middle: quote "«صارت من أساسيات الحمام عندي، مو بس تجربة»", label "جمعة السويدي — دبي" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle, natural daylight, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** جمعة من دبي يقول إنها صارت أساسية عنده، مو بس تجربة عابرة 🌿\nBubble Mousse — من التجربة الأولى لعادة ثابتة.\nوش المنتج اللي صار أساسي بروتينكم؟ 👇\n#بابل_موس #تجربة_عميل #دبي #الامارات #الشيب #العناية_بالشعر
**Sound:** confident closing-the-month trending sound

### Afternoon · Social/relatable — Theme: end-of-month reflection

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, a home hallway with a wall calendar visible, September dates crossed off, natural indoor daylight. A Gulf Arab man (dark black hair, no gray), casual home clothes, glancing at the calendar with a reflective expression. Visible skin texture, natural uneven lighting, slight grain, no airbrushing. Bold Arabic text near top: "آخر يوم بالشهر… وشنو تغيّر؟". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed, bathroom mirror scene, the same man looking confidently at his reflection, holding the bright green BISUTANG Bubble Mousse bottle, natural lighting, visible skin texture, no airbrushing. Bold Arabic text near top: "روتين واحد ثابت من أول الشهر". Text within top 55%, 8% edge margin, bottom kept clean.

**Caption:** آخر يوم بسبتمبر… وروتين واحد ما تغير عندي 🌿📆\nBubble Mousse ثابت بروتيني الشهر كامل.\nوش أكثر شي ثبت بروتينكم هالشهر؟ 👇\n#بابل_موس #نهاية_الشهر #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** reflective/motivational trending sound

### Evening · Benefit + before/after — Theme: month-long transformation recap

**S1 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, a simple grid-style overlay in the upper portion of a bathroom scene showing two labeled panels "الأسبوع ١" and "الأسبوع ٤" side by side over a softly blurred background, styled like a native app comparison widget, not glossy 3D. Bold Arabic text near top: "شهر كامل… هذا الفرق". Natural lighting and texture. Text within top 55%, 8% edge margin, bottom kept simple.

**S2 prompt:** A realistic candid close-up smartphone photo, vertical 1024x1792, full-bleed, a Gulf Arab man's hairline (dark black hair, no gray) showing full natural even coverage after a month of use, confident satisfied expression, soft natural indoor lighting, visible realistic skin and hair texture, no airbrushing. Bold Arabic text near top: "نتيجة تستاهل الانتظار". Text within top 55%, 8% edge margin, bottom third simple.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man (dark black hair, no gray) with a confident relaxed expression, natural indoor lighting, visible skin texture, no airbrushing. A rounded green CTA banner in the upper-middle reads bold white Arabic: "الرابط في البايو". Bottom 30% kept simple, 8% edge margin.

**Caption:** من الأسبوع الأول للأسبوع الرابع… هذا التطور الطبيعي 🌿📈\nBubble Mousse نتيجة تتحسن مرة بعد مرة بدون مبالغة.\nجاهزين تبدأون تجربتكم الشهر الجاي؟\nالرابط في البايو 🔗\n#بابل_موس #قبل_وبعد #الشيب #العناية_بالشعر #السعودية #الامارات #عمان
**Sound:** uplifting month-recap trending sound

### Bonus · Review card — Reviewer: علي المعمري، صحار

**S1 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. A Gulf Arab man, dark black hair and beard (no gray), casual clothing, in a softened lifestyle setting near Sohar with natural daylight (not an industrial backdrop — a warm home or street scene). He holds a bright green BISUTANG Bubble Mousse pump bottle, genuine candid expression. Visible skin texture, natural uneven lighting, slight grain, no airbrushing. Bold Arabic text near top: "علي من صحار… ختام تجارب الشهر". Text and subject within top 55%, 8% edge margin, bottom third simple.

**S2 prompt:** A realistic smartphone photo, vertical 1024x1792, full-bleed, softly blurred Sohar background. A native-app-style 5-star review card overlay in the upper-middle: quote "«آخر تجربة أشاركها هالشهر، وأحلاها»", label "علي المعمري — صحار" beneath, rounded corners, soft realistic shadow, not glossy. Text within top 55%, 8% edge margin, bottom kept clean.

**S3 prompt:** A realistic candid smartphone photo, vertical 1024x1792, full-bleed. The same Gulf Arab man, relaxed genuine smile, holding the bright green Bubble Mousse bottle, natural daylight, visible skin texture, no airbrushing. A rounded green CTA banner in the upper area reads bold white Arabic: "جربها انت كمان 🌿". Bottom 30% kept simple, 8% edge margin.

**Caption:** نختم شهر سبتمبر بتجربة علي من صحار 🌿\nشكراً لكل واحد شارك تجربته وياكم هالشهر.\nأكتوبر جاي بتجارب أكثر — تبون شنو نطرح؟ 👇\n#بابل_موس #تجربة_عميل #صحار #عمان #الشيب #العناية_بالشعر
**Sound:** warm celebratory trending sound

---

## Reviewer names left unused (for October)

هلال العبري (مسقط)، راكان الكثيري (صلالة) — 2 remaining from the pre-approved pool.
Generate a fresh set before October if going past these two.

## Reminders — do not skip

- These are **all AI-generated review cards**, same convention already live on the
  account (Salem/Muscat, Tariq/Sohar posts). If a **real** WhatsApp testimonial
  screenshot ever comes in from Zouhir, swap it into the next open Morning slot
  ahead of a generated one — real beats generated every time.
- If a generated image still looks synthetic, regenerate with two follow-up notes
  to GPT: "make the lighting messier and less even" and "reduce skin smoothness,
  add visible texture" — these two fix most remaining AI-look tells.
- Every caption already follows the engagement checklist (hook, one-word/number
  comment-bait, single CTA, no invented prices/promos). Don't stack a second CTA
  when composing.
- Host each day's images close to its actual post date (7-day Corenexis link
  expiry) — don't bulk-host the whole month at once.
