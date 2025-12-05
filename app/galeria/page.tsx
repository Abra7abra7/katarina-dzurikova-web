import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { GalleryPageContent } from "@/components/sections/gallery-page";

export const metadata: Metadata = {
  title: "Galéria | SHINE Štúdio Krásy Liptov",
  description:
    "Fotogaléria kozmetických ošetrení, výsledkov a priestorov SHINE Štúdia Krásy v Liptove. Permanentný make-up, pleťové ošetrenia, laminácia mihalníc - ukážky práce.",
  openGraph: {
    title: "Galéria | SHINE Štúdio Krásy Liptov",
    description: "Fotogaléria kozmetických ošetrení a priestorov štúdia v Liptove",
    images: ["/images/gallery/procedury/microneedling.jpeg"],
  },
  alternates: {
    canonical: "https://www.katarinadzurikova.sk/galeria",
  },
};

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <GalleryPageContent />
      <FooterSection />
    </main>
  );
}



