"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

import { Service, services } from "@/lib/data/services";

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(1);

  const handleReservation = () => {
    window.open(BOOKIO_URL, '_blank');
  };

  return (
    <section id="services" className="relative bg-canvas py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
            Naše Služby
          </span>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl font-semibold tracking-editorial leading-tight text-ink max-w-3xl">
            Precízne ošetrenia pre vašu prirodzenú krásu
          </h2>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* List */}
          <div className="lg:col-span-7">
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(1)}
                className="group border-t border-stone-300 py-8 cursor-pointer transition-all duration-500"
              >
                {/* Mobile Image */}
                <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden lg:hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ${service.imagePosition === "top" ? "object-top" : ""
                      }`}
                    quality={75}
                    loading="lazy"
                  />
                </div>

                <div className="flex items-start justify-between gap-4 md:gap-8">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 md:gap-4 mb-2">
                      <span className="text-xs font-sans font-semibold text-gold">
                        {String(service.id).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl lg:text-4xl font-semibold tracking-editorial text-ink group-hover:text-gold transition-colors duration-500">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm uppercase tracking-luxury font-sans font-semibold text-ink/50 mb-3 md:mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-sm md:text-base text-ink/70 leading-relaxed max-w-2xl mb-3 md:mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-ink/60">
                      <span>⏱ {service.duration}</span>
                      <span className="font-semibold text-ink text-base md:text-lg">
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
                    className="hidden md:block"
                  >
                    <ArrowUpRight
                      className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      strokeWidth={1.5}
                      size={32}
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Preview Image - Desktop */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32 h-[600px]">
            <div className="relative w-full h-full overflow-hidden">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: service.id === 1 ? 1 : 0 }}
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
                    sizes="42vw"
                    className="object-cover"
                    quality={75}
                    priority={true}
                  />
                </motion.div>
              ))}
              {/* Default State */}

            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 md:mt-20 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/sluzby">
            <Button variant="luxury" className="text-base md:text-lg px-8 md:px-12 py-6 w-full sm:w-auto">
              Všetky služby
            </Button>
          </Link>
          <Link href="/cennik">
            <Button variant="luxury" className="text-base md:text-lg px-8 md:px-12 py-6 w-full sm:w-auto">
              Zobraziť cenník
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
