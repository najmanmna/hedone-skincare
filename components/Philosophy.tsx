"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Extensive Research",
    summary: "Science-first formulation rooted in skin biology.",
    points: [
      "In-depth study of each ingredient's natural chemistry",
      "Skin biology analysed across body zones & types",
      "Curated selection for safe, visible, balanced results",
    ],
    accent: "bg-sage",
  },
  {
    number: "02",
    title: "Quality Assurance",
    summary: "Globally sourced, locally perfected textures.",
    points: [
      "Finest ingredients from Sri Lanka, UK, USA, Canada & Australia",
      "Multiple trials to achieve ideal texture & skin feel",
      "Breathable barrier with natural butters & plant waxes",
    ],
    accent: "bg-terracotta",
  },
  {
    number: "03",
    title: "Thorough Testing",
    summary: "Certified safe before it ever reaches your skin.",
    points: [
      "Volunteer testing across diverse skin types & conditions",
      "Ecocert, COSMOS & IFRA safety standards followed",
      "Lab tested at Industrial Technology Institute, Sri Lanka",
    ],
    accent: "bg-forest",
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-cream overflow-hidden">
      {/* Top border */}
      <div className="mx-6 md:mx-10 lg:mx-14 border-t border-sage-muted/20" />

      <div
        ref={sectionRef}
        className="px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-34"
      >
        {/* ── Section Header ── */}
        <div className="grid grid-cols-12 gap-4 mb-16 md:mb-22">
          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-[0.55rem] tracking-[0.4em] uppercase text-warm-gray mb-4">
                Why HEDONE
              </p>
              <h2
                className="font-serif text-forest font-light leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              >
                Nature doesn&apos;t cut
                <br />
                corners.{" "}
                <span className="italic text-terracotta font-normal">
                  Neither do we.
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-sans text-charcoal-light text-[0.85rem] leading-[1.85]"
            >
              We only use 100% natural and vegan ingredients — because we
              genuinely believe in nature&apos;s healing power. Every product is
              a result of deep science, careful sourcing, and rigorous testing.
            </motion.p>
          </div>
        </div>

        {/* ── Pillar Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.3 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-ivory border border-sage-muted/15 p-6 md:p-8 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(45,74,62,0.06)] hover:-translate-y-1 cursor-default"
            >
              {/* Top row — number + accent dot */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-sans text-[0.55rem] tracking-[0.3em] uppercase text-warm-gray/60">
                  {"{ " + pillar.number + " }"}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${pillar.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-forest text-xl md:text-2xl font-light mb-3 group-hover:text-forest-deep transition-colors duration-500">
                {pillar.title}
              </h3>

              {/* Summary — visible by default */}
              <p className="font-sans text-charcoal-light text-[0.8rem] leading-relaxed mb-6">
                {pillar.summary}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-sage-muted/20 mb-6 group-hover:bg-sage-muted/40 transition-colors duration-500" />

              {/* Bullet points — slide in on hover */}
              <ul className="space-y-3">
                {pillar.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 opacity-50 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                    style={{ transitionDelay: `${j * 80}ms` }}
                  >
                    <span
                      className={`w-1 h-1 rounded-full ${pillar.accent} mt-2 shrink-0 opacity-60`}
                    />
                    <span className="font-sans text-[0.75rem] text-charcoal-light leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom link */}
              <div className="mt-8 overflow-hidden">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200"
                >
                  <span className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-terracotta">
                    Learn More
                  </span>
                  <svg
                    className="w-3 h-3 text-terracotta -rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Hover corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-sage-muted/0 group-hover:border-r-sage-muted/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Statement ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 md:mt-22 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-sage-muted/20 pt-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-1">
              <span className="w-3 h-3 rounded-full bg-sage border-2 border-cream" />
              <span className="w-3 h-3 rounded-full bg-terracotta border-2 border-cream" />
              <span className="w-3 h-3 rounded-full bg-forest border-2 border-cream" />
            </div>
            <p className="font-sans text-[0.7rem] text-charcoal-light">
              All products tested in partnership with{" "}
              <span className="text-forest font-medium">
                Industrial Technology Institute (ITI)
              </span>{" "}
              of Sri Lanka
            </p>
          </div>

          <div className="flex items-center gap-4">
            {["Ecocert", "COSMOS", "IFRA", "ITI"].map((cert) => (
              <span
                key={cert}
                className="font-sans text-[0.5rem] tracking-[0.15em] uppercase text-warm-gray border border-sage-muted/30 px-3 py-1.5 hover:border-forest/20 hover:text-forest transition-all duration-300"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Subtle background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45,74,62,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,74,62,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />
    </section>
  );
}