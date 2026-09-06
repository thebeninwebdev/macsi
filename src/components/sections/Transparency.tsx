import { MaskReveal } from "../ui/reveal";
import { formatNaira, MACSI_CONTACT, UNIFORM_COST_NGN } from "@/lib/donations";

export function Transparency() {
  return (
    <section id="transparency" className="section donation-transparency" aria-labelledby="transparency-title">
      <div className="container transparency-grid">
        <div>
          <p className="eyebrow">08 / Giving with understanding</p>
          <h2 id="transparency-title"><MaskReveal>Where your</MaskReveal><MaskReveal>support goes.</MaskReveal></h2>
          <p className="body-copy">Your support helps us purchase uniform materials, pay local tailors and get finished uniforms to the children who need them.</p>
          <p className="transparency-contact">Have a question before giving? <a href={`mailto:${MACSI_CONTACT.email}`}>Email the MACSI team</a>.</p>
        </div>
        <div className="donation-faq">
          <details open><summary>What does one uniform cost?</summary><p>{formatNaira(UNIFORM_COST_NGN)} funds one school uniform. You can fund one, two or five uniforms, or choose another amount.</p></details>
          <details><summary>How do I make my donation?</summary><p>Choose an amount in the donation section. It opens WhatsApp with a message you can review and send. Our team will then guide you through payment. This website does not collect payment details.</p></details>
          <details><summary>Who makes the uniforms?</summary><p>Local tailors make the uniforms. Your donation supports their paid work as well as a child’s school day.</p></details>
          <details><summary>Can I give a different amount?</summary><p>Yes. Choose “Other amount” and tell our team how you would like to help. You can also call <a href={`tel:${MACSI_CONTACT.phone}`}>{MACSI_CONTACT.displayPhone}</a>.</p></details>
        </div>
      </div>
    </section>
  );
}
