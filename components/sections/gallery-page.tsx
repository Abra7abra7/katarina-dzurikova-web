"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allImages, GalleryImage } from "@/lib/data/gallery"; // Import types if exported, else just data
import { cn } from "@/lib/utils";

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

export function GalleryPageContent() {
  const [activeFilter, setActiveFilter] = useState<string>("Všetko");
  const [displayedCount, setDisplayedCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = [
    "Všetko",
    "Pleťové ošetrenia",
    "Permanentný make-up",
    "Mihalnice a Obočie",
    "Priestory",
    "O mne",
    "Školenia",
    "Ostatné"
  ];

  // Filter images
  const filteredImages = activeFilter === "Všetko"
    ? allImages
    : allImages.filter(img => img.category === activeFilter);

  // Pagination
  const visibleImages = filteredImages.slice(0, displayedCount);
  const hasMore = visibleImages.length < filteredImages.length;

  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + 12);
  };

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setDisplayedCount(12);
  };

  const handleReservation = () => {
    window.open(BOOKIO_URL, '_blank');
  };

  // Distribute to columns for Masonry
  const getColumns = (images: typeof allImages) => {
    const columns: typeof allImages[] = [[], [], []];
    // Use 4 columns for desktop if desired, matching the old gallery-page css grid
    // But masonry logic usually maps to specific column count.
    // Let's stick to 3 columns to match Homepage for consistency as requested.
    images.forEach((img, i) => {
      columns[i % 3].push(img);
    });
    return columns;
  };

  const columns = getColumns(visibleImages);

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
              onClick={() => handleFilterChange(category)}
              className={cn(
                "px-4 md:px-6 py-2 text-xs md:text-sm uppercase tracking-luxury font-sans font-semibold transition-all duration-500 rounded-full border",
                activeFilter === category
                  ? "bg-gold border-gold text-canvas"
                  : "bg-transparent border-stone-200 text-ink/60 hover:border-gold hover:text-gold"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Gallery Grid (Masonry) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mb-16 md:mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4 md:gap-6">
              {col.map((image, i) => (
                <motion.div
                  key={`${image.src}-${i}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative aspect-[3/4] overflow-hidden group cursor-pointer rounded-sm"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover saturate-[0.85] group-hover:scale-105 group-hover:saturate-100 transition-all duration-700"
                    quality={75}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 flex justify-center">
            <Button
              variant="luxury"
              className="border-gold text-gold hover:bg-gold hover:text-canvas px-8 py-6 text-base tracking-widest"
              onClick={handleLoadMore}
            >
              Načítať ďalšie
            </Button>
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-4"
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
              className="relative max-w-5xl max-h-[90vh] w-full aspect-[3/4] md:aspect-auto h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                quality={85}
              />
            </motion.div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full px-4 pointer-events-none">
              <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold md:text-sm">
                {selectedImage.category}
              </span>
              <p className="mt-1 text-canvas text-sm md:text-base">{selectedImage.alt}</p>
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




