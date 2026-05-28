"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Impact", href: "#impact" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Support", href: "#support" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span
              className={cn(
                "font-serif text-lg font-semibold tracking-tight transition-colors",
                isScrolled ? "text-black" : "text-white"
              )}
            >
              Make A Child Smile
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:opacity-70",
                  isScrolled ? "text-gray-700" : "text-white/90"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#support"
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                isScrolled
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-white/90"
              )}
            >
              Support A Child
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-full transition-colors",
              isScrolled ? "text-black" : "text-white"
            )}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 bottom-0 top-0 z-40 overflow-y-auto overscroll-contain bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex min-h-full flex-col items-center justify-center gap-6 px-6 pb-10 pt-28 sm:gap-8 sm:pt-32">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center font-serif text-2xl text-white transition-colors hover:text-cream-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#support"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 rounded-full bg-white px-8 py-3 text-lg font-medium text-black"
              >
                Support A Child
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
