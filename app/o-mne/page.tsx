import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { AboutPageContent } from "@/components/sections/about-page";

export const metadata: Metadata = {
  title: "O mne | SHINE by Katarína Dzuriková",
  description:
    "Zoznámte sa s Katarínou Dzurikovou - špecialistkou na estetickú medicínu s 10+ rokmi skúseností. Profesionálna starostlivosť o vašu prirodzenú krásu v Bratislave.",
  openGraph: {
    title: "O mne | SHINE by Katarína Dzuriková",
    description: "Zoznámte sa s Katarínou Dzurikovou - špecialistkou na estetickú medicínu",
    images: ["/images/about/katarina-portrait.jpeg"],
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


