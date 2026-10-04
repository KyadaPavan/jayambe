"use client";
import { motion } from "framer-motion";

export function DealerHero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 bg-[var(--color-charcoal)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[var(--color-amber)] mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[var(--color-amber)]" /> Partnership
            </h2>
            <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-montserrat font-black text-white uppercase tracking-tighter leading-[0.85]">
              Grow Your <br />
              Business <span className="text-[var(--color-teak)]">With Us.</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-md lg:pb-6"
          >
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-6">
              We are expanding our dealer and distributor network across Bihar.
            </p>
            <p className="text-lg text-white/60 font-medium">
              If you run a plywood or hardware shop, or want to start one, let's grow together with consistent quality and dependable supply.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full border-[1px] border-[var(--color-teak)]/20 pointer-events-none -translate-y-1/2 translate-x-1/3"
      />
    </section>
  );
}
