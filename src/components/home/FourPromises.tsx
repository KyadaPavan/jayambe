"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Layers, Truck, Handshake } from "lucide-react";

const promises = [
  { icon: <Layers size={28} strokeWidth={1.5} />, title: "Consistent Quality", desc: "Uniform thickness and surface finish, sheet after sheet, so your work comes out right every time." },
  { icon: <Shield size={28} strokeWidth={1.5} />, title: "Lasting Strength", desc: "Structural stability and dependable performance for furniture, interiors and construction." },
  { icon: <Truck size={28} strokeWidth={1.5} />, title: "Dependable Supply", desc: "Stock availability and timely delivery so your project never waits." },
  { icon: <Handshake size={28} strokeWidth={1.5} />, title: "Honest Service", desc: "Clear quotes, responsive support and long-term relationships, from one sheet to bulk orders." },
];

export function FourPromises() {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={container} className="relative bg-[var(--color-charcoal)] rounded-b-[3rem] md:rounded-b-[6rem] z-30 shadow-[0_30px_60px_rgba(0,0,0,0.1)]" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full h-full flex flex-col justify-center">
          <motion.div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-6">
              Four Promises in <br/> <span className="text-[var(--color-teak)] italic font-light">Every Sheet.</span>
            </h2>
          </motion.div>

          <div className="relative w-full max-w-5xl mx-auto h-[400px]">
            {promises.map((promise, index) => {
              // Creating a stacked card effect
              const targetScale = 1 - ((promises.length - index) * 0.05);
              const range = [index * 0.25, 1];
              const scale = useTransform(scrollYProgress, range, [1, targetScale]);
              
              const yRange = [index * 0.25, Math.min(1, (index + 1) * 0.25)];
              const y = useTransform(scrollYProgress, yRange, [500, 0]);
              
              const opacityRange = [index * 0.25, Math.min(1, index * 0.25 + 0.15)];
              const opacity = useTransform(scrollYProgress, opacityRange, [0, 1]);

              return (
                <motion.div
                  key={index}
                  style={{ 
                    scale, 
                    y,
                    opacity,
                    top: `calc(5% + ${index * 30}px)`,
                    zIndex: index
                  }}
                  className="absolute left-0 right-0 w-full bg-[#161616] rounded-[2.5rem] p-10 md:p-16 shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col md:flex-row items-start md:items-center gap-10 overflow-hidden group transition-colors duration-500 hover:bg-[#1a1a1a]"
                >
                  {/* Huge background number */}
                  <div className="absolute -right-8 -top-12 bottom-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none text-[350px] font-montserrat font-bold text-white leading-none group-hover:opacity-[0.06] transition-opacity duration-700">
                    0{index + 1}
                  </div>

                  <div className="relative w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-teak)] flex-shrink-0 bg-white/5 backdrop-blur-md group-hover:scale-110 group-hover:border-[var(--color-amber)]/50 transition-all duration-700">
                    {promise.icon}
                  </div>
                  
                  <div className="relative z-10 flex-1">
                    <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4 tracking-tight">{promise.title}</h3>
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl font-light">{promise.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
