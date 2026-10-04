"use client";
import { motion } from "framer-motion";

export function ProductsHero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 bg-[var(--color-cream)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[var(--color-teak)] mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[var(--color-teak)]" /> The Range
            </h2>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter leading-[0.85]">
              Built For <br />
              <span className="text-[var(--color-amber)]">Every</span> Project.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-md lg:pb-6"
          >
            <p className="text-xl md:text-2xl font-bold text-[var(--color-charcoal)] leading-relaxed mb-6">
              From a single wardrobe to a full housing project, the right plywood makes all the difference.
            </p>
            <p className="text-lg text-[var(--color-stone)] font-medium">
              Explore our core supply range below. We focus on consistent quality, dependable strength, and timely delivery across Bihar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
