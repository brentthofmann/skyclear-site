import { RooflineMark } from "@/components/roofline-mark";

// A glowing seam between sections — twin light-lines reaching toward a live
// roofline at center (its comet keeps tracing). Threaded a few times down the
// page to carry the "strung with light" signature. `bg` matches the section
// above it so the band reads as a clean break, not a stripe.
export function RooflineDivider({ bg = "bg-char" }: { bg?: string }) {
  return (
    <div className={`relative ${bg}`} aria-hidden>
      <div className="mx-auto flex max-w-content items-center gap-6 px-5 py-8 sm:px-8 sm:py-10">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/25 to-amber-400/50" />
        <span className="relative shrink-0 px-2">
          <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-amber-500/12 blur-md" />
          <RooflineMark className="relative h-8 w-auto text-amber-400/85" color="#F2C66E" />
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-400/25 to-amber-400/50" />
      </div>
    </div>
  );
}
