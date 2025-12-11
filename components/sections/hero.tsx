"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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

  // Neskôr nahradiť configom alebo environment premennou
  const R2_BASE = "https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev";
  const VIDEO_SRC = `${R2_BASE}/katarina-hero-section.mp4`;
  const POSTER_SRC = `${R2_BASE}/katarina-hero-poster.jpg`;

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-canvas"
    >
      {/* Background Video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={POSTER_SRC}
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover object-[center_75%] brightness-[0.85]"
          >
            <source
              src={VIDEO_SRC}
              type="video/mp4"
            />
          </video>
        ) : (
          <Image
            src={POSTER_SRC}
            alt="SHINE Štúdio Krásy - kozmetika Liptov"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.85]"
            priority
            quality={80}
          />
        )}
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="block text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-medium text-white/80 mb-6 md:mb-8">
            Štúdio Krásy Liptov
          </span>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-white mb-8 md:mb-10 drop-shadow-2xl">
            <span className="text-gold">VIDITEĽNÁ</span> <br className="md:hidden" /> KRÁSA
          </h1>

          <p className="font-sans text-base md:text-lg text-white/90 font-light leading-relaxed max-w-lg mx-auto tracking-wide">
            Precízna starostlivosť rešpektujúca vašu prirodzenosť.
          </p>
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-white/30 overflow-hidden">
            <div className="w-full h-full bg-gold animate-scrolldown" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}



