"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { occasions } from "@/lib/site";
import { Reveal } from "@/components/reveal";

// THE centerpiece — a live roofline designer. Tap a scene and the eave lights
// recolor instantly (our signature mark), the real photo crossfades beneath,
// and a brightness slider dims the whole thing. No competitor lets you *play*
// with the product on their homepage — this is the "blow them away" moment.
export function Visualizer() {
  const [active, setActive] = useState(occasions[0]);
  const [brightness, setBrightness] = useState(100);

  return (
    <section id="looks" className="relative scroll-mt-24 overflow-hidden bg-char py-24 sm:py-36">
      <div className="absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[140px]" aria-hidden />
      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-ultra text-amber-400">
            Live Designer · Try It Yourself
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center font-display text-3xl font-700 leading-tight text-cream sm:text-4xl lg:text-5xl">
            Tap a look. Watch your roofline light up.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-body">
            One system, every occasion — warm white tonight, holiday colors when
            the season comes, your team&apos;s colors on game day. This is exactly
            how fast it changes from your phone.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="card-elite relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
              {/* real home photo, crossfading */}
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={active.alt}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ filter: `brightness(${0.55 + (brightness / 100) * 0.55})` }}
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />

              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
                <div aria-live="polite">
                  <p className="font-display text-lg font-600 text-cream">
                    <span aria-hidden>{active.emoji}</span> {active.label}
                  </p>
                  <p className="text-sm text-cream/80">{active.caption}</p>
                </div>
                {/* live palette swatches */}
                <div className="hidden gap-1.5 sm:flex">
                  {active.palette.slice(0, 4).map((c, i) => (
                    <span
                      key={i}
                      className="h-5 w-5 rounded-full ring-1 ring-white/30 transition-colors duration-500"
                      style={{ background: c, boxShadow: `0 0 10px ${c}aa` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* brightness slider — proof it's truly controllable */}
            <div className="mx-auto mt-5 flex max-w-md items-center gap-3 px-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-slatey">
                Dim
              </span>
              <input
                type="range"
                min={20}
                max={100}
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                aria-label="Brightness"
                aria-valuetext={`${brightness}% brightness`}
                className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-white/15 accent-amber-400"
              />
              <span className="text-xs font-semibold uppercase tracking-wide text-amber-300">
                Bright
              </span>
            </div>

            {/* scene buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {occasions.map((o) => {
                const on = o.id === active.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setActive(o)}
                    aria-pressed={on}
                    className={`flex min-h-[48px] items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                      on
                        ? "bg-amber-500 text-navy-950 shadow-[0_0_24px_rgba(232,176,75,0.55)]"
                        : "border border-white/15 bg-white/5 text-cream/85 hover:border-amber-400/40 hover:text-cream"
                    }`}
                  >
                    <span aria-hidden>{o.emoji}</span>
                    {o.label}
                  </button>
                );
              })}
            </div>

            <p className="mt-6 text-center text-sm text-slatey">
              Want it on your home?{" "}
              <a href="#contact" className="font-semibold text-amber-400 hover:text-amber-300">
                Get a free quote →
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
