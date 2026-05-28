"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import joyImageOne from "./assets/WhatsApp Image 2026-05-26 at 9.19.28 PM.jpeg";
import joyImageTwo from "./assets/WhatsApp Image 2026-05-26 at 9.20.02 PM.jpeg";
import joyImageThree from "./assets/WhatsApp Image 2026-05-26 at 9.20.36 PM.jpeg";
import joyImageFour from "./assets/WhatsApp Image 2026-05-26 at 9.20.46 PM (1).jpeg";
import joyImageFive from "./assets/WhatsApp Image 2026-05-26 at 9.20.46 PM (2).jpeg";
import joyImageSix from "./assets/WhatsApp Image 2026-05-26 at 9.20.46 PM.jpeg";

type GalleryLayout = "featured" | "standard" | "tall" | "wide";

const galleryImages = [
  {
    src: joyImageOne,
    alt: "Children smiling during an outreach visit",
    layout: "featured",
  },
  {
    src: joyImageTwo,
    alt: "A child smiling in school uniform",
    layout: "standard",
  },
  {
    src: joyImageThree,
    alt: "Children gathered for uniform support",
    layout: "tall",
  },
  {
    src: joyImageFour,
    alt: "A moment of joy with a supported child",
    layout: "standard",
  },
  {
    src: joyImageFive,
    alt: "Children receiving care from supporters",
    layout: "standard",
  },
  {
    src: joyImageSix,
    alt: "Children sharing smiles together",
    layout: "wide",
    objectPosition: "object-[center_18%]",
  },
] satisfies Array<{
  src: StaticImageData;
  alt: string;
  layout: GalleryLayout;
  objectPosition?: string;
}>;

const layoutClasses: Record<GalleryLayout, string> = {
  featured: "col-span-2 row-span-2",
  standard: "col-span-1 row-span-1",
  tall: "col-span-1 row-span-2",
  wide: "col-span-2 row-span-1",
};

export function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Gallery"
          title="Moments of Joy"
          subtitle="Every photograph captures a moment when a child's world changed for the better."
          className="mb-16 sm:mb-20"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  image,
  index,
}: {
  image: (typeof galleryImages)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-2xl sm:rounded-3xl group cursor-pointer ${layoutClasses[image.layout]}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={`object-cover ${
          image.objectPosition ?? "object-center"
        } transition-transform duration-700 group-hover:scale-110`}
        sizes="(max-width: 768px) 50vw, 25vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

      {/* Content on hover */}
      <div className="absolute inset-0 flex items-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-sm sm:text-base font-medium">{image.alt}</p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/0 group-hover:bg-white/80 transition-colors duration-500" />
    </motion.div>
  );
}
