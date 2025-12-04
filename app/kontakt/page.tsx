import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { ContactPageContent } from "@/components/sections/contact-page";

export const metadata: Metadata = {
  title: "Kontakt | SHINE by Katarína Dzuriková",
  description:
    "Kontaktujte nás a rezervujte si termín. Nájdete nás na Hlavnej 123, Bratislava. Telefón: +421 917 123 456, Email: info@shineclinic.sk",
  openGraph: {
    title: "Kontakt | SHINE by Katarína Dzuriková",
    description: "Kontaktujte nás a rezervujte si termín v SHINE estetickej klinike",
  },
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <ContactPageContent />
      <FooterSection />
    </main>
  );
}

