"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { UserRound } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MaskReveal, ease } from "../ui/reveal";
import { DonateButton } from "../ui/donate-button";
// Update each person's name, title, and photo below.
// Place photos in public/images and use a path such as /images/jane.jpg.
// An empty photo displays a placeholder until you add their picture.
const quoteText = [
  "This is a wonderful initiative i would love to collaborate on this initiative and i will also ask my friends to contribute towards it.",
  "I have seen how well Child Smile Initiative manages donations and directs them to those who truly need help. Well done!",
  "Impressive work! I really love this initiative.",
  "I am amazed by the impact of this initiative.",
  "This is really great and highly commendable, God bless and reward you exceedingly.",
  "Wow! Wow! Wow!!. Beautiful children. God's inheritance. May they be blessed. May you be highly blessed too."
];
const quotes = [
  { text: quoteText[0], name: "Jennifer", title: "Sponsor", photo: "/sponsors/jennifer.jpeg" },
  { text: quoteText[1], name: "Engr. (Mrs) Onosetale", title: "Convener The Outlok Initiative", photo: "/sponsors/onosetale.jpeg" },
  { text: quoteText[2], name: "Aimuemwosa", title: "Sponsor", photo: "/sponsors/aimuemwosa.jpeg" },
  { text: quoteText[3], name: "Anonymous", title: "Sponsor", photo: "" },
  { text: quoteText[4], name: "Anonymous", title: "Sponsor", photo: "" },
  { text: quoteText[5], name: "Anonymous", title: "Sponsor", photo: "" },
];
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const start = useRef(0);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const autoplay = !paused && !hovered && !focused && !reduced;

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % quotes.length);
    }, 6000);
    return () => window.clearTimeout(timer);
  }, [index, autoplay]);

  return (
    <section id="voices" className="section voices">
      <div className="container">
        <p className="eyebrow">07 / Our community</p>
        <h2>
          <MaskReveal>Words from the heart.</MaskReveal>
        </h2>
        <div
          className="quote-layout"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
          }}
          onTouchStart={(e) => {
            start.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const delta = start.current - e.changedTouches[0].clientX;
            if (Math.abs(delta) > 45)
              setIndex(
                (index + (delta > 0 ? 1 : quotes.length - 1)) % quotes.length,
              );
          }}
        >
          <div className="quote-mark" aria-hidden="true">
            “<small>0{index + 1} / {String(quotes.length).padStart(2, "0")}</small>
          </div>
          <div>
            <div className="quote-stage" aria-live={autoplay ? "off" : "polite"} aria-atomic="true">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, y: reduced ? 0 : 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduced ? 0 : -15 }}
                  transition={{ duration: reduced ? 0 : 0.3, ease }}
                >
                  <blockquote>{quotes[index].text}</blockquote>
                  <figcaption className="quote-author">
                    <div className="quote-avatar">
                      {quotes[index].photo ? (
                        <Image
                          src={quotes[index].photo}
                          alt={`Portrait of ${quotes[index].name}`}
                          fill
                          sizes="64px"
                        />
                      ) : (
                        <UserRound size={28} aria-hidden="true" />
                      )}
                    </div>
                    <div className="quote-author-details">
                      <span className="quote-author-name">{quotes[index].name}</span>
                      <span className="quote-author-title">{quotes[index].title}</span>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
            <div className="quote-nav" aria-label="Choose a testimonial">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Testimonial ${i + 1}`}
                  aria-pressed={i === index}
                  onClick={() => setIndex(i)}
                >
                  0{i + 1}
                </button>
              ))}
                <button
                  className="quote-autoplay"
                  type="button"
                  aria-label={paused ? "Resume automatic testimonials" : "Pause automatic testimonials"}
                  onClick={() => setPaused((current) => !current)}
                >
                  {paused ? "Play" : "Pause"}
                </button>
            </div>
            <DonateButton location="testimonials" variant="secondary" className="voices-donate" label="Support the next child" />
          </div>
        </div>
      </div>
    </section>
  );
}
