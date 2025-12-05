import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { AboutPageContent } from "@/components/sections/about-page";

export const metadata: Metadata = {
  title: "O mne | Kozmetička Katarína Dzuriková Liptov",
  description:
    "Zoznámte sa s Katarínou Dzurikovou - profesionálnou kozmetičkou v Liptove. Permanentný make-up, pleťové ošetrenia, Kobido masáž. Obsluhujeme Liptovský Mikuláš, Ružomberok, Jasná.",
  openGraph: {
    title: "O mne | Kozmetička Katarína Dzuriková Liptov",
    description: "Profesionálna kozmetička v Liptove - Katarína Dzuriková. Starostlivosť o vašu prirodzenú krásu.",
    images: ["/images/about/katarina-portrait.jpeg"],
  },
  alternates: {
    canonical: "https://www.katarinadzurikova.sk/o-mne",
  },
};

export default function OmnePage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <AboutPageContent />
      <FooterSection />
    </main>
  );
}



