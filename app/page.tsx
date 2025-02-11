import AboutSection from "@/_components/pages/home/about-section";
import GallerySection from "@/_components/pages/home/gallery/gallery-section";
import HeroSection from "@/_components/pages/home/hero-section";
import ServicesSection from "@/_components/pages/home/services-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <div className="px-7 tablet:px-10 max-w-[1280px] mx-auto">
        <hr className="text-salmon/50" />
      </div>
      <ServicesSection />
      <div className="px-7 tablet:px-10 max-w-[1280px] mx-auto">
        <hr className="text-salmon/50" />
      </div>
      <GallerySection />
    </div>
  );
}
