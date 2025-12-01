"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Lifting bez skalpela",
    subtitle: "Neinvazívne omladzovanie",
    duration: "90 min",
    price: "€180",
    description:
      "Pokročilá kombinácia RF technológie a mezoterapie pre prirodzený lifting efekt. Viditeľné výsledky bez operácie.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Vyžarujúca pleť",
    subtitle: "Hĺbková regenerácia",
    duration: "60 min",
    price: "€120",
    description:
      "Luxusné ošetrenie zahŕňajúce hĺbkové čistenie, booster sérum a masáž tváre. Pleť je svieža, hydratovaná a žiariaca.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Age-Management",
    subtitle: "Prvé vrásky & prevencia",
    duration: "75 min",
    price: "€150",
    description:
      "Cielený program pre prevenciu a korekciu prvých znakov starnutia. Jemné vyhladzovanie vrások s dlhodobým efektom.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2940&auto=format&fit=crop",
  },
];

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-canvas py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
            Naše Služby
          </span>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl font-semibold tracking-editorial leading-tight text-ink max-w-3xl">
            Precízne ošetrenia pre vašu prirodzenú krásu
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* List */}
          <div className="lg:col-span-7">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1],
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group border-t border-stone-300 py-8 cursor-pointer transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-xs font-sans font-semibold text-gold">
                        {String(service.id).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-2xl md:text-4xl font-semibold tracking-editorial text-ink group-hover:text-gold transition-colors duration-500">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm uppercase tracking-luxury font-sans font-semibold text-ink/50 mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-base text-ink/70 leading-relaxed max-w-2xl mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-ink/60">
                      <span>⏱ {service.duration}</span>
                      <span className="font-semibold text-ink">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{
                      x: hoveredService === service.id ? 10 : 0,
                      rotate: hoveredService === service.id ? 45 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight
                      className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      strokeWidth={1.5}
                      size={32}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Preview Image - Desktop */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32 h-[600px]">
            <div className="relative w-full h-full overflow-hidden">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredService === service.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover saturate-75"
                    quality={90}
                  />
                </motion.div>
              ))}
              {/* Default State */}
              {hoveredService === null && (
                <motion.div
                  initial={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-stone-100"
                >
                  <p className="text-sm uppercase tracking-luxury font-sans font-semibold text-ink/30">
                    Prejdite myšou cez službu
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



