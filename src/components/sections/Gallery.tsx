import { MaskReveal } from "../ui/reveal";
import { GalleryStrip } from "../ui/gallery-strip";
import { DonateButton } from "../ui/donate-button";
// Add new photos here as the gallery grows.
const galleryPhotos = [
  { src: "/images/cleaned_image_1.jpg", width: 780, height: 1040, alt: "Six children in blue school uniforms standing outside a classroom", caption: "Every child deserves to show up proud." },
  { src: "/images/cleaned_image_2.jpg", width: 1020, height: 768, alt: "Schoolchildren in cream and burgundy uniforms outside their classroom", caption: "A brighter beginning." },
  { src: "/images/cleaned_image_3.jpg", width: 780, height: 1040, alt: "Five pupils in blue and checked uniforms standing together", caption: "Confidence in every stitch." },
  { src: "/images/cleaned_image_4.jpg", width: 960, height: 540, alt: "Five children wearing blue uniforms in front of a classroom chalkboard", caption: "Ready for the school day." },
  { src: "/images/cleaned_image_5.jpg", width: 1280, height: 963, alt: "A group of pupils in brown and checked uniforms gathered in a classroom", caption: "A sense of belonging." },
];
export function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / A reason to smile</p>
            <h2>
              <MaskReveal>Moments of joy.</MaskReveal>
            </h2>
          </div>
          <p className="heading-aside">
            Dignity. Confidence. A sense of belonging.
            <br />
            The little things that mean everything.
          </p>
        </div>
        <p className="gallery-scroll-hint">Scroll or swipe to explore the photos.</p>
        <GalleryStrip photos={galleryPhotos} />
        <div className="gallery-donate"><p>Help create the next moment.</p><DonateButton location="gallery" variant="secondary" label="Donate a uniform" /></div>
      </div>
    </section>
  );
}

