"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// A background video that does NOT load until its section is near the viewport,
// so heavy clips never compete with the critical path on first paint. Shows the
// (cheap) poster immediately; mounts + fades in the real video when close.
// Reduced-motion users just get the poster.
// Cold-load: play() is deferred to requestIdleCallback so decode never
// competes with hydration on a search-click first visit.
type Props = {
  mp4: string;
  webm?: string;
  poster: string;
  className?: string;
  videoClassName?: string;
  rate?: number;
  alt?: string;
};

export function AmbientVideo({
  mp4,
  webm,
  poster,
  className = "",
  videoClassName = "",
  rate = 1,
  alt = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const ric: (cb: () => void) => void =
      (window as { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback ||
      ((cb) => setTimeout(cb, 200));

    const io = new IntersectionObserver(
      (entries) => {
        const vid = videoRef.current;
        if (entries[0].isIntersecting) {
          // Mount the video element (sets src via <source>), then play on idle
          // so the decode never lands on the critical-path thread.
          setShow(true);
          ric(() => {
            if (vid) vid.play().catch(() => {});
          });
        } else if (vid) {
          vid.pause();
        }
      },
      // 80px look-ahead: enough to feel seamless when the section scrolls in,
      // but not so aggressive that off-screen clips pre-load on cold visits.
      { rootMargin: "80px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <div ref={ref} className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt={alt} className="h-full w-full object-cover" />
      {show && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover ${videoClassName}`}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = rate;
          }}
        >
          {webm && <source src={webm} type="video/webm" />}
          <source src={mp4} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
