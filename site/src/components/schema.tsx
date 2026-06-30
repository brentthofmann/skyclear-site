import { site, serviceAreas, faqs } from "@/lib/site";

// LocalBusiness + Service + FAQ + WebSite JSON-LD — powers local rich results,
// the map pack, and FAQ rich snippets. Geo points at The Woodlands so the map
// pack centers correctly until the client's exact address is added.
const SERVICES = [
  {
    name: "Permanent Outdoor Lighting Installation",
    description:
      "Professionally installed, app-controlled permanent LED lighting for the roofline and eaves of homes and businesses.",
  },
  {
    name: "Permanent Holiday & Christmas Lighting",
    description:
      "Year-round programmable lighting that switches from warm white to holiday colors from your phone — no ladders, no takedown.",
  },
  {
    name: "Commercial Permanent Lighting",
    description:
      "Permanent architectural and accent LED lighting for storefronts, offices, and commercial properties across Greater Houston.",
  },
];

export function Schema() {
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a.replace(/\s*\/\*[\s\S]*?\*\/\s*/g, " ").trim(),
      },
    })),
  };

  const business = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    slogan: "Lighting the way forward — permanent outdoor lighting for Greater Houston.",
    description:
      "Permanent, app-controlled outdoor lighting professionally installed across Greater Houston. Warm-white elegance every night, holiday and team colors in a tap.",
    image: [`${site.url}/images/og.jpg`, `${site.url}/images/skyclear-logo.png`],
    logo: `${site.url}/images/skyclear-logo.png`,
    telephone: site.phone,
    email: site.email,
    url: site.url,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Check, Financing",
    areaServed: serviceAreas.map((a) => ({ "@type": "City", name: `${a}, TX` })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "The Woodlands",
      addressRegion: "TX",
      addressCountry: "US",
      // TODO: add the client's real street address + ZIP when available.
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.1658,
      longitude: -95.4613,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    knowsAbout: [
      "Permanent outdoor lighting",
      "Permanent Christmas lights",
      "Holiday lighting installation",
      "App-controlled LED lighting",
      "Roofline lighting",
      "Commercial lighting installation",
    ],
    // TODO: add sameAs (Google Business Profile, Facebook, Instagram) + an
    // aggregateRating ONLY once real reviews exist — never fabricate ratings.
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.description },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Skyclear Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.description },
      })),
    },
  };

  const services = SERVICES.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.name,
    description: s.description,
    provider: { "@id": `${site.url}/#business` },
    areaServed: serviceAreas.map((a) => ({ "@type": "City", name: `${a}, TX` })),
  }));

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.legalName,
    url: site.url,
    publisher: { "@id": `${site.url}/#business` },
  };

  const blocks = [business, website, faqJson, ...services];

  return (
    <>
      {blocks.map((b, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }}
        />
      ))}
    </>
  );
}
