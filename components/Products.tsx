"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Product Data — from Uthpala's actual content
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const products = [
  {
    name: "Brightening Facial Oil",
    tag: "Face",
    tagline: "Your acne-prone skin's new best friend.",
    image: "/products/Brightening Facial Oil1.jpg",
    gallery: [
   "/products/Brightening Facial Oil3.jpg",
   "/products/Brightening Facial Oil2.jpg",
   "/products/Brightening Facial Oil1.jpg",
    ],
    points: [
      "Balances excess sebum with non-greasy jojoba & grapeseed oils",
      "Calms active breakouts with soothing lavender essential oil",
      "Fades post-acne marks & evens skin tone with ylang ylang",
      "MCT oil drives nutrients deep into the skin barrier",
      "Transforms your night routine into a calming sleep ritual",
    ],
    description:
      "This satin-like oil naturally balances excessive sebum production without adding extra grease. Lavender essential oil works overtime to inhibit breakouts while healing wounded pimples — no irritation, just clear-skin satisfaction. Ylang ylang diminishes the appearance of scars while jojoba oil repairs damage with its vitamin-rich formula. The non-greasy grapeseed oil naturally balances sebum production while MCT oil drives nutrients deep where they're needed most.",
    ingredients: ["Lavender", "Ylang Ylang", "Jojoba", "Grapeseed oil", "Natural Vitamin E"],
    directions:
      "At night before bed, wash and dry your face. Take two small drops and place one on each cheek, plus a smaller amount on your forehead. Gently massage using circular motions until fully absorbed. Apply on both face and neck. For best results, use every night.",
  },
  {
    name: "Anti-pollution Hydrating Body Cream",
    tag: "Body",
    tagline: "Your daily reset button for city-stressed skin.",
    image: "/products/Anti-pollution Hydrating Body Cream1.jpg",
    gallery: [
     
     "/products/Anti-pollution Hydrating Body Cream3.jpg",
     "/products/Anti-pollution Hydrating Body Cream1.jpg",
     "/products/Anti-pollution Hydrating Body Cream2.jpg",

    ],
    points: [
      "Shields skin from pollution with antioxidant-rich vanilla & spinach",
      "Deep long-lasting hydration with shea butter & aloe vera",
      "Fights free radicals & premature aging with vitamins C, E, A & K",
      "Soothes redness, burns & rashes with turmeric essential oil",
      "Designed for modern city living — your daily skin reset",
    ],
    description:
      "City life isn't exactly a spa day for the skin. This powerhouse formula works to deeply hydrate, brighten, and refine the complexion while combating environmental stressors. The antioxidants in vanilla essential oil and spinach extract's rich complex of vitamins fight free radicals, combat premature aging, and rejuvenate the skin. Rich shea butter moisturizes while pomegranate seed oil kickstarts your skin's collagen production. The dynamic duo of aloe vera and turmeric handles everything from everyday hydration to healing minor skin concerns.",
    ingredients: ["Spinach extract", "Aloe vera", "Shea butter", "Vanilla", "Turmeric", "Orange"],
    directions:
      "Apply all over your body after bathing and drying off. For dark patches, massage thoroughly on those spots. For best results, use daily. If your skin feels irritated after shaving, dab some on those areas to calm the burning sensation.",
  },
  {
    name: "Moisturizing Body Balm",
    tag: "Body",
    tagline: "Your new best friend for dry, chapped skin.",
    image: "/products/Moisturizing Body Balm1.jpg",
    gallery: [
    "/products/Moisturizing Body Balm3.jpg",
    "/products/Moisturizing Body Balm2.jpg",
    "/products/Moisturizing Body Balm1.jpg",
    ],
    points: [
      "Relieves dry, chapped winter skin with shea & green tea butter",
      "Creates a breathable moisture barrier that locks in hydration",
      "Improves skin clarity & reduces discoloration over time",
      "Jasmine, patchouli & geranium balance oil production",
      "Rich moisture without heaviness — skin breathes freely",
    ],
    description:
      "Packed with skin superfood shea butter and luxurious green tea butter, they deeply moisturize dry, chapped areas while creating a breathable protective barrier that locks in hydration. This thoughtfully crafted formula helps reduce discoloration and blemishes while enhancing skin clarity. Unlike heavy conventional balms, this 100% natural and vegan creation allows your skin to breathe while still providing serious moisture. Aromatic jasmine, patchouli, and geranium essential oils balance oil production, boost collagen, and even lift your mood on dreary winter days.",
    ingredients: ["Shea butter", "Green tea butter", "Blueberry seed oil", "Jasmine", "Patchouli"],
    directions:
      "After your bath, dry your skin then apply the balm all over your body. Works best at night. For cracked feet or chapped skin, apply on those spots every night. During winter, feel free to use anytime throughout the day.",
  },
  {
    name: "Glowing Body Oil",
    tag: "Body",
    tagline: "Your glow doesn't need filters.",
    image: "/products/glowing_bodyoil.jpg",
    gallery: [
           "/products/glowing_bodyoil1.jpg",
      "/products/glowing_bodyoil.jpg",
   
  
    ],
    points: [
      "Silky, lightweight oil that reveals your natural radiance",
      "Fades dark spots, scars & blemishes for even-toned skin",
      "Frangipani, orange & ylang ylang smooth rough patches",
      "Omega fatty acids & vitamin E lock in long-lasting moisture",
      "Soothes irritation from sweat, sun & daily pollution",
    ],
    description:
      "It's silky, light, and transforms dull, uneven skin into something noticeably smoother and more radiant. This 100% natural and vegan body oil goes deep to nourish while improving tone, texture, and clarity — without leaving you feeling greasy. The aromatic blend of frangipani, orange, and ylang ylang smooth out rough patches, help fade dark spots, scars, and blemishes. Packed with omega fatty acids and natural vitamin E that keep skin moisturized for hours while still letting it breathe. Think of it as more than just a body oil — it's your daily self-care routine.",
    ingredients: ["Frangipani", "Ylang Ylang", "Orange", "Natural vitamin E", "MCT oil"],
    directions:
      "Apply after your nighttime bath when skin is dry. Rub all over your body with a good massage, focusing extra on dark patches, blemishes, or bumpy areas. For best results, make it part of your daily routine.",
  },
  {
    name: "Bonne Humeur",
    tag: "Therapy",
    tagline: "Healthier hair and a happier you, from root to tip.",
    image: "/products/Bonne Humeur1.jpg",
    gallery: [
      "/products/Bonne Humeur2.jpg",
      "/products/Bonne Humeur1.jpg",
      "/products/Bonne Humeur3.jpg",
    ],
    points: [
      "Relieves headaches with cooling peppermint essential oil",
      "Calming lavender reduces stress & quiets the senses",
      "Castor & argan oils strengthen hair from root to tip",
      "Fights dandruff while creating a relaxing scalp experience",
      "Turn your head massage into a feel-good mood-lifting ritual",
    ],
    description:
      "When your head feels like a pressure cooker, reach for Bonne Humeur. This magical hair and scalp oil does double duty — it's a mood-fixing elixir that relieves headaches and eases stress with its aromatic blend of peppermint and lavender. The moment you apply it, peppermint cools your scalp while lavender creates a sensory cocoon, simultaneously fighting dandruff. The nourishing castor and argan oil blend penetrates deep, moisturizing and strengthening each strand while restoring shine that stress stole away.",
    ingredients: ["Peppermint", "Lavender", "Castor oil", "Jojoba oil"],
    directions:
      "Pour directly on your head for a refreshing kick. Give your head and scalp a firm but gentle massage for about an hour. Rinse with warm water. Use twice a week for softer, fluffier hair without dandruff.",
  },
  {
    name: "Sérénité",
    tag: "Therapy",
    tagline: "Your ticket to total body pacification.",
    image: "/products/Sérénité1.jpg",
    gallery: [
      "/products/Sérénité2.jpg",
      "/products/Sérénité1.jpg",
    
    ],
    points: [
      "Full-body massage oil for deep relaxation & muscle relief",
      "Lemongrass eases aching muscles & melts built-up tension",
      "Frankincense & lavender quiet racing thoughts",
      "Neem seed, MCT & sunflower oils leave skin silky-smooth",
      "Transforms your routine into a spa-like botanical ritual",
    ],
    description:
      "This aromatic blend combines powerful lemongrass to pacify aching muscles, melting tension away, and soothing bergamot for stress relief and physical relaxation. The natural harmony of frankincense and lavender essential oils doesn't just smell divine; it escorts your racing thoughts to a peaceful place where worries dissolve. Meanwhile, the nourishing trio of neem seed, MCT, and sunflower oils pampers your skin, leaving it silky-smooth. Simply warm a few drops between your palms and glide across your body — feel tension dissolve as the botanical scents fill the air.",
    ingredients: ["Lemongrass", "Frankincense", "Bergamot", "Neem seed oil"],
    directions:
      "Take a good amount of oil and rub all over your body. Give it about an hour to work its magic. Don't leave it on too long without washing off. For specific trouble spots like sore muscles or tired feet, focus on massaging those areas.",
  },
  {
    name: "Détente",
    tag: "Therapy",
    tagline: "Your ticket to tranquility on cold evenings.",
    image:       "/products/Détente2.jpg",
    gallery: [
         "/products/Détente1.jpg",
               "/products/Détente2.jpg",

    ],
    points: [
      "Warming cinnamon & clove bud melt muscle tension & stiffness",
      "Soothes sore muscles & supports post-workout recovery",
      "Sweet almond & neem seed oils deeply nourish the skin",
      "Supports skin renewal & healthy cell function",
      "Perfect comfort for cold evenings & tired limbs",
    ],
    description:
      "When winter chills or workday stress settle into your muscles, this natural blend goes to work with warming cinnamon and clove bud essential oils that melt tension away. These powerful botanicals dig deep into achy muscles and joints, melting tension like tropical sunshine. This luxurious formula doesn't stop at relaxation — it supports healthy cell division while sweet almond and neem seed oils nourish and moisturize your skin. Perfect for cold evenings or post-workout recovery when your muscles are crying for relief.",
    ingredients: ["Ceylon Cinnamon", "Clove Buds", "Sweet Almond", "Neem seed oil"],
    directions:
      "Take a good amount of oil and rub all over your body. Give it about an hour for the aromatherapy to work. For specific trouble spots like sore muscles, achy joints, or tired feet, focus on massaging those areas for targeted relief.",
  },
  {
    name: "Soignez-moi",
    tag: "Therapy",
    tagline: "The gift of 'me time' for your body.",
    image: "/products/Soignez-moi2.jpg",
    gallery: [
   "/products/Soignez-moi1.jpg",
   "/products/Soignez-moi2.jpg",
    ],
    points: [
      "Luxurious massage balm that relieves tension & nourishes skin",
      "Mango & green tea butters boost elasticity & smooth aging",
      "Rosehip & rice bran oils reduce fine lines & wrinkles",
      "Warming cinnamon leaf enhances circulation to tight muscles",
      "Patchouli & rose calm your skin and quiet your mind",
    ],
    description:
      "This 100% vegan formula works double-duty — not just relieving your tensed and sore muscles, but moisturizing and nourishing the skin with every application. A dream team of mango and green tea butter boosts skin elasticity and evens out aging skin. The powerful blend of rosehip and rice bran oil helps reduce the appearance of wrinkles and fine lines. Meanwhile, cinnamon leaf essential oil handles circulation duty, sending relief to places you didn't even know were tight. The aromatic blend of patchouli and rose calms both your skin and your mind.",
    ingredients: ["Mango butter", "Green tea butter", "Rosehip oil", "Rice bran oil", "Cinnamon leaf", "Patchouli", "Rose"],
    directions:
      "Massage into warm skin. Breathe deeply and let your body unwind. Focus on areas with muscle tension for targeted relief. For best results, make it a regular part of your self-care routine.",
  },
];

