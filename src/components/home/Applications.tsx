"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const applications = [
  {
    title: "Furniture",
    desc: "Beds, wardrobes, cabinets and tables that stay strong for years.",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Interiors",
    desc: "Panelling, partitions and ceilings with a smooth, clean finish.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Residential",
    desc: "Reliable material for homes, kitchens and renovations.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Commercial",
    desc: "Shops, offices and showrooms built to handle daily use.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Construction",
    desc: "Strong boards for site work and structural requirements.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
  },
];

export function Applications() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[var(--color-cream)] pt-48 pb-32 -mt-24 relative z-10 rounded-b-[4rem]">
      <div className="container mx-auto px-6 md:px-12">

        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-montserrat font-bold text-[var(--color-charcoal)] leading-[0.95] tracking-tighter max-w-3xl"
          >
            Find the Right Plywood <br />
            <span className="text-[var(--color-teak)] font-light italic">For Your Project.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/products"
              className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full border border-[var(--color-charcoal)] overflow-hidden transition-all duration-500 hover:border-transparent"
            >
              <div className="absolute inset-0 bg-[var(--color-charcoal)] transform translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />

              <span className="relative z-10 font-montserrat font-bold text-sm tracking-widest uppercase text-[var(--color-charcoal)] group-hover:text-white transition-colors duration-500">
                View All Products
              </span>

              <div className="relative z-10 w-8 h-8 rounded-full bg-[var(--color-charcoal)]/10 flex items-center justify-center text-[var(--color-charcoal)] group-hover:bg-white group-hover:text-[var(--color-charcoal)] transition-colors duration-500">
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* INTERACTIVE STABLE LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start relative">

          {/* Left Side: Sticky Display Window */}
          <div className="w-full lg:w-5/12 sticky top-32 h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(30,27,24,0.3)] bg-[var(--color-charcoal)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${applications[activeIndex].image})` }}
              >
                {/* Dark gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Description placed securely inside the image container */}
                <div className="absolute bottom-0 left-0 w-full p-10 md:p-12 flex flex-col justify-end">
                  <span className="text-[var(--color-amber)] font-montserrat font-bold text-lg mb-2">0{activeIndex + 1}</span>
                  <h3 className="text-white font-montserrat font-bold text-4xl mb-4">{applications[activeIndex].title}</h3>
                  <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-md">
                    {applications[activeIndex].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Solid Hover Menu (No Layout Shifts) */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center py-10 lg:py-20 gap-4">
            {applications.map((app, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  onViewportEnter={() => setActiveIndex(index)}
                  viewport={{ margin: "-30% 0px -40% 0px" }}
                  className="group flex items-center py-10 md:py-16"
                >
                  <h3 className={`text-5xl md:text-7xl lg:text-8xl font-montserrat font-bold uppercase tracking-tighter transition-all duration-300 ease-out ${isActive ? "text-[var(--color-charcoal)] translate-x-4 md:translate-x-8" : "text-[var(--color-charcoal)]/20"}`}>
                    {app.title}
                  </h3>

                  {/* Decorative dot indicator */}
                  <div className={`ml-8 w-4 h-4 rounded-full bg-[var(--color-amber)] transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
