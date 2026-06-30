# SKYCLEAR — Inbound-Lead Demo Build (First Sections)

Paste this whole thing into Claude Code. Context: this is a DEMO for someone who reached
out — a "prove it" piece. We're replacing skyclearx.com, which is a dead template (renders
"Loading…" as its server HTML, still says "PowerWash Pro," footer has fake (555) 123-4567 /
123 Clean St, Springfield, IL). We bury it with something cinematic.

Build only the HOMEPAGE TOP: dark glassy nav + full-bleed video hero + Pick Your Service
row + the Permanent Lights feature block. That's the demo. Report when it's running. Don't
chain further sections yet.

---

## NORTH STAR
Texas-modern, high-class, immersive. Dusk/night exterior lighting is the mood — warm glow
against deep navy. The site should feel alive, like the lights are on. Lead reaction target:
"holy shit, these guys are the real deal." Quality bar: ncfoothillsjeeptours.com (real video
hero, scroll-reveal, depth, buttery motion) and loqaldesign.com. NOT flat cards on white.

## HARD BRAND RULES
- **Nav background MUST match the logo navy: `#060A15`.** No white nav, ever. Glassy nav
  over hero; on scroll it stays `#060A15` with backdrop-blur and a 1px gold hairline border
  (`rgba(200,169,81,0.25)`).
- Palette: base `#060A15`, warm white `#FAFAF7`, warm gold `#E8B04B` (lighting/glow accent),
  clean blue `#5FB4E8` (glass/solar accent).
- Phone everywhere: (281) 771-7158. Areas: Cypress, Klein, Tomball, The Woodlands,
  San Marcos, Austin, San Antonio.
- Server-rendered. No "Loading…" screen, ever. Real content in static HTML.
- Footer credit (when built): "Site forged by LOQAL" → loqal.group.

## MEDIA — USE THE PEXELS API (mandatory)
The current build reuses ONE photo over and over — that's the #1 thing killing it. Use the
Pexels API (key + script already at site/scripts/fetch-media.py) to pull a CURATED, VARIED
set. Different media per section, nothing repeats:
- HERO = a real Pexels VIDEO. Search "house exterior dusk", "outdoor string lights night",
  "modern home night architecture". Pick a slow cinematic clip. Full-bleed, autoplay, muted,
  loop, playsinline, dark gradient overlay for text legibility.
- Pick-Your-Service cards = 3 different stills: warm-lit home facade at night (lights),
  spotless sunlit glass (window), clean rooftop solar panels (solar).
- Permanent Lights block = a warm-lit night facade, different from all the above.
Add `// TODO: swap for client's real photo (IMG_XXXX.jpeg)` on each slot so their real job
photos (Supabase IMG_3787.jpeg etc.) drop in later. NO image may appear twice.

## MOTION — buttery, complementary, 60fps
Use Framer Motion. Animate transform/opacity only, never layout. Respect
`prefers-reduced-motion` (opacity only fallback).
- Hero text: staggered fade-up word reveal on load; "lit up" (gold) and "crystal clear"
  (blue) color-in last, ~150ms stagger.
- Sections fade-up + slight translateY on scroll-into-view, once:true, ~0.6s ease-out,
  children staggered ~80ms.
- Subtle hero parallax (bg slower than scroll), scroll-down cue at hero bottom.
- Service cards: lift + scale 1.02 + colored glow on hover (gold for lights, blue for
  window/solar).
- SIGNATURE MOMENT in the Permanent Lights block: as it scrolls into view, the house goes
  from dim/daytime to lights-on warm glow — two stacked images crossfading on scroll
  progress (or a brightness/filter shift). This is the "the lights just turned on" beat.

## SECTIONS TO BUILD (this demo only)
1. **Dark glassy sticky nav** `#060A15` — logo left; links center (Permanent Lights ·
   Window Cleaning · Solar · Service Area · FAQ); phone + glowing "Get a Free Quote" right.
   Mobile: hamburger → full-screen dark overlay with click-to-call pinned.
2. **Full-bleed video hero** — "Your home, lit up. Your glass, crystal clear." (gold "lit
   up", blue "crystal clear"), subhead naming the TX areas, dual CTA (Get a Free Quote /
   See Services) + "or call (281) 771-7158", four trust chips (Licensed & Insured ·
   5-Star Rated · Same-Day Service · Local Texas Experts), scroll-down cue.
3. **"Pick Your Service" 3 rich image cards** — tall image card per service, gradient scrim,
   icon, title, one line, hover glow/lift. (Permanent Lights / Window Cleaning / Solar.)
4. **Permanent Lights feature block** — image left, copy right, WITH the lights-turn-on
   scroll moment. Copy: app-controlled, year-round curb appeal, holidays + game days from
   one app, professionally installed, licensed & insured. Ends with a Free Quote CTA.

## ACCEPTANCE
- Nav is `#060A15`, matches logo, glassy on scroll. No white nav.
- Hero is a real Pexels video, not a repeated static photo.
- Every section uses a DIFFERENT Pexels image — nothing repeats.
- Hero word-reveal, scroll fade-ups, hover glow, and the lights-turn-on moment all run at
  60fps; prefers-reduced-motion respected.
- Cinematic and expensive on mobile AND desktop. Texas-modern, high-class.
- No placeholder contact info, no "Loading…" screen, server-rendered, real (281) 771-7158.

Build these sections to spec, run it, report what's working and what to look at, then stop.
