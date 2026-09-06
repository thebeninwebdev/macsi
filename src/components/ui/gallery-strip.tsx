"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

function GalleryCard({ photo, index, progress, travel }: {
  photo: GalleryPhoto;
  index: number;
  progress: MotionValue<number>;
  travel: number;
}) {
  const y = useTransform(progress, [0, 1], [0, -travel]);
  return (
    <div className="gallery-photo">
      <motion.figure style={{ y }}>
        <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
          sizes="(max-width: 767px) 78vw, 360px" />
        <figcaption className="photo-foot">
          <span>{photo.caption}</span>
          <span>{String(index + 1).padStart(2, "0")}</span>
        </figcaption>
      </motion.figure>
    </div>
  );
}

export function GalleryStrip({ photos }: { photos: GalleryPhoto[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState<number[]>([]);
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const figures = Array.from(el.querySelectorAll("figure"));
    const measure = () => {
      const heights = figures.map((figure) => figure.offsetHeight);
      // At progress 1, height - travel is identical for every card.
      // Include captions so wrapping and font changes cannot break the floor.
      const floor = Math.min(...heights);
      const next = heights.map((height) => height - floor);
      setTravel((previous) => previous.length === next.length && previous.every((value, i) => value === next[i]) ? previous : next);
    };
    const observer = new ResizeObserver(measure);
    figures.forEach((figure) => observer.observe(figure));
    measure();
    return () => observer.disconnect();
  }, [photos]);

  return (
    <div className="gallery-collection" ref={track} tabIndex={0} role="region"
      aria-label="Photo gallery — scroll horizontally to explore"
      style={{ "--gallery-clearance": `${Math.max(0, ...travel)}px` } as React.CSSProperties}>
      {photos.map((photo, index) => (
        <GalleryCard key={photo.src} photo={photo} index={index}
          progress={scrollYProgress} travel={travel[index] || 0} />
      ))}
    </div>
  );
}
