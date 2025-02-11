import AboutSection from "@/_components/pages/home/about-section";
import GallerySection from "@/_components/pages/home/gallery/gallery-section";
import HeroSection from "@/_components/pages/home/hero-section";
import ServicesSection from "@/_components/pages/home/services-section";
import TestimonialsSection from "@/_components/pages/testimonials/testimonials-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="-translate-y-16 desktop:-translate-y-12" id="about"></div>
      <AboutSection />
      <div className="px-7 tablet:px-10 max-w-[1280px] mx-auto">
        <hr className="text-salmon/50" />
      </div>
      <div
        className="-translate-y-16 desktop:-translate-y-12"
        id="services"
      ></div>
      <ServicesSection />
      <div className="px-7 tablet:px-10 max-w-[1280px] mx-auto">
        <hr className="text-salmon/50" />
      </div>
      <div
        className="-translate-y-16 desktop:-translate-y-12"
        id="gallery"
      ></div>
      <GallerySection />
      <div
        className="-translate-y-16 desktop:-translate-y-12"
        id="testimonials"
      ></div>
      <TestimonialsSection cssClasses="desktop:hidden" />
    </div>
  );
}
