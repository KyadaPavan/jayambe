"use client";
import { motion } from "framer-motion";

export function ContactHero() {
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
              <span className="w-8 h-[1px] bg-[var(--color-teak)]" /> Get in Touch
            </h2>
            <h1 className="text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter leading-[0.85]">
              Let's Talk <br />
              <span className="text-[var(--color-amber)]">Plywood.</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-md lg:pb-6"
          >
            <p className="text-xl md:text-2xl font-bold text-[var(--color-charcoal)] leading-relaxed mb-6">
              Need a quote, bulk pricing or dealership details?
            </p>
            <p className="text-lg text-[var(--color-stone)] font-medium">
              Reach out to our team in Forbesganj. We are ready to provide expert advice and transparent pricing for your next project.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative architectural circle */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full border-[1px] border-[var(--color-teak)]/20 mix-blend-multiply pointer-events-none -translate-y-1/2 translate-x-1/4"
      />
    </section>
  );
}
