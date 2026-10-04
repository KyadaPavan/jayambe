"use client";
import { motion } from "framer-motion";

const values = [
  { id: "01", title: "Quality", desc: "We never compromise on the sheet that leaves our godown." },
  { id: "02", title: "Reliability", desc: "We deliver what we promise, when we promise." },
  { id: "03", title: "Durability", desc: "We choose plywood that lasts." },
  { id: "04", title: "Commitment", desc: "Your project is our priority." },
  { id: "05", title: "Integrity", desc: "Honest pricing and honest advice." },
  { id: "06", title: "Improvement", desc: "We keep getting better." },
];

export function AboutValues() {
  return (
    <section className="w-full bg-[var(--color-charcoal)] py-32 md:py-48 text-white relative z-10 rounded-[3rem] -mt-12 overflow-hidden shadow-2xl">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32">
           <div className="max-w-2xl">
             <h2 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">
               Mission &<br /> Vision
             </h2>
           </div>
           <div className="max-w-xl mt-12 md:mt-0">
             <p className="text-xl md:text-2xl text-[var(--color-cream)]/70 font-medium leading-relaxed">
               To deliver reliable, quality-focused plywood solutions and build Jai Shree Radha Plywood as a trusted name in the industry through continuous improvement.
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 lg:gap-x-12">
          {values.map((val, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border-t border-white/20 pt-8 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[var(--color-teak)] transition-all duration-500 group-hover:w-full" />
              <span className="text-sm font-bold text-[var(--color-teak)] mb-4">{val.id}</span>
              <h3 className="text-3xl font-montserrat font-black uppercase tracking-tight mb-4 group-hover:text-[var(--color-amber)] transition-colors">{val.title}</h3>
              <p className="text-lg text-white/60 font-medium">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
