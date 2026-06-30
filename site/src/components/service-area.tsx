import { serviceAreas, site } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function ServiceArea() {
  return (
    <section
      id="service-area"
      className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32"
    >
      {/* aspirational dusk band — upscale craftsman home, warm windows at twilight */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/home-dusk-craftsman.webp"
        alt="Upscale Texas home glowing with warm lighting at dusk"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy-950/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/80" />

      <div className="relative mx-auto max-w-content px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-ultra text-sky-300">
            Rooted Here
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-700 leading-tight text-cream sm:text-4xl lg:text-5xl">
            Serving all of Greater Houston
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            We&apos;re your neighbors — lighting up homes across Houston, Spring,
            Cypress, Tomball, The Woodlands and all of Greater Houston.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-cream/90 backdrop-blur-sm transition-colors hover:border-sky-400/50 hover:text-cream"
              >
                {area}, TX
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-body">
            Don&apos;t see your town?{" "}
            <a href={site.phoneHref} className="font-semibold text-sky-300 hover:text-sky-400">
              Call {site.phone}
            </a>{" "}
            — we may still be able to help.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
