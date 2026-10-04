"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const audiences = [
  "Plywood Dealers",
  "Hardware Shop Owners",
  "Distributors",
  "Retailers",
  "Wholesalers",
  "Interior Suppliers"
];

const benefits = [
  {
    title: "Consistent Quality",
    desc: "We ensure uniform thickness and surface finish across all batches, so your reputation remains untarnished."
  },
  {
    title: "Steady Stock",
    desc: "Maintain your supply chain without interruptions. We keep high stock levels to fulfill bulk orders immediately."
  },
  {
    title: "Clear Pricing",
    desc: "No hidden charges or unexpected fluctuations. Get transparent, highly competitive pricing that helps you grow."
  },
  {
    title: "Responsive Support",
    desc: "Direct line of communication for fast quotes, order tracking, and priority customer service."
  },
  {
    title: "Long-Term Partnership",
    desc: "We believe in mutual growth. Enjoy favorable credit terms, marketing support, and exclusive area benefits as we grow together."
  }
];

export function DealerBenefits() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <section className="bg-white overflow-hidden z-20 relative" ref={scrollRef}>
      {/* Bridging Section: Marquee */}
      <div className="py-12 border-y border-[var(--color-charcoal)]/10 bg-[var(--color-cream)] overflow-hidden flex flex-col gap-4">
        <motion.div style={{ x: x1 }} className="flex gap-8 whitespace-nowrap will-change-transform">
          {[...audiences, ...audiences, ...audiences].map((item, i) => (
            <span key={i} className="text-4xl md:text-6xl font-montserrat font-black text-[var(--color-teak)] uppercase tracking-tighter opacity-80">
              {item} <span className="text-[var(--color-charcoal)]/20 mx-4">•</span>
            </span>
          ))}
        </motion.div>
        <motion.div style={{ x: x2 }} className="flex gap-8 whitespace-nowrap will-change-transform">
          {[...audiences, ...audiences, ...audiences].reverse().map((item, i) => (
            <span key={i} className="text-4xl md:text-6xl font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter opacity-10">
              {item} <span className="text-[var(--color-teak)] mx-4">•</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-6 md:px-12 py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
            <div className="sticky top-40">
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[var(--color-teak)] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[var(--color-teak)]" /> What You Get
              </h2>
              <h3 className="text-4xl md:text-5xl font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter leading-tight mb-8">
                The Jai Shree <br />
                Radha <span className="text-[var(--color-stone)]">Advantage.</span>
              </h3>
              <p className="text-lg text-[var(--color-stone)] font-medium">
                We do more than just supply plywood. We build lasting partnerships that ensure your business thrives in a competitive market.
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--color-cream)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-amber)] transition-colors duration-500">
                    <Check className="text-[var(--color-teak)] group-hover:text-white transition-colors duration-500" size={20} />
                  </div>
                  <h4 className="text-2xl font-montserrat font-bold text-[var(--color-charcoal)] mb-4">
                    {benefit.title}
                  </h4>
                  <p className="text-[var(--color-stone)] leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
