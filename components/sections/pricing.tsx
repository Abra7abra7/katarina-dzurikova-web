"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Service {
  name: string;
  duration?: string;
  price: string;
  description?: string;
  details?: string[];
}

interface Category {
  id: string;
  title: string;
  services: Service[];
}

const categories: Category[] = [
  {
    id: "doplnkove",
    title: "Doplnkové služby",
    services: [
      {
        name: "Masáž tváre a parafínový zábal rúk",
        duration: "45 min",
        price: "20 €",
      },
      {
        name: "Odstránenie mílií",
        duration: "1 min",
        price: "2 €",
        description: "k pleťovému ošetreniu",
      },
      {
        name: "Parafínový zábal rúk k pleťovému ošetreniu",
        duration: "1 min",
        price: "5 €",
      },
    ],
  },
  {
    id: "mihalnice",
    title: "Mihalnice",
    services: [
      {
        name: "5D",
        duration: "2 h",
        price: "25 €",
      },
      {
        name: "Odstránenie mihalníc",
        duration: "30 min",
        price: "10 €",
      },
    ],
  },
  {
    id: "permanent",
    title: "Permanentný make-up (tetovanie)",
    services: [
      {
        name: "Perfect lips (tetovanie pier)",
        duration: "3 h",
        price: "150 €",
        description: "nutná konzultácia",
      },
      {
        name: "Púdrové obočie",
        duration: "3 h",
        price: "150 €",
        description: "nutná konzultácia",
      },
      {
        name: "Refresh - korekcia do 3 mesiacov",
        duration: "2 h",
        price: "30 €",
      },
      {
        name: "Refresh obočia (3-12 mesiacov)",
        duration: "3 h",
        price: "50 €",
      },
      {
        name: "Refresh po 12-18 mesiacoch",
        duration: "3 h",
        price: "100 €",
      },
    ],
  },
  {
    id: "pletove",
    title: "Pleťové ošetrenia",
    services: [
      {
        name: "Hydratačné ošetrenie prístrojom HYDRABEAUTY",
        duration: "1 h 15 min",
        price: "43 €",
        details: [
          "Úvodná analýza pleti a trojfázové čistenie (10 min)",
          "Použitie prístroja Hydrabeauty (40 min)",
          "Aplikácia alginátovej masky (15 min)",
          "LED terapia počas pôsobenia masky",
          "Záverečná aplikácia hydratačného séra a krému (10 min)",
        ],
      },
      {
        name: "Hydratačné ošetrenie klasik",
        duration: "1 h 15 min",
        price: "39 €",
        details: [
          "Úvodné čistenie pleti (5 minút)",
          "Enzymatický peeling (10 minút)",
          "Ultrazvukové čistenie pleti (10 minút)",
          "Aplikácia séra (5 minút)",
          "Alginátová maska (15 minút)",
          "LED terapia (10 minút)",
          "Záverečná starostlivosť (10 minút)",
        ],
      },
      {
        name: "Hĺbkové hydratačné KARBOXY ošetrenie",
        duration: "1 h 30 min",
        price: "44 €",
        details: [
          "Úvodná analýza pleti a čistenie (10 min)",
          "Použitie prístroja Hydrabeauty (10 min)",
          "Aplikácia karboxyterapie (40 min)",
          "Aplikácia alginátovej masky (15 min)",
          "LED terapia (15 min)",
          "Záverečná aplikácia hydratačného séra a krému (5 min)",
        ],
      },
      {
        name: "Depigmentačné KARBOXY ošetrenie",
        duration: "1 h 30 min",
        price: "44 €",
        details: [
          "Úvodná analýza pleti a čistenie (10 min)",
          "Použitie prístroja Hydrabeauty (10 min)",
          "Aplikácia karboxyterapie (40 min)",
          "Aplikácia alginátovej masky (15 min)",
          "LED terapia (15 min)",
          "Záverečná aplikácia hydratačného séra a krému (5 min)",
        ],
      },
      {
        name: "Relaxačné ošetrenie s KOBIDO masážou",
        duration: "1 h 15 min",
        price: "35 €",
        details: [
          "Úvodná analýza pleti a 3-fázové čistenie (10 min)",
          "Povrchové čistenie ultrazvukovou špachtľou (10 min)",
          "KOBIDO masáž tváre a dekoltu (30 min)",
          "Aplikácia relaxačnej masky (15 min)",
          "Použitie LED terapie (počas masky)",
          "Záverečná aplikácia upokojujúceho séra a krému",
        ],
      },
      {
        name: "Čistiace ošetrenie",
        duration: "1 h 15 min",
        price: "37 €",
        details: [
          "Úvodná analýza pleti a trojfázové čistenie pleti (10 min)",
          "Aplikácia pary / zmäkčovadla podľa preferencií klientky (10 min)",
          "Hĺbkové čistenie pleti manuálne, prípadne pomocou prístroja Hydrabeauty (25 min)",
          "Ozonoterapia (5 min)",
          "Pleťová maska a LED terapia (15 min)",
          "Záverečná aplikácia čistiaceho séra a krému (10 min)",
        ],
      },
      {
        name: "Základné čistenie pleti",
        duration: "1 h",
        price: "30 €",
        description: "Ideálne pre pánov a študentov",
        details: [
          "Úvodná analýza pleti a trojfázové čistenie pleti (10 min)",
          "Aplikácia pary (10 min)",
          "Hĺbkové čistenie pleti manuálne (20 min)",
          "Ozonoterapia (5 min)",
          "Pleťová maska (10 min)",
          "Záverečná aplikácia čistiaceho séra a krému (5 min)",
        ],
      },
      {
        name: "Chemický peeling",
        duration: "1 h",
        price: "39 €",
        details: [
          "Povrchové čistenie a diagnostika pleti (10 min)",
          "Aplikácia chemického peelingu (15 min)",
          "Neutralizačná maska (20 min)",
          "Zapracovanie antiage séra s krátkou masážou (10 min)",
          "Záverečná aplikácia krému (5 min)",
        ],
      },
      {
        name: "Liftingové ošetrenie RÁDIOFREKVENCIA",
        duration: "1 h 15 min",
        price: "43 €",
        details: [
          "Úvodné čistenie pleti a diagnostika (10 minút)",
          "Čistenie sonickou špachtľou alebo masáž enzymatickým peelingom (10 minút)",
          "Rádiofrekvencia Alvi Prague - liftingový efekt (35 minút)",
          "LED terapia a maska (15 minút)",
          "Krém a sérum (5 minút)",
        ],
      },
      {
        name: "Liftingové ošetrenie RADIOFREKVENCIA a KARBOXYTERAPIA",
        duration: "1 h 30 min",
        price: "57 €",
        details: [
          "Úvodné čistenie pleti (5 minút)",
          "Rádiofrekvencia Alvi Prague - liftingový efekt (35 minút)",
          "Karboxyterapia (25 minút)",
          "LED terapia (15 minút)",
          "Záverečná starostlivosť (10 minút)",
        ],
      },
      {
        name: "Exozómy a kobido",
        duration: "1 h 15 min",
        price: "39 €",
      },
      {
        name: "Pleťové ošetrenie podľa stavu pokožky",
        duration: "1 h 15 min",
        price: "Cena po konzultácii",
        description:
          "Ošetrenie navrhnuté presne pre potreby vašej pleti – výsledky, ktoré pocítite a uvidíte. Cena bude navrhnutá a s vami odkonzultovaná po diagnostike pleti.",
      },
      {
        name: "Pleťové ošetrenie podľa stavu pokožky",
        duration: "1 h 30 min",
        price: "Cena po konzultácii",
        description:
          "Je dôležité venovať jej starostlivosť, ktorá bude prispôsobená jej aktuálnemu stavu. Či už ide o hĺbkové čistenie, výživu alebo riešenie špecifických problémov, naše ošetrenie na mieru vám prinesie tú najlepšiu starostlivosť a okamžité výsledky.",
      },
    ],
  },
  {
    id: "vizaz",
    title: "Vizáž",
    services: [
      {
        name: "Celková úprava obočia s farbením",
        duration: "20 min",
        price: "10 €",
      },
      {
        name: "Farbenie mihalníc",
        duration: "30 min",
        price: "10 €",
      },
      {
        name: "Farbenie mihalníc alebo obočia k pleťovému ošetreniu",
        duration: "15 min",
        price: "5 €",
      },
      {
        name: "Farbenie obočia Hennou a celková úprava",
        duration: "45 min",
        price: "15 €",
      },
      {
        name: "Laminácia mihalníc s farbením (Lashlift)",
        duration: "1 h",
        price: "25 €",
      },
      {
        name: "Laminácia obočia s farbením",
        duration: "1 h",
        price: "25 €",
      },
      {
        name: "Vymeranie nového tvaru obočia podľa proporcií tváre s farbením (mapping obočia)",
        duration: "45 min",
        price: "15 €",
      },
      {
        name: "Úprava obočia bez farbenia",
        duration: "30 min",
        price: "8 €",
      },
    ],
  },
];

