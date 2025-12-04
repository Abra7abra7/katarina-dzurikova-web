"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Heart, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

const values = [
  {
    icon: Heart,
    title: "Individuálny prístup",
    description: "Každá klientka je jedinečná. Prispôsobujem ošetrenia presne vašim potrebám.",
  },
  {
    icon: Shield,
    title: "Bezpečnosť",
    description: "Používam len overené metódy a prémiové produkty s garantovanou kvalitou.",
  },
  {
    icon: Sparkles,
    title: "Prirodzenosť",
    description: "Nechcem meniť, ale zvýrazniť vašu prirodzenú krásu.",
  },
  {
    icon: Award,
    title: "Profesionalita",
    description: "10+ rokov skúseností a neustále vzdelávanie v najnovších technikách.",
  },
];

const certifications = [
  "Lekárska fakulta UK Bratislava",
  "Certifikácia estetická medicína",
  "Pokročilé techniky permanentného make-upu",
  "Lashlift a laminácia - medzinárodná certifikácia",
  "Hydrabeauty a karboxyterapia",
];

export function AboutPageContent() {
  const handleReservation = () => {
    window.open(BOOKIO_URL, '_blank');
  };

  return (
    <article className="relative bg-canvas pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/about/katarina-portrait.jpeg"
                alt="Katarína Dzuriková - estetická špecialistka"
                fill
                className="object-cover"
                priority
                quality={90}
              />
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="mt-6 h-px bg-gold origin-left"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                O mne
              </span>
              <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-editorial leading-tight text-ink">
                Katarína Dzuriková
              </h1>
              <p className="mt-2 text-lg text-ink/60 font-sans">
                Vaša špecialistka na estetickú medicínu
              </p>
            </div>

            <div className="space-y-6 text-ink/80 leading-relaxed">
              <p className="text-lg">
                <span className="float-left font-serif text-6xl leading-none mr-3 mt-2 text-gold">
                  V
                </span>
                erím, že každá žena má jedinečnú krásu, ktorá si zaslúži jemnú a precíznu starostlivosť. Moja filozofia je postavená na rešpekte k vašej prirodzenosti – nechcem meniť, ale zvýrazniť to najlepšie, čo už máte.
              </p>
              <p>
                S viac ako 10-ročnými skúsenosťami v estetickej medicíne som sa špecializovala na neinvazívne procedúry, ktoré prinášajú viditeľné výsledky bez rizika a s minimálnym prestojom.
              </p>
              <p>
                Moja klinika je priestorom pokoja, kde sa o vás postarám s rovnakým rešpektom a starostlivosťou, aké by som chcela pre seba. Pretože skutočná krása nie je o dokonalosti – je o sebavedomí.
              </p>
            </div>

            <Button variant="luxury" onClick={handleReservation} className="mt-8">
              Rezervovať konzultáciu
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
            Moje hodnoty
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold tracking-editorial text-ink">
            Na čom staviam svoju prácu
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 border border-stone-200 hover:border-gold/50 transition-colors duration-500"
            >
              <value.icon className="w-10 h-10 text-gold mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mt-24 md:mt-32">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="py-16 border-t border-b border-gold/30 text-center"
        >
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl italic leading-relaxed text-ink max-w-4xl mx-auto">
            &ldquo;Výsledky, ktoré nekričia – ale žiaria&rdquo;
          </p>
        </motion.blockquote>
      </section>

      {/* Certifications Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mt-24 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
              Vzdelanie & Certifikácie
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold tracking-editorial text-ink mb-8">
              Profesionálne zázemie
            </h2>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.li
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 text-ink/80"
                >
                  <span className="text-gold mt-1">—</span>
                  <span>{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/images/gallery/priestory/certifikaty.jpeg"
              alt="Certifikáty Kataríny Dzurikovej"
              fill
              className="object-cover"
              quality={90}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-ink text-canvas p-12 md:p-16 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-editorial mb-6">
            Pripravená pomôcť vám žiariť
          </h2>
          <p className="text-canvas/70 max-w-2xl mx-auto mb-8">
            Rezervujte si bezplatnú konzultáciu a spoločne nájdeme to najlepšie ošetrenie pre vás.
          </p>
          <Button 
            variant="luxury" 
            onClick={handleReservation}
            className="border-canvas text-canvas hover:bg-canvas hover:text-ink"
          >
            Rezervovať termín
          </Button>
        </motion.div>
      </section>
    </article>
  );
}

