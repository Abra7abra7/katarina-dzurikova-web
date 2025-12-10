"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefón",
    value: "+421 904 678 007",
    href: "tel:+421904678007",
    note: "Po-Pia: 9:00 - 18:00",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Katarinasosikova@gmail.com",
    href: "mailto:Katarinasosikova@gmail.com",
    note: "Odpovieme do 24 hodín",
  },
  {
    icon: MapPin,
    label: "Adresa",
    value: "Pavlova Ves 24, 032 21 p. Bobrovec",
    href: "https://maps.google.com/?q=49.1089,19.5844",
    note: "V srdci Liptova",
  },
  {
    icon: Clock,
    label: "Otváracie hodiny",
    value: "Pondelok - Piatok",
    note: "9:00 - 18:00 (alebo podľa dohody)",
  },
];

const nearbyLocations = [
  { name: "Liptovský Mikuláš", distance: "~15 min" },
  { name: "Ružomberok", distance: "~20 min" },
  { name: "Jasná / Chopok", distance: "~25 min" },
  { name: "Bešeňová", distance: "~10 min" },
  { name: "Demänovská Dolina", distance: "~20 min" },
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
            Navštívte nás v Liptove
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl mx-auto">
            SHINE Štúdio Krásy sa nachádza v Pavlovej Vsi, v srdci Liptova. Sme ľahko dostupní z Liptovského Mikuláša, Ružomberka, Jasnej aj Bešeňovej.
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
                Sledujte nás na Instagrame
              </h3>
              <a
                href="https://instagram.com/k.dzurikova.studiokrasyshine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-4 border border-stone-200 text-ink hover:text-gold hover:border-gold transition-all duration-300"
              >
                <Instagram size={24} strokeWidth={1.5} />
                <span className="font-sans">@k.dzurikova.studiokrasyshine</span>
              </a>
            </div>

            {/* Nearby Locations */}
            <div className="mt-12">
              <h3 className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold mb-4">
                Dostupnosť z okolia
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {nearbyLocations.map((location) => (
                  <div
                    key={location.name}
                    className="flex items-center gap-2 text-sm text-ink/70"
                  >
                    <Navigation size={14} className="text-gold" />
                    <span>{location.name}</span>
                    <span className="text-ink/40">{location.distance}</span>
                  </div>
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
            className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden bg-stone-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83590.27962137937!2d19.46324264669648!3d49.123891404646725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA2JzMyLjAiTiAxOcKwMzUnMDMuOCJF!5e0!3m2!1ssk!2ssk!4v1701686400000!5m2!1ssk!2ssk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - SHINE Štúdio Krásy Pavlova Ves"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
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
            Vyberte si termín, ktorý vám vyhovuje, a rezervujte si ošetrenie online. Teším sa na vás!
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
            title="Rezervácia termínu - SHINE Štúdio Krásy"
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
            Máte otázky?
          </h2>
          <p className="text-canvas/70 max-w-2xl mx-auto mb-8">
            Zavolajte mi a radi vám poradím s výberom správneho ošetrenia. Som tu pre klientky z celého Liptova.
          </p>
          <a href="tel:+421904678007">
            <Button
              variant="luxury"
              className="border-canvas text-canvas hover:bg-canvas hover:text-ink"
            >
              Zavolať: +421 904 678 007
            </Button>
          </a>
        </motion.div>
      </section>
    </article>
  );
}
