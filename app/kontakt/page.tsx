import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { ContactPageContent } from "@/components/sections/contact-page";

export const metadata: Metadata = {
  title: "Kontakt | SHINE Štúdio Krásy Liptov",
  description:
    "Kontaktujte SHINE Štúdio Krásy a rezervujte si termín. Adresa: Pavlova Ves 24, Bobrovec (Liptov). Telefón: +421 904 678 007. Kozmetika blízko Liptovského Mikuláša a Ružomberka.",
  openGraph: {
    title: "Kontakt | SHINE Štúdio Krásy Liptov",
    description: "Rezervujte si termín v SHINE Štúdiu Krásy - kozmetika v Liptove",
  },
  alternates: {
    canonical: "https://www.katarinadzurikova.sk/kontakt",
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



