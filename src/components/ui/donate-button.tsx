"use client";

import type { AnchorHTMLAttributes } from "react";
import { Button } from "./Button";
import { DONATION_DESTINATION } from "@/lib/donations";

type DonateButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> & {
  label?: string;
  location: string;
  variant?: "primary" | "secondary" | "floating" | "navbar" | "mobileBar";
};

export function DonateButton({ label = "Donate", location, variant = "primary", className = "", onClick, ...props }: DonateButtonProps) {
  return (
    <Button {...props} href={DONATION_DESTINATION}
      className={`donate-button donate-${variant} ${className}`}
      data-cta="donate" data-location={location}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        const destination = document.getElementById("donation-options");
        if (!destination) return;
        event.preventDefault();
        if (window.location.hash !== "#support") window.history.pushState(null, "", "#support");
        // Let an open mobile menu close before moving focus into the donation flow.
        requestAnimationFrame(() => {
          destination.focus({ preventScroll: true });
          destination.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        });
      }}>
      {label}
    </Button>
  );
}
