import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { ServicesPageContent } from "@/components/sections/services-page";

export const metadata: Metadata = {
  title: "Služby | SHINE by Katarína Dzuriková",
  description:
    "Kompletná ponuka služieb estetickej medicíny - permanentný make-up, pleťové ošetrenia, mihalnice, vizáž a doplnkové služby. Profesionálna starostlivosť v Bratislave.",
  openGraph: {
    title: "Služby | SHINE by Katarína Dzuriková",
    description: "Kompletná ponuka služieb estetickej medicíny v Bratislave",
    images: ["/images/services/pletove/hydrabeauty.jpeg"],
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
