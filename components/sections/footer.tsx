"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

const navLinks = [
  { label: "O mne", href: "/o-mne" },
  { label: "Služby", href: "/sluzby" },
  { label: "Cenník", href: "/cennik" },
  { label: "Galéria", href: "/galeria" },
  { label: "Kontakt", href: "/kontakt" },
];

export function FooterSection() {
  const handleReservation = () => {
    window.open(BOOKIO_URL, '_blank');
  };

  return (
    <footer
      id="contact"
      className="relative bg-ink text-canvas py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Left - Brand & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <Link href="/">
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-editorial leading-none mb-6 md:mb-8 hover:text-gold transition-colors duration-300">
                SHINE
              </h2>
            </Link>
            <p className="text-base md:text-lg text-canvas/70 leading-relaxed max-w-md">
              Precízna estetická starostlivosť rešpektujúca vašu prirodzenú
              krásu.
            </p>
            <div className="mt-8 md:mt-12">
              <Button 
                variant="luxury" 
                className="border-canvas text-canvas hover:bg-canvas hover:text-ink w-full sm:w-auto"
                onClick={handleReservation}
              >
                Rezervovať termín
              </Button>
            </div>
          </motion.div>

          {/* Right - Contact & Info */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: [0.33, 1, 0.68, 1],
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold mb-4 md:mb-6">
                Kontakt
              </h3>
              <address className="not-italic space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 text-gold flex-shrink-0" strokeWidth={1.5} size={18} />
                  <div>
                    <a href="tel:+421917123456" className="text-sm md:text-base text-canvas/90 hover:text-gold transition-colors">
                      +421 917 123 456
                    </a>
                    <p className="text-xs text-canvas/50 mt-1">
                      Po-Pia: 9:00 - 18:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 text-gold flex-shrink-0" strokeWidth={1.5} size={18} />
                  <div>
                    <a href="mailto:info@shineclinic.sk" className="text-sm md:text-base text-canvas/90 break-all hover:text-gold transition-colors">
                      info@shineclinic.sk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 text-gold flex-shrink-0" strokeWidth={1.5} size={18} />
                  <div>
                    <a 
                      href="https://maps.google.com/?q=Hlavná+123+Bratislava" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-canvas/90 hover:text-gold transition-colors"
                    >
                      <p>Hlavná 123</p>
                      <p>811 01 Bratislava</p>
                    </a>
                  </div>
                </div>
              </address>
            </motion.div>

            {/* Quick Links & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 1,
                ease: [0.33, 1, 0.68, 1],
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold mb-4 md:mb-6">
                Sledujte nás
              </h3>
              <div className="flex items-center gap-5 md:gap-6 mb-8 md:mb-12">
                <a
                  href="https://instagram.com/shineclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-canvas hover:text-gold transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram strokeWidth={1.5} size={22} />
                </a>
                <a
                  href="https://facebook.com/shineclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-canvas hover:text-gold transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook strokeWidth={1.5} size={22} />
                </a>
              </div>

              <nav className="space-y-2 md:space-y-3">
                <h4 className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold mb-3 md:mb-4">
                  Rýchle odkazy
                </h4>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm md:text-base text-canvas/70 hover:text-canvas transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 lg:mt-24 pt-6 md:pt-8 border-t border-canvas/20 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left"
        >
          <p className="text-xs md:text-sm text-canvas/50">
            © {new Date().getFullYear()} SHINE by Katarína Dzuriková. Všetky práva vyhradené.
          </p>
          <p className="text-xs md:text-sm text-canvas/30 italic">
            Designed with elegance.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
