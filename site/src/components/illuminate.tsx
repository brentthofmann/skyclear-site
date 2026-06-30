"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import { RooflineMark } from "@/components/roofline-mark";
import { Embers } from "@/components/embers";
import { AmbientVideo } from "@/components/ambient-video";

// The emotional core. Not a feature list — the *why*. Glow blooms drift,
// the headline ignites word by word, the roofline traces overhead. This is the
// beat that makes a homeowner feel it before they read another spec.
export function Illuminate() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.15, 0.95]);

  const line = {
    hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      ref={ref}
      data-cv="off"
      className="relative isolate overflow-hidden bg-navy-950 py-28 sm:py-40"
    >
      {/* blue-hour Texas sky with town lights flickering on below — the literal
          "dusk into light" moment behind the message */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <AmbientVideo
          className="absolute inset-0"
          mp4="/video/cloudscape.mp4"
          poster="/video/cloudscape-poster.webp"
          rate={0.6}
        />
        {/* keep text legible + on-brand navy */}
        <div className="absolute inset-0 bg-navy-950/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/55 to-navy-950" />
      </div>

      <div className="starfield absolute inset-0 opacity-50" aria-hidden />

      {/* drifting golden glow bloom — the "light" filling the room */}
      <motion.div
        style={reduce ? undefined : { y: glowY, scale: glowScale }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,176,75,0.28),rgba(232,176,75,0.07)_45%,transparent_70%)] blur-[60px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-20 top-10 -z-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[80px]" aria-hidden />
      <Embers />

      <div className="relative mx-auto max-w-content px-5 text-center sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto"
        >
          <motion.div
            custom={0}
            variants={line}
            className="mx-auto mb-8 w-40 text-amber-400 sm:w-52"
          >
            <RooflineMark className="h-auto w-full" color="#F2C66E" />
          </motion.div>

          <motion.p
            custom={1}
            variants={line}
            className="text-xs font-semibold uppercase tracking-ultra text-amber-300"
          >
            Lighting the way forward
          </motion.p>

          <h2 className="mx-auto mt-5 max-w-4xl font-display text-[2rem] font-700 leading-[1.12] tracking-[-0.01em] text-cream sm:text-5xl lg:text-[3.4rem]">
            <motion.span custom={2} variants={line} className="block">
              We don&apos;t just sell lights.
            </motion.span>
            <motion.span custom={3} variants={line} className="mt-1 block">
              We&apos;re{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(232,176,75,0.45)] animate-gradient-pan bg-[length:200%_auto]">
                illuminating&nbsp;{site.heroRegion}
              </span>
              ,
            </motion.span>
            <motion.span custom={4} variants={line} className="mt-1 block">
              one roofline at a time.
            </motion.span>
          </h2>

          <motion.p
            custom={5}
            variants={line}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream/80"
          >
            Every home we light is a street that feels a little warmer, a holiday
            that&apos;s a little brighter, a family that never climbs a ladder
            again. That&apos;s the work — and we love it.
          </motion.p>

          <motion.div custom={6} variants={line} className="mt-10">
            <a
              href="#contact"
              className="btn-trace inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-navy-950 shadow-[0_0_34px_rgba(232,176,75,0.55)] transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_50px_rgba(232,176,75,0.8)]"
            >
              Light up my home
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
