"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-20 bg-char py-24 sm:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-ultra text-amber-400">
            FAQ
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-700 leading-tight text-cream sm:text-4xl lg:text-5xl">
            Questions, answered
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className={`card-elite overflow-hidden rounded-2xl border ${
                    isOpen
                      ? "border-amber-400/30 bg-white/[0.05]"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="font-display text-base font-600 text-cream">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all ${
                        isOpen ? "rotate-45 bg-amber-500 text-navy-950" : "bg-white/10 text-amber-300"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                        <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    inert={!isOpen}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-body">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
