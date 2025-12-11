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
        className="relative bg-ink text-canvas py-16 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* ... existing footer content ... */}
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 text-gold flex-shrink-0" strokeWidth={1.5} size={18} />
            <div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=SHINE+Štúdio+Krásy+Pavlova+Ves"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-canvas/90 hover:text-gold transition-colors"
              >
                <p>Pavlova Ves 24</p>
                <p>032 21 p. Bobrovec</p>
              </a>
              <p className="text-xs text-canvas/50 mt-1">
                Blízko Lipt. Mikuláša a Ružomberka
              </p>
            </div>
          </div>
          {/* ... */}
        </div>
      </footer>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}
