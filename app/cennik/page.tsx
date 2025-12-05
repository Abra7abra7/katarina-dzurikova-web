import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PricingSection } from "@/components/sections/pricing";
import { FooterSection } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Cenník | Kozmetika Liptovský Mikuláš, Ružomberok",
  description:
    "Cenník kozmetických služieb v Liptove - pleťové ošetrenia od 30€, permanentný make-up, Kobido masáž, laminácia mihalníc. SHINE Štúdio Krásy - transparentné ceny.",
  openGraph: {
    title: "Cenník | SHINE Štúdio Krásy Liptov",
    description: "Cenník kozmetických služieb v Liptove - transparentné ceny bez skrytých poplatkov",
  },
  alternates: {
    canonical: "https://www.katarinadzurikova.sk/cennik",
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



