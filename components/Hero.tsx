"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageToggle from "./LanguageToggle";

const slideUp = (delay: number) => ({
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
  },
});

const reveal = (delay: number) => ({
  initial: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
  animate: { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)" },
  transition: { duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  const t = useTranslations("hero");
  const tn = useTranslations("nav");

  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -30]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const mx = useSpring(mousePos.x * 12, { stiffness: 80, damping: 30 });
  const my = useSpring(mousePos.y * 12, { stiffness: 80, damping: 30 });

  const navLinks = [
    { label: tn("philosophy"), href: "#about" },
    { label: tn("products"), href: "#products" },
    { label: tn("journey"), href: "#journey" },
  ];

  const marqueeItems = [
    t("marquee0"),
    t("marquee1"),
    t("marquee2"),
    t("marquee3"),
    t("marquee4"),
    t("marquee5"),
    t("marquee6"),
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-cream selection:bg-sage-muted selection:text-forest-deep">

      {/* ── Navbar ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed md:relative top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-14 py-6 border-b border-sage-muted/30 bg-cream/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none"
      >
        <a href="#" className="flex items-center gap-2">
          <img src="/logo-nav.png" alt="Hedone Logo" className="h-8 md:h-10 w-auto" />
          <img src="/logo-text.png" alt="Hedone" className="h-6 md:h-7 lg:h-8 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase text-charcoal-light hover:text-forest transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <LanguageToggle />
          <a
            href="https://wa.me/94766907764"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase bg-forest text-cream px-7 py-3 rounded-full hover:bg-forest-deep transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-forest/10"
          >
            {tn("cta")}
          </a>
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 relative z-50"
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`block w-6 h-[1.5px] bg-forest transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-4 h-[1.5px] bg-forest ml-auto transition-all duration-300 ${menuOpen ? "opacity-0 w-6 -rotate-45" : ""}`} />
        </button>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed top-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md pt-24 pb-10 px-6 border-b border-sage-muted/30 shadow-xl"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-charcoal-light hover:text-forest transition-colors duration-300 border-b border-sage-muted/20 pb-4"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3">
                <LanguageToggle />
              </div>
              <a
                href="https://wa.me/94766907764"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-block text-center font-sans text-sm font-medium tracking-[0.2em] uppercase bg-forest text-cream px-7 py-4 rounded-full hover:bg-forest-deep transition-all duration-300"
              >
                {tn("cta")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero Content ── */}
      <div className="relative z-10 px-6 md:px-10 lg:px-14 pt-28 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 lg:items-start">

          {/* ──────── LEFT — Main Image ──────── */}
          <div className="lg:col-span-6 relative w-full">
            <motion.div
              {...reveal(0.2)}
              style={{ y: yImage }}
              className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-t-[10rem] rounded-b-3xl shadow-2xl shadow-forest/5"
            >
              <img
                src="/main-image.png"
                alt="HEDONE Skincare Ritual"
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent flex flex-col justify-end h-1/2 pb-36 md:pb-10">
                <motion.div {...slideUp(1.0)}>
                  <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-sage-light/80 mb-3">
                    {t("rootedIn")}
                  </p>
                  <p className="font-serif text-cream text-xl md:text-2xl leading-snug max-w-[280px]">
                    {t("imageLine")}
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* ── Floating Certification Card ── */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-14 md:-bottom-6 -right-2 md:-right-8 z-20 w-72 md:w-56 rounded-3xl p-5 bg-white border border-warm-gray/10 shadow-[0_20px_60px_rgba(45,74,62,0.2)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-terracotta relative">
                  <span className="absolute inset-0 rounded-full bg-terracotta animate-ping opacity-50" />
                </span>
                <span className="font-sans text-[0.6rem] font-bold tracking-[0.2em] uppercase text-forest/70">
                  {t("ourPromise")}
                </span>
              </div>
              <p className="font-serif text-forest-deep font-medium text-base leading-snug mb-4">
                {t("promise")}
              </p>
              <div className="flex flex-wrap gap-2">
                {[t("gmp"), t("ecocert"), t("ifra")].map((b) => (
                  <span
                    key={b}
                    className="font-sans text-[0.5rem] font-bold tracking-[0.15em] uppercase text-forest-deep bg-sage-muted/40 px-2 py-1.5 rounded"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ──────── RIGHT — Content + Bento ──────── */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Headline Block */}
            <motion.div style={{ y: yText }} className="flex flex-col justify-center mb-12">
              <motion.div {...slideUp(0.3)} className="mb-0">
                <img src="/logo-full.png" alt="Hedone" className="h-36 md:h-44 lg:h-52 w-auto" />
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1
                  {...slideUp(0.4)}
                  className="font-serif text-forest leading-[1.05] text-5xl md:text-6xl lg:text-7xl tracking-tight"
                >
                  {t("h1Line1")}
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  {...slideUp(0.5)}
                  className="font-serif text-forest leading-[1.05] text-5xl md:text-6xl lg:text-7xl tracking-tight"
                >
                  {t("h1Line2Start")}{" "}
                  <span className="italic text-terracotta font-light">{t("h1Accent")}</span>
                </motion.h1>
              </div>

              <motion.div {...slideUp(0.6)} className="mt-8 max-w-md">
                <p className="font-sans text-charcoal-light text-base md:text-lg leading-relaxed">
                  {t("description")}{" "}
                  <span className="text-forest font-medium">{t("descriptionAccent")}</span>
                </p>
              </motion.div>

              {/* CTA Line */}
              <motion.div {...slideUp(0.7)} className="mt-10">
                <a
                  href="#products"
                  className="group inline-flex items-center gap-4 font-sans text-[0.7rem] font-bold tracking-[0.2em] uppercase text-forest hover:text-terracotta transition-colors duration-500"
                >
                  <span className="block w-12 h-[1px] bg-forest group-hover:w-20 group-hover:bg-terracotta transition-all duration-500" />
                  {t("cta")}
                  <svg className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* ── Premium Bento Grid ── */}
            <div className="grid grid-cols-3 gap-4 pb-10">
              {/* Product Card */}
              <motion.a
                href="#products"
                {...reveal(0.8)}
                className="col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-700 block"
              >
                <img
                  src="/products/Brightening Facial Oil1.jpg"
                  alt="Featured Product Texture"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div>
                    <p className="font-sans text-[0.55rem] tracking-[0.2em] uppercase text-cream/70 mb-1">{t("featured")}</p>
                    <p className="font-serif text-cream text-lg leading-none">{t("featuredProduct")}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cream text-forest flex items-center justify-center">
                    <svg className="w-4 h-4 -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.a>

              {/* Right Stack */}
              <div className="col-span-1 flex flex-col gap-4">
                <motion.div
                  {...reveal(0.9)}
                  className="relative flex-1 rounded-2xl bg-forest p-4 flex flex-col justify-between shadow-md overflow-hidden group"
                >
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-forest-light/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                  <span className="font-sans text-[0.55rem] tracking-[0.2em] uppercase text-sage-light/70 relative z-10">
                    {t("collection")}
                  </span>
                  <div className="relative z-10">
                    <p className="font-serif text-cream text-4xl lg:text-5xl font-light leading-none mb-1">8</p>
                    <p className="font-sans text-[0.55rem] font-bold tracking-[0.15em] uppercase text-sage">
                      {t("products")}
                    </p>
                  </div>
                </motion.div>

                <motion.a
                  href="#products"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-square rounded-2xl bg-terracotta flex flex-col items-center justify-center hover:bg-terracotta-dark transition-colors duration-500 group shadow-md"
                >
                  <svg className="w-5 h-5 text-cream mb-2 -rotate-45 group-hover:rotate-0 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <p className="font-sans text-[0.55rem] font-bold tracking-[0.2em] uppercase text-cream">
                    {t("viewAll")}
                  </p>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Rotating Seal — Mouse Following ── */}
      <motion.div
        style={{ x: mx, y: my }}
        className="hidden lg:block absolute md:top-[35%] lg:top-[40%] left-[42%] lg:left-[44%] z-30 pointer-events-none opacity-90"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-28 h-28"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <path id="sealPath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
            </defs>
            <circle cx="50" cy="50" r="42" fill="rgba(248,244,237,0.75)" />
            <text className="fill-forest" style={{ fontSize: "8.5px", letterSpacing: "1px", fontWeight: 600, fontFamily: "var(--font-sans)" }}>
              <textPath href="#sealPath" startOffset="0%">
                {t("sealText")}
              </textPath>
            </text>
            <circle cx="50" cy="50" r="3" fill="#C4956A" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ── Bottom Marquee ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 border-y border-sage-muted/30 overflow-hidden py-4 mt-8 bg-cream-dark/30 backdrop-blur-sm"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {marqueeItems.map((text) => (
                <span key={`${i}-${text}`} className="flex items-center">
                  <span className="font-sans text-[0.6rem] font-bold tracking-[0.25em] uppercase text-forest/70 px-8">
                    {text}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta/40 shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
}
