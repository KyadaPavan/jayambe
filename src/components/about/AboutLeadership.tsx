"use client";
import { motion } from "framer-motion";

export function AboutLeadership() {
  return (
    <section className="w-full bg-[var(--color-cream)] py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] md:aspect-square lg:aspect-[3/4] rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden"
          >
            {/* Replace with actual image of Jay Prakash Mandal */}
            <div className="absolute inset-0 bg-[var(--color-charcoal)]/10 mix-blend-multiply z-10 transition-opacity duration-500 hover:opacity-0" />
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1600&auto=format&fit=crop" 
              alt="Jay Prakash Mandal" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
            />
            <div className="absolute inset-0 border-2 border-[var(--color-teak)] rounded-tr-[5rem] rounded-bl-[5rem] m-4 md:m-8 pointer-events-none opacity-50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[var(--color-teak)] font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 block">Leadership</span>
            <h2 className="text-5xl md:text-7xl font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter leading-[0.9] mb-4">
              Jay Prakash <br /> Mandal
            </h2>
            <p className="text-xl text-[var(--color-stone)] font-bold uppercase tracking-widest mb-12">Managing Director</p>

            <blockquote className="text-2xl md:text-4xl text-[var(--color-ink)] font-montserrat font-bold leading-tight italic border-l-4 border-[var(--color-amber)] pl-8 mb-12 relative">
              <span className="absolute -top-10 -left-6 text-8xl text-[var(--color-teak)] opacity-20 font-serif">"</span>
              Quality is not just a promise; it is the foundation of every relationship we build.
            </blockquote>

            <p className="text-lg text-[var(--color-stone)] leading-relaxed mb-6 font-medium">
              Jay Prakash Mandal leads the company's operations, customer relationships and growth across the furniture, interior, residential, commercial and construction markets. 
            </p>
            <p className="text-lg text-[var(--color-stone)] leading-relaxed font-medium">
              He is deeply committed to delivering quality-focused plywood, ensuring absolute customer satisfaction, and fostering long-term value creation for dealers and craftsmen alike.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
