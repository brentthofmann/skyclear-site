import { site, serviceAreas } from "@/lib/site";
import { RooflineMark } from "@/components/roofline-mark";

export function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 text-white/70">
      <div className="mx-auto grid max-w-content gap-10 px-5 pb-12 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="w-32 text-amber-400/80">
            <RooflineMark className="h-auto w-full" color="#F2C66E" />
          </div>
          <p className="mt-2 font-display text-lg font-700 tracking-wide text-cream">
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slatey">
            Your local expert for permanent, app-controlled outdoor lighting
            across Greater Houston. Installed once, beautiful every night.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-600 uppercase tracking-wide text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { href: "#looks", label: "See the Looks" },
              { href: "#what", label: "What We Do" },
              { href: "#service-area", label: "Service Area" },
              { href: "#faq", label: "FAQ" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-amber-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-600 uppercase tracking-wide text-white">
            Service Area
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceAreas.map((a) => (
              <li key={a}>{a}, TX</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-600 uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-sky-300">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-sky-300">
                {site.email}
              </a>
            </li>
            <li>
              <a href="#contact" className="font-semibold text-sky-300 hover:text-sky-400">
                Get a Free Quote →
              </a>
            </li>
            {site.googleReviewUrl && (
              <li>
                <a
                  href={site.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amber-300 hover:text-amber-200"
                >
                  Leave a Review ★
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-5 py-6 text-xs sm:flex-row sm:px-8">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
          <a
            href={site.builtBy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white/60 transition-colors hover:text-sky-300"
          >
            {site.builtBy.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
