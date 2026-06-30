"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { site, trustChips } from "@/lib/site";
import { RooflineMark } from "@/components/roofline-mark";
import { Embers } from "@/components/embers";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Cinematic background — a real Skyclear install glowing at night. The
          preloaded photo paints instantly (great LCP); a warm glow gently
          breathes over the lit roofline so the lights feel alive. */}
      <div className="absolute inset-0 -z-10 h-[118%]">
        {/* img + glows share one slow-zoom wrapper so the glow stays locked on
            each real light as the photo gently zooms. */}
        <div className="absolute inset-0 animate-slow-zoom">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home-night-red.webp"
            alt="A real Skyclear permanent-lighting install glowing on a Houston brick home at night"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          {/* pronounced breathing glow on the LEFT entry coach lantern —
              bright core + warm halo */}
          <div
            className="absolute inset-0 animate-hero-glow mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 7% 10% at 48.5% 52%, rgba(255,233,188,0.98), rgba(255,176,96,0.7) 32%, transparent 72%)",
            }}
            aria-hidden
          />
          {/* and the RIGHT entry lantern — same pulse, set a touch wider */}
          <div
            className="absolute inset-0 animate-hero-glow mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 7% 10% at 62% 52%, rgba(255,233,188,0.98), rgba(255,176,96,0.7) 32%, transparent 72%)",
            }}
            aria-hidden
          />
        </div>
      </div>

      {/* color grade — deep navy weighted bottom + left for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/55 to-navy-950/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/65 via-transparent to-navy-950" />
      <div className="vignette absolute inset-0 -z-10" />

      {/* legibility scrim — weighted bottom-left, behind text */}
      <div className="absolute inset-0 z-[5] bg-[linear-gradient(105deg,rgba(0,0,0,0.7),rgba(0,0,0,0.35)_45%,transparent_70%)]" aria-hidden />

      {/* drifting light embers */}
      <div className="absolute inset-0 z-[6]" aria-hidden>
        <Embers />
      </div>

      <motion.div
        style={{ opacity: reduce ? 1 : fade }}
        className="relative z-10 mx-auto flex w-full max-w-content flex-1 flex-col justify-center px-5 pb-28 pt-32 sm:px-8"
      >
        <div>
          {/* the living logo — eave lights ignite + a comet traces the roof */}
          <div className="hero-rise mb-7 text-amber-400" style={{ animationDelay: "0.05s" }}>
            <RooflineMark className="h-16 w-auto sm:h-20" color="#F2C66E" />
          </div>

          <p
            className="hero-rise mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-ultra text-amber-300"
            style={{ animationDelay: "0.12s" }}
          >
            <span className="h-px w-10 bg-amber-400" />
            {site.region}
          </p>

          <h1
            className="hero-rise max-w-5xl font-display text-[2.5rem] font-700 leading-[1.02] tracking-[-0.01em] text-cream sm:text-5xl lg:text-[4.1rem]"
            style={{ animationDelay: "0.18s" }}
          >
            Light up your home,{" "}
            <span className="text-amber-400 drop-shadow-[0_2px_22px_rgba(232,176,75,0.45)]">
              365 nights
            </span>{" "}
            a year.
          </h1>

          <p
            className="hero-rise mt-11 max-w-2xl text-lg leading-relaxed text-cream/85 sm:text-xl"
            style={{ animationDelay: "0.26s" }}
          >
            Permanent, app-controlled outdoor lighting — professionally installed
            across Greater Houston — Spring, Cypress, Tomball, The Woodlands &amp; beyond.
            Never hang Christmas lights again.
          </p>

          <div
            className="hero-rise mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.34s" }}
          >
            <a
              href="#contact"
              className="btn-trace rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-navy-950 shadow-[0_0_30px_rgba(232,176,75,0.5)] transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_44px_rgba(232,176,75,0.75)]"
            >
              Get My Free Quote
            </a>
            <a
              href="#looks"
              className="btn-trace trace-slow rounded-full border border-cream/25 bg-cream/5 px-8 py-4 text-base font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/10"
            >
              See the Looks
            </a>
            <a
              href={site.phoneHref}
              className="text-base font-semibold text-cream/90 underline-offset-4 hover:text-amber-400 hover:underline"
            >
              or call {site.phone}
            </a>
          </div>

          <div
            className="hero-rise mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
            style={{ animationDelay: "0.42s" }}
          >
            {trustChips.map((c) => (
              <div
                key={c.label}
                className="card-elite rounded-xl border border-white/10 bg-navy-950/40 px-4 py-3 backdrop-blur-md"
              >
                <p className="text-sm font-semibold text-cream">{c.label}</p>
                <p className="text-xs text-slatey">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <a
        href="#looks"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-scroll-hint text-slatey"
        aria-label="Scroll to services"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l6-6m-6 6l-6-6" />
        </svg>
      </a>
    </section>
  );
}
