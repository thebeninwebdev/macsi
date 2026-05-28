"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full cursor-pointer";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gray-900 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5",
    secondary:
      "bg-white text-black hover:bg-gray-50 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5",
    outline:
      "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm",
    ghost:
      "text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
    xl: "px-12 py-5 text-xl",
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </Component>
  );
}
