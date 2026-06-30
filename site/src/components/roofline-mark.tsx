"use client";

import { useId } from "react";

// The Skyclear signature, rebuilt from the logo as live art: a gable roofline
// with a row of eave lights that ignite in sequence, a comet of light that
// continuously traces the roof, all crowned by the sweeping "sky" arc.
// Color-drivable so it can wear any scene (warm white, Christmas, game-day).
// Used as the hero mark, section dividers, and the footer sign-off.

type Props = {
  /** glow color of the eave lights, trace + arc */
  color?: string;
  /** per-bulb palette (cycles across the eave lights) — overrides `color` for bulbs */
  palette?: string[];
  /** split palettes per slope (left + right) — overrides `palette` (e.g. two teams) */
  paletteLeft?: string[];
  paletteRight?: string[];
  /** ignite the lights one-by-one + run the tracing comet (off = static, lit) */
  animate?: boolean;
  /** smoothly tween bulb colors when they change (for the live designer) */
  liveColor?: boolean;
  className?: string;
};

const APEX = { x: 180, y: 52 };
const LEFT = { x: 40, y: 138 };
const RIGHT = { x: 320, y: 138 };
const COUNT = 7; // lights per slope

// Roofline as one continuous path (left foot → apex → right foot).
const ROOF = `M ${LEFT.x} ${LEFT.y} L ${APEX.x} ${APEX.y} L ${RIGHT.x} ${RIGHT.y}`;

// Evenly space lights down a slope, starting just below the apex.
function lights(from: { x: number; y: number }, to: { x: number; y: number }) {
  return Array.from({ length: COUNT }, (_, i) => {
    const t = 0.2 + (i / (COUNT - 1)) * 0.74;
    return { x: from.x + (to.x - from.x) * t, y: from.y + (to.y - from.y) * t };
  });
}

export function RooflineMark({
  color = "#F2C66E",
  palette,
  paletteLeft,
  paletteRight,
  animate = true,
  liveColor = false,
  className,
}: Props) {
  const id = useId().replace(/:/g, "");
  const bulbs = [...lights(APEX, LEFT), ...lights(APEX, RIGHT)];
  // bulbs 0..COUNT-1 are the left slope; COUNT..2*COUNT-1 are the right slope.
  const bulbColor = (i: number) => {
    if (paletteLeft?.length && paletteRight?.length) {
      return i < COUNT
        ? paletteLeft[i % paletteLeft.length]
        : paletteRight[(i - COUNT) % paletteRight.length];
    }
    return palette && palette.length ? palette[i % palette.length] : color;
  };

  return (
    <svg
      viewBox="0 0 360 175"
      className={className}
      role="img"
      aria-label="Skyclear lit roofline"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id={`glow-${id}`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* stronger bloom for the traveling comet */}
        <filter id={`bloom-${id}`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <linearGradient id={`arc-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="50%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* sweeping sky arc */}
      <path
        d="M 52 78 Q 180 -6 308 78"
        fill="none"
        stroke={`url(#arc-${id})`}
        strokeWidth="3"
        strokeLinecap="round"
        className={animate ? "rm-arc" : undefined}
      />

      {/* gable roofline — dim base */}
      <path
        d={ROOF}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* traveling comet of light tracing the roofline */}
      {animate && (
        <>
          <path
            d={ROOF}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#bloom-${id})`}
            className="rm-trace"
            opacity="0.9"
          />
          <path
            d={ROOF}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rm-trace"
          />
        </>
      )}

      {/* center window (the logo's dormer detail) */}
      <g stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.85">
        <rect x="166" y="98" width="28" height="28" rx="2" />
        <path d="M180 98 v28 M166 112 h28" strokeWidth="2" />
      </g>

      {/* eave lights — ignite in sequence, then breathe */}
      <g filter={`url(#glow-${id})`}>
        {bulbs.map((b, i) => (
          <circle
            key={i}
            cx={b.x}
            cy={b.y}
            r="4.4"
            fill={bulbColor(i)}
            className={animate ? "rm-bulb" : undefined}
            style={{
              ...(animate
                ? ({ "--d": `${0.3 + i * 0.08}s` } as React.CSSProperties)
                : {}),
              ...(liveColor ? { transition: "fill 0.5s ease" } : {}),
            }}
          />
        ))}
      </g>
    </svg>
  );
}
