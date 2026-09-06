"use client";
import { motion, useReducedMotion } from "framer-motion";
export const ease = [0.22, 1, 0.36, 1] as const;
export function Reveal({
  children,
  className = "",
  delay = 0,
  image = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  image?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={
        reduced
          ? false
          : {
              opacity: 0,
              y: 24,
              ...(image ? { clipPath: "inset(0 0 18% 0)" } : {}),
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        ...(image ? { clipPath: "inset(0 0 0% 0)" } : {}),
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduced ? 0 : 0.8,
        delay: reduced ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}
export function MaskReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.span
      className="mask"
      initial={reduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.span
        variants={{ hidden: { y: "110%" }, visible: { y: 0 } }}
        transition={{ duration: reduced ? 0 : 0.9, delay: reduced ? 0 : delay, ease }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
