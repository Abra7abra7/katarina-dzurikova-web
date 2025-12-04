"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

const navItems = [
  { label: "O mne", href: "/o-mne" },
  { label: "Služby", href: "/sluzby" },
  { label: "Cenník", href: "/cennik" },
  { label: "Galéria", href: "/galeria" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleReservation = () => {
    window.open(BOOKIO_URL, '_blank');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled || !isHomePage
            ? "bg-canvas/95 backdrop-blur-md border-b border-stone-200/50 shadow-sm"
            : "bg-canvas/80 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Link
                href="/"
                className="font-serif text-2xl tracking-editorial font-semibold text-ink hover:text-gold transition-colors duration-300"
              >
                SHINE
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden md:flex items-center gap-10"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm uppercase tracking-luxury font-sans font-semibold transition-colors duration-300",
                    pathname === item.href
                      ? "text-gold"
                      : "text-ink hover:text-gold"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>

            {/* CTA Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden md:block"
            >
              <Button variant="luxury" onClick={handleReservation}>
                Rezervácia
              </Button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-ink"
              aria-label={isMobileMenuOpen ? "Zavrieť menu" : "Otvoriť menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-canvas md:hidden pt-24"
          >
            <div className="container mx-auto px-6 flex flex-col gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-3xl font-serif transition-colors duration-300 text-left",
                    pathname === item.href
                      ? "text-gold"
                      : "text-ink hover:text-gold"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="luxury"
                className="mt-8 w-full"
                onClick={() => {
                  handleReservation();
                  setIsMobileMenuOpen(false);
                }}
              >
                Rezervácia
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
