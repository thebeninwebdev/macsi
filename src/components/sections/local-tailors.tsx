"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { DonateButton } from "../ui/donate-button";
import { Reveal, MaskReveal, ease } from "../ui/reveal";

export function LocalTailors() {
  const photoRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const desktopY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const mobileY = useTransform(scrollYProgress, [0, 1], [8, -8]);

  return (
    <section id="local-tailors" className="section local-tailors" aria-labelledby="local-tailors-title">
      <div className="container tailor-grid">
        <div className="tailor-heading">
          <motion.p className="eyebrow"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: reduced ? 0 : 0.6, ease }}>
            03 / Made locally
          </motion.p>
          <h2 id="local-tailors-title">
            {["One uniform.", "Two lives", "supported."].map((line, i) => (
              <MaskReveal key={line} delay={i * 0.1}>{line}</MaskReveal>
            ))}
          </h2>
        </div>

        <motion.figure className="tailor-visual" ref={photoRef}
          initial={reduced ? false : "hidden"} whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}>
          <motion.div className="tailor-photo-reveal"
            variants={{ hidden: { clipPath: "inset(100% 0% 0% 0%)", scale: 1.06 }, visible: { clipPath: "inset(0% 0% 0% 0%)", scale: 1 } }}
            transition={{ duration: reduced ? 0 : 1.1, ease }}>
            <motion.div className="tailor-photo-parallax"
              style={{ "--tailor-y": reduced ? 0 : desktopY, "--tailor-mobile-y": reduced ? 0 : mobileY } as React.CSSProperties}>
              <div className="tailor-photo-zoom">
                <Image src="/images/tailor.jpeg" fill
                  alt="A local tailor working with blue fabric at a sewing machine in her workshop"
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 55vw, 640px" />
              </div>
            </motion.div>
          </motion.div>
          <figcaption className="tailor-stamp">
            <span>Local craft</span><span aria-hidden="true">↓</span><span>Local impact</span>
          </figcaption>
        </motion.figure>

        <div className="tailor-copy">
          <Reveal delay={0.2}>
            <p className="body-copy">Every MACSI uniform is made with purpose. By working with local tailors, we help children show up to school with confidence while creating paid work for skilled people in their own communities.</p>
            <p className="tailor-promise">A uniform for a child.<br />An opportunity for a tailor.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <DonateButton location="local-tailors" variant="secondary" className="tailor-cta" label="Donate to make the next one" />
          </Reveal>
        </div>
      </div>
      <Reveal className="container tailor-process">
        <ol>
          {["Local tailor", "Uniform made", "Child ready for school"].map((step, i) => (
            <li key={step}><span>0{i + 1}</span>{step}</li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
