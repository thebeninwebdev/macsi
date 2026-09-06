"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { MaskReveal } from "../ui/reveal";
const campaigns = [
  {
    title: "School measurements",
    body: "Our team visits partner schools and records each child's size with care.",
  },
  {
    title: "Local tailoring",
    body: "Skilled tailors sew durable uniforms that can handle everyday school life.",
  },
  {
    title: "Named packages",
    body: "Uniforms are labelled, checked, and prepared for each pupil before delivery.",
  },
  {
    title: "Distribution days",
    body: "We return to schools with volunteers, teachers, and families ready to celebrate.",
  },
  {
    title: "Smiles that last",
    body: "The final campaign result is a child who feels seen, included, and ready to learn.",
  },
];
export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ x: 0, scroll: 0, active: false, moved: false });
  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const reduced = useReducedMotion();
  const move = useCallback((direction: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("article");
    const end = el.scrollWidth - el.clientWidth;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = (card?.getBoundingClientRect().width || 350) + gap;
    const left = direction > 0 && el.scrollLeft >= end - 2
      ? 0
      : direction < 0 && el.scrollLeft <= 2
        ? end
        : Math.max(0, Math.min(end, el.scrollLeft + direction * step));
    el.scrollTo({
      left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }, []);
  useEffect(() => {
    if (paused || hovered || focused || touching || reduced) return;
    const timer = window.setTimeout(() => move(1), 6000);
    return () => window.clearTimeout(timer);
  }, [position, paused, hovered, focused, touching, reduced, move]);
  return (
    <section id="process" className="section campaigns"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false); }}
      onTouchStart={() => setTouching(true)} onTouchEnd={() => setTouching(false)}
      onTouchCancel={() => setTouching(false)}>
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">06 / Turn care into action</p>
            <h2>
              <MaskReveal>Current campaigns.</MaskReveal>
            </h2>
          </div>
          <div className="heading-aside">
            <p>
              The work is practical, local, and visible. Here is how a donation
              becomes a uniform a child can wear.
            </p>
            <div className="slider-controls">
              <button
                aria-label="Previous campaign"
                onClick={() => move(-1)}
              >
                <ArrowLeft />
              </button>
              <button
                aria-label="Next campaign"
                onClick={() => move(1)}
              >
                <ArrowRight />
              </button>
              <button className="campaign-autoplay" type="button"
                aria-label={paused ? "Resume automatic campaigns" : "Pause automatic campaigns"}
                onClick={() => setPaused((current) => !current)}>
                {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
        <div
          ref={ref}
          className="campaign-track"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Current campaigns"
          onScroll={() => {
            const el = ref.current;
            if (el)
              setPosition(
                el.scrollWidth > el.clientWidth
                  ? Math.max(0, Math.min(100, (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100))
                  : 0,
              );
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
              e.preventDefault();
              move(e.key === "ArrowRight" ? 1 : -1);
            }
          }}
          onPointerDown={(e) => {
            if (
              e.pointerType !== "mouse" ||
              (e.target as HTMLElement).closest("a")
            )
              return;
            drag.current = {
              x: e.clientX,
              scroll: e.currentTarget.scrollLeft,
              active: true,
              moved: false,
            };
            e.currentTarget.setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (!drag.current.active) return;
            const delta = e.clientX - drag.current.x;
            if (Math.abs(delta) > 4) {
              drag.current.moved = true;
              e.currentTarget.classList.add("dragging");
              e.currentTarget.scrollLeft = drag.current.scroll - delta;
            }
          }}
          onPointerUp={(e) => {
            drag.current.active = false;
            e.currentTarget.classList.remove("dragging");
          }}
          onPointerCancel={(e) => {
            drag.current.active = false;
            e.currentTarget.classList.remove("dragging");
          }}
        >
          {campaigns.map((item, i) => (
            <article
              className="campaign-card"
              key={item.title}
              aria-label={`${i + 1} of ${campaigns.length}`}
            >
              <div className="campaign-top">
                <span>UNIFORM OUTREACH</span>
                <span>0{i + 1}</span>
              </div>
              <span className="campaign-symbol" aria-hidden="true">
                {["↗", "✳", "⊞", "→", "☺"][i]}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a className="campaign-link" href="#how-it-works">See how it works <ArrowUpRight size={20} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
        <div className="track-progress" aria-hidden="true">
          <span style={{ transform: `translateX(${position * 2}%)` }} />
        </div>
      </div>
    </section>
  );
}
