"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

const serviceCategories = [
  {
    id: "pletove-osetrenia",
    title: "Pleťové ošetrenia",
    subtitle: "Hydratácia, lifting a regenerácia",
    description: "Široká škála pleťových ošetrení prispôsobených vašej pleti - od hydratačných cez liftingové až po čistiace procedúry.",
    priceFrom: "od 30 €",
    image: "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/gallery/01_Pletove_Osetrenia/pletove-osetrenie-shine-011.jpg",
    featured: true,
  },
  {
    id: "permanentny-makeup",
    title: "Permanentný make-up",
    subtitle: "Tetovanie pier a obočia",
    description: "Perfect lips a púdrové obočie s profesionálnym prístupom. Prirodzený výsledok, ktorý vydrží roky.",
    priceFrom: "od 30 €",
    image: "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/gallery/02_Permanentny_Makeup/permanentny-makeup-liptov-010.jpg",
    featured: true,
  },
  {
    id: "mihalnice",
    title: "Mihalnice",
    subtitle: "5D predĺženie a styling",
    description: "Profesionálne predĺženie mihalníc 5D technikou pre dokonalý a prirodzený vzhľad vašich očí.",
    priceFrom: "od 10 €",
    image: "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/gallery/03_Mihalnice_Obocie/mihalnice-obocie-shine-003.jpg",
    featured: false,
  },
  {
    id: "vizaz",
    title: "Vizáž",
    subtitle: "Úprava a farbenie obočia",
    description: "Kompletné služby pre dokonalý vzhľad - úprava obočia, farbenie, laminácia a mapping podľa proporcií tváre.",
    priceFrom: "od 5 €",
    image: "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/gallery/03_Mihalnice_Obocie/mihalnice-obocie-shine-010.jpg",
    featured: false,
  },
  {
    id: "doplnkove-sluzby",
    title: "Doplnkové služby",
    subtitle: "Masáže a wellness procedúry",
    description: "Masáž tváre, parafínový zábal rúk a ďalšie relaxačné procedúry pre kompletný zážitok starostlivosti.",
    priceFrom: "od 2 €",
    image: "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/gallery/04_Atmosfera_Priestory/salon-krasy-shine-interier-004.jpg",
    featured: false,
  },
];

export function ServicesPageContent() {
  const handleReservation = () => {
    window.open(BOOKIO_URL, '_blank');
  };

  const featuredServices = serviceCategories.filter(s => s.featured);
  const otherServices = serviceCategories.filter(s => !s.featured);

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
            Naše služby
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-editorial leading-tight text-ink">
            Čo pre vás môžem urobiť
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl mx-auto">
            Precízna starostlivosť prispôsobená vašim potrebám. Vyberte si z našej ponuky profesionálnych ošetrení.
          </p>
        </motion.div>
      </section>

      {/* Mobile Services */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-stone-50 border border-stone-200 p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-editorial text-ink mb-6">
            Služby priamo u vás
          </h2>
          <p className="text-ink/80 leading-relaxed mb-8 text-lg">
            Ste na víkendovom pobyte, túre alebo babskej jazde? Doprajte si diagnostiku pleti, glow-up rituály, expresné hydratačné či regeneračné kúry, Kobido, relaxačné tvárové masáže alebo farbenie obočia a mihalníc priamo u vás na izbe a premeňte svoj pobyt na výnimočný zážitok.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-sans font-semibold tracking-luxury uppercase transition-colors"
          >
            Napíšte mi
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Featured Services - Large Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-canvas border border-stone-200 hover:border-gold/50 transition-colors duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                  quality={75}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-canvas">
                  <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                    {service.subtitle}
                  </span>
                  <h2 className="mt-2 font-serif text-2xl md:text-3xl font-semibold">
                    {service.title}
                  </h2>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-ink/70 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xl font-bold text-gold">
                    {service.priceFrom}
                  </span>
                  <Link
                    href="/cennik"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-luxury font-sans font-semibold text-ink hover:text-gold transition-colors duration-300"
                  >
                    Zobraziť cenník
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Services - Smaller Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl font-semibold tracking-editorial text-ink mb-12 text-center"
        >
          Ďalšie služby
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {otherServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group border border-stone-200 hover:border-gold/50 transition-colors duration-500 overflow-hidden bg-canvas"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                  quality={75}
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                  {service.subtitle}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-ink group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-sans text-lg font-bold text-gold">
                    {service.priceFrom}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      {/* Social Media Params */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mb-16 md:mb-24 text-center">
        <p className="text-ink/70 max-w-2xl mx-auto leading-relaxed">
          Najnovšie akcie, prémiové balíčky a zvýhodnené ošetrenia a ďalšie zaujímavé informácie nájdete na našom{' '}
          <a
            href="https://www.facebook.com/people/SHINE-Studio-kr%C3%A1sy-Katar%C3%ADna-Dzurikov%C3%A1/61555653422079/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline font-semibold"
          >
            Facebooku
          </a>
          {' '}a{' '}
          <a
            href="https://instagram.com/k.dzurikova.studiokrasyshine"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline font-semibold"
          >
            instagrame
          </a>
          .
        </p>
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
            Neviete si vybrať?
          </h2>
          <p className="text-canvas/70 max-w-2xl mx-auto mb-8">
            Rezervujte si bezplatnú konzultáciu a spoločne nájdeme to najlepšie ošetrenie pre vás.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="luxury"
              onClick={handleReservation}
              className="border-canvas text-canvas hover:bg-canvas hover:text-ink"
            >
              Rezervovať konzultáciu
            </Button>
            <Link href="/cennik">
              <Button
                variant="luxury"
                className="border-canvas text-canvas hover:bg-canvas hover:text-ink w-full sm:w-auto"
              >
                Zobraziť kompletný cenník
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </article>
  );
}




