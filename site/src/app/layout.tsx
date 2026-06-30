import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import { site, serviceAreas } from "@/lib/site";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ServiceWorkerRegister } from "@/components/service-worker";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Permanent & Holiday Lighting · Greater Houston, TX | Skyclear",
  description:
    "Permanent, app-controlled outdoor & holiday lighting installed across Greater Houston — Spring, Cypress, Tomball, The Woodlands & beyond. Never hang Christmas lights again. Free quote in 24 hours.",
  keywords: [
    "permanent outdoor lighting Houston",
    "permanent Christmas lights Houston",
    "permanent holiday lighting Greater Houston",
    "Christmas light installation Houston",
    "holiday lighting Houston",
    "roofline lighting Houston",
    "app-controlled permanent lighting",
    "permanent lighting The Woodlands",
    "permanent lighting Spring TX",
    "permanent lighting Cypress",
    "permanent lighting Tomball",
    ...serviceAreas.map((a) => `permanent lighting ${a} TX`),
  ],
  openGraph: {
    title: "Permanent & Holiday Lighting · Greater Houston, TX | Skyclear",
    description:
      "App-controlled permanent outdoor & holiday lighting, professionally installed across Greater Houston — Spring, Cypress, Tomball, The Woodlands & beyond. Free quote in 24 hours.",
    url: site.url,
    siteName: site.legalName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Skyclear — permanent & holiday outdoor lighting, Greater Houston, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Permanent & Holiday Lighting · Greater Houston, TX | Skyclear",
    description:
      "App-controlled permanent outdoor & holiday lighting installed across Greater Houston. Never hang Christmas lights again.",
    images: ["/images/og.jpg"],
  },
  alternates: { canonical: site.url },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  category: "Home Improvement",
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  applicationName: site.legalName,
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // geo signals for local search (centered on the Greater Houston service area)
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Greater Houston, Texas",
    "geo.position": "30.1658;-95.4613",
    ICBM: "30.1658, -95.4613",
  },
};

export const viewport: Viewport = {
  themeColor: "#060A15",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        {/* prioritize the hero still so first paint is instant */}
        <link
          rel="preload"
          as="image"
          href="/images/home-night-red.webp"
          fetchPriority="high"
        />
        <SmoothScroll />
        <ServiceWorkerRegister />
        {children}
        {/* LeadConnector (GoHighLevel) chat widget — client's CRM. Lazy-loaded so
            it never competes with the page's critical path. */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a358615946a4896c2358b16"
          data-source="WEB_USER"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
