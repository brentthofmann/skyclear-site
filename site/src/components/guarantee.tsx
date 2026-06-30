import { Reveal } from "@/components/reveal";

// Neutralizes the competition's #1 trust play (lifetime warranty) and out-warms
// it with a local, human guarantee. NOTE FOR BRENT: confirm exact warranty term
// with the manufacturer and update `years` / copy below before going live.
const pillars = [
  {
    stat: "Warranty",
    title: "Backed in writing",
    body: "Commercial-grade LEDs carry a manufacturer warranty, and our install workmanship is guaranteed. If something isn't right, we make it right.",
    icon: "shield",
  },
  {
    stat: "Local",
    title: "A name, not a call center",
    body: "We live and work in Greater Houston. No 300-dealer phone tree — you deal directly with the crew that installed your home.",
    icon: "pin",
  },
  {
    stat: "Texas-tough",
    title: "Built for our weather",
    body: "Sealed, weatherproof track and LEDs rated for Houston heat, humidity, and storm season — engineered to stay clean and bright for years.",
    icon: "bolt",
  },
  {
    stat: "Invisible",
    title: "A clean roofline by day",
    body: "Color-matched track tucks under the eave, so in daylight all anyone sees is your architecture — not the hardware.",
    icon: "eye",
  },
];

export function Guarantee() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 sm:py-32">
      <div className="starfield absolute inset-0 opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-ultra text-amber-400">
            Why Homeowners Trust Us
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center font-display text-3xl font-700 leading-tight text-cream sm:text-4xl lg:text-5xl">
            The big franchises can&apos;t offer this.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-body">
            Pro-grade product and warranty — installed and stood behind by people
            who actually live where you do.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card-elite group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/12 text-amber-300 shadow-[0_0_22px_rgba(232,176,75,0.28)]">
                  <Icon name={p.icon} />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-ultra text-amber-400/90">
                  {p.stat}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-700 text-cream">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": true,
  } as const;
  if (name === "shield")
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V6l7-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    );
  if (name === "pin")
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  if (name === "bolt")
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    );
  return (
    <svg {...common}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
