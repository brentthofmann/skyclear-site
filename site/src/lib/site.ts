// Single source of truth — Skyclear is now PERMANENT OUTDOOR LIGHTING only.

export const site = {
  name: "Skyclear",
  legalName: "Skyclear Exterior Services",
  tagline: "Permanent Outdoor Lighting",
  phone: "(281) 771-7158",
  phoneHref: "tel:+12817717158",
  email: "skyclearextservices@gmail.com",
  emailHref: "mailto:skyclearextservices@gmail.com",
  url: "https://www.skyclearx.com",
  region: "Greater Houston, Texas",
  heroRegion: "Greater Houston", // the region the narrative speaks to directly
  // Google "write a review" link — drops customers straight onto the
  // leave-a-review screen for the business's Google profile.
  // Get it: Google Business Profile → "Ask for reviews" → copy link,
  // or use https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
  // The "Leave a Review" button only renders once this is filled in.
  // Cleaned from the GBP reviews share link (session params stripped — kept only
  // the durable si= entity token + q=). Opens the Skyclear reviews panel with a
  // "Write a review" button. To upgrade to a one-tap star composer that matches
  // the QR flyer, replace with the GBP "Ask for reviews" g.page/r/.../review link.
  googleReviewUrl:
    "https://www.google.com/search?si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_wv3LlXipogvq9y9gLIG7ejdcNc4qha3cxqSVJqLaTrnfyBeqUzQoetZsI_JamD2lBPZE6_xZ4HyEHBAnpUEMJJKCnUSSV0mGozTPiXcJJrlqppPnA%3D%3D&q=Skyclear+exterior+services+Reviews",
  builtBy: { label: "Site forged by LOQAL", href: "https://loqal.group" },
};

// Greater Houston service area (local SEO + conversions).
export const serviceAreas = [
  "Houston",
  "Spring",
  "Cypress",
  "Tomball",
  "The Woodlands",
  "Conroe",
  "Katy",
  "Klein",
  "Magnolia",
  "Montgomery",
];

// Hero trust chips.
export const trustChips = [
  { label: "Licensed & Insured", sub: "Full protection guaranteed" },
  { label: "5-Star Rated", sub: "Happy Texas homeowners" },
  { label: "Same-Day Quotes", sub: "Within 24 hours" },
  { label: "Local Texas Crew", sub: "Greater Houston" },
];

// The "secret weapon" trust bar that sits right under the hero.
export const trustBar = [
  "Free quote within 24 hours",
  "No high-pressure sales",
  "Fully installed & app-configured",
  "Serving all of Greater Houston",
];

// Occasion looks — each is a REAL photo of a home actually lit that way (no fake
// recoloring). Tapping crossfades between the real images.
export type Occasion = {
  id: string;
  label: string;
  emoji: string;
  caption: string;
  swatch: string;
  /** live roofline palette — bulbs cycle through these colors */
  palette: string[];
  image: string;
  alt: string;
  /** true = photo already shows real lit product (skip the SVG roofline overlay) */
  real?: boolean;
};

export const occasions: Occasion[] = [
  {
    id: "everyday",
    label: "Everyday",
    emoji: "✨",
    caption: "A real Houston install, glowing every night of the year.",
    swatch: "#FFD9A0",
    palette: ["#FFE6B8", "#FFD9A0", "#FFEDC8"],
    image: "/images/home-night-red.webp",
    alt: "Real Skyclear install — Houston brick home with permanent roofline lighting glowing at night",
    real: true,
  },
  {
    id: "christmas",
    label: "Christmas",
    emoji: "🎄",
    caption: "Festive red, green and warm white — no ladder required.",
    swatch: "#E23B3B",
    palette: ["#E23B3B", "#2FAE6A", "#FAFAF7"],
    image: "/images/install-holiday.webp",
    alt: "Real Skyclear install — the same brick home lit in red and green for Christmas",
    real: true,
  },
  {
    id: "halloween",
    label: "Halloween",
    emoji: "🎃",
    caption: "Set the mood for the spookiest night of the year.",
    swatch: "#F5871F",
    palette: ["#F5871F", "#8C46C8", "#F5871F"],
    image: "/images/occ-color.webp",
    alt: "Home lit in spooky purple and color for Halloween at night",
    real: true,
  },
  {
    id: "color",
    label: "Any Color",
    emoji: "🎨",
    caption: "Team colors, birthdays, July 4th — any palette, in a tap.",
    swatch: "#8C46C8",
    palette: ["#E23B3B", "#F5871F", "#F7D98F", "#2FAE6A", "#3b6fe2", "#8C46C8"],
    image: "/images/install-color-rgb.webp",
    alt: "Real Skyclear install — Houston brick home with permanent roofline lighting in full multicolor at night",
    real: true,
  },
];

// Interactive roofline colorways — the live "design your glow" piece right under
// the hero. Each drives the SVG roofline mark's eave-light palette + glow.
export type Colorway = {
  id: string;
  label: string;
  sub: string;
  glow: string; // arc / trace / section-bloom color
  palette: string[]; // eave-light colors (cycled across the bulbs)
  paletteLeft?: string[]; // left slope override (e.g. one team)
  paletteRight?: string[]; // right slope override (e.g. the rival)
};

