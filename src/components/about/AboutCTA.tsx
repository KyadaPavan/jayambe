"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="w-full bg-[var(--color-cream)] py-32 relative z-10 pb-48">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter mb-8">
            Where we are going
          </h2>
          <p className="text-xl md:text-2xl text-[var(--color-stone)] leading-relaxed font-medium mb-16">
            We are expanding our dealer and distributor network, building stronger B2B partnerships, widening our product range and gradually entering new regional markets, with <span className="text-[var(--color-amber)] font-bold">quality always first.</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/become-a-dealer" className="group relative inline-flex items-center justify-center gap-4 bg-[var(--color-amber)] text-white px-10 py-5 rounded-full overflow-hidden w-full sm:w-auto shadow-lg hover:shadow-[0_0_30px_rgba(217,142,63,0.4)] transition-shadow">
              <span className="relative z-10 font-bold uppercase tracking-widest text-sm transition-colors duration-300 group-hover:text-[var(--color-charcoal)]">Become a Dealer</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-colors duration-300 group-hover:text-[var(--color-charcoal)] group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0" />
            </Link>
            
            <Link href="/contact-us" className="group inline-flex items-center justify-center gap-4 bg-transparent border-2 border-[var(--color-teak)] text-[var(--color-charcoal)] px-10 py-5 rounded-full w-full sm:w-auto hover:bg-[var(--color-teak)] hover:text-white transition-all duration-300">
              <span className="font-bold uppercase tracking-widest text-sm">Contact Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
