"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const galleryImages = {
  column1: [
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2835&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2940&auto=format&fit=crop",
  ],
  column2: [
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2940&auto=format&fit=crop",
  ],
  column3: [
    "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2787&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524946461678-c0cce4ac8053?q=80&w=2835&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2938&auto=format&fit=crop",
  ],
};

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds for each column
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

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
        </motion.div>

        {/* Parallax Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="space-y-6">
            {galleryImages.column1.map((image, index) => (
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
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover saturate-75 group-hover:scale-105 group-hover:saturate-100 transition-all duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2 - Different parallax speed */}
          <motion.div style={{ y: y2 }} className="space-y-6 md:mt-12">
            {galleryImages.column2.map((image, index) => (
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
                  src={image}
                  alt={`Gallery image ${index + 4}`}
                  fill
                  className="object-cover saturate-75 group-hover:scale-105 group-hover:saturate-100 transition-all duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div style={{ y: y3 }} className="space-y-6 md:mt-6">
            {galleryImages.column3.map((image, index) => (
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
                  src={image}
                  alt={`Gallery image ${index + 7}`}
                  fill
                  className="object-cover saturate-75 group-hover:scale-105 group-hover:saturate-100 transition-all duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}



