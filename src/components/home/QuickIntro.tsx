"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function QuickIntro() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={container} className="py-32 bg-[var(--color-cream)] relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* IMAGE / MEDIA COLUMN */}
          <motion.div
            style={{ scale }}
            className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(30,27,24,0.4)] group"
          >
            {/* Parallax Image */}
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-[-20%] w-[140%] h-[140%] bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center"
            />
            {/* Dark overlay to ensure text inside is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/90 via-transparent to-transparent transition-opacity duration-700 group-hover:opacity-80" />

            {/* Floating Graphic elements */}
            <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full border border-[var(--color-amber)] border-dashed animate-[spin_12s_linear_infinite]" />
            </div>

            {/* Inner Content */}
            <div className="absolute bottom-0 left-0 p-10 flex flex-col justify-end w-full">
              <h3 className="text-white font-montserrat font-bold text-3xl mb-4 leading-tight drop-shadow-lg">
                Crafted for <br />
                <span className="text-[var(--color-amber)]">perfection.</span>
              </h3>

              <p className="text-white/80 text-sm font-light tracking-wide drop-shadow-md">
                Serving dealers, carpenters, and builders across Bihar.
              </p>
            </div>
          </motion.div>

          {/* TYPOGRAPHY / CONTENT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            <h2 className="text-5xl md:text-6xl lg:text-8xl font-montserrat font-bold text-[var(--color-charcoal)] mb-10 leading-[0.95] tracking-tighter">
              <div className="overflow-hidden py-2">
                <motion.div
                  initial={{ opacity: 0, y: "100%", rotate: 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ margin: "-100px", once: true }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                >
                  STRENGTH
                </motion.div>
              </div>
              <div className="overflow-hidden py-2">
                <motion.div
                  initial={{ opacity: 0, y: "100%", rotate: 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ margin: "-100px", once: true }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                  className="text-[var(--color-teak)] italic font-light lowercase"
                >
                  in every layer.
                </motion.div>
              </div>
            </h2>



            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px", once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="text-xl md:text-2xl text-[var(--color-stone)] leading-relaxed mb-12 max-w-2xl font-light"
            >
              Jai Shree Radha Plywood Private Limited is a premium plywood supply company based in Forbesganj, Bihar. We provide highly durable, consistent plywood for furniture, interiors, and heavy construction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px", once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
              <Link
                href="/about-us"
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full border border-[var(--color-charcoal)] overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-[0_15px_30px_-10px_rgba(34,34,34,0.4)]"
              >
                <div className="absolute inset-0 bg-[var(--color-charcoal)] transform translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />

                <span className="relative z-10 font-montserrat font-bold text-lg text-[var(--color-charcoal)] group-hover:text-white transition-colors duration-500">
                  Discover Our Story
                </span>

                <div className="relative z-10 w-8 h-8 rounded-full bg-[var(--color-charcoal)]/10 flex items-center justify-center text-[var(--color-charcoal)] group-hover:bg-white group-hover:text-[var(--color-charcoal)] transition-colors duration-500">
                  <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
