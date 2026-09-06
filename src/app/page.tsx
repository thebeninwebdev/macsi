import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Story } from "@/components/sections/Story";
import { LocalTailors } from "@/components/sections/local-tailors";
import { ImpactStats } from "@/components/sections/impact-stats";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { SupportCta } from "@/components/sections/support-cta";
import { Closing } from "@/components/sections/Closing";
import { Footer } from "@/components/sections/Footer";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Transparency } from "@/components/sections/Transparency";
import { PersistentDonate } from "@/components/ui/persistent-donate";
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <MarqueeStrip />
        <Story />
        <HowItWorks />
        <LocalTailors />
        <Gallery />
        <ImpactStats />
        <Process />
        <Testimonials />
        <Transparency />
        <SupportCta />
        <Closing />
      </main>
      <Footer />
      <PersistentDonate />
    </>
  );
}
