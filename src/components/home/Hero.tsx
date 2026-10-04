"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import FlexCarousel from "./FlexCarousel";

const carouselItems = [
  {
    src: "https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&q=80&w=1200",
    alt: "Premium raw plywood sheets",
    title: "Raw Strength"
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200",
    alt: "Beautiful modern wooden furniture",
    title: "Refined Furniture"
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern wooden interior design",
    title: "Modern Interiors"
  },
  {
    src: "https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?auto=format&fit=crop&q=80&w=1200",
    alt: "Carpenter working on wood",
    title: "Craftsmanship"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    alt: "Commercial office with wood panels",
    title: "Commercial Spaces"
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80&w=1200",
    alt: "Elegant wooden kitchen cabinets",
    title: "Kitchen Solutions"
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
    alt: "Architectural wooden ceiling beams",
    title: "Architectural Scale"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    alt: "Minimalist wooden home",
    title: "Residential Comfort"
  }
];



export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [scrollVal, setScrollVal] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setScrollVal(v));
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[var(--color-cream)]">

      {/* STICKY CONTAINER */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center bg-[var(--color-cream)]">

        {/* REACT BITS FLEX CAROUSEL AS BACKGROUND */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <FlexCarousel
            items={carouselItems}
            preset="liquid"
            intro="bloom"
            cardHeight={0.55}
            gap={12}
            squeeze={0.1}
            focusOnClick={true}
            captions={false}
            captureWheel={false}
            scrollProgress={scrollVal}
          />
          {/* Dark overlay to ensure white text readability */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>

        {/* Smooth gradient transition to the cream background of the next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-[var(--color-cream)] to-transparent z-10 pointer-events-none" />

        {/* TYPOGRAPHY (OVERLAY) */}
        <div className="container relative z-10 mx-auto px-6 md:px-12 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="overflow-hidden mb-6">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                >
                  <span className="inline-block py-2 px-4 rounded-sm border border-white/20 text-white text-xs font-bold tracking-[0.3em] uppercase mb-4 md:mb-8">
                    Forbesganj, Bihar
                  </span>
                </motion.div>
              </div>

              <h1 className="text-[12vw] md:text-[8vw] lg:text-[7.5vw] font-montserrat font-bold text-white leading-[0.9] tracking-tighter uppercase drop-shadow-2xl">
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%", rotate: 5 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  >
                    Plywood You
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    className="flex items-center gap-4 md:gap-6"
                    initial={{ y: "100%", rotate: 5 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <span className="text-[var(--color-amber)] italic font-light drop-shadow-lg">Can Build</span>
                    <div className="hidden md:block h-[1vw] w-[15vw] bg-[var(--color-amber)] shadow-[0_0_20px_rgba(217,142,63,0.5)]" />
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%", rotate: 5 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  >
                    On.
                  </motion.div>
                </div>
              </h1>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end pb-4 md:pb-8">
              <motion.p
                className="text-lg md:text-xl text-white/90 mb-8 max-w-sm leading-relaxed drop-shadow-md"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                We provide highly durable, consistent plywood for furniture, interiors, and construction. A legacy of quality.
              </motion.p>

              <motion.div
                className="flex flex-col gap-4 pointer-events-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: [0.76, 0, 0.24, 1] }}
              >
                <Link
                  href="/products"
                  className="group relative w-fit overflow-hidden bg-white text-[var(--color-charcoal)] px-8 py-4 rounded-full font-bold text-lg flex items-center gap-4 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                >
                  <span className="relative z-10">Our Products</span>
                  <div className="w-8 h-8 rounded-full bg-[var(--color-charcoal)]/10 flex items-center justify-center relative z-10 group-hover:bg-[var(--color-charcoal)] group-hover:text-white transition-colors">
                    <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-[var(--color-amber)] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                </Link>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
