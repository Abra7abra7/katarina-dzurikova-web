"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

// Cloudflare R2 CDN pre video
const CLOUDFLARE_R2_URL = "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev";

const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export function HeroSection() {
  const [videoError, setVideoError] = useState(false);

  const handleReservation = () => {
    window.open(BOOKIO_URL, '_blank');
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-canvas"
    >
      {/* Background Video/Image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1] }}
        className="absolute inset-0 z-0"
      >
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            poster="/images/about/katarina-portrait.jpeg"
            className="absolute inset-0 w-full h-full object-cover object-bottom lg:[object-position:center_80%]"
          >
            <source
              src={`${CLOUDFLARE_R2_URL}/katarina-hero-video.mp4`}
              type="video/mp4"
            />
          </video>
        ) : (
          <Image
            src="/images/about/katarina-portrait.jpeg"
            alt="SHINE Štúdio Krásy Liptov"
            fill
            className="object-cover"
            priority
            quality={95}
          />
        )}
        {/* Light overlay for better navbar visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/70 via-canvas/30 to-canvas/80" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/40 via-transparent to-canvas/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <span className="inline-block px-4 py-2 bg-ink/80 backdrop-blur-sm text-xs uppercase tracking-luxury font-sans font-semibold text-gold border border-gold/30">
              Štúdio Krásy Liptov
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-editorial leading-none text-ink mb-6 md:mb-8 overflow-hidden"
          >
            <div className="overflow-hidden">
              <motion.span variants={textReveal} className="inline-block">
                VIDITEĽNÁ
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span variants={textReveal} className="inline-block">
                KRÁSA
              </motion.span>
            </div>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="font-sans text-base md:text-lg lg:text-xl text-ink/80 leading-relaxed max-w-2xl pr-4 mb-8"
          >
            Precízna starostlivosť rešpektujúca vašu prirodzenosť.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <Button variant="luxury" onClick={handleReservation} className="text-base md:text-lg px-8 py-6">
              Rezervovať termín
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-12 left-6 lg:left-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-px h-16 bg-ink/30" />
              <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-ink/60 -rotate-90 origin-left translate-y-8">
                Scroll
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
