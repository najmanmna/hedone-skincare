"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const products = [
  {
    name: "Rejuvenating Face Cream",
    tag: "Face",
    image: "https://plus.unsplash.com/premium_photo-1661630971367-15853002aee8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "Deep hydration with shea & kokum butter",
      "Fights fine lines with rosehip oil",
      "Lightweight, non-greasy formula",
      "Suitable for all skin types",
      "Absorbs quickly, no residue",
    ],
  },
  {
    name: "Nourishing Body Butter",
    tag: "Body",
    image: "https://plus.unsplash.com/premium_photo-1661630971367-15853002aee8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "Intense moisture for dry skin",
      "Cocoa butter & almond oil blend",
      "Locks in hydration for 24 hours",
      "Rich yet breathable texture",
      "Subtle natural fragrance",
    ],
  },
  {
    name: "Gentle Cleansing Balm",
    tag: "Face",
    image: "https://plus.unsplash.com/premium_photo-1661630971367-15853002aee8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "Melts away impurities & makeup",
      "Coconut oil & chamomile extract",
      "pH-balanced for sensitive skin",
      "No harsh surfactants or foaming agents",
      "Leaves skin soft, not stripped",
    ],
  },
  {
    name: "Revitalising Hair Oil",
    tag: "Hair",
    image: "https://plus.unsplash.com/premium_photo-1661630971367-15853002aee8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "Strengthens from root to tip",
      "Argan oil & vitamin E blend",
      "Reduces frizz & adds shine",
      "Lightweight, non-greasy absorption",
      "Heat protection properties",
    ],
  },
  {
    name: "Soothing Lip Balm",
    tag: "Lips",
    image: "https://plus.unsplash.com/premium_photo-1661630971367-15853002aee8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "Heals dry & cracked lips fast",
      "Beeswax & jojoba oil base",
      "Natural SPF protection",
      "Long-lasting moisture barrier",
      "Subtle honey-vanilla scent",
    ],
  },
  {
    name: "Calming Body Lotion",
    tag: "Body",
    image: "https://plus.unsplash.com/premium_photo-1661630971367-15853002aee8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "Lightweight daily moisturiser",
      "Aloe vera & oat extract base",
      "Soothes irritation & redness",
      "Fast-absorbing formula",
      "Perfect for sensitive skin",
    ],
  },
  {
    name: "Exfoliating Face Scrub",
    tag: "Face",
    image: "https://plus.unsplash.com/premium_photo-1661630971367-15853002aee8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "Gentle micro-exfoliation",
      "Walnut shell & rice bran powder",
      "Removes dead cells & unclogs pores",
      "Brightens dull complexion",
      "Use 2–3 times per week",
    ],
  },
];

const tagColors: Record<string, string> = {
  Face: "bg-sage/90 text-forest-deep",
  Body: "bg-terracotta/90 text-ivory",
  Hair: "bg-forest/90 text-ivory",
  Lips: "bg-terracotta-light/90 text-forest-deep",
};

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="products" className="relative bg-ivory overflow-hidden">
      <div
        ref={sectionRef}
        className="px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32 max-w-[90rem] mx-auto"
      >
        {/* ── Section Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-[0.65rem] font-bold tracking-[0.4em] uppercase text-terracotta mb-6 block">
                The Collection
              </p>
              <h2
                className="font-serif text-forest font-light leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}
              >
                Seven formulations.
                <br className="hidden md:block" />
                <span className="italic text-forest/80 font-normal">
                  One promise.
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-charcoal-light text-base md:text-[0.95rem] leading-[1.8] lg:border-l border-sage-muted/40 lg:pl-6"
            >
              Each product is crafted to work in harmony with your skin — never
              against it. Hover to explore the science, or dive deeper into our full
              brochure.
            </motion.p>
          </div>
        </div>

        {/* ── Product Grid ── */}
        {/* Row 1: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard
              key={product.name}
              product={product}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Row 2: 3 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-5 lg:mt-6">
          {/* Offset: empty first col on lg */}
          <div className="hidden lg:block" />
          {products.slice(4).map((product, i) => (
            <ProductCard
              key={product.name}
              product={product}
              index={i + 4}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-sage-muted/30 pt-10"
        >
          <p className="font-sans text-[0.85rem] text-charcoal-light">
            Want the full story on ingredients & benefits?
          </p>
          <a
            href="https://wa.me/94762477764?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20HEDONE%20products"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-forest text-cream px-8 py-4 hover:bg-forest-deep transition-all duration-500 hover:-translate-y-1 shadow-lg shadow-forest/10 rounded-full"
          >
            <span className="font-sans text-[0.65rem] font-bold tracking-[0.2em] uppercase">
              Request E-Brochure
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
        </motion.div>
      </div>

      {/* ── Background texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(45,74,62,1) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Product Card Component — the "emboss" hover effect
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function ProductCard({
  product,
  index,
  isInView,
}: {
  product: (typeof products)[number];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.2 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative bg-white border border-sage-muted/20 overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-[0_24px_50px_rgba(45,74,62,0.12)] hover:-translate-y-2 rounded-xl flex flex-col h-full"
    >
      {/* Image Area */}
      <div className="relative aspect-[4/5] bg-cream-dark overflow-hidden flex-shrink-0">
        
        {/* Actual Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
        />

        {/* Subtle dark gradient to ensure tags pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/20 via-transparent to-transparent opacity-60" />

        {/* Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`font-sans text-[0.55rem] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded backdrop-blur-sm shadow-sm ${
              tagColors[product.tag] || "bg-sage/90 text-forest-deep"
            }`}
          >
            {product.tag}
          </span>
        </div>

        {/* ── Hover Overlay — the frosted glass reveal ── */}
        <div className="absolute inset-0 bg-forest-deep/85 backdrop-blur-md flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
          {/* Points */}
          <div className="pt-8">
            <ul className="space-y-3.5">
              {product.points.map((point, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ transitionDelay: `${150 + j * 80}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-1.5 shrink-0" />
                  <span className="font-sans text-[0.75rem] font-medium text-cream/90 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dive Deeper link */}
          <a
            href={`https://wa.me/94762477764?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20${encodeURIComponent(
              product.name
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mt-6 pt-4 border-t border-cream/10"
            style={{ transitionDelay: "500ms" }}
          >
            <span className="font-sans text-[0.65rem] font-bold tracking-[0.2em] uppercase text-terracotta-light underline underline-offset-4 decoration-terracotta-light/30 hover:decoration-terracotta-light transition-colors duration-300">
              Dive deeper
            </span>
            <svg
              className="w-3.5 h-3.5 text-terracotta-light -rotate-45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Card Info (Visible by default) */}
      <div className="p-5 flex-grow flex flex-col justify-center bg-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-forest text-lg font-medium leading-snug group-hover:text-terracotta transition-colors duration-500">
              {product.name}
            </h3>
            <p className="font-sans text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-warm-gray/70 mt-2">
              100% Natural &middot; Vegan
            </p>
          </div>
          
          <div className="w-8 h-8 rounded-full border border-sage-muted/40 flex items-center justify-center shrink-0 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-cream transition-all duration-500 mt-1 shadow-sm">
            <svg
              className="w-3.5 h-3.5 -rotate-45 group-hover:rotate-0 transition-transform duration-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-terracotta scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </motion.div>
  );
}