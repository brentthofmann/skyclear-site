import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Installations } from "@/components/installations";
import { RooflineColors } from "@/components/roofline-colors";
import { RooflineDivider } from "@/components/roofline-divider";
import { Visualizer } from "@/components/visualizer";
import { AppControl } from "@/components/app-control";
import { Illuminate } from "@/components/illuminate";
import { WhyChoose } from "@/components/why-choose";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Guarantee } from "@/components/guarantee";
import { ServiceArea } from "@/components/service-area";
import { Faq } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Schema } from "@/components/schema";
import { ScrollProgress } from "@/components/scroll-progress";

// Permanent-lighting-only, conversion-first. Every section answers one of:
// will it look good on my house? · can I trust them? · what's it cost? · how fast?
export default function Home() {
  return (
    <>
      <Schema />
      <ScrollProgress />
      <Nav />
      <main className="relative">
        <Hero />
        <TrustBar />
        <RooflineColors />
        <Installations />
        <Visualizer />
        <RooflineDivider bg="bg-char" />
        <AppControl />
        <Illuminate />
        <WhyChoose />
        <RooflineDivider bg="bg-char" />
        <Pricing />
        <Process />
        <Guarantee />
        <CtaBand />
        <ServiceArea />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
