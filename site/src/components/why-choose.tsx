import { whyPoints } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-char py-24 sm:py-36">
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" aria-hidden />
      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-ultra text-amber-400">
            Why Skyclear
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-700 leading-tight text-cream sm:text-4xl lg:text-5xl">
            Why homeowners choose us
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="card-elite h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-300 shadow-[0_0_20px_rgba(232,176,75,0.25)]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-lg font-600 text-cream">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
