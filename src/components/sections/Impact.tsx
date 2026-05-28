"use client";

import { motion } from "framer-motion";
import { Users, Shirt, School, Heart } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  {
    icon: Users,
    value: 2847,
    suffix: "",
    label: "Students Supported",
    description: "Children who received uniforms and returned to school with confidence",
  },
  {
    icon: Shirt,
    value: 3150,
    suffix: "",
    label: "Uniforms Sewn",
    description: "Handcrafted uniforms made by skilled local tailors",
  },
  {
    icon: School,
    value: 42,
    suffix: "",
    label: "Schools Reached",
    description: "Public primary schools across Edo state",
  },
  {
    icon: Heart,
    value: 156,
    suffix: "",
    label: "Caring Supporters",
    description: "Individuals and organizations powering our mission",
  },
];

export function Impact() {
  return (
    <section id="impact" className="py-24 sm:py-32 bg-black relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-earth-400 mb-4 block text-center">
            Our Impact
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center leading-tight mb-6">
            Numbers That Tell
            <br />
            <span className="text-cream-300">a Story</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl text-white/60 text-center max-w-2xl mx-auto mb-20">
            Every number represents a child who now walks into school with their head held high.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatCard stat={stat} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  const { ref, count } = useCountUp(stat.value, 2500);
  const Icon = stat.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-colors"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-colors">
        <Icon className="w-7 h-7 text-cream-300" />
      </div>

      <div ref={ref} className="mb-3">
        <span className="font-serif text-5xl sm:text-6xl font-bold text-white tracking-tight">
          {count}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{stat.description}</p>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cream-200/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
