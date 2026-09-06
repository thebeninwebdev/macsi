"use client";

import { useEffect, useRef, useState } from "react";
import { DonateButton } from "./donate-button";

export function PersistentDonate() {
  const marker = useRef<HTMLSpanElement>(null);
  const [pastIntro, setPastIntro] = useState(false);
  const [supportVisible, setSupportVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [heroCtaVisible, setHeroCtaVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => setPastIntro(entry.boundingClientRect.top < 0));
    if (marker.current) scrollObserver.observe(marker.current);
    const supportObserver = new IntersectionObserver(([entry]) => setSupportVisible(entry.isIntersecting));
    const support = document.getElementById("support");
    if (support) supportObserver.observe(support);
    const heroObserver = new IntersectionObserver(([entry]) => setHeroCtaVisible(entry.isIntersecting));
    const heroCta = document.querySelector('[data-location="hero"]');
    if (heroCta) heroObserver.observe(heroCta);
    const footerObserver = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting));
    const footerCta = document.querySelector('[data-location="footer"]');
    if (footerCta) footerObserver.observe(footerCta);
    const header = document.querySelector(".site-header");
    const readMenu = () => setMenuOpen(header?.getAttribute("data-menu-open") === "true");
    const menuObserver = new MutationObserver(readMenu);
    if (header) menuObserver.observe(header, { attributes: true, attributeFilter: ["data-menu-open"] });
    readMenu();
    const readFocus = () => setEditing(Boolean(document.activeElement?.matches('input, textarea, select, [contenteditable="true"]')));
    document.addEventListener("focusin", readFocus);
    document.addEventListener("focusout", readFocus);
    return () => {
      scrollObserver.disconnect(); supportObserver.disconnect(); heroObserver.disconnect(); footerObserver.disconnect(); menuObserver.disconnect();
      document.removeEventListener("focusin", readFocus); document.removeEventListener("focusout", readFocus);
    };
  }, []);

  const visible = pastIntro && !heroCtaVisible && !supportVisible && !footerVisible && !menuOpen && !editing;
  return (
    <>
      <span ref={marker} className="donate-scroll-marker" aria-hidden="true" />
      <div className={`persistent-donate ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
        <span className="persistent-donate-copy">Help a child<br />show up proud.</span>
        <DonateButton variant="floating" location="floating" label="Donate" tabIndex={visible ? 0 : -1} />
      </div>
    </>
  );
}
