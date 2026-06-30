import { site, serviceAreas } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { QuoteForm } from "@/components/quote-form";
import { AmbientVideo } from "@/components/ambient-video";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-navy-950 py-20 text-white sm:py-28"
    >
      {/* warm holiday-lights bokeh, dimmed — an inviting backdrop for the close */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <AmbientVideo
          className="absolute inset-0"
          mp4="/video/hero.mp4"
          webm="/video/hero.webm"
          poster="/video/hero-poster.webp"
          rate={0.6}
        />
        <div className="absolute inset-0 bg-navy-950/82" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/85" />
      </div>
      <div className="starfield absolute inset-0 z-0 opacity-30" />
      <div className="relative z-10 mx-auto grid max-w-content gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-ultra text-sky-300">
            Get a Free Quote
          </p>
          <h2 className="mt-3 font-display text-3xl font-700 leading-tight sm:text-4xl">
            Let&apos;s make it shine
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/75">
            Tell us what you need and we&apos;ll get right back to you — usually
            within 24 hours. Prefer to talk? Call or text us anytime.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={site.phoneHref}
              className="card-elite flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.1 2.2z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Call or text
                </span>
                <span className="font-display text-lg font-600">{site.phone}</span>
              </span>
            </a>

            <a
              href={site.emailHref}
              className="card-elite flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Email
                </span>
                <span className="font-medium">{site.email}</span>
              </span>
            </a>

            <div className="card-elite rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4">
              <span className="block text-xs uppercase tracking-wide text-white/50">
                Service area
              </span>
              <span className="text-sm text-white/80">
                {serviceAreas.join(" · ")}, TX
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {["Available 7 days a week", "Free estimates", "24-hr response"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {site.googleReviewUrl && (
              <a
                href={site.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-elite mt-6 flex items-center justify-between gap-4 rounded-2xl border border-amber-400/30 bg-amber-500/10 px-5 py-4 transition-colors hover:bg-amber-500/15"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-amber-200/70">
                      Loved your install?
                    </span>
                    <span className="font-display text-lg font-600 text-amber-100">
                      Leave us a Google review
                    </span>
                  </span>
                </span>
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-elite rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
            <QuoteForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
