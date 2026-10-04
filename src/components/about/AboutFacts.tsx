"use client";
import { motion } from "framer-motion";

export function AboutFacts() {
  const facts = [
    { label: "Legal Name", value: "Jai Shree Radha Plywood Private Limited" },
    { label: "Business", value: "Plywood supply and distribution" },
    { label: "Location", value: "Forbesganj, Araria, Bihar, India" },
    { label: "MD", value: "Jay Prakash Mandal" },
    { label: "Customers", value: "Dealers, distributors, retailers, furniture makers, builders" },
    { label: "Phone", value: "+91 70911 61465" },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 relative z-10 rounded-t-[3rem] -mt-12 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-[var(--color-sand)]/20 rounded-[2rem] p-8 md:p-16 border border-[var(--color-teak)]/20 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="var(--color-charcoal)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>

          <h3 className="text-3xl font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter mb-12">Company Facts</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 relative z-10">
            {facts.map((fact, i) => (
              <div key={i} className="flex flex-col gap-1 border-b border-[var(--color-teak)]/20 pb-4 hover:border-[var(--color-amber)] transition-colors duration-300">
                <span className="text-sm font-bold text-[var(--color-teak)] uppercase tracking-widest">{fact.label}</span>
                <span className="text-lg md:text-xl font-bold text-[var(--color-charcoal)]">{fact.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
