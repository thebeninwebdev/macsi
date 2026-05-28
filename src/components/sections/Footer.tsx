"use client";

import { motion } from "framer-motion";
import { Heart, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <span className="font-serif text-2xl font-bold">
                  Make A Child Smile
                </span>
              </div>
              <p className="text-white/60 leading-relaxed max-w-md mb-8 text-lg">
                Providing school uniforms to children in public primary schools across Nigeria. 
                Every uniform is a step toward dignity, education, and a brighter future.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Facebook, href: "#" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 lg:col-start-7">
            <FadeIn delay={0.1}>
              <h4 className="font-semibold text-sm tracking-[0.2em] uppercase text-white/40 mb-6">
                About
              </h4>
              <ul className="space-y-4">
                {["Our Story", "Our Impact", "How It Works", "Gallery", "Testimonials"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn delay={0.2}>
              <h4 className="font-semibold text-sm tracking-[0.2em] uppercase text-white/40 mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    Edo, Nigeria
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/40 shrink-0" />
                  <a
                    href="tel:+2348078675919"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    0807 867 5919
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/40 shrink-0" />
                  <a
                    href="mailto:hello@makeachildsmile.org"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    bettyodigie456@gmail.com
                  </a>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Make A Child Smile Initiative. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> for Nigerian children
          </p>
        </div>
      </div>
    </footer>
  );
}
