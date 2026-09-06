import { MaskReveal, Reveal } from "../ui/reveal";
import { DonateButton } from "../ui/donate-button";
import { formatNaira, UNIFORM_COST_NGN } from "@/lib/donations";

const steps = [
  { title: "You give", body: "Contribute toward a school uniform for a child who needs one." },
  { title: "We work locally", body: "Your support helps buy materials and pay local tailors to make the uniforms." },
  { title: "A child receives it", body: "MACSI gets the finished uniform to a child who cannot afford one." },
  { title: "The impact continues", body: "A child gains confidence. A local craftsperson earns from their skill." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section donation-process" aria-labelledby="donation-process-title">
      <div className="container">
        <p className="eyebrow">02 / How it works</p>
        <h2 id="donation-process-title"><MaskReveal>How your donation</MaskReveal><MaskReveal>becomes a uniform.</MaskReveal></h2>
        <Reveal>
          <ol className="donation-steps">
            {steps.map((step, index) => <li key={step.title}><span className="eyebrow">0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}
          </ol>
          <div className="donation-process-action"><p><strong>{formatNaira(UNIFORM_COST_NGN)}</strong> funds one school uniform.</p><DonateButton location="how-it-works" label="Fund a uniform" variant="secondary" /></div>
        </Reveal>
      </div>
    </section>
  );
}
