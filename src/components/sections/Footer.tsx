import Image from "next/image";
import logo from "@/app/logo.png";
import { DonateButton } from "../ui/donate-button";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a
              className="logo footer-logo"
              href="#home"
              aria-label="MACSI home"
            >
              <Image src={logo} alt="Make a Child Smile Initiative" />
            </a>
            <p>
              Providing school uniforms to children in public primary schools
              across Nigeria. Every uniform is a step toward dignity, education,
              and a brighter future.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#story">Our story</a>
            <a href="#impact">Our impact</a>
            <a href="#how-it-works">How it works</a>
            <a href="#transparency">Giving & transparency</a>
            <a href="#gallery">Gallery</a>
            <a href="#voices">Voices</a>
          </nav>
          <div className="footer-contact">
            <p className="eyebrow">Let&apos;s make a child smile.</p>
            <a href="mailto:bettyodigie456@gmail.com">
              bettyodigie456@gmail.com
            </a>
            <a href="tel:+2348078675919">0807 867 5919</a>
            <span>Edo, Nigeria</span>
            <DonateButton location="footer" />
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Make A Child Smile Initiative. All rights reserved.</p>
          <p>Made with care for Nigerian children</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
