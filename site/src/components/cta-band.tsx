import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { RooflineMark } from "@/components/roofline-mark";
import { AmbientVideo } from "@/components/ambient-video";

// Full-bleed cinematic break — a drone glide over affluent Houston homes at
// dusk. Pure aspiration: "this could be your street." Sits just before the
// contact form to push the click.
export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden">
      <AmbientVideo
        className="absolute inset-0 -z-10"
        mp4="/video/aerial-homes.mp4"
        poster="/video/aerial-homes-poster.webp"
        videoClassName="brightness-[1.08]"
        rate={0.65}
        alt="Aerial view of an upscale Houston-area lakefront estate"
      />

      {/* legibility grade — middle ground: homes read clearly, text stays crisp */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950/86" />

      <div className="mx-auto max-w-content px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <div className="mx-auto mb-7 w-44 text-amber-400 sm:w-52">
            <RooflineMark className="h-auto w-full" color="#F2C66E" />
          </div>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-700 leading-tight text-cream sm:text-4xl lg:text-[2.9rem]">
            Be the home the whole street notices.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream [text-shadow:_0_1px_12px_rgba(0,0,0,0.6)]">
            Installed once, stunning every night — from warm-white elegance to
            full holiday color, controlled from your phone.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-trace rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-navy-950 shadow-[0_0_30px_rgba(232,176,75,0.5)] transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_44px_rgba(232,176,75,0.75)]"
            >
              Get My Free Quote
            </a>
            <a
              href={site.phoneHref}
              className="btn-trace trace-slow rounded-full border border-cream/25 bg-cream/5 px-8 py-4 text-base font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/10"
            >
              Call {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
