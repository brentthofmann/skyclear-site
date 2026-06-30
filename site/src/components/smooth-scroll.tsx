"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Buttery momentum scroll + glide-to-anchor. Bails entirely for reduced-motion
// users and never runs on touch (native iOS/Android scroll already feels right
// and Lenis can fight it on low-power devices).
// Cold-load: the whole engine is deferred until browser idle so it never
// competes with hydration / first paint on a search-click visit.
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const win = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const ric: (cb: () => void) => number =
      win.requestIdleCallback
        ? (cb) => win.requestIdleCallback!(cb, { timeout: 1500 })
        : (cb) => window.setTimeout(cb, 200);

    let lenis: Lenis | null = null;
    let raf = 0;

    // Construct Lenis + start RAF only after the browser goes idle — native
    // scroll handles the first-load gap so there is no jank or blank window.
    ric(() => {
      lenis = new Lenis({
        lerp: 0.1,          // frame-rate-independent smoothing — snappy AND buttery
        smoothWheel: true,
        wheelMultiplier: 1, // full, immediate response — no heavy/laggy glide
        touchMultiplier: 1.5,
      });
      const loop = (time: number) => {
        lenis!.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    // Glide to in-page anchors. Before Lenis exists the native anchor jump
    // handles it — no-op guard keeps us safe during the idle window.
    const onClick = (e: MouseEvent) => {
      if (!lenis) return;
      const a = (e.target as HTMLElement)?.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -72, duration: 1 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis?.destroy();
    };
  }, []);

  return null;
}
