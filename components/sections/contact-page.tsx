"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefón",
    value: "+421 917 123 456",
    href: "tel:+421917123456",
    note: "Po-Pia: 9:00 - 18:00",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@shineclinic.sk",
    href: "mailto:info@shineclinic.sk",
    note: "Odpovieme do 24 hodín",
  },
  {
    icon: MapPin,
    label: "Adresa",
    value: "Hlavná 123, 811 01 Bratislava",
    href: "https://maps.google.com/?q=Hlavná+123+Bratislava",
    note: "Parkovanie k dispozícii",
  },
  {
    icon: Clock,
    label: "Otváracie hodiny",
    value: "Pondelok - Piatok",
    note: "9:00 - 18:00",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/shineclinic",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/shineclinic",
  },
];

export function ContactPageContent() {
  const handleReservation = () => {
    window.open(BOOKIO_URL, '_blank');
  };

  return (
    <article className="relative bg-canvas pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
            Kontakt
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-editorial leading-tight text-ink">
            Sme tu pre vás
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl mx-auto">
            Máte otázky alebo si chcete rezervovať termín? Neváhajte nás kontaktovať.
          </p>
        </motion.div>
      </section>

      {/* Contact Info + Map */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-editorial text-ink mb-8">
              Kontaktné údaje
            </h2>
            
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-gold/10 text-gold">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold mb-1">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-lg text-ink hover:text-gold transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg text-ink">{item.value}</p>
                    )}
                    {item.note && (
                      <p className="text-sm text-ink/60 mt-1">{item.note}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold mb-4">
                Sledujte nás
              </h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-stone-200 text-ink hover:text-gold hover:border-gold transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={24} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.8892361898824!2d17.104934776893607!3d48.14867497122431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8943e1fb8c91%3A0x400f7d1c69687a0!2sHlavn%C3%A9%20n%C3%A1m.%2C%20811%2001%20Star%C3%A9%20Mesto!5e0!3m2!1ssk!2ssk!4v1701686400000!5m2!1ssk!2ssk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - SHINE Estetická Klinika"
              className="absolute inset-0"
            />
          </motion.div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-editorial text-ink mb-4">
            Online rezervácia
          </h2>
          <p className="text-ink/70 max-w-2xl mx-auto">
            Vyberte si termín, ktorý vám vyhovuje, a rezervujte si ošetrenie online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto border border-stone-200 overflow-hidden"
        >
          <iframe
            src={BOOKIO_URL}
            width="100%"
            height="700"
            style={{ border: 0 }}
            title="Rezervácia termínu - SHINE"
            className="w-full"
          />
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-ink text-canvas p-12 md:p-16 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-editorial mb-6">
            Neviete si rady?
          </h2>
          <p className="text-canvas/70 max-w-2xl mx-auto mb-8">
            Zavolajte nám a radi vám poradíme s výberom správneho ošetrenia.
          </p>
          <a href="tel:+421917123456">
            <Button 
              variant="luxury" 
              className="border-canvas text-canvas hover:bg-canvas hover:text-ink"
            >
              Zavolať teraz
            </Button>
          </a>
        </motion.div>
      </section>
    </article>
  );
}

