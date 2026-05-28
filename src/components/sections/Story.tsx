"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import youMakeItPossibleImage from "./assets/you-make-it-possible.jpeg";

const stories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Silent Struggle",
    content:
      "Many children in public primary schools across Nigeria attend classes without proper uniforms. Some wear worn-out clothes, others share a single uniform among siblings, and many simply stay home out of shame. A uniform is not just fabric—it is dignity, belonging, and the confidence to raise your hand in class.",
    stat: "1 in 3",
    statLabel: "children lack proper school uniforms",
    imagePosition: "right",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1632215863153-0dae7657d0a9?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "A Uniform Changes Everything",
    content:
      "When a child receives their first proper school uniform, something remarkable happens. They stand taller. They smile brighter. They participate more in class. Teachers notice the difference immediately. A simple uniform restores a child's sense of pride and transforms their entire school experience.",
    stat: "95%",
    statLabel: "improved attendance with uniforms",
    imagePosition: "left",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1687422808289-e721259c9eb4?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Born From Compassion",
    content:
      "Make A Child Smile Initiative began with a simple observation: too many children were missing out on education because they lacked something as basic as a uniform. What started as a small act of kindness has grown into a movement, powered by local tailors, volunteers, and supporters who believe every child deserves to feel proud in school.",
    stat: "2020",
    statLabel: "year we began this mission",
    imagePosition: "right",
  },
  {
    id: 4,
    image: youMakeItPossibleImage,
    title: "You Make It Possible",
    content:
      "Every uniform sewn, every child dressed, every smile captured—it all happens because caring people choose to act. Whether you donate, volunteer, or simply share our story, you become part of a community that believes in the power of small actions to create extraordinary change.",
    stat: "100%",
    statLabel: "of donations go to uniforms",
    imagePosition: "left",
    objectPosition: "object-top",
  },
];

export function Story() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Our Story"
          title="The Journey of a Uniform"
          subtitle="Behind every uniform is a story of hope, resilience, and the transformative power of compassion."
          className="mb-20 sm:mb-28"
        />

        <div className="space-y-24 sm:space-y-32">
          {stories.map((story, index) => (
            <StoryBlock key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryBlock({
  story,
  index,
}: {
  story: (typeof stories)[0];
  index: number;
}) {
  const isReversed = story.imagePosition === "left";

  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        isReversed ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden group">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className={`object-cover ${
              story.objectPosition ?? "object-center"
            } transition-transform duration-700 group-hover:scale-105`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Stat overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block">
              <span className="block text-3xl sm:text-4xl font-serif font-bold text-black">
                {story.stat}
              </span>
              <span className="text-sm text-gray-600 font-medium">
                {story.statLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div
          className={`absolute -z-10 w-full h-full rounded-3xl bg-earth-200/50 ${
            isReversed ? "-top-4 -left-4" : "-top-4 -right-4"
          }`}
        />
      </motion.div>

      {/* Text Content */}
      <div className={`${isReversed ? "lg:order-1 lg:direction-ltr" : "lg:order-2"}`}>
        <FadeIn delay={0.2}>
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-earth-500 mb-4 block">
            Chapter {String(index + 1).padStart(2, "0")}
          </span>
        </FadeIn>
        <FadeIn delay={0.3}>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-black leading-tight mb-6">
            {story.title}
          </h3>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {story.content}
          </p>
        </FadeIn>
        <FadeIn delay={0.5}>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-earth-200" />
            <span className="text-sm text-earth-500 font-medium tracking-wide">
              {index === 0
                ? "The Problem"
                : index === 1
                ? "The Impact"
                : index === 2
                ? "Our Beginning"
                : "Your Role"}
            </span>
            <div className="h-px flex-1 bg-earth-200" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
