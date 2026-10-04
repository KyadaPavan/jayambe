"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const partners = [
  { name: "Dealers & Distributors", desc: "Bulk supply chain and retail distribution networks." },
  { name: "Retailers", desc: "Local showrooms and plywood retailers." },
  { name: "Furniture Manufacturers", desc: "High-volume workshop and factory requirements." },
  { name: "Contractors & Builders", desc: "Large-scale commercial and residential projects." },
  { name: "Architects & Designers", desc: "Premium interior and structural specifications." }
];

export function WhoWeServe() {
  return (
    <section className="bg-[var(--color-charcoal)] pt-48 pb-32 -mt-24 relative z-[5] rounded-b-[4rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          
          {/* Left: Sticky Heading */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-montserrat font-bold text-white leading-tight tracking-tighter"
              >
                Built for the <br />
                <span className="text-[var(--color-amber)] italic font-light">Industry.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/60 mt-8 text-xl max-w-sm leading-relaxed"
              >
                We provide reliable, high-grade plywood solutions for businesses across the entire construction and design spectrum.
              </motion.p>
            </div>
          </div>

          {/* Right: Brutalist Hover Rows */}
          <div className="w-full lg:w-2/3 border-t border-white/10 mt-10 lg:mt-0">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-b border-white/10 py-10 md:py-16 px-4 hover:px-8 transition-all duration-500 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden"
              >
                {/* Background Hover Fill */}
                <div className="absolute inset-0 bg-[var(--color-teak)] transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.76,0,0.24,1] z-0" />
                
                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white group-hover:text-[var(--color-charcoal)] transition-colors duration-500">
                    {partner.name}
                  </h3>
                  <p className="text-white/50 text-lg md:text-xl mt-4 group-hover:text-[var(--color-charcoal)]/80 transition-colors duration-500 font-light">
                    {partner.desc}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="relative z-10 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-[var(--color-charcoal)] group-hover:text-[var(--color-charcoal)] transition-all duration-500 flex-shrink-0">
                  <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
