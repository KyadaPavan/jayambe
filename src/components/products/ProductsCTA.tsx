"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export function ProductsCTA() {
  return (
    <section className="relative z-20">
      {/* Top Half: Not Sure What to Choose */}
      <div className="bg-[var(--color-cream)] py-20 border-t border-[var(--color-teak)]/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center max-w-2xl mx-auto"
          >
            <HelpCircle className="text-[var(--color-teak)] w-12 h-12 mb-6" />
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-[var(--color-charcoal)] mb-4">
              Not sure what to choose?
            </h3>
            <p className="text-[var(--color-stone)] mb-8">
              Tell us exactly what you are building. Our experienced team will analyze your requirements and recommend the right type and thickness for your project.
            </p>
            <Link href="https://wa.me/917091161465" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-[var(--color-amber)] hover:text-[var(--color-teak)] transition-colors">
              WhatsApp Us <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Half: Bulk CTA */}
      <div className="bg-[var(--color-charcoal)] py-32 rounded-t-[3rem] -mt-8 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
              Stocking a Shop <br />
              <span className="text-[var(--color-teak)]">Or Running a Project?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
              We offer bulk quantities, repeat-order convenience, and transparent pricing for dealers, retailers, contractors, and builders across Bihar.
            </p>
            <Link href="/become-a-dealer" className="inline-block bg-[var(--color-amber)] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[var(--color-charcoal)] transition-all duration-300 shadow-[0_10px_30px_rgba(217,142,63,0.3)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)]">
              Request Bulk Quote
            </Link>
          </motion.div>
        </div>
        
        {/* Abstract lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-teak) 0, var(--color-teak) 1px, transparent 1px, transparent 40px)' }} />
      </div>
    </section>
  );
}