export function PricingSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    categories[0].id
  );
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceName: string) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  return (
    <section className="relative bg-canvas py-16 md:py-24 lg:py-32 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="mb-12 md:mb-16 lg:mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
            Cenník služieb
          </span>
          <h1 className="mt-4 md:mt-6 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-editorial leading-tight text-ink">
            Kompletný cenník
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-ink/70 max-w-2xl mx-auto">
            Precízna starostlivosť s transparentnými cenami
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="mb-12 md:mb-16 flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm uppercase tracking-luxury font-sans font-semibold transition-all duration-500 ${
                activeCategory === category.id
                  ? "bg-gold text-canvas"
                  : "bg-canvas border border-gold/30 text-gold hover:bg-gold/10"
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          {categories.map(
            (category) =>
              activeCategory === category.id && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {category.services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.6,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                      className="group bg-canvas border border-stone-300 p-6 md:p-8 hover:border-gold/50 transition-all duration-500 cursor-pointer"
                      onClick={() =>
                        service.details && toggleService(service.name)
                      }
                    >
                      {/* Service Name */}
                      <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-editorial text-ink mb-3 group-hover:text-gold transition-colors duration-500">
                        {service.name}
                      </h3>

                      {/* Description */}
                      {service.description && (
                        <p className="text-xs md:text-sm text-ink/60 mb-3">
                          {service.description}
                        </p>
                      )}

                      {/* Duration & Price */}
                      <div className="flex items-center justify-between mt-4">
                        {service.duration && (
                          <span className="text-sm text-ink/60">
                            ⏱ {service.duration}
                          </span>
                        )}
                        <span className="font-sans text-xl md:text-2xl font-bold text-gold">
                          {service.price}
                        </span>
                      </div>

                      {/* Expandable Details */}
                      {service.details && (
                        <div className="mt-4 flex items-center justify-center">
                          <ChevronDown
                            className={`text-gold transition-transform duration-300 ${
                              expandedService === service.name
                                ? "rotate-180"
                                : ""
                            }`}
                            size={20}
                          />
                        </div>
                      )}

                      <AnimatePresence>
                        {service.details &&
                          expandedService === service.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-gold/30 overflow-hidden"
                            >
                              <p className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold mb-3">
                                Postup ošetrenia:
                              </p>
                              <ul className="space-y-2 text-sm text-ink/70">
                                {service.details.map((detail, idx) => (
                                  <li key={idx}>• {detail}</li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

