import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PricingSection } from "@/components/sections/pricing";
import { FooterSection } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Cenník služieb | SHINE by Katarína Dzuriková",
  description:
    "Kompletný cenník služieb estetickej medicíny - pleťové ošetrenia, permanentný make-up, mihalnice, vizáž a doplnkové služby.",
};

export default function SluzbyPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <PricingSection />
      <FooterSection />
    </main>
  );
}

