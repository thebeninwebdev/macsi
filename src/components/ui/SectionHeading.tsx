"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
  light = false,
}: SectionHeadingProps) {
  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl", alignments[align], className)}>
      {label && (
        <FadeIn>
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-earth-500">
            {label}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2
          className={cn(
            "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight",
            light ? "text-white" : "text-black"
          )}
        >
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p
            className={cn(
              "mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl",
              light ? "text-white/70" : "text-gray-600",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