export const colorways: Colorway[] = [
  {
    id: "warm",
    label: "Warm White",
    sub: "Timeless, every-night curb appeal.",
    glow: "#F2C66E",
    palette: ["#FFE6B8", "#FFD9A0", "#FFEDC8"],
  },
  {
    id: "christmas",
    label: "Christmas",
    sub: "Red, green & warm white — no ladder, ever.",
    glow: "#E23B3B",
    palette: ["#E23B3B", "#2FAE6A", "#FAFAF7"],
  },
  {
    id: "gameday",
    label: "Game Day",
    sub: "Rockets red on the left, Texans navy on the right.",
    glow: "#CE1141",
    palette: ["#CE1141", "#FFFFFF", "#16395C", "#A71930"],
    paletteLeft: ["#CE1141", "#FFFFFF", "#CE1141"], // Houston Rockets
    paletteRight: ["#16395C", "#A71930", "#16395C"], // Houston Texans
  },
  {
    id: "patriot",
    label: "Stars & Stripes",
    sub: "Red, white & blue for the 4th of July.",
    glow: "#3C5BD6",
    palette: ["#C8302B", "#FAFAF7", "#3C5BD6"],
  },
];

// Why homeowners choose Skyclear (visual checklist).
export const whyPoints = [
  { title: "Professional Installation", body: "Custom-fit, hidden track installed clean and tight under the eave — done in a day on most homes." },
  { title: "Invisible by Daylight", body: "The track is color-matched to your fascia, so all you see in daylight is a clean roofline." },
  { title: "App-Controlled", body: "Colors, brightness, zones, and holiday presets — all from your phone in seconds." },
  { title: "Custom Holiday Colors", body: "Christmas, Halloween, July 4th, game day, birthdays — any palette you can imagine." },
  { title: "Built for Texas Weather", body: "Commercial-grade LEDs and track rated for our heat, humidity, and storms." },
  { title: "Free Estimates", body: "A clear, honest quote within 24 hours — and zero high-pressure sales." },
];

// App-control feature list.
export const appFeatures = [
  "Millions of colors & warm-white shades",
  "Schedule sunrise/sunset on/off",
  "Brightness & dimming control",
  "One-tap holiday presets",
  "Custom scenes & zones",
  "Control from anywhere",
];

// Pro-grade systems we install & configure. Govee called out by name since it's
// the one most homeowners already recognize from the app store.
export const lightingSystems = {
  note: "We install and dial in pro-grade permanent LED systems — including app-driven options like Govee — so it's tuned and ready before we leave.",
  brands: ["Govee", "Trimlight-style track", "Commercial-grade LED"],
};

// Lighting-specific install process.
export const steps = [
  { n: "01", title: "Free On-Site Estimate", body: "We measure your roofline and walk through color and pattern options — no pressure, no obligation." },
  { n: "02", title: "Custom Track Fabrication", body: "We pre-fit the channel to match your home so the lights sit clean and tight under the eave." },
  { n: "03", title: "Professional Installation", body: "Our insured techs install the track, lights, controller, and weatherproof power — in one day on most homes." },
  { n: "04", title: "App Setup & Walkthrough", body: "We pair your controller, set your favorite presets, and show you how to use the app before we leave." },
];

// Lighting FAQ — the questions people actually Google.
export const faqs = [
  {
    q: "How much does permanent lighting cost?",
    a: "Most homes range $2,500–$6,000 depending on roofline length and layout. We give you a clear, itemized quote up front — free, within 24 hours, with no high-pressure sales.",
  },
  {
    q: "Can I control it from my phone?",
    a: "Yes. Change colors, set brightness, build zones, schedule on/off, and switch holiday presets — all from the app, in seconds.",
  },
  {
    q: "Does it really work year-round?",
    a: "That's the whole point. Warm white most nights, holiday colors when the season comes, your team's colors on game day. Installed once — you never hang or take down a strand again.",
  },
  {
    q: "Can you match my team's colors?",
    a: "Absolutely. Pick any colors you want — game-day teams, school spirit, birthdays, anything. The app does it in a tap.",
  },
  {
    q: "Is it visible during the day?",
    a: "Barely. The track is color-matched to your fascia and tucks discreetly under the eave, so all you see in daylight is a clean roofline.",
  },
  {
    q: "How long does installation take?",
    a: "Most single-story homes are done in a single day. We measure, custom-fit the track, install everything weatherproof, and walk you through the app before we leave.",
  },
  {
    q: "What if a light fails?",
    a: "The system uses commercial-grade LEDs built for Texas weather, and we stand behind our work. If anything ever isn't right, we make it right.",
  },
];

// "What we do" — representative looks. Captions describe the LOOK, not a claimed
// portfolio. TODO: swap any of these for the client's real job photos as they come in.
export const installations = [
  { src: "/images/install-dusk.webp", alt: "Real Skyclear install — warm-white permanent lighting outlining a two-story stone home at dusk", caption: "Real install · warm white at dusk", real: true },
  { src: "/images/install-warmwhite.webp", alt: "Real Skyclear install — warm-white permanent roofline lighting on a brick home at night", caption: "Real install · clean warm-white roofline", real: true },
  { src: "/images/install-brick-twostory.webp", alt: "Real Skyclear install — two-story Houston brick home outlined in warm-white permanent roofline lighting at night", caption: "Real install · two-story warm-white roofline", real: true },
  { src: "/images/install-color-rgb.webp", alt: "Real Skyclear install — Houston brick home with permanent roofline lighting in full multicolor at night", caption: "Real install · any color you want", real: true },
  { src: "/images/home-dusk-twostory.webp", alt: "Two-story Texas home with warm lighting at dusk", caption: "Warm dusk curb appeal" },
  { src: "/images/home-night-red.webp", alt: "Real Skyclear install — Houston brick home with custom-color permanent roofline lighting at night", caption: "Real install · color on demand", real: true },
];
