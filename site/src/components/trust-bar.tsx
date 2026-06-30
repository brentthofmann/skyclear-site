import { trustBar } from "@/lib/site";

// Reassurance ticker under the hero — answers how fast / pressure / install /
// area at a glance. A seamless glowing marquee (pauses on hover); collapses to a
// centered wrap for reduced-motion users.
export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-char2" aria-label="Why homeowners choose Skyclear">
      <div className="marquee-mask relative mx-auto max-w-content overflow-hidden py-4">
        {/* edge fades so items slide in/out softly */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-char2 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-char2 to-transparent" />

        <div className="marquee-track">
          {[0, 1].map((group) => (
            <ul
              key={group}
              aria-hidden={group === 1}
              className={`flex shrink-0 items-center ${group === 1 ? "marquee-dup" : ""}`}
            >
              {trustBar.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2.5 whitespace-nowrap px-7 text-sm font-medium text-body"
                >
                  <span
                    className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(242,198,110,0.9)]"
                    aria-hidden
                  />
                  {t}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
