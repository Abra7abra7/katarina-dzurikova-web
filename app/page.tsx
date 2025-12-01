import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { GallerySection } from "@/components/sections/gallery";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-canvas">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <FooterSection />
    </main>
  );
}



