"use client";
import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { photos } from "@/lib/photos";
import { DonateButton } from "../ui/donate-button";
import { ease } from "../ui/reveal";
function HeroPhoto({
  src,
  side,
  alt,
}: {
  src: typeof photos.main | string;
  side: number;
  alt: string;
}) {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, side === 0 ? -30 : -65]);
  return (
    <motion.div
      className={`hero-photo-wrap photo-${side}`}
      style={{ y: reduced ? 0 : y }}
    >
      <motion.figure
        initial={
          reduced
            ? false
            : { opacity: 0, y: 100, scale: 0.94, rotate: side * 11 }
        }
        animate={{ opacity: 1, y: 0, scale: 1, rotate: side * 7 }}
        transition={{
          duration: reduced ? 0 : 1.1,
          delay: reduced ? 0 : 0.65 + (side + 1) * 0.12,
          ease,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={side === 0}
          sizes={
            side === 0
              ? "(max-width: 700px) 74vw, 48vw"
              : "(max-width: 700px) 35vw, 26vw"
          }
        />
      </motion.figure>
    </motion.div>
  );
}
export function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  return (
    <section className="hero" id="home" ref={ref}>
      <div className="container hero-inner">
        <motion.p
          className="eyebrow"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Make a Child Smile Initiative
        </motion.p>
        <h1 aria-label="School dignity starts with one uniform.">
          {["SCHOOL DIGNITY", "STARTS WITH", "ONE UNIFORM."].map((line, i) => (
            <span className="mask hero-line" key={line} aria-hidden="true">
              {Array.from(line).map((letter, j) => <motion.span key={j} className="hero-letter"
                initial={reduced ? false : { y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: reduced ? 0 : 0.9,
                  delay: reduced ? 0 : 0.3 + i * 0.1 + j * 0.012,
                  ease,
                }}
              >
                {letter === " " ? " " : letter}
              </motion.span>)}
            </span>
          ))}
        </h1>
        <div className="hero-intro">
          <p>We provide school uniforms to children who cannot afford them, made by local tailors in their own communities.</p>
          <div className="hero-actions">
            <DonateButton location="hero" label="Donate a uniform" />
            <a className="text-link" href="#how-it-works">See how it works <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-composition">
          <HeroPhoto
            src={photos.left}
            side={-1}
            alt="Temporary photograph: books and an apple on a desk"
          />
          <HeroPhoto
            src={photos.main}
            side={0}
            alt="Children gathered outside a school"
          />
          <HeroPhoto
            src={photos.right}
            side={1}
            alt="Temporary photograph: a classroom"
          />
          <span className="hero-flower" aria-hidden="true">
            ✳
          </span>
        </div>
        <motion.figure className="hero-mobile-photo"
          initial={reduced ? false : { clipPath: "inset(0 0 100% 0)", scale: 1.08 }}
          animate={{ clipPath: "inset(0 0 0 0)", scale: 1 }}
          transition={{ duration: reduced ? 0 : 1.2, delay: reduced ? 0 : 0.5, ease }}>
          <Image src={photos.main} alt="Pupils wearing their school uniforms outside a classroom" fill priority sizes="100vw" />
        </motion.figure>
        
      </div>
      <svg
        className="hero-curve"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 0 Q720 180 1440 0 V100 H0Z" />
      </svg>
    </section>
  );
}

