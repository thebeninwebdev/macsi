"use client";

import { motion } from "framer-motion";
import { Ruler, Scissors, Package, Truck, Smile } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Ruler,
    title: "Measurements",
    description:
      "Our team visits schools to carefully measure each child, ensuring every uniform fits perfectly and comfortably.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Scissors,
    title: "Sewing",
    description:
      "Skilled local tailors craft each uniform with precision and care, using durable, high-quality fabrics.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Package,
    title: "Packaging",
    description:
      "Every uniform is neatly folded, labeled with the child's name, and prepared with love for the special day.",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Truck,
    title: "Distribution",
    description:
      "We travel to schools across Lagos, Ogun, and Oyo States, delivering uniforms directly into the hands of children.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Smile,
    title: "Smiles",
    description:
      "The best part—watching a child's face light up as they wear their new uniform for the very first time.",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-earth-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cream-200/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          label="How It Works"
          title="From Fabric to Smile"
          subtitle="A journey of care, craftsmanship, and compassion—every step matters."
          className="mb-20 sm:mb-28"
        />

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-earth-200">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-earth-400 origin-left"
              />
            </div>

            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <ProcessCard key={step.title} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <MobileProcessCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center"
    >
      {/* Icon Circle */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`w-[120px] h-[120px] rounded-full ${step.color} flex items-center justify-center mb-8 shadow-lg shadow-black/5`}
      >
        <Icon className={`w-10 h-10 ${step.iconColor}`} />
      </motion.div>

      {/* Step Number */}
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-earth-400 mb-3">
        Step {String(index + 1).padStart(2, "0")}
      </span>

      {/* Title */}
      <h3 className="font-serif text-2xl font-bold text-black mb-3">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-[200px]">
        {step.description}
      </p>
    </motion.div>
  );
}

function MobileProcessCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex gap-5 items-start"
    >
      <div className="flex flex-col items-center">
        <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shrink-0 shadow-md`}>
          <Icon className={`w-7 h-7 ${step.iconColor}`} />
        </div>
        {index < steps.length - 1 && (
          <div className="w-0.5 h-12 bg-earth-200 mt-2" />
        )}
      </div>
      <div className="pt-2">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-earth-400 mb-1 block">
          Step {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-serif text-xl font-bold text-black mb-2">
          {step.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
