"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                            className="w-full max-w-4xl h-[85vh] bg-canvas rounded-2xl shadow-2xl overflow-hidden relative pointer-events-auto border border-gold/20 flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200/50 bg-canvas">
                                <span className="text-sm uppercase tracking-luxury font-sans font-semibold text-gold">
                                    Rezervácia termínu
                                </span>
                                <button
                                    onClick={onClose}
                                    className="p-2 -mr-2 text-ink/50 hover:text-ink hover:bg-stone-100 rounded-full transition-colors"
                                    aria-label="Zavrieť"
                                >
                                    <X size={24} strokeWidth={1.5} />
                                </button>
                            </div>

                            {/* Iframe Content */}
                            <div className="flex-1 w-full bg-white relative">
                                <iframe
                                    src={BOOKIO_URL}
                                    className="absolute inset-0 w-full h-full border-0"
                                    title="Bookio Rezervácia"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                />
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
