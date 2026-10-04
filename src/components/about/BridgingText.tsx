"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function BridgingText({ text, direction = 1 }: { text: string, direction?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const x = useTransform(scrollYProgress, [0, 1], [direction > 0 ? "-20%" : "20%", direction > 0 ? "20%" : "-20%"]);

  return (
    <div ref={ref} className="w-full py-12 md:py-24 overflow-hidden bg-[var(--color-charcoal)] flex items-center justify-center border-y border-white/5">
      <motion.div style={{ x }} className="whitespace-nowrap flex">
        <span className="text-6xl md:text-9xl font-montserrat font-black text-transparent uppercase" style={{ WebkitTextStroke: "2px var(--color-teak)", opacity: 0.3 }}>
          {text} • {text} • {text} • {text} • {text} • {text} •
        </span>
      </motion.div>
    </div>
  );
}
