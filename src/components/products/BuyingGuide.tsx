"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const guideItems = [
  {
    useCase: "Wardrobes, beds, cabinets",
    recommendation: "Furniture-Grade Plywood",
    why: "Requires a smooth finish and excellent screw-holding capacity to ensure longevity under daily use."
  },
  {
    useCase: "Kitchens & bathrooms",
    recommendation: "Waterproof (BWP) Plywood",
    why: "Essential for areas with high moisture and humidity. Prevents warping and ensures structural integrity."
  },
  {
    useCase: "Partitions & ceilings",
    recommendation: "Interior-Grade Plywood",
    why: "Lightweight yet strong, offering a uniform surface that is extremely easy to laminate or veneer."
  },
  {
    useCase: "Concrete formwork on site",
    recommendation: "Shuttering Plywood",
    why: "Heavy-duty, reusable boards built specifically to withstand the extreme pressures of wet concrete."
  },
  {
    useCase: "Shop or office fit-outs",
    recommendation: "Commercial Plywood",
    why: "An economical, highly versatile board that provides reliability for general interior construction."
  }
];

export function BuyingGuide() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={containerRef} className="py-32 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left: Sticky Heading */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-40">
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[var(--color-teak)] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[var(--color-teak)]" /> Buying Guide
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter leading-[0.9] mb-8">
                Which <br />
                Plywood <br />
                <span className="text-[var(--color-stone)]">Should You Choose?</span>
              </h3>
              <p className="text-lg text-[var(--color-stone)] font-medium max-w-sm mb-12">
                Every project has unique demands. Use this quick reference guide to ensure you select the perfect board for your specific application.
              </p>
              
              <Link href="/contact-us" className="inline-flex items-center gap-4 px-8 py-4 bg-[var(--color-charcoal)] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-amber)] transition-colors duration-300">
                Get Expert Advice
              </Link>
            </div>
          </div>
          
          {/* Right: Scrolling Items */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:mt-32">
            {guideItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[var(--color-teak)]/10 group hover:border-[var(--color-teak)] transition-colors duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-stone)]">
                    If you are building...
                  </p>
                  <h4 className="text-2xl md:text-3xl font-montserrat font-bold text-[var(--color-charcoal)] leading-tight">
                    {item.useCase}
                  </h4>
                </div>
                
                <div className="w-full h-[1px] bg-black/5 mb-8 group-hover:bg-[var(--color-teak)]/20 transition-colors duration-500" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="md:w-1/2">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-teak)] mb-2">
                      Choose:
                    </p>
                    <p className="text-xl font-bold text-[var(--color-charcoal)]">
                      {item.recommendation}
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-[var(--color-stone)] text-sm md:text-base leading-relaxed">
                      {item.why}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
      
      {/* Decorative Element */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full border-[2px] border-[var(--color-teak)]/5 pointer-events-none -translate-y-1/2 translate-x-1/4"
      />
    </section>
  );
}
