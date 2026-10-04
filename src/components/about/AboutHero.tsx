"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PlywoodEdge = () => (
  <div className="absolute inset-y-0 right-0 w-[5px] md:w-[8px] border-l border-black/20 shadow-[inset_1px_0_3px_rgba(0,0,0,0.3)] flex flex-row overflow-hidden opacity-90">
    <div className="w-[15%] h-full bg-[#E5D3B3]" />
    <div className="w-[15%] h-full bg-[#8C6239]" />
    <div className="w-[20%] h-full bg-[#E5D3B3]" />
    <div className="w-[15%] h-full bg-[#8C6239]" />
    <div className="w-[20%] h-full bg-[#E5D3B3]" />
    <div className="w-[15%] h-full bg-[#5C3A21]" />
  </div>
);

export function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const ySheets = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative w-full min-h-screen flex items-center overflow-hidden bg-[var(--color-cream)] pt-24 lg:pt-24 pb-16">

      <div className="container mx-auto px-6 md:px-12 z-10 relative h-full mt-4 md:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full min-h-[75vh]">

          {/* LEFT: Typography */}
          <motion.div style={{ y: yText, opacity: opacityText }} className="flex flex-col justify-center order-2 lg:order-1 pb-20 lg:pb-0 z-20 relative">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10"
            >
              <p className="font-montserrat text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-[var(--color-charcoal)]">
                <span className="text-[var(--color-teak)] mr-6">01 \</span> Who We Are
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-montserrat font-black text-[var(--color-charcoal)] leading-[0.9] tracking-tighter uppercase mb-8"
            >
              Shaped by <br />
              <span className="text-[var(--color-teak)]">Nature.</span><br />
              Built by
              <span className="relative inline-block mt-2 ml-3">
                <span className="relative z-10">Trust.</span>
                <div className="absolute bottom-1 lg:bottom-3 left-0 w-full h-3 lg:h-5 bg-[var(--color-amber)]/40 -rotate-2 z-0" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="text-lg md:text-xl text-[var(--color-stone)] font-medium leading-relaxed max-w-lg"
            >
              Jai Shree Radha Plywood Private Limited provides durable, quality-focused plywood for furniture, interiors, residential, commercial, and construction spaces across Forbesganj, Araria, and Bihar.
            </motion.p>
          </motion.div>

          {/* RIGHT: Plywood Sheets Visual */}
          <motion.div style={{ y: ySheets }} className="relative h-[45vh] lg:h-[80vh] w-full flex items-center justify-center order-1 lg:order-2 z-10">

            {/* Sheet 1 (Bottom - Dark) */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100, rotateZ: 25 }}
              animate={{ opacity: 1, x: 60, y: 40, rotateZ: 15 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[50%] md:w-[45%] lg:w-[45%] aspect-[1/2.2] bg-[var(--color-walnut)] rounded-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-black/30 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
              <PlywoodEdge />
            </motion.div>

            {/* Sheet 2 (Middle - Medium) */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100, rotateZ: 15 }}
              animate={{ opacity: 1, x: 10, y: 10, rotateZ: 5 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[50%] md:w-[45%] lg:w-[45%] aspect-[1/2.2] bg-[var(--color-teak)] rounded-[2px] shadow-[0_15px_40px_rgba(0,0,0,0.25)] border border-black/20 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
              <PlywoodEdge />
            </motion.div>

            {/* Sheet 3 (Top - Light/Premium) */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100, rotateZ: 5 }}
              animate={{ opacity: 1, x: -40, y: -20, rotateZ: -5 }}
              transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, rotateZ: -3, transition: { duration: 0.4 } }}
              className="absolute w-[50%] md:w-[45%] lg:w-[45%] aspect-[1/2.2] bg-[#E8DCC4] rounded-[2px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-black/10 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
              <PlywoodEdge />

              {/* Stamp/Mark on the wood */}
              <div className="absolute top-6 left-6 border-2 border-[var(--color-charcoal)]/20 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center opacity-50 rotate-12">
                <span className="text-[var(--color-charcoal)] font-bold text-[10px] md:text-xs uppercase tracking-widest text-center leading-tight">IS <br /> 303</span>
              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-[var(--color-teak)]/10 rounded-l-full blur-[100px] pointer-events-none" />
    </section>
  );
}
