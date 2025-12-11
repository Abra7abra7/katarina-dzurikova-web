"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react"; // Added Calendar icon
import Image from "next/image";
import { galleryImages } from "@/lib/data/gallery";
import { Button } from "@/components/ui/button";

interface Service {
  name: string;
  duration?: string;
  price: string;
  description?: string;
  details?: string[];
  group?: string; // New field for grouping
}

interface Category {
  id: string;
  title: string;
  services: Service[];
  galleryKey: keyof typeof galleryImages;
}

const categories: Category[] = [
  {
    id: "pletove",
    title: "Pleťové ošetrenia",
    galleryKey: "pletove",
    services: [
      // PRÍSTROJOVÉ / HIGH-TECH
      {
        name: "Hydratačné ošetrenie prístrojom HYDRABEAUTY",
        duration: "1 h 15 min",
        price: "43 €",
        group: "Prístrojové & High-Tech Ošetrenia",
        details: [
          "Úvodná analýza pleti a trojfázové čistenie (10 min)",
          "Použitie prístroja Hydrabeauty (40 min)",
          "Aplikácia alginátovej masky (15 min)",
          "LED terapia počas pôsobenia masky",
          "Záverečná aplikácia hydratačného séra a krému (10 min)",
        ],
      },
      {
        name: "Hĺbkové hydratačné KARBOXY ošetrenie",
        duration: "1 h 30 min",
        price: "44 €",
        group: "Prístrojové & High-Tech Ošetrenia",
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
        group: "Prístrojové & High-Tech Ošetrenia",
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
        name: "Liftingové ošetrenie RÁDIOFREKVENCIA",
        duration: "1 h 15 min",
        price: "43 €",
        group: "Prístrojové & High-Tech Ošetrenia",
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
        group: "Prístrojové & High-Tech Ošetrenia",
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
        group: "Prístrojové & High-Tech Ošetrenia",
      },

      // ZÁKLADNÉ & ČISTIACE
      {
        name: "Hydratačné ošetrenie klasik",
        duration: "1 h 15 min",
        price: "39 €",
        group: "Základné & Čistiace Ošetrenia",
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
        name: "Čistiace ošetrenie",
        duration: "1 h 15 min",
        price: "37 €",
        group: "Základné & Čistiace Ošetrenia",
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
        group: "Základné & Čistiace Ošetrenia",
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

      // RELAXAČNÉ & OSTATNÉ
      {
        name: "Relaxačné ošetrenie s KOBIDO masážou",
        duration: "1 h 15 min",
        price: "35 €",
        group: "Relaxačné & Špeciálne",
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
        name: "Chemický peeling",
        duration: "1 h",
        price: "39 €",
        group: "Relaxačné & Špeciálne",
        details: [
          "Povrchové čistenie a diagnostika pleti (10 min)",
          "Aplikácia chemického peelingu (15 min)",
          "Neutralizačná maska (20 min)",
          "Zapracovanie antiage séra s krátkou masážou (10 min)",
          "Záverečná aplikácia krému (5 min)",
        ],
      },

      // KONZULTÁCIE
      {
        name: "Pleťové ošetrenie podľa stavu pokožky",
        duration: "1 h 15 min",
        price: "Konzultácia",
        description: "Diagnostika a návrh ošetrenia na mieru",
        group: "Konzultácie & Diagnostika",
      },
    ],
  },
  {
    id: "permanent",
    title: "Permanentný make-up",
    galleryKey: "permanent",
    services: [
      {
        name: "Perfect lips (tetovanie pier)",
        duration: "3 h",
        price: "150 €",
        description: "vrátane konzultácie",
      },
      {
        name: "Púdrové obočie",
        duration: "3 h",
        price: "150 €",
        description: "vrátane konzultácie",
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
    id: "mihalnice",
    title: "Mihalnice",
    galleryKey: "mihalnice",
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
    id: "vizaz",
    title: "Vizáž",
    galleryKey: "mihalnice",
    services: [
      {
        name: "Celková úprava obočia s farbením",
        duration: "20 min",
        price: "10 €",
        group: "Úprava Obočia"
      },
      {
        name: "Farbenie obočia Hennou a celková úprava",
        duration: "45 min",
        price: "15 €",
        group: "Úprava Obočia"
      },
      {
        name: "Laminácia obočia s farbením",
        duration: "1 h",
        price: "25 €",
        group: "Úprava Obočia"
      },
      {
        name: "Mapping obočia (s farbením)",
        duration: "45 min",
        price: "15 €",
        group: "Úprava Obočia"
      },
      {
        name: "Úprava obočia bez farbenia",
        duration: "30 min",
        price: "8 €",
        group: "Úprava Obočia"
      },
      {
        name: "Farbenie mihalníc",
        duration: "30 min",
        price: "10 €",
        group: "Mihalnice & Doplnky"
      },
      {
        name: "Laminácia mihalníc s farbením (Lashlift)",
        duration: "1 h",
        price: "25 €",
        group: "Mihalnice & Doplnky"
      },
      {
        name: "Farbenie mihalníc/obočia k ošetreniu",
        duration: "15 min",
        price: "5 €",
        group: "Mihalnice & Doplnky"
      },
    ],
  },
  {
    id: "doplnkove",
    title: "Doplnkové služby",
    galleryKey: "ostatne",
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
];

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

export function PricingSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(categories[0].id);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceName: string) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  const activeCategory = categories.find((c) => c.id === activeCategoryId) || categories[0];
  const activeImages = galleryImages[activeCategory.galleryKey] || [];

  return (
    <section className="relative bg-canvas py-16 md:py-24 lg:py-32 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
            Investícia do seba
          </span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-ink">
            Cenník služieb
          </h1>
        </motion.div>

        {/* Category Navigation */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4 sticky top-24 z-20 bg-canvas/80 backdrop-blur-md py-4 -mx-4 px-4 border-b border-stone-100">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategoryId(category.id)}
              className={`px-5 py-2 text-xs md:text-sm uppercase tracking-wider font-sans font-semibold transition-all duration-300 rounded-full border ${activeCategoryId === category.id
                ? "bg-ink border-ink text-canvas shadow-lg"
                : "bg-white border-stone-200 text-ink/60 hover:border-gold hover:text-gold"
                }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Photos */}
          <div className="hidden lg:block lg:col-span-5 sticky top-48">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategoryId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid gap-4"
              >
                {activeImages.slice(0, 2).map((img, idx) => (
                  <div key={idx} className={`relative overflow-hidden rounded-sm shadow-sm ${idx === 0 ? 'aspect-[4/3]' : 'aspect-square'}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Pricing List */}
          <div className="lg:col-span-7 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategoryId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeCategory.services.map((service, index) => {
                  // Check if this service starts a new group
                  const showGroupHeader = index === 0 || service.group !== activeCategory.services[index - 1].group;

                  return (
                    <div key={index}>
                      {showGroupHeader && service.group && (
                        <h3 className="font-serif text-2xl text-gold mt-8 mb-6 border-b border-gold/20 pb-2">
                          {service.group}
                        </h3>
                      )}

                      <div
                        className="group relative py-5 border-b border-stone-100 hover:bg-stone-50 transition-colors px-2 -mx-2 rounded-sm cursor-pointer"
                        onClick={() => service.details && toggleService(service.name)}
                      >
                        <div className="flex justify-between items-baseline gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-sans font-medium text-lg text-ink group-hover:text-gold transition-colors">
                                {service.name}
                              </span>
                              {service.details && (
                                <ChevronDown size={14} className={`text-stone-400 transition-transform ${expandedService === service.name ? 'rotate-180' : ''}`} />
                              )}
                            </div>
                            {service.description && (
                              <p className="text-sm text-ink/50 mt-1">{service.description}</p>
                            )}
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-sans font-bold text-lg text-ink">{service.price}</span>
                            {service.duration && (
                              <p className="text-xs text-stone-400">{service.duration}</p>
                            )}
                          </div>
                        </div>

                        {/* Details Expansion */}
                        <AnimatePresence>
                          {service.details && expandedService === service.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 text-sm text-ink/70 space-y-1 pl-4 border-l-2 border-gold/30 mt-2">
                                {service.details.map((detail, i) => (
                                  <p key={i}>• {detail}</p>
                                ))}
                                <Button
                                  variant="link"
                                  className="p-0 h-auto text-gold mt-2 font-semibold"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(BOOKIO_URL, '_blank');
                                  }}
                                >
                                  Rezervovať termín →
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

