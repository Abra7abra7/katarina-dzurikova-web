"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";



import { allImages } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Všetko");
  const [displayedCount, setDisplayedCount] = useState(12);

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
    setDisplayedCount(12); // Reset pagination on filter change
  };

  // Distribute to 3 columns for Masonry effect
  const getColumns = (images: typeof allImages) => {
    const columns: typeof allImages[] = [[], [], []];
    images.forEach((img, i) => {
      columns[i % 3].push(img);
    });
    return columns;
  };

  const columns = getColumns(visibleImages);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-canvas py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 lg:mb-20 text-center">
          <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
            Galéria
          </span>
          <h2 className="mt-4 md:mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-editorial leading-tight text-ink px-4">
            Vízia krásy
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-ink/70 max-w-2xl mx-auto px-4">
            Pohľad do sveta profesionálnej estetickej starostlivosti
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3 px-4">
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
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4 md:gap-6">
              {col.map((image, i) => (
                <motion.div
                  key={`${image.src}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative aspect-[3/4] overflow-hidden group cursor-pointer rounded-sm"
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

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
      </div>
    </section>
  );
}



