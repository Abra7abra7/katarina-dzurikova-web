import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { GalleryPageContent } from "@/components/sections/gallery-page";

export const metadata: Metadata = {
  title: "Galéria | SHINE by Katarína Dzuriková",
  description:
    "Pozrite si fotogalériu našich ošetrení, výsledkov a priestorov kliniky. Profesionálna estetická starostlivosť v príjemnom prostredí.",
  openGraph: {
    title: "Galéria | SHINE by Katarína Dzuriková",
    description: "Fotogaléria estetických ošetrení a priestorov kliniky",
    images: ["/images/gallery/procedury/microneedling.jpeg"],
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


