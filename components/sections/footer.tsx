"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterSection() {
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
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-editorial leading-none mb-6 md:mb-8">
              SHINE
            </h2>
            <p className="text-base md:text-lg text-canvas/70 leading-relaxed max-w-md">
              Precízna estetická starostlivosť rešpektujúca vašu prirodzenú
              krásu.
            </p>
            <div className="mt-8 md:mt-12">
              <Button variant="luxury" className="border-canvas text-canvas hover:bg-canvas hover:text-ink w-full sm:w-auto">
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
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 text-gold flex-shrink-0" strokeWidth={1.5} size={18} />
                  <div>
                    <p className="text-sm md:text-base text-canvas/90">+421 917 123 456</p>
                    <p className="text-xs text-canvas/50 mt-1">
                      Po-Pia: 9:00 - 18:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 text-gold flex-shrink-0" strokeWidth={1.5} size={18} />
                  <div>
                    <p className="text-sm md:text-base text-canvas/90 break-all">info@shineclinic.sk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 text-gold flex-shrink-0" strokeWidth={1.5} size={18} />
                  <div>
                    <p className="text-sm md:text-base text-canvas/90">Hlavná 123</p>
                    <p className="text-sm md:text-base text-canvas/90">811 01 Bratislava</p>
                  </div>
                </div>
              </div>
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
                  href="#"
                  className="text-canvas hover:text-gold transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram strokeWidth={1.5} size={22} />
                </a>
                <a
                  href="#"
                  className="text-canvas hover:text-gold transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook strokeWidth={1.5} size={22} />
                </a>
              </div>

              <div className="space-y-2 md:space-y-3">
                <h4 className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold mb-3 md:mb-4">
                  Rýchle odkazy
                </h4>
                <a
                  href="#about"
                  className="block text-sm md:text-base text-canvas/70 hover:text-canvas transition-colors duration-300"
                >
                  O mne
                </a>
                <a
                  href="#services"
                  className="block text-sm md:text-base text-canvas/70 hover:text-canvas transition-colors duration-300"
                >
                  Služby
                </a>
                <a
                  href="#gallery"
                  className="block text-sm md:text-base text-canvas/70 hover:text-canvas transition-colors duration-300"
                >
                  Galéria
                </a>
              </div>
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
            © 2025 SHINE by Katarína Dzuriková. Všetky práva vyhradené.
          </p>
          <p className="text-xs md:text-sm text-canvas/30 italic">
            Designed with elegance.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}



