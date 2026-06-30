// Ambient Texas-night atmosphere — drifting light motes + the odd brighter
// "firefly" so a still photo feels alive. Deterministic positions (SSR-safe),
// pure CSS animation, auto-hidden for reduced motion.
const MOTES = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 39 + (i % 5) * 7) % 100,
  size: 1.5 + (i % 4) * 1.2, // ~1.5–6px
  delay: ((i * 17) % 150) / 10, // staggered 0–15s
  dur: 9 + (i % 8) * 1.5, // 9–20s
  dx: (i % 2 ? 1 : -1) * (6 + (i % 6) * 8) + "px", // gentle horizontal sway
  firefly: i % 4 === 0, // every 4th glows warmer + brighter
}));

export function Embers({ color }: { color?: string }) {
  const tint = color || "rgba(255, 214, 150, 0.95)";
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden>
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="ember"
          style={
            {
              left: `${m.left}%`,
              width: m.size,
              height: m.size,
              "--delay": `${m.delay}s`,
              "--dur": `${m.dur}s`,
              "--dx": m.dx,
              "--c": tint,
              ...(m.firefly
                ? { boxShadow: `0 0 ${Math.round(m.size * 2.5)}px ${tint}` }
                : {}),
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
