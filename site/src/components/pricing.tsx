import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";

// Straight talk on cost — most contractor sites hide it; we set expectations.
export function Pricing() {
  return (
    <section className="bg-char2 py-24 sm:py-36">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-ultra text-amber-400">
            Straight Answers
          </p>
          <h2 className="mt-3 font-display text-3xl font-700 leading-tight text-cream sm:text-4xl lg:text-5xl">
            What does it cost?
          </h2>
          {/* TODO: confirm exact numbers with the client — these are typical
              industry ballparks for permanent lighting; adjust to his real pricing. */}
          <p className="mt-6 font-display text-4xl font-800 text-cream sm:text-5xl">
            Most homes range{" "}
            <span className="text-amber-400">$2,500–$6,000</span>
          </p>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-body">
            Final pricing comes down to your roofline length and layout — but we
            never make you guess. You get a clear, itemized quote up front,{" "}
            <span className="font-semibold text-cream">free, within 24 hours, with no high-pressure sales.</span>{" "}
            Most installs are completed in a single day.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="btn-trace rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-navy-950 shadow-[0_0_30px_rgba(232,176,75,0.5)] transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_44px_rgba(232,176,75,0.75)]"
            >
              Get Your Free Quote
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
