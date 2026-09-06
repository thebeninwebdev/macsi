import { Reveal, MaskReveal } from "../ui/reveal";

import { formatNaira, impact, MACSI_CONTACT, UNIFORM_COST_NGN, whatsappDonationUrl } from "@/lib/donations";
const amounts = [1, 2, 5] as const;
export function SupportCta() {
  return (
    <section id="support" className="section support" aria-labelledby="support-title">
      <div className="container support-grid">
        <div>
          <p className="eyebrow">09 / Make a difference</p>
          <h2 id="support-title">
            <MaskReveal>A uniform can change how a child shows up.</MaskReveal>
          </h2>
          <Reveal>
            <p className="body-copy">
              Help a child walk into school with confidence. Your donation helps
              buy materials, pays local tailors and gets a finished uniform to a child who needs it.
            </p>
            <p className="support-cost"><strong>{formatNaira(UNIFORM_COST_NGN)}</strong> funds one school uniform.</p>
            <a className="support-phone" href={`tel:${MACSI_CONTACT.phone}`}>
              Talk to us: {MACSI_CONTACT.displayPhone}
            </a>
          </Reveal>
        </div>
        <Reveal className="donation-panel">
          <p className="eyebrow">Start with one uniform</p>
          <h3 id="donation-options" tabIndex={-1}>Choose your impact.</h3>
          <p className="donation-label">Select an amount to continue on WhatsApp.</p>
          <div className="amount-grid">
            {amounts.map((uniforms) => (
              <a
                href={whatsappDonationUrl(uniforms)}
                key={uniforms}
                data-cta="donate" data-location="donation-preset" data-uniforms={uniforms}
              >
                <span className="amount-copy">
                  <span>{formatNaira(UNIFORM_COST_NGN * uniforms)}</span>
                  <span className="amount-description">Sew {uniforms} {uniforms === 1 ? "uniform" : "uniforms"}</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
            <a href={whatsappDonationUrl()} data-cta="donate" data-location="donation-custom">
              <span className="amount-copy"><span>Other amount</span><span className="amount-description">Give what you can</span></span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="donation-hint">
            Review and send the ready-to-send message. Our team will guide you through payment. No account or payment details are needed on this website.
          </p>
          <div className="transparency">
            <div><strong>{impact.children}+</strong><span>children supported</span></div>
            <div><strong>{impact.schools}+</strong><span>schools reached</span></div>
            <div><strong>Made locally</strong><span>Paid work for local tailors</span></div>
          </div>
          <a className="donation-contact" href={`mailto:${MACSI_CONTACT.email}`}>Questions? Email the MACSI team</a>
        </Reveal>
      </div>
    </section>
  );
}
