"use client";
import { motion } from "framer-motion";

const checks = [
  {
    title: "Uniform Thickness",
    desc: "Measure the sheet across multiple points. High-quality plywood maintains an identical thickness across the entire board without variation."
  },
  {
    title: "Solid Edge Layers",
    desc: "Examine the side profile. The internal layers (plies) should be perfectly even, tightly bonded, and show absolutely no gaps or overlapping patches."
  },
  {
    title: "Flawless Surface",
    desc: "Inspect the face veneer closely. It should be entirely smooth, completely free of structural cracks, bubbles, or unusually rough areas."
  },
  {
    title: "Perfect Flatness",
    desc: "View the sheet from the edge at eye level. A premium board will lay perfectly flat and will not bow, bend, or twist."
  },
  {
    title: "Authentic Certification",
    desc: "Always verify the grade, ISI certification, and genuine brand markings printed directly on the sheet to guarantee authenticity."
  }
];

export function QualityCheck() {
  return (
    <section className="py-32 bg-white relative overflow-hidden z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[var(--color-teak)] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[var(--color-teak)]" /> Quality Control
              </h2>
              <h3 className="text-4xl md:text-5xl font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter leading-tight mb-8">
                How to check <br />
                plywood quality <br />
                <span className="text-[var(--color-stone)]">before you buy.</span>
              </h3>
              <p className="text-lg text-[var(--color-stone)] font-medium">
                Do not compromise on the foundation of your project. Follow this 5-point professional checklist to ensure you are buying premium, structural-grade plywood.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {checks.map((check, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="text-[4rem] lg:text-[5rem] font-montserrat font-black text-[var(--color-cream)] leading-none mb-4 group-hover:text-[var(--color-teak)] transition-colors duration-500">
                    0{i + 1}
                  </div>
                  <div className="absolute top-8 left-6 md:left-8">
                    <h4 className="text-xl font-bold text-[var(--color-charcoal)] mb-3">
                      {check.title}
                    </h4>
                    <p className="text-[var(--color-stone)] text-sm leading-relaxed">
                      {check.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
