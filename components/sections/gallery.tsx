"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const galleryImages = {
  column1: [
    {
      src: "/images/gallery/WhatsApp Image 2025-12-01 at 20.53.38 (3).jpeg",
      alt: "Klientka v luxusnom relaxačnom prostredí",
      category: "Atmosféra",
    },
    {
      src: "/images/gallery/WhatsApp Image 2025-12-01 at 20.53.38.jpeg",
      alt: "Pokročilé laserové ošetrenie tváre",
      category: "Procedúry",
    },
    {
      src: "/images/gallery/WhatsApp Image 2025-12-01 at 20.53.46 (5).jpeg",
      alt: "Profesionálny permanentný make-up pier",
      category: "Výsledky",
    },
    {
      src: "/images/gallery/WhatsApp Image 2025-12-01 at 20.53.46 (1).jpeg",
      alt: "Moderné vybavenie kliniky",
      category: "Priestory",
    },
  ],
  column2: [
    {
      src: "/images/gallery/WhatsApp Image 2025-12-01 at 20.53.38 (2).jpeg",
      alt: "Precízne laserové ošetrenie s červeným svetlom",
      category: "Procedúry",
    },
    {
      src: "/images/gallery/WhatsApp Image 2025-12-01 at 20.53.46 (9).jpeg",
      alt: "Katarína Dzuriková s profesionálnym vybavením",
      category: "Profesionalita",
    },
    {
      src: "/images/gallery/WhatsApp Image 2025-12-01 at 20.53.46.jpeg",
      alt: "Microneedling - ošetrenie pokožky",
      category: "Procedúry",
    },
    {
      src: "/images/gallery/WhatsApp Image 2025-12-01 at 20.53.38 (1).jpeg",
      alt: "Klientka počas ošetrenia v pokojnom prostredí",
      category: "Atmosféra",
    },
  ],
  column3: [
    {
      src: "/images/gallery/WhatsApp Image 2025-12-01 at 20.53.45.jpeg",
      alt: "Elegantné prostredie kliniky",
      category: "Atmosféra",
    },
    {
      src: "/images/gallery/WhatsApp Image 2025-12-01 at 20.53.46 (7).jpeg",
      alt: "Permanentný make-up pier - priebeh ošetrenia",
      category: "Procedúry",
    },
    {
      src: "/images/gallery/WhatsApp Image 2025-12-01 at 20.53.46 (11).jpeg",
      alt: "Katarína Dzuriková - vaša kozmetička v Liptove",
      category: "Profesionalita",
    },
    {
      src: "/images/gallery/WhatsApp Image 2025-12-01 at 20.53.45 (4).jpeg",
      alt: "Relaxácia počas ošetrenia",
      category: "Atmosféra",
    },
  ],
};

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Všetko");
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds for each column
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const categories = [
    "Všetko",
    "Procedúry",
    "Výsledky",
    "Atmosféra",
    "Priestory",
  ];

  const filterImages = (images: typeof galleryImages.column1) => {
    if (activeFilter === "Všetko") return images;
    return images.filter((img) => img.category === activeFilter);
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-canvas py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 lg:mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
            Galéria
          </span>
          <h2 className="mt-4 md:mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-editorial leading-tight text-ink px-4">
            Vízia krásy
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-ink/70 max-w-2xl mx-auto px-4">
            Pohľad do sveta profesionálnej estetickej starostlivosti
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 flex flex-wrap justify-center gap-2 md:gap-3 px-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 md:px-6 py-2 text-xs md:text-sm uppercase tracking-luxury font-sans font-semibold transition-all duration-500 ${
                activeFilter === category
                  ? "bg-gold text-canvas"
                  : "bg-canvas border border-gold/30 text-gold hover:bg-gold/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Parallax Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="space-y-6">
            {filterImages(galleryImages.column1).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1],
                }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover saturate-75 group-hover:scale-105 group-hover:saturate-100 transition-all duration-700"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                    {image.category}
                  </span>
                  <p className="mt-1 md:mt-2 text-xs md:text-sm text-canvas/90">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2 - Different parallax speed */}
          <motion.div style={{ y: y2 }} className="space-y-6 md:mt-12">
            {filterImages(galleryImages.column2).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.1,
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1],
                }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover saturate-75 group-hover:scale-105 group-hover:saturate-100 transition-all duration-700"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                    {image.category}
                  </span>
                  <p className="mt-1 md:mt-2 text-xs md:text-sm text-canvas/90">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div style={{ y: y3 }} className="space-y-6 md:mt-6">
            {filterImages(galleryImages.column3).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1],
                }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover saturate-75 group-hover:scale-105 group-hover:saturate-100 transition-all duration-700"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                    {image.category}
                  </span>
                  <p className="mt-1 md:mt-2 text-xs md:text-sm text-canvas/90">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}



