# SKYCLEAR — "Template → Holy Shit" Elevation Pass

Paste this whole thing into Claude Code. The current build is technically fine but reads
generic and geometric. We are taking it to the quality bar of ncfoothillsjeeptours.com:
real video heroes, scroll-driven atmosphere, buttery motion, layered depth, and copy that
sells. Build the HOMEPAGE only for now. Report at each checkpoint, do not chain.

---

## NORTH STAR
Texas-modern, high-class, immersive. Dusk-and-night exterior lighting is the entire mood —
warm glow against deep navy/black. The site should feel like the lights are alive. When
someone lands here they say "holy shit, these guys are the real deal."

Reference quality: ncfoothillsjeeptours.com (full-bleed video hero, scroll-reveal sections,
real footage, depth) and loqaldesign.com. We are NOT making flat card grids on white.

## HARD BRAND RULES
- **Nav bar background MUST match the logo's dark navy: `#060A15`.** No white nav. The nav
  is dark, glassy, and sits over the hero. On scroll past hero it stays `#060A15` with a
  subtle backdrop-blur and a 1px warm-gold hairline border-bottom (`rgba(200,169,81,0.25)`).
- Palette: base `#060A15` (logo navy), warm white `#FAFAF7`, accent warm gold/amber
  `#E8B04B` for the "lit up" glow, cool clean blue `#5FB4E8` for the "crystal clear" glass
  accent. Use gold for lighting copy, blue for window/solar copy.
- Phone everywhere: (281) 771-7158. Service areas: Cypress, Klein, Tomball, The Woodlands,
  San Marcos, Austin, San Antonio.
- Server-rendered. No "Loading…" screen ever. Real content in static HTML.
- Footer credit: "Site forged by LOQAL" → loqal.group.

## MEDIA — STOP REUSING ONE PHOTO
The repeating single photo is the #1 thing killing it. Pull a CURATED, VARIED set from
Pexels (you already have the API key + the script at site/scripts/fetch-media.py). Fetch
specific, different shots so each section has its own visual:
- HERO: a real *video* — search Pexels video for "house exterior dusk", "outdoor string
  lights night", "modern home night architecture". Pick a slow, cinematic clip. Full-bleed,
  autoplay, muted, loop, `playsinline`, with a dark gradient overlay so text is readable.
- Permanent Lights section: warm-lit home facade at night, soffit/eave lighting.
- Window Cleaning section: bright clean glass, sun flare through a spotless window, squeegee
  detail shot.
- Solar section: solar panels on a roof, blue sky, clean reflective surface.
- Service area / closing: a wide dusk neighborhood or Texas sky.
Label each slot with a `// TODO: swap for client's real photo (IMG_XXXX.jpeg)` comment so
the client's actual job photos drop in later. Do NOT let the same image appear twice.

## MOTION — buttery, complementary, never distracting
Add Framer Motion (or CSS scroll-driven animations if you prefer zero deps). Rules:
- Hero text: staggered fade-up word reveal on load (the "lit up" and "crystal clear" words
  animate their gold/blue color in last, ~150ms stagger).
- Every section: fade-up + slight translateY on scroll-into-view, `once: true`, ease-out,
  ~0.6s. Stagger children by ~80ms.
- Trust chips / stat counters: count-up animation when they enter viewport
  (500+ homes, 5-star, etc.).
- A subtle parallax on hero background (background moves slower than scroll).
- One signature moment: as you scroll the Permanent Lights section into view, the house
  image transitions from "lights off / daytime dim" to "lights on / warm glow" — do this
  with two stacked images and an opacity crossfade driven by scroll progress, OR a CSS
  filter brightness shift. This is the "wow, the lights turned on" beat.
- Respect `prefers-reduced-motion` — disable transforms, keep opacity only.
- 60fps only: animate transform/opacity, never layout properties. No janky effects.

## HOMEPAGE SECTION ORDER (rebuild)
1. **Dark glassy sticky nav** (`#060A15`) — logo left, links center (Permanent Lights ·
   Window Cleaning · Solar · Service Area · FAQ), phone + glowing "Get a Free Quote" button
   right. Mobile: hamburger → full-screen dark overlay menu with click-to-call pinned.
2. **Full-bleed video hero** — headline "Your home, lit up. Your glass, crystal clear."
   (gold on "lit up", blue on "crystal clear"), subhead, dual CTA (Get a Free Quote /
   See Services) + "or call (281) 771-7158", four trust chips. Scroll-down cue at bottom.
3. **"Pick Your Service" 3-card row** — but make them rich: each card is a tall image card
   with the section's real photo, a gradient scrim, icon, title, one line, and a glow on
   hover (gold for lights, blue for window/solar). Lift + scale 1.02 on hover.
4. **Permanent Lights feature block** — image left / copy right (alternate sides per
   section). This one gets the lights-turn-on scroll moment. Specific copy: app-controlled,
   year-round curb appeal, holidays + game days from one app, professionally installed,
   licensed & insured.
5. **Window Cleaning feature block** — copy left / image right. Streak-free, interior +
   exterior, screens + tracks, residential & commercial.
6. **Solar Panel Cleaning feature block** — image left / copy right. Restores efficiency,
   safe purified-water process, recommended 1–2x/year.
7. **The Skyclear Difference** — 3–4 trust pillars with animated stat count-ups (Licensed
   & Insured, 500+ Homes Serviced, Same-Day Quotes, Local Texas Crew).
8. **Service Area** — the real TX city list as elegant pills/tags over a dusk-sky band,
   "Proudly serving Greater Houston & Central Texas."
9. **FAQ accordion** — 5 real Q&As (do you do holiday lights, is it app-controlled, are you
   insured, how often should solar be cleaned, do you do commercial). Smooth height
   animation on expand.
10. **Final CTA band** — full-bleed dusk image, "Ready to light it up?", dual CTA + phone.
11. **Footer** (`#060A15`) — logo, nav, real contact, service areas, "Site forged by LOQAL".

## ACCEPTANCE — this checkpoint
- Nav background is `#060A15`, matches logo, glassy on scroll. No white nav anywhere.
- Hero is a real Pexels video, not a static repeated photo.
- Every section uses a DIFFERENT real image. No image repeats.
- Scroll-into-view motion on every section, hero word-reveal on load, stat count-ups, and
  the lights-turn-on moment all work at 60fps.
- Looks cinematic and expensive on mobile AND desktop. Reads as Texas-modern, high-class.
- No placeholder contact info, no "Loading…" screen, server-rendered.
- prefers-reduced-motion respected.

Build the homepage to this spec, run it, and report back with what's working and what you
want me to look at. Then stop — don't move to sub-pages yet.
