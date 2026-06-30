import { appFeatures, lightingSystems } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function AppControl() {
  return (
    <section className="relative overflow-hidden bg-char2 py-24 sm:py-36">
      <div className="mx-auto grid max-w-content items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-ultra text-amber-400">
            In Your Pocket
          </p>
          <h2 className="mt-3 font-display text-3xl font-700 leading-tight text-cream sm:text-4xl lg:text-5xl">
            Control everything from your phone
          </h2>
          <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-body">
            No ladders, no timers, no fuss. Your whole system lives in an app —
            change colors, dim for the evening, schedule on/off, and switch
            holiday presets in seconds.
          </p>
          <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
            {appFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-body">{f}</span>
              </li>
            ))}
          </ul>

          {/* compatible systems — Govee called out by name */}
          <div className="card-elite mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm leading-relaxed text-body">{lightingSystems.note}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {lightingSystems.brands.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-amber-400/25 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* phone mockup */}
        <Reveal delay={0.1}>
          <div className="group relative mx-auto w-full max-w-[300px]">
            <div className="absolute -inset-6 rounded-[3rem] bg-amber-500/15 blur-3xl transition-all duration-500 group-hover:-inset-8 group-hover:bg-amber-500/30" aria-hidden />
            <div className="relative aspect-[9/19] rounded-[2.5rem] border border-white/15 bg-navy-950 p-3 shadow-2xl shadow-black/60 transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[1.9rem] bg-gradient-to-b from-char2 to-navy-950 p-5 transition-colors duration-500 group-hover:from-char">
                {/* screen lights up on hover */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(242,198,110,0.22),transparent_62%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
                <div className="mx-auto h-1.5 w-16 rounded-full bg-white/15" />
                <p className="mt-5 text-xs font-semibold uppercase tracking-ultra text-amber-400">
                  Skyclear
                </p>
                <p className="mt-1 font-display text-lg font-600 text-cream">Front of House</p>
                {/* color swatches */}
                <div className="relative mt-5 grid grid-cols-4 gap-2.5 transition duration-500 group-hover:brightness-125">
                  {["#FFE0A8", "#E23B3B", "#2FAE6A", "#3b6fe2", "#F5871F", "#8C46C8", "#ffffff", "#BF5700"].map((c) => (
                    <span
                      key={c}
                      className="aspect-square rounded-xl transition-transform duration-500 group-hover:scale-[1.07]"
                      style={{ background: c, boxShadow: `0 0 12px ${c}66` }}
                    />
                  ))}
                </div>
                {/* preset rows */}
                <div className="mt-5 space-y-2.5">
                  {["🎄 Christmas", "🎃 Halloween", "✨ Everyday"].map((p) => (
                    <div key={p} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-cream">
                      <span>{p}</span>
                      <span className="h-5 w-9 rounded-full bg-amber-500/30 p-0.5">
                        <span className="block h-4 w-4 rounded-full bg-amber-400" />
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative mt-auto">
                  <div className="rounded-xl bg-amber-500 py-3 text-center text-sm font-semibold text-navy-950 transition-all duration-500 group-hover:shadow-[0_0_26px_rgba(232,176,75,0.6)] group-hover:brightness-110">
                    Apply Scene
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
