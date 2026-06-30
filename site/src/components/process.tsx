import { steps } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Process() {
  return (
    <section id="how" className="relative scroll-mt-24 overflow-hidden bg-char py-24 sm:py-36">
      <div
        className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-ultra text-amber-400">
            How It Works
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-700 leading-tight text-cream sm:text-4xl lg:text-5xl">
            Simple, from estimate to switched-on
          </h2>
          <p className="mt-3 max-w-xl text-body">
            A proven, step-by-step process that delivers exceptional results every time.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="card-elite group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                {/* number badge — glows + lifts on hover */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/30 bg-navy-900 font-display text-xl font-800 text-amber-400 shadow-[0_0_24px_rgba(232,176,75,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:border-amber-400/70 group-hover:shadow-[0_0_32px_rgba(232,176,75,0.55)]">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-lg font-600 text-cream transition-colors duration-500 group-hover:text-amber-300">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{s.body}</p>
                {/* accent sweep that fills on hover */}
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-500 ease-out group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
