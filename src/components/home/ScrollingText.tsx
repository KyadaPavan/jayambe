"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollingText() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-1000, 0]);

  return (
    <section ref={container} className="py-20 bg-[var(--color-cream)] overflow-hidden relative z-10">
      <div className="flex flex-col gap-8 whitespace-nowrap">
        <motion.div style={{ x: x1 }} className="flex gap-16 items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <h2 className="text-6xl md:text-8xl font-montserrat font-bold text-[var(--color-charcoal)] opacity-90 uppercase tracking-tighter">
                Strong Foundations
              </h2>
              <div className="w-8 h-8 rounded-full bg-[var(--color-amber)]" />
            </div>
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex gap-16 items-center -ml-[500px]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <h2 className="text-6xl md:text-8xl font-montserrat font-bold text-[var(--color-teak)] uppercase tracking-tighter">
                SUPERIOR PLYWOOD
              </h2>
              <div className="w-32 h-2 bg-[var(--color-teak)]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
