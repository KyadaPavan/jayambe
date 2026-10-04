"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Tell us your need", desc: "Type, thickness and quantity." },
  { title: "Get a clear quote", desc: "Transparent pricing, no confusion." },
  { title: "Confirm your order", desc: "We prepare and pack." },
  { title: "Receive delivery", desc: "On time, at your shop or site." },
];

export function OrderingSteps() {
  return (
    <section className="bg-[var(--color-cream)] pt-48 pb-32 -mt-24 relative z-0">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[var(--color-charcoal)] mb-6">
            Simple Ordering in <span className="text-[var(--color-amber)]">4 Steps</span>
          </h2>
          <p className="text-xl text-[var(--color-stone)] max-w-2xl mx-auto">
            We value your time. Our process is built to be fast, transparent, and hassle-free.
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Exact Connecting Line (Centers of first and last columns) */}
          <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-[1px] bg-[var(--color-sand)]/30 hidden md:block overflow-hidden">
             {/* Subtle Continuous Shimmer */}
             <motion.div 
               animate={{ x: ["-100%", "400%"] }}
               transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
               className="h-full w-1/4 bg-[var(--color-amber)]/80"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative text-center group cursor-pointer"
              >
                {/* Ultra-Minimal Node */}
                <div className="w-14 h-14 bg-[var(--color-cream)] rounded-full border border-[var(--color-sand)] group-hover:border-[var(--color-charcoal)] group-hover:bg-[var(--color-charcoal)] flex items-center justify-center mx-auto mb-8 transition-all duration-500 relative z-10">
                  <span className="font-montserrat text-sm font-bold tracking-widest text-[var(--color-charcoal)] group-hover:text-[var(--color-cream)] transition-colors duration-500">
                    0{index + 1}
                  </span>
                </div>
                
                {/* Refined Typography */}
                <h3 className="text-xl font-montserrat font-bold text-[var(--color-charcoal)] mb-3 group-hover:text-[var(--color-amber)] transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-stone)] font-light leading-relaxed max-w-[220px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