const tagColors: Record<string, string> = {
  Face: "bg-sage/90 text-forest-deep",
  Body: "bg-terracotta/90 text-ivory",
  Therapy: "bg-forest/90 text-ivory",
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Main Products Section
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeProduct, setActiveProduct] = useState<(typeof products)[number] | null>(null);

  return (
    <>
      <section id="products" className="relative bg-ivory overflow-hidden">
        <div
          ref={sectionRef}
          className="px-6 md:px-10 lg:px-14 py-20 md:py-28 lg:py-32 max-w-[90rem] mx-auto"
        >
          {/* ── Header ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <p className="font-sans text-[0.65rem] font-bold tracking-[0.4em] uppercase text-terracotta mb-6">
                  The Collection
                </p>
                <h2
                  className="font-serif text-forest font-light leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}
                >
                  Eight formulations.
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
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
                className="font-sans text-charcoal-light text-base md:text-[0.95rem] leading-[1.8] lg:border-l border-sage-muted/40 lg:pl-6"
              >
                Face, body, and therapy — each crafted to work in harmony with
                your skin. Tap any product to explore the full story.
              </motion.p>
            </div>
          </div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {products.slice(0, 4).map((product, i) => (
              <ProductCard
                key={product.name}
                product={product}
                index={i}
                isInView={isInView}
                onOpen={() => setActiveProduct(product)}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-5 lg:mt-6">
            {products.slice(4).map((product, i) => (
              <ProductCard
                key={product.name}
                product={product}
                index={i + 4}
                isInView={isInView}
                onOpen={() => setActiveProduct(product)}
              />
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-20 md:mt-28 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-sage-muted/30 pt-10"
          >
            <p className="font-sans text-[0.85rem] text-charcoal-light">
              Want the full story on ingredients &amp; benefits?
            </p>
            <a
              href="https://wa.me/94766907764?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20HEDONE%20products"
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

        {/* Background texture */}
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

      {/* ── Product Modal ── */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Product Card
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function ProductCard({
  product,
  index,
  isInView,
  onOpen,
}: {
  product: (typeof products)[number];
  index: number;
  isInView: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.2 + index * 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      onClick={onOpen}
      className="group relative bg-white border border-sage-muted/20 overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-[0_24px_50px_rgba(45,74,62,0.12)] hover:-translate-y-2 rounded-xl flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] bg-cream-dark overflow-hidden shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
        />
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

        {/* Hover hint */}
        <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/40 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-center">
            <div className="w-12 h-12 rounded-full border-2 border-cream/60 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <span className="font-sans text-[0.6rem] font-bold tracking-[0.25em] uppercase text-cream/90">
              Explore
            </span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 grow flex flex-col justify-center bg-white">
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

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-terracotta scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </motion.div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Product Detail Modal
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function ProductModal({
  product,
  onClose,
}: {
  product: (typeof products)[number] | null;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
      setActiveImage(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-forest-deep/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 bg-ivory w-full max-w-5xl mx-4 my-8 md:my-12 rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-cream/80 backdrop-blur-sm border border-sage-muted/20 flex items-center justify-center text-charcoal hover:bg-white hover:scale-110 transition-all duration-300 shadow-sm"
              aria-label="Close"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* ── Left: Image Gallery ── */}
              <div className="bg-cream-dark p-6 md:p-8 lg:p-10">
                {/* Main Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={product.gallery[activeImage]}
                      alt={product.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`font-sans text-[0.55rem] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded backdrop-blur-sm shadow-sm ${
                        tagColors[product.tag]
                      }`}
                    >
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3">
                  {product.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                        i === activeImage
                          ? "ring-2 ring-terracotta ring-offset-2 ring-offset-cream-dark"
                          : "opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Right: Content ── */}
              <div className="p-6 md:p-8 lg:p-10 overflow-y-auto max-h-[80vh] lg:max-h-none">
                {/* Header */}
                <div className="mb-6">
                  <p className="font-sans text-[0.55rem] font-bold tracking-[0.35em] uppercase text-terracotta mb-2">
                    {product.tag}
                  </p>
                  <h3
                    className="font-serif text-forest font-light leading-[1.1]"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="font-serif text-forest/60 italic text-base mt-2">
                    {product.tagline}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="mb-8">
                  <p className="font-sans text-[0.6rem] font-bold tracking-[0.3em] uppercase text-warm-gray mb-4">
                    Key Benefits
                  </p>
                  <ul className="space-y-3">
                    {product.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-1.5 shrink-0" />
                        <span className="font-sans text-[0.8rem] text-charcoal-light leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="font-sans text-[0.6rem] font-bold tracking-[0.3em] uppercase text-warm-gray mb-3">
                    The Full Story
                  </p>
                  <p className="font-sans text-[0.85rem] text-charcoal-light leading-[1.85]">
                    {product.description}
                  </p>
                </div>

                {/* Ingredients */}
                <div className="mb-8">
                  <p className="font-sans text-[0.6rem] font-bold tracking-[0.3em] uppercase text-warm-gray mb-3">
                    Key Ingredients
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="font-sans text-[0.7rem] font-medium text-forest bg-sage/15 px-3 py-1.5 rounded-full"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Directions */}
                <div className="mb-8 bg-cream rounded-xl p-5">
                  <p className="font-sans text-[0.6rem] font-bold tracking-[0.3em] uppercase text-warm-gray mb-3">
                    How to Use
                  </p>
                  <p className="font-sans text-[0.8rem] text-charcoal-light leading-[1.85]">
                    {product.directions}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/94766907764?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20${encodeURIComponent(
                      product.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 bg-forest text-cream px-6 py-3.5 rounded-full hover:bg-forest-deep transition-all duration-500 shadow-lg shadow-forest/10"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.97 0-3.837-.53-5.445-1.477l-.39-.232-3.758.98.998-3.648-.254-.404A9.72 9.72 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
                    </svg>
                    <span className="font-sans text-[0.65rem] font-bold tracking-[0.2em] uppercase">
                      Enquire on WhatsApp
                    </span>
                  </a>
                  <button
                    onClick={onClose}
                    className="font-sans text-[0.65rem] font-bold tracking-[0.2em] uppercase text-charcoal-light border border-sage-muted/30 px-6 py-3.5 rounded-full hover:border-forest/30 hover:text-forest transition-all duration-300"
                  >
                    Back to Collection
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}