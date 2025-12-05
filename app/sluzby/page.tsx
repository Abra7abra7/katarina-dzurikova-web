import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { ServicesPageContent } from "@/components/sections/services-page";

export const metadata: Metadata = {
  title: "Služby | Kozmetika Liptovský Mikuláš, Ružomberok",
  description:
    "Kompletná ponuka kozmetických služieb v Liptove - permanentný make-up, pleťové ošetrenia, Kobido masáž, laminácia mihalníc. SHINE Štúdio Krásy Liptovský Mikuláš, Ružomberok.",
  openGraph: {
    title: "Služby | SHINE Štúdio Krásy Liptov",
    description: "Kozmetické služby v Liptove - permanentný make-up, pleťové ošetrenia, Kobido masáž",
    images: ["/images/services/pletove/hydrabeauty.jpeg"],
  },
  alternates: {
    canonical: "https://www.katarinadzurikova.sk/sluzby",
  },
};

export default function SluzbyPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <ServicesPageContent />
      <FooterSection />
    </main>
  );
}
