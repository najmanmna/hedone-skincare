"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const milestones = [
  {
    year: "The Spark",
    title: "A belief in nature's power",
    description:
      "HEDONE was born from a simple conviction — that truly effective skincare doesn't need harsh chemicals. It needs science, patience, and respect for what nature already provides.",
  },
  {
    year: "The Research",
    title: "Deep into skin biology",
    description:
      "Months of studying scientific literature on every ingredient. Understanding how skin varies across different body areas, tones, and types. Curating formulations that are safe, visible, and balanced.",
  },
  {
    year: "The Sourcing",
    title: "From Sri Lanka to the world",
    description:
      "The finest natural ingredients sourced from trusted suppliers across Sri Lanka, the UK, USA, Canada, and Australia. Because great skincare knows no borders.",
  },
  {
    year: "The Perfecting",
    title: "Trial after trial after trial",
    description:
      "Multiple development rounds to achieve the ideal texture and feel. Natural butters and plant-based waxes refined into breathable, nourishing formulations that support the skin's natural rhythm.",
  },
  {
    year: "The Testing",
    title: "Certified safe, proven effective",
    description:
      "Rigorous volunteer testing across diverse skin types. Full compliance with Ecocert, COSMOS, and IFRA standards. Every product lab-tested at the Industrial Technology Institute of Sri Lanka.",
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  
  // Smoothly maps the line height to the scroll position
  const lineHeight = useTransform(scrollYProgress, [0, 0.85], ["0%", "100%"]);

  return (
    <section id="journey" className="relative bg-cream overflow-hidden py-24 md:py-32">
      {/* ── Top Border ── */}
      <div className="absolute top-0 left-6 right-6 md:left-14 md:right-14 border-t border-sage-muted/30" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        
        {/* ── Section Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 md:mb-32">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-[0.65rem] font-bold tracking-[0.4em] uppercase text-sage mb-6">
                Our Journey
              </p>
              <h2
                className="font-serif text-forest font-light leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}
              >
                From conviction
                <br />
                to <span className="italic text-terracotta font-normal">your skin.</span>
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-charcoal-light text-[0.95rem] leading-[1.8] lg:border-l border-sage-muted/40 lg:pl-6"
            >
              Every HEDONE product carries a story of meticulous care — from the
              first spark of an idea to the final safety certification. Here is
              how we get there.
            </motion.p>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical progress line — perfectly centered mathematically */}
          <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-[1px] -translate-x-1/2">
            <div className="absolute inset-0 bg-sage-muted/20" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-forest via-terracotta to-sage origin-top rounded-full"
            />
          </div>

          {/* Milestone Items */}
          <div className="space-y-16 md:space-y-0 relative z-10">
            {milestones.map((milestone, i) => (
              <MilestoneItem
                key={milestone.year}
                milestone={milestone}
                isEven={i % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* ── Founder Quote ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 md:mt-40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Image (Editorial Style) */}
            <div className="lg:col-span-4 lg:col-start-2">
              <div className="relative aspect-[3/4] rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl group">
                {/* A beautiful placeholder portrait representing the founder */}
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" 
                  alt="Uthpala Pathirana - Founder" 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-forest-deep/10 mix-blend-multiply" />
              </div>
            </div>

            {/* Quote */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="relative">
                {/* Large quote mark */}
                <span
                  className="absolute -top-10 -left-6 md:-left-12 font-serif text-sage/20 pointer-events-none select-none"
                  style={{ fontSize: "clamp(6rem, 12vw, 10rem)", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote className="relative z-10">
                  <p
                    className="font-serif text-forest font-light leading-[1.4] italic"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                  >
                    Synthetic products may offer quick results — but prolonged
                    use can lead to side effects. With HEDONE, every ingredient
                    is plant-derived and chosen to work in harmony with your skin.
                    That is our promise.
                  </p>
                  <footer className="mt-8 flex items-center gap-5">
                    <span className="block w-12 h-[1px] bg-terracotta" />
                    <div>
                      <p className="font-serif text-forest text-xl font-medium tracking-wide mb-1">
                        Uthpala Pathirana
                      </p>
                      <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-warm-gray font-bold">
                        Founder, HEDONE
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Brand Values Strip (SVG Icons replacing Emojis) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 md:mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { 
              icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />, 
              label: "Plant-Derived", 
              sub: "Every single ingredient" 
            },
            { 
              icon: <path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.31L22.61 21A2 2 0 0 1 21 24H3a2 2 0 0 1-1.61-3L10 9.31V2z" />, 
              label: "Lab Verified", 
              sub: "ITI Sri Lanka certified" 
            },
            { 
              icon: <><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></>, 
              label: "Global Sourcing", 
              sub: "5+ countries represented" 
            },
            { 
              icon: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>, 
              label: "Cruelty Free", 
              sub: "Never tested on animals" 
            },
          ].map((value, i) => (
            <div
              key={value.label}
              className="group bg-white border border-sage-muted/15 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-[0_20px_40px_rgba(45,74,62,0.06)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-sage-muted/20 text-forest flex items-center justify-center mb-5 group-hover:bg-forest group-hover:text-cream transition-colors duration-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {value.icon}
                </svg>
              </div>
              <p className="font-serif text-forest text-lg font-medium mb-1.5">
                {value.label}
              </p>
              <p className="font-sans text-[0.65rem] font-bold tracking-[0.1em] uppercase text-warm-gray">
                {value.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Milestone Item — Refactored Grid for Perfect Centering
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function MilestoneItem({
  milestone,
  isEven,
}: {
  milestone: (typeof milestones)[number];
  isEven: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-[1fr_6rem_1fr] gap-6 md:gap-0 items-center md:min-h-[12rem] py-8 md:py-0"
    >
      {/* Left Column (Content if Even, Empty if Odd on Desktop) */}
      <div className={`order-2 md:order-1 ${isEven ? "md:text-right md:pr-8 lg:pr-12" : "md:invisible"}`}>
        <div className={isEven ? "block" : "hidden md:block"}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-[0.6rem] font-bold tracking-[0.3em] uppercase text-terracotta">
              {milestone.year}
            </span>
            <h3 className="font-serif text-forest text-2xl lg:text-3xl font-medium leading-[1.15] mt-2 mb-3">
              {milestone.title}
            </h3>
            <p className="font-sans text-charcoal-light text-[0.85rem] leading-[1.8] max-w-sm ml-auto">
              {milestone.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Center Column (The Node) */}
      <div className="hidden md:flex order-2 justify-center relative z-10">
        <div className="relative flex items-center justify-center w-8 h-8">
          {/* Pulsing ring when active */}
          <span
            className={`absolute inset-0 rounded-full border border-forest transition-all duration-1000 ${
              isInView ? "scale-150 opacity-0" : "scale-50 opacity-0"
            }`}
          />
          {/* Solid dot */}
          <span
            className={`block w-3.5 h-3.5 rounded-full border-[2.5px] border-cream shadow-sm transition-colors duration-700 ${
              isInView ? "bg-forest scale-110" : "bg-sage-muted scale-100"
            }`}
          />
        </div>
      </div>

      {/* Right Column (Content if Odd, Empty if Even on Desktop) */}
      <div className={`order-3 ${isEven ? "md:invisible" : "md:text-left md:pl-8 lg:pl-12"}`}>
        <div className={isEven ? "hidden md:block" : "block"}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-[0.6rem] font-bold tracking-[0.3em] uppercase text-terracotta">
              {milestone.year}
            </span>
            <h3 className="font-serif text-forest text-2xl lg:text-3xl font-medium leading-[1.15] mt-2 mb-3">
              {milestone.title}
            </h3>
            <p className="font-sans text-charcoal-light text-[0.85rem] leading-[1.8] max-w-sm">
              {milestone.description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}