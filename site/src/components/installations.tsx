import { installations } from "@/lib/site";
import { Reveal } from "@/components/reveal";

// "What We Do" — show the looks permanent lighting creates. Representative
// imagery + honest, look-based captions (no invented portfolio claims).
export function Installations() {
  return (
    <section id="what" className="scroll-mt-24 bg-char2 py-24 sm:py-36">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-ultra text-amber-400">
            Our Work · Greater Houston
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-700 leading-tight text-cream sm:text-4xl lg:text-5xl">
            Real homes. Real Skyclear lighting.
          </h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-body">
            Discreet, app-controlled LED lighting installed clean along the roofline
            and entry — warm white for everyday curb appeal, holiday colors when the
            season comes, your team&apos;s colors on game day. Here&apos;s our work
            and the looks we create.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {installations.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <figure className="card-elite group overflow-hidden rounded-3xl border border-white/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/15 to-transparent" />
                  {"real" in s && s.real && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-amber-500/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy-950">
                      Real install
                    </span>
                  )}
                  <figcaption className="absolute bottom-4 left-5 right-5 text-sm font-semibold text-cream [text-shadow:_0_1px_10px_rgba(0,0,0,0.7)]">
                    {s.caption}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
