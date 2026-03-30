"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Our Journey", href: "#journey" },
];

const contactInfo = {
  phone: ["+94 76 247 7764", "+94 76 690 7764"],
  email: ["founder@hedoneskincare.com", "info@hedoneskincare.com"],
  address: [
    "No. 65, Vijayangani Lane",
    "Bathiya Mawatha, Pamunuwila",
    "Gonawala, Sri Lanka",
  ],
  whatsapp: "https://wa.me/94766907764",
  instagram: "https://www.instagram.com/hedone_natural_skincare",
  website: "www.hedoneskincare.com",
};

export default function Footer() {
  return (
    <footer className="relative bg-forest-deep overflow-hidden">
      {/* ── Top CTA Band ── */}
      <div className="border-b border-cream/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-16 md:py-22">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7">
              <p className="font-sans text-[0.6rem] font-bold tracking-[0.35em] uppercase text-sage-light/70 mb-4">
                Start your natural skincare journey
              </p>
              <h3
                className="font-serif leading-[1.1]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--color-cream)" }}
              >
                Your skin deserves ingredients
                <br className="hidden md:block" /> that{" "}
                <span className="italic text-terracotta-light font-normal">
                  understand it.
                </span>
              </h3>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex lg:justify-end">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-cream text-forest px-8 py-4 rounded-full hover:bg-terracotta-light hover:text-cream transition-all duration-500"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.97 0-3.837-.53-5.445-1.477l-.39-.232-3.758.98.998-3.648-.254-.404A9.72 9.72 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
                </svg>
                <span className="font-sans text-sm font-medium tracking-wide">
                  Chat with Us
                </span>
                <svg
                  className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-14 md:py-18">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8"
        >
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-block mb-5">
              <img
                src="/logo-trans.png"
                alt="Hedone"
                className="h-28 w-auto brightness-0 invert"
              />
            </a>
            <p className="font-sans text-cream/40 text-[0.8rem] leading-[1.8] max-w-xs mb-6">
              100% natural and vegan skincare crafted in Sri Lanka. Extensively
              researched, quality assured, and thoroughly tested.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center text-cream/40 hover:border-cream/30 hover:text-cream/80 transition-all duration-500"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center text-cream/40 hover:border-cream/30 hover:text-cream/80 transition-all duration-500"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <p className="font-sans text-[0.6rem] font-bold tracking-[0.3em] uppercase text-cream/25 mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-[0.85rem] text-cream/50 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 lg:col-start-9">
            <p className="font-sans text-[0.6rem] font-bold tracking-[0.3em] uppercase text-cream/25 mb-5">
              Get in Touch
            </p>
            <div className="space-y-5">
              {/* Phone */}
              <div>
                {contactInfo.phone.map((num) => (
                  <a
                    key={num}
                    href={`tel:${num.replace(/\s/g, "")}`}
                    className="block font-sans text-[0.85rem] text-cream/50 hover:text-cream transition-colors duration-300 leading-relaxed"
                  >
                    {num}
                  </a>
                ))}
              </div>
              {/* Email */}
              <div>
                {contactInfo.email.map((em) => (
                  <a
                    key={em}
                    href={`mailto:${em}`}
                    className="block font-sans text-[0.85rem] text-cream/50 hover:text-cream transition-colors duration-300 leading-relaxed"
                  >
                    {em}
                  </a>
                ))}
              </div>
              {/* Address */}
              <div>
                {contactInfo.address.map((line) => (
                  <p
                    key={line}
                    className="font-sans text-[0.8rem] text-cream/30 leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-cream/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[0.65rem] text-cream/20 tracking-wide">
            &copy; {new Date().getFullYear()} HEDONE Natural Skincare. All
            rights reserved.
          </p>
          <p className="font-sans text-[0.65rem] text-cream/20 tracking-wide">
            Crafted by{" "}
            <a
              href="https://ahamedwebstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/30 hover:text-cream/60 transition-colors duration-300"
            >
              Ahamed Web Studio
            </a>
          </p>
        </div>
      </div>

      {/* ── Background texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(168,181,160,0.8) 1px, transparent 0)
          `,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
    </footer>
  );
}