"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import { DonateButton } from "../ui/donate-button";
function Word({
  children,
  progress,
  index,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
}) {
  const reduced = useReducedMotion();
  const opacity = useTransform(
    progress,
    [index * 0.1, index * 0.1 + 0.2],
    [0.18, 1],
  );
  return (
    <motion.span style={{ opacity: reduced ? 1 : opacity }}>
      {children}{" "}
    </motion.span>
  );
}
export function Closing() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start .9", "end .8"],
  });
  return (
    <section className="closing section" ref={ref}>
      <div className="container">
        <p className="eyebrow">One uniform. One child. One smile.</p>
        <h2>
          {["THE NEXT UNIFORM", "STARTS WITH YOU."].map((line, i) => (
            <span className="closing-line" key={line}>
              {line.split(" ").map((word, j) => (
                <Word key={j} progress={scrollYProgress} index={i * 3 + j}>
                  {word}
                </Word>
              ))}
            </span>
          ))}
        </h2>
        <p className="closing-copy">Help a child walk into school with dignity, confidence and a uniform they can be proud to wear.</p>
        <div className="closing-actions">
          <DonateButton location="final" variant="secondary" label="Donate a uniform" />
          <a className="text-link" href="#story">Learn more about MACSI <span aria-hidden="true">→</span></a>
        </div>
        <span className="closing-star" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  );
}
