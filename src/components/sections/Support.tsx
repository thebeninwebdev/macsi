"use client";

import { motion } from "framer-motion";
import { MessageCircle, Heart, ArrowRight, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";

export function Support() {
  return (
    <section id="support" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://kimi-web-img.moonshot.cn/img/thumbs.dreamstime.com/ea88bd3663b1b49c927bdce15f75b5dbe2f1bbe4.jpg"
          alt="Happy children"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/80" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <Heart className="w-4 h-4 text-rose-400" />
            <span className="text-white/90 text-sm font-medium">
              Every Donation Counts
            </span>
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Together, We Can Reach
            <br />
            <span className="text-cream-200">More Children</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
            Your support helps children attend school with confidence and dignity.
            Whether you give a little or a lot, you are changing a life.
          </p>
        </FadeIn>

        {/* WhatsApp CTA */}
        <FadeIn delay={0.3}>
          <motion.a
            href="https://wa.me/2348078675919"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-4 px-10 py-5 bg-[#25D366] text-white rounded-full text-lg font-semibold shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300"
          >
            <MessageCircle className="w-7 h-7" />
            <span>Send A Message To Support</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </FadeIn>

        {/* Phone Number */}
        <FadeIn delay={0.4}>
          <div className="mt-8 flex items-center justify-center gap-3 text-white/60">
            <Phone className="w-4 h-4" />
            <span className="text-lg font-medium tracking-wide">0807 867 5919</span>
          </div>
        </FadeIn>

        {/* Trust Indicators */}
        <FadeIn delay={0.5}>
          <div className="mt-16 pt-12 border-t border-white/10 grid sm:grid-cols-3 gap-8">
            {[
              { value: "100%", label: "Transparent" },
              { value: "0%", label: "Admin Fees" },
              { value: "N4,500", label: "Per Uniform" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-white/50 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
