"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ease } from "./reveal";
export function Counter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const value = target.toLocaleString("en-NG");
  return (
    <span
      ref={ref}
      className="odometer"
      aria-label={`${prefix}${value}${suffix}`}
    >
      <span aria-hidden="true" className="number-prefix">
        {prefix}
      </span>
      <span className="digits" aria-hidden="true">
        {Array.from(value).map((digit, i) =>
          /\d/.test(digit) ? (
            <span className="digit" key={i}>
              <motion.span
                className="digit-strip"
                initial={false}
                animate={{
                  y: `${visible || reduced ? -(10 + Number(digit)) : 0}em`,
                }}
                transition={{
                  duration: reduced ? 0 : 1.5,
                  delay: reduced ? 0 : i * 0.06,
                  ease,
                }}
              >
                {Array.from({ length: 20 }, (_, n) => (
                  <span key={n}>{n % 10}</span>
                ))}
              </motion.span>
            </span>
          ) : (
            <span key={i}>{digit}</span>
          ),
        )}
        {suffix}
      </span>
    </span>
  );
}
