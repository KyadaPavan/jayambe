"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DealerCTA() {
  const containerRef = useRef<HTMLElement>(null);

  // Parallax scroll effect for background elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={containerRef}
      className="bg-[var(--color-charcoal)] py-24 md:py-32 relative overflow-hidden mt-[-2rem] z-20 rounded-t-[4rem]"
    >

      {/* Infinite Outline Text Marquee Background (Parallax) */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250vw] rotate-[-5deg] pointer-events-none z-0 mix-blend-overlay"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <span className="text-[12vw] font-montserrat font-bold text-transparent opacity-10" style={{ WebkitTextStroke: '2px white' }}>
            GROW WITH US • BECOME A DEALER • JOIN THE NETWORK • GROW WITH US • BECOME A DEALER • JOIN THE NETWORK •&nbsp;
          </span>
          <span className="text-[12vw] font-montserrat font-bold text-transparent opacity-10" style={{ WebkitTextStroke: '2px white' }}>
            GROW WITH US • BECOME A DEALER • JOIN THE NETWORK • GROW WITH US • BECOME A DEALER • JOIN THE NETWORK •&nbsp;
          </span>
        </motion.div>
      </motion.div>

      {/* Subtle Glow Overlays */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[var(--color-teak)] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[var(--color-amber)] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 transform -translate-x-1/3 translate-y-1/2 z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">

        {/* Staggered Typographic Reveal */}
        <div className="overflow-hidden mb-6">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="inline-block text-[var(--color-amber)] text-xs md:text-sm font-bold tracking-[0.3em] uppercase"
          >
            Partnership Opportunity
          </motion.span>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-[6rem] font-montserrat font-bold text-white mb-8 leading-[0.95] tracking-tighter">
          <div className="overflow-hidden py-2">
            <motion.div
              initial={{ y: "100%", rotate: 3 }}
              whileInView={{ y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            >
              Grow Your
            </motion.div>
          </div>
          <div className="overflow-hidden py-2">
            <motion.div
              initial={{ y: "100%", rotate: -3 }}
              whileInView={{ y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cream)] via-[var(--color-teak)] to-[var(--color-amber)] pb-2"
            >
              Business.
            </motion.div>
          </div>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-16 font-light leading-relaxed"
        >
          Join our exclusive distributor network. Enjoy steady supply, uncompromising quality, and dedicated support to scale your reach.
        </motion.p>

        {/* Premium Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="pointer-events-auto"
        >
          <Link
            href="/become-a-dealer"
            className="group relative w-fit overflow-hidden bg-white text-[var(--color-charcoal)] px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg flex items-center gap-4 md:gap-6 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white tracking-wide">
              Become a Dealer
            </span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--color-charcoal)]/10 flex items-center justify-center relative z-10 group-hover:bg-white group-hover:text-[var(--color-charcoal)] transition-colors duration-500">
              <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            {/* Hover Fill Effect */}
            <div className="absolute inset-0 bg-[var(--color-amber)] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
