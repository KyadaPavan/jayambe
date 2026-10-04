"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Submit Enquiry",
    desc: "Fill out the simple partnership form below with your shop details and monthly requirements."
  },
  {
    title: "Discovery Call",
    desc: "Our team will reach out to understand your specific area, challenges, and exact product needs."
  },
  {
    title: "Discuss Terms",
    desc: "We establish transparent pricing, discuss credit terms, and create a tailored supply plan."
  },
  {
    title: "Start Supply",
    desc: "We begin fulfilling your orders immediately with our premium, high-strength plywood."
  }
];

export function DealerProcess() {
  return (
    <section className="py-32 bg-[var(--color-charcoal)] relative overflow-hidden z-20 rounded-t-[3rem] -mt-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="sticky top-40"
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[var(--color-amber)] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[var(--color-amber)]" /> How It Works
              </h2>
              <h3 className="text-4xl md:text-5xl font-montserrat font-black text-white uppercase tracking-tighter leading-tight mb-8">
                Four Steps <br />
                To <span className="text-[var(--color-teak)]">Growth.</span>
              </h3>
              <p className="text-lg text-white/60 font-medium">
                We respect your time. Our onboarding process is straightforward, transparent, and designed to get stock moving into your warehouse quickly.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-white/10 hidden md:block" />
              
              <div className="flex flex-col gap-16">
                {steps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative flex gap-8 md:gap-12 group"
                  >
                    {/* Number Circle */}
                    <div className="relative z-10 w-14 h-14 rounded-full bg-[var(--color-charcoal)] border-2 border-[var(--color-teak)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-teak)] transition-colors duration-500">
                      <span className="font-bold text-white group-hover:text-[var(--color-charcoal)] transition-colors duration-500">0{i + 1}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="pt-2">
                      <h4 className="text-2xl font-montserrat font-bold text-white mb-3">
                        {step.title}
                      </h4>
                      <p className="text-white/60 leading-relaxed max-w-md group-hover:text-white/80 transition-colors duration-500">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, var(--color-teak) 0%, transparent 40%)' }} />
    </section>
  );
}
