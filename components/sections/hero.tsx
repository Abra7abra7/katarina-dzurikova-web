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
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover brightness-90 saturate-75"
          >
            <source
              src="/images/hero/katarina-hero-video.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <Image
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940&auto=format&fit=crop"
            alt="Aesthetic beauty"
            fill
            className="object-cover brightness-90 saturate-75"
            priority
            quality={95}
          />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas/80" />
        {/* Subtle dark overlay for better text readability */}
        <div className="absolute inset-0 bg-ink/10" />
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
            <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
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
            className="font-sans text-base md:text-lg lg:text-xl text-ink/80 leading-relaxed max-w-2xl pr-4"
          >
            Precízna starostlivosť rešpektujúca vašu prirodzenosť.
          </motion.p>

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



