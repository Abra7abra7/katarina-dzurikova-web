"use client";

import { ReactNode, useEffect, useState } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Vypnúť Lenis na mobile/tablet pre plynulejší scroll
    const isMobile = window.innerWidth < 1024 || 'ontouchstart' in window;
    
    if (isMobile) {
      return; // Na mobile používame natívny scroll
    }

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}



