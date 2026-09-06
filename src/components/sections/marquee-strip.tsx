import Image from "next/image";
import { photos } from "@/lib/photos";
export function MarqueeStrip() {
  return (
    <section
      className="mission-marquee"
      aria-label="School uniforms, child dignity, confidence, education"
    >
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((n) => (
          <div className="marquee-copy" key={n}>
            <span>School uniforms</span>
            <Image className="marquee-photo" src="/images/cleaned_image_5.jpg" alt="" width={120} height={88} />
            <span className="outline-type">Child dignity</span>
            <i>✳</i>
            <span>Confidence</span>
            <i>✳</i>
            <span className="outline-type">Education</span><i>✳</i><span>Brighter tomorrows</span>
            <i>✳</i>
          </div>
        ))}
      </div>
    </section>
  );
}
