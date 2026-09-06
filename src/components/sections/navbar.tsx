"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import logo from "@/app/logo.png";
import { DonateButton } from "../ui/donate-button";
const links = [
  ["#story", "About"],
  ["#impact", "Our impact"],
  ["#how-it-works", "How it works"],
  ["#gallery", "Gallery"],
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector("a")?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const elements = [
          toggle.current,
          ...Array.from(panel.current?.querySelectorAll("a") || []),
        ].filter(Boolean) as HTMLElement[];
        const first = elements[0],
          last = elements[elements.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const resize = () => {
      if (window.innerWidth >= 1000) setOpen(false);
    };
    window.addEventListener("keydown", key);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", key);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <motion.header
      className="site-header"
      data-menu-open={open}
      initial={reduced ? false : { opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="container nav-inner">
        <a className="logo" href="#home" aria-label="MACSI home">
          <Image src={logo} alt="Make a Child Smile Initiative" priority />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <DonateButton className="nav-donate" variant="navbar" location="navbar" />
        <button
          ref={toggle}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            ref={panel}
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: reduced ? 0 : -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -15 }}
            transition={{ duration: 0.25 }}
          >
            {links.map(([href, label], i) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                <small>0{i + 1}</small>
                {label}
              </a>
            ))}
            <DonateButton location="mobile-menu" variant="navbar" onClick={() => setOpen(false)} />
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
