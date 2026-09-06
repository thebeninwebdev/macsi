import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Story } from "@/components/sections/story";
import { LocalTailors } from "@/components/sections/local-tailors";
import { ImpactStats } from "@/components/sections/impact-stats";
import { Gallery } from "@/components/sections/gallery";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { SupportCta } from "@/components/sections/support-cta";
import { Closing } from "@/components/sections/closing";
import { Footer } from "@/components/sections/footer";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Transparency } from "@/components/sections/transparency";
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
