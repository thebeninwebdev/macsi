import Image from "next/image";
import { photos } from "@/lib/photos";
import { Reveal, MaskReveal } from "../ui/reveal";
const actions = [
  {
    title: "Sponsor uniforms",
    body: "Fund durable, properly fitted uniforms for pupils who need them most.",
  },
  {
    title: "Mobilize schools",
    body: "Help us identify classrooms where clothing is keeping children away.",
  },
  {
    title: "Stand with families",
    body: "Share the mission and make dignity visible in your community.",
  },
];
export function Story() {
  return (
    <section id="story" className="section story">
      <div className="container story-grid">
        <div className="story-heading">
          <p className="eyebrow">01 / Our mission</p>
          <h2>
            <MaskReveal>
              One thing you can do right now: help a child show up proud.
            </MaskReveal>
          </h2>
        </div>
        <Reveal image className="story-visual">
          <div className="image-frame">
            <Image
              src="/images/cleaned_image_3.jpg"
              alt="Children together outside a school"
              fill
              sizes="(max-width: 800px) 90vw, 43vw"
            />
          </div>
          <div className="photo-foot">
            <span>A uniform is just the beginning.</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="story-seal" aria-hidden="true">
            DIGNITY
            <br />
            <span>✳</span>
            <br />
            IN EVERY STITCH
          </div>
        </Reveal>
        <div className="story-copy">
          <Reveal>
            <p className="body-copy">
              A school uniform is not just fabric. For many children, it is the
              difference between hiding at home and walking into class with the
              confidence to answer a question, make a friend, and dream forward.
            </p>
            <div className="action-list">
              {actions.map((action, i) => (
                <div className="action-row" key={action.title}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{action.title}</h3>
                    <p>{action.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <a className="text-link" href="#how-it-works">See how your support works <span aria-hidden="true">→</span></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
