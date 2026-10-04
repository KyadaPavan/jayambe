"use client";
import { motion } from "framer-motion";

export function AboutProblem() {
  return (
    <section className="w-full bg-[var(--color-cream)] py-32 md:py-48 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl flex flex-col items-center"
        >
          <span className="text-[var(--color-teak)] font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 block">The Problem We Solve</span>
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-[var(--color-charcoal)] leading-tight mb-12">
            Plywood quality can vary from one batch to the next. <span className="text-[var(--color-teak)] italic">That affects strength, finish and your reputation.</span>
          </h2>
          
          <div className="w-24 h-1 bg-[var(--color-amber)] mb-12" />

          <p className="text-xl md:text-3xl text-[var(--color-ink)] leading-relaxed font-medium">
            We focus on uniform thickness, surface quality, structural stability and dependable stock, so carpenters, dealers and contractors can work with absolute confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
