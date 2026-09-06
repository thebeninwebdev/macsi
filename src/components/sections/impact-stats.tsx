import Image from "next/image";
import { photos } from "@/lib/photos";
import { Counter } from "../ui/counter";
import { DonateButton } from "../ui/donate-button";
import { impact, NEXT_SEMESTER_TARGET, UNIFORM_COST_NGN } from "@/lib/donations";
import { Reveal, MaskReveal } from "../ui/reveal";
const stats = [
  {
    target: impact.children,
    suffix: "+",
    label: "Students supported",
    desc: "Children who returned to school with confidence.",
  },
  {
    target: impact.schools,
    suffix: "+",
    label: "Schools reached",
    desc: "Public primary schools served through outreach.",
  },
  {
    target: UNIFORM_COST_NGN,
    prefix: "₦",
    label: "Funds one uniform",
    desc: "A practical gift with a visible daily impact.",
  },
  { target: NEXT_SEMESTER_TARGET, label: "Next semester’s target", desc: "Uniforms we aim to sew with your support." },
];
export function ImpactStats() {
  return (
    <section id="impact" className="section impact">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / The difference we make</p>
            <h2>
              <MaskReveal>
                Small acts.
                <br />A lasting difference.
              </MaskReveal>
            </h2>
          </div>
          <Reveal className="heading-aside">
            Social awareness begins with children we can name and support. Every
            figure points to real pupils, real classrooms, and real uniforms
            delivered with care.
          </Reveal>
        </div>
        <Reveal image className="impact-photo image-frame"><Image src={photos.main} alt="School pupils together in their uniforms" fill sizes="100vw" /></Reveal>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <Counter {...stat} />
              <h3>{stat.label}</h3>
              <p>{stat.desc}</p>
            </div>
          ))}
        </div>
        <Reveal className="semester-target">
          <div>
            <p className="eyebrow">Our target for next semester</p>
            <h3>{NEXT_SEMESTER_TARGET} uniforms. Help us get there.</h3>
            <p>These numbers grow one uniform at a time. Help us sew {NEXT_SEMESTER_TARGET} uniforms for next semester.</p>
          </div>
          <DonateButton location="impact" label="Help fund the next uniform" />
        </Reveal>
      </div>
    </section>
  );
}
