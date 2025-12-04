"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-canvas py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Side - Image (Sticky) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <motion.div style={{ y: imageY }} className="h-full w-full">
                <Image
                  src="/images/about/katarina-portrait.jpeg"
                  alt="Katarína Dzuriková - estetická špecialistka"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </motion.div>
            </div>
            {/* Signature Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true }}
              className="mt-6 h-px bg-gold origin-left"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-4 text-sm uppercase tracking-luxury font-sans font-semibold text-ink/60"
            >
              Katarína Dzuriková
            </motion.p>
          </motion.div>

          {/* Right Side - Content (Scrollable) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Overline */}
              <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                O mne
              </span>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-editorial leading-tight text-ink">
                Vaša prirodzená krása, zvýraznená s citom
              </h2>

              {/* Body Text with Drop Cap */}
              <div className="space-y-4 md:space-y-6 text-ink/80 leading-relaxed">
                <p className="text-base md:text-lg lg:text-xl">
                  <span className="float-left font-serif text-5xl md:text-7xl leading-none mr-2 md:mr-3 mt-1 md:mt-2 text-gold">
                    V
                  </span>
                  erím, že každá žena má jedinečnú krásu, ktorá si zaslúži
                  jemnú a precíznu starostlivosť. Moja filozofia je postavená
                  na rešpekte k vašej prirodzenosti – nechcem meniť, ale
                  zvýrazniť to najlepšie, čo už máte.
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  S viac ako 10-ročnými skúsenosťami v estetickej medicíne som
                  sa špecializovala na neinvazívne procedúry, ktoré prinášajú
                  viditeľné výsledky bez rizika a s minimálnym prestojom.
                </p>
              </div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 1,
                  ease: [0.33, 1, 0.68, 1],
                }}
                viewport={{ once: true }}
                className="mt-12 md:mt-16 py-8 md:py-12 border-t border-b border-gold/30"
              >
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-center leading-relaxed text-ink px-4">
                  &ldquo;Výsledky, ktoré nekričia – ale žiaria&rdquo;
                </p>
              </motion.blockquote>

              {/* CTA Link */}
              <div className="mt-8 text-center">
                <Link
                  href="/o-mne"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-luxury font-sans font-semibold text-gold hover:text-ink transition-colors duration-300"
                >
                  Viac o mne
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
