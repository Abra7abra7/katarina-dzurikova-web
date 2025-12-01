"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const galleryImages = {
  column1: [
    {
      src: "/images/gallery/client-relaxing-1.jpg",
      alt: "Klientka počas procedúry - relaxačná atmosféra",
      category: "Atmosféra",
    },
    {
      src: "/images/gallery/laser-treatment-1.jpg",
      alt: "Pokročilé laserové ošetrenie",
      category: "Procedúry",
    },
    {
      src: "/images/gallery/lip-treatment-1.jpg",
      alt: "Permanentný make-up pier",
      category: "Výsledky",
    },
    {
      src: "/images/gallery/clinic-interior-1.jpg",
      alt: "Interiér kliniky",
      category: "Priestory",
    },
  ],
  column2: [
    {
      src: "/images/gallery/laser-treatment-2.jpg",
      alt: "Starostlivé ošetrenie pokožky",
      category: "Procedúry",
    },
    {
      src: "/images/gallery/katarina-tools.jpg",
      alt: "Profesionálne vybavenie",
      category: "Profesionalita",
    },
    {
      src: "/images/gallery/lip-treatment-2.jpg",
      alt: "Prirodzený výsledok pier",
      category: "Výsledky",
    },
    {
      src: "/images/gallery/certificates.jpg",
      alt: "Certifikáty a ocenenia",
      category: "Kvalifikácia",
    },
  ],
  column3: [
    {
      src: "/images/gallery/client-relaxing-2.jpg",
      alt: "Luxusné prostredie kliniky",
      category: "Atmosféra",
    },
    {
      src: "/images/gallery/facial-treatment.jpg",
      alt: "Ošetrenie pleti najmodernejšou technikou",
      category: "Procedúry",
    },
    {
      src: "/images/gallery/katarina-portrait.jpg",
      alt: "MUDr. Katarína Dzuriková",
      category: "Tím",
    },
    {
      src: "/images/gallery/clinic-interior-2.jpg",
      alt: "Priestor pre vašu starostlivosť",
      category: "Priestory",
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
      className="relative bg-canvas py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
            Galéria
          </span>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl font-semibold tracking-editorial leading-tight text-ink">
            Vízia krásy
          </h2>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl mx-auto">
            Pohľad do sveta profesionálnej estetickej starostlivosti
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 text-sm uppercase tracking-luxury font-sans font-semibold transition-all duration-500 ${
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  className="object-cover saturate-75 group-hover:scale-105 group-hover:saturate-100 transition-all duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                    {image.category}
                  </span>
                  <p className="mt-2 text-sm text-canvas/90">{image.alt}</p>
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
                  className="object-cover saturate-75 group-hover:scale-105 group-hover:saturate-100 transition-all duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                    {image.category}
                  </span>
                  <p className="mt-2 text-sm text-canvas/90">{image.alt}</p>
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
                  className="object-cover saturate-75 group-hover:scale-105 group-hover:saturate-100 transition-all duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                    {image.category}
                  </span>
                  <p className="mt-2 text-sm text-canvas/90">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}



