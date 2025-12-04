"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Procedúry
  {
    src: "/images/gallery/procedury/laser-cervene-svetlo.jpeg",
    alt: "Laserové ošetrenie s červeným svetlom",
    category: "Procedúry",
  },
  {
    src: "/images/gallery/procedury/microneedling.jpeg",
    alt: "Microneedling - ošetrenie pokožky",
    category: "Procedúry",
  },
  {
    src: "/images/gallery/procedury/pmu-pery.jpeg",
    alt: "Permanentný make-up pier - priebeh",
    category: "Procedúry",
  },
  {
    src: "/images/gallery/procedury/pmu-oboci.jpeg",
    alt: "Permanentný make-up obočia",
    category: "Procedúry",
  },
  // Výsledky
  {
    src: "/images/gallery/vysledky/perfect-lips-vysledok.jpeg",
    alt: "Perfect lips - výsledok",
    category: "Výsledky",
  },
  {
    src: "/images/gallery/vysledky/pletove-osetrenie.jpeg",
    alt: "Pleťové ošetrenie - výsledok",
    category: "Výsledky",
  },
  {
    src: "/images/gallery/vysledky/mihalnice-vysledok.jpeg",
    alt: "Mihalnice - výsledok",
    category: "Výsledky",
  },
  // Atmosféra
  {
    src: "/images/gallery/atmosfera/elegantne-prostredie.jpeg",
    alt: "Elegantné prostredie kliniky",
    category: "Atmosféra",
  },
  {
    src: "/images/gallery/atmosfera/relaxacia.jpeg",
    alt: "Relaxácia počas ošetrenia",
    category: "Atmosféra",
  },
  {
    src: "/images/gallery/atmosfera/klientka-osetrenie.jpeg",
    alt: "Klientka počas ošetrenia",
    category: "Atmosféra",
  },
  {
    src: "/images/gallery/atmosfera/klientka-relax.jpeg",
    alt: "Klientka v relaxačnom prostredí",
    category: "Atmosféra",
  },
  {
    src: "/images/gallery/atmosfera/klientka-pohar.jpeg",
    alt: "Klientka s pohárom v relaxačnom prostredí",
    category: "Atmosféra",
  },
  {
    src: "/images/gallery/atmosfera/klientka-wellness.jpeg",
    alt: "Wellness atmosféra",
    category: "Atmosféra",
  },
  // Priestory
  {
    src: "/images/gallery/priestory/interier-kreslo.jpeg",
    alt: "Interiér kliniky - ošetrovacie kreslo",
    category: "Priestory",
  },
  {
    src: "/images/gallery/priestory/pracovisko.jpeg",
    alt: "Pracovisko s profesionálnym vybavením",
    category: "Priestory",
  },
  {
    src: "/images/gallery/priestory/certifikaty.jpeg",
    alt: "Certifikáty a ocenenia",
    category: "Priestory",
  },
];

const categories = ["Všetko", "Procedúry", "Výsledky", "Atmosféra", "Priestory"];

export function GalleryPageContent() {
  const [activeFilter, setActiveFilter] = useState<string>("Všetko");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeFilter === "Všetko" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

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
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
            Galéria
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-editorial leading-tight text-ink">
            Vízia krásy
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl mx-auto">
            Pohľad do sveta profesionálnej estetickej starostlivosti. Prezrite si naše procedúry, výsledky a priestory.
          </p>
        </motion.div>
      </section>

      {/* Filter Buttons */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 text-sm uppercase tracking-luxury font-sans font-semibold transition-all duration-500 ${
                activeFilter === category
                  ? "bg-gold text-canvas"
                  : "bg-canvas border border-gold/30 text-gold hover:bg-gold/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mb-16 md:mb-24">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                    {image.category}
                  </span>
                  <p className="mt-1 text-sm text-canvas/90">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-canvas hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Zavrieť"
            >
              <X size={32} strokeWidth={1.5} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full aspect-[3/4]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                quality={95}
              />
            </motion.div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                {selectedImage.category}
              </span>
              <p className="mt-1 text-canvas">{selectedImage.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            Chcete zažiť podobnú premenu?
          </h2>
          <p className="text-canvas/70 max-w-2xl mx-auto mb-8">
            Rezervujte si termín a spoločne vytvoríme vašu vlastnú cestu ku kráse.
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

