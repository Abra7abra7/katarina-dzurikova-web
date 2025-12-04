import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PricingSection } from "@/components/sections/pricing";
import { FooterSection } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Cenník služieb | SHINE by Katarína Dzuriková",
  description:
    "Kompletný cenník služieb estetickej medicíny - pleťové ošetrenia od 30€, permanentný make-up, mihalnice, vizáž a doplnkové služby. Transparentné ceny bez skrytých poplatkov.",
  openGraph: {
    title: "Cenník služieb | SHINE by Katarína Dzuriková",
    description: "Kompletný cenník služieb estetickej medicíny - transparentné ceny",
  },
};

export default function CennikPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <PricingSection />
      <FooterSection />
    </main>
  );
}


