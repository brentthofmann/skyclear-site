"use client";

import { useState } from "react";
import { colorways } from "@/lib/site";
import { RooflineMark } from "@/components/roofline-mark";
import { Embers } from "@/components/embers";
import { Reveal } from "@/components/reveal";

// The first beat after the hero — a big, live roofline you can recolor. Tap a
// Houston colorway and the eave lights morph + the whole section blooms in that
// color. The product, playable, in one tap.
export function RooflineColors() {
  const [active, setActive] = useState(colorways[0]);

  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      {/* dynamic bloom in the selected color */}
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] -z-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] transition-[background] duration-700"
        style={{ background: `radial-gradient(circle, ${active.glow}55, transparent 70%)` }}
        aria-hidden
      />
      <div className="starfield absolute inset-0 opacity-30" aria-hidden />
      <Embers color={active.glow} />

      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-ultra text-amber-400">
            Your Roofline · Any Color
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-3xl font-700 leading-tight text-cream sm:text-4xl lg:text-5xl">
            Tap a color. Watch it light up.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          {/* the live roofline */}
          <div className="mx-auto mt-12 w-full max-w-2xl px-2 text-cream/90">
            <RooflineMark
              key={active.id}
              className="h-auto w-full"
              color={active.glow}
              palette={active.palette}
              paletteLeft={active.paletteLeft}
              paletteRight={active.paletteRight}
              animate
            />
          </div>
          <p
            key={active.id}
            className="hero-rise mx-auto mt-6 max-w-md text-center text-base text-cream/75"
          >
            {active.sub}
          </p>

          {/* colorway buttons with hue swatches */}
          <div className="mx-auto mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {colorways.map((cw) => {
              const on = cw.id === active.id;
              return (
                <button
                  key={cw.id}
                  type="button"
                  onClick={() => setActive(cw)}
                  aria-pressed={on}
                  className={`rounded-2xl border p-3 transition-all duration-300 ${
                    on
                      ? "border-amber-400/50 bg-white/[0.06] shadow-[0_0_24px_-6px_rgba(232,176,75,0.4)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/25"
                  }`}
                >
                  <span
                    className="block h-9 w-full rounded-lg ring-1 ring-white/10"
                    style={{
                      background:
                        cw.paletteLeft && cw.paletteRight
                          ? `linear-gradient(90deg, ${cw.paletteLeft[0]} 0 47%, ${cw.paletteRight[0]} 53% 100%)`
                          : `linear-gradient(90deg, ${cw.palette.join(", ")})`,
                      boxShadow: on ? `0 0 20px ${cw.glow}88` : `0 0 12px ${cw.glow}44`,
                    }}
                    aria-hidden
                  />
                  <span className="mt-2.5 block text-center text-sm font-semibold text-cream">
                    {cw.label}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-9 text-center text-sm text-slatey">
            Want these on your home?{" "}
            <a href="#contact" className="font-semibold text-amber-400 hover:text-amber-300">
              Get a free quote →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
