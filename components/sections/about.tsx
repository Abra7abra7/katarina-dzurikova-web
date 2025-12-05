"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-canvas py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Side - Image (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/about/katarina-portrait.jpeg"
                alt="Katarína Dzuriková - profesionálna kozmetička Liptov"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover saturate-75"
                quality={75}
              />
            </div>
            {/* Signature Line */}
            <div className="mt-6 h-px bg-gold" />
            <p className="mt-4 text-sm uppercase tracking-luxury font-sans font-semibold text-ink/60">
              Katarína Dzuriková - profesionálna kozmetička Liptov
            </p>
          </div>

          {/* Right Side - Content (Scrollable) */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {/* Overline */}
              <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                Katarína Dzuriková
              </span>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-editorial leading-tight text-ink">
                Vaša kozmetička v srdci Liptova
              </h2>

              {/* Body Text with Drop Cap */}
              <div className="space-y-4 md:space-y-6 text-ink/80 leading-relaxed">
                <p className="text-base md:text-lg lg:text-xl">
                  <span className="float-left font-serif text-5xl md:text-7xl leading-none mr-2 md:mr-3 mt-1 md:mt-2 text-gold">
                    K
                  </span>
                  ozmetika je pre mňa kombináciou estetiky, odbornosti a jemného
                  ľudského prístupu. V SHINE sa zameriavam na pleť s maximálnou
                  precíznosťou – sledujem detaily, rozumiem jej signálom a vnímam,
                  čo potrebuje, aby pôsobila zdravo a prirodzene krásne.
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  Pracujem s jemným dotykom, no profesionálne. Každé ošetrenie je
                  individuálne navrhnuté tak, aby prinieslo skutočný efekt, nie
                  len krátkodobý pocit príjemnej starostlivosti. Kvalita, čistota
                  prevedenia a výsledok sú pre mňa základ.
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  Neustále sa vzdelávam a rozširujem svoje portfólio moderných
                  techník, aby som klientkam prinášala postupy, ktoré sú funkčné,
                  premyslené a zároveň bezpečné. Mojou ambíciou je, aby žena
                  odchádzala z SHINE nielen s krajšou pleťou, ale aj s pocitom,
                  že sa o ňu niekto naozaj postaral.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="mt-12 md:mt-16 py-8 md:py-12 border-t border-b border-gold/30">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-center leading-relaxed text-ink px-4">
                  &ldquo;Krása nevzniká náhodou – ale vedome, citlivo a odborne&rdquo;
                </p>
              </blockquote>

              {/* Credentials */}
              <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h4 className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold mb-3">
                    Vzdelanie
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base text-ink/70">
                    <li>— SOŠ služieb Rimavská Sobota</li>
                    <li>— UMB Banská Bystrica</li>
                    <li>— Prešovská univerzita v Prešove</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold mb-3">
                    Špecializácia
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base text-ink/70">
                    <li>— Permanentný make-up (LEA MATYI, Marina Bondar)</li>
                    <li>— Kobido japonská masáž</li>
                    <li>— BioRePeel, Larens, ILCSI, Hydropeptide</li>
                  </ul>
                </div>
              </div>

              {/* Location Info */}
              <div className="mt-8 p-6 bg-stone-50 border-l-2 border-gold">
                <p className="text-sm text-ink/70">
                  📍 <strong>SHINE Štúdio Krásy</strong> • Pavlova Ves 24, Bobrovec
                  <br />
                  <span className="text-xs">
                    Ľahká dostupnosť z Liptovského Mikuláša, Ružomberka, Jasnej a Bešeňovej
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
