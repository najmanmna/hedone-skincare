"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show tooltip briefly after button appears
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setTooltip(true), 1500);
      const hide = setTimeout(() => setTooltip(false), 5000);
      return () => {
        clearTimeout(timer);
        clearTimeout(hide);
      };
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="hidden md:block bg-white border border-sage-muted/20 shadow-[0_8px_30px_rgba(45,74,62,0.1)] px-4 py-2.5 rounded-xl"
              >
                <p className="font-sans text-[0.7rem] text-forest font-medium whitespace-nowrap">
                  Chat with us on WhatsApp
                </p>
                {/* Arrow */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-white border-r border-b border-sage-muted/20 rotate-[-45deg]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href="https://wa.me/94762477764?text=Hi%2C%20I%27m%20interested%20in%20HEDONE%20products"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
            className="group relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.45)] hover:scale-105 transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

            {/* Icon */}
            <svg
              className="w-6 h-6 text-white relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.97 0-3.837-.53-5.445-1.477l-.39-.232-3.758.98.998-3.648-.254-.404A9.72 9.72 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}