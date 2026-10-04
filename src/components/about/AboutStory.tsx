"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={containerRef} className="w-full bg-[#fcfcfc] relative z-10 rounded-t-[3rem] overflow-hidden -mt-12 pt-32 md:pt-40 pb-32 md:pb-48 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12">

        {/* Intro Block: Clean, editorial typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 md:mb-40">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-5xl md:text-7xl font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter leading-[0.9]">
                Our <br />
                <span className="text-[var(--color-stone)]">Story.</span>
              </h3>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-20">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl font-medium text-[var(--color-charcoal)] leading-snug mb-8"
            >
              Founded by Jay Prakash Mandal with a simple, unwavering goal: to bring consistent, dependable plywood to the builders and carpenters of Seemanchal.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-[var(--color-stone)] leading-relaxed font-medium"
            >
              We saw a gap in the market where quality varied drastically from batch to batch. This inconsistency directly affected the reputation of hardworking craftsmen. Today, we supply dedicated dealers, retailers, and interior professionals across Forbesganj, Araria, and beyond—ensuring that every project starts with a strong, reliable foundation.
            </motion.p>
          </div>
        </div>

        {/* Cinematic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: CSS-Coded Abstract Plywood Visual */}
          {/* Left: Real Plywood Texture Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[60vh] lg:h-[80vh] rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-[#dcb274]"
          >
            <motion.img
              style={{ y: imageY }}
              src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Plywood.jpg"
              alt="Close-up of premium plywood veneer"
              className="absolute inset-0 w-full h-[120%] object-cover object-center opacity-90 contrast-125 saturate-150"
            />

            {/* Subtle Overlay to make it feel premium */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-charcoal)]/30 via-transparent to-transparent mix-blend-multiply" />

            {/* Minimal caption */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-white border-t border-white/20 pt-4 z-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Pure Structural Integrity</span>
              <span className="text-xs font-bold">EST. 2005</span>
            </div>
          </motion.div>

          {/* Right: Elegant What We Do List */}
          <motion.div style={{ y: textY }} className="flex flex-col gap-12 lg:pl-12">
            <div className="flex items-center gap-4">

              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-charcoal)]">
                What We Do
              </h3>
            </div>

            <div className="flex flex-col gap-12">
              {[
                { title: "Furniture", desc: "Beds, wardrobes, cabinets, and custom built-ins that require absolute structural integrity." },
                { title: "Interiors", desc: "Premium panelling, space partitions, and ceilings for modern residential and commercial design." },
                { title: "Commercial", desc: "High-traffic homes, shops, and offices that demand superior moisture-resistant durability." },
                { title: "Construction", desc: "Heavy-duty site and structural needs for builders who cannot compromise on core strength." }
              ].map((item, i) => (
                <div key={i} className="group relative pl-8 md:pl-10 border-l-2 border-[var(--color-charcoal)]/10 hover:border-[var(--color-teak)] transition-colors duration-500 cursor-default">
                  {/* Elegant Hover dot */}
                  <div className="absolute left-[-5px] md:left-[-6px] top-3 w-2.5 h-2.5 rounded-full bg-[var(--color-teak)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_12px_var(--color-teak)]" />

                  <h4 className="text-2xl md:text-3xl font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter mb-3 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                    {item.title}
                  </h4>
                  <p className="text-lg text-[var(--color-stone)] leading-relaxed font-medium group-hover:translate-x-2 transition-transform duration-500 delay-75 ease-out">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
