"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { BookingModal } from "@/components/ui/booking-modal";
import { useState } from "react";

// ... existing imports ...

const navLinks = [
  { label: "O mne", href: "/o-mne" },
  { label: "Služby", href: "/sluzby" },
  { label: "Cenník", href: "/cennik" },
  { label: "Galéria", href: "/galeria" },
  { label: "Kontakt", href: "/kontakt" },
];

export function FooterSection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleReservation = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <footer
        id="contact"
        className="relative bg-ink text-canvas py-16 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

            {/* 1. Brand & Description */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-gold">SHINE Štúdio Krásy</h3>
              <p className="text-canvas/70 text-sm leading-relaxed max-w-xs">
                Profesionálna starostlivosť o vašu pleť a vizáž v srdci Liptova.
                Individuálny prístup a prémiové služby.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/k.dzurikova.studiokrasyshine" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-gold hover:text-ink transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h4 className="font-sans font-bold text-gold uppercase tracking-wider text-xs mb-6">Rýchle odkazy</h4>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-canvas/80 hover:text-gold transition-colors text-sm w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* 3. Contact Info */}
            <div>
              <h4 className="font-sans font-bold text-gold uppercase tracking-wider text-xs mb-6">Kontakt</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-canvas/80 text-sm">
                  <MapPin className="text-gold shrink-0 mt-1" size={16} />
                  <a href="https://www.google.com/maps/search/?api=1&query=SHINE+Štúdio+Krásy+Pavlova+Ves" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                    Pavlova Ves 24<br />
                    032 21 p. Bobrovec<br />
                    <span className="text-xs text-canvas/50">Liptov</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-canvas/80 text-sm">
                  <Phone className="text-gold shrink-0" size={16} />
                  <a href="tel:+421904678007" className="hover:text-gold transition-colors">
                    +421 904 678 007
                  </a>
                </li>
                <li className="flex items-center gap-3 text-canvas/80 text-sm">
                  <Mail className="text-gold shrink-0" size={16} />
                  <a href="mailto:Katarinasosikova@gmail.com" className="hover:text-gold transition-colors">
                    Katarinasosikova@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* 4. Opening Hours / Legal */}
            <div>
              <h4 className="font-sans font-bold text-gold uppercase tracking-wider text-xs mb-6">Otváracie hodiny</h4>
              <ul className="space-y-2 text-sm text-canvas/80">
                <li className="flex justify-between">
                  <span>Pondelok - Piatok</span>
                  <span className="text-gold">Na objednávky</span>
                </li>
                <li className="flex justify-between text-canvas/50">
                  <span>Sobota - Nedeľa</span>
                  <span>Zatvorené</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-canvas/40">
            <p>&copy; {new Date().getFullYear()} SHINE Štúdio Krásy. Všetky práva vyhradené.</p>
            <div className="flex gap-6">
              <span>IČO: 56165738</span>
              <span>DIČ: 1129932029</span>
            </div>
          </div>
        </div>
      </footer>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}
