"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function DealerForm() {
  return (
    <section className="py-32 bg-[var(--color-cream)] relative overflow-hidden z-20" id="apply">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter mb-4">
            Apply for <span className="text-[var(--color-amber)]">Dealership</span>
          </h2>
          <p className="text-[var(--color-stone)] text-lg">
            Fill out the form below and our team will contact you within 24 hours.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-16 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-[var(--color-charcoal)]/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
            
            <div className="relative group">
              <input type="text" id="name" required className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer" placeholder=" " />
              <label htmlFor="name" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Full Name *
              </label>
            </div>
            
            <div className="relative group">
              <input type="text" id="shop" required className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer" placeholder=" " />
              <label htmlFor="shop" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Shop / Firm Name *
              </label>
            </div>
            
            <div className="relative group">
              <input type="tel" id="phone" required className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer" placeholder=" " />
              <label htmlFor="phone" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Phone Number *
              </label>
            </div>
            
            <div className="relative group">
              <input type="text" id="city" required className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer" placeholder=" " />
              <label htmlFor="city" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                City / District *
              </label>
            </div>
            
            <div className="relative group">
              <input type="number" id="years" className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer" placeholder=" " />
              <label htmlFor="years" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Years in Business
              </label>
            </div>
            
            <div className="relative group">
              <input type="text" id="req" className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer" placeholder=" " />
              <label htmlFor="req" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Monthly Requirement (Approx)
              </label>
            </div>
            
            <div className="relative group md:col-span-2">
              <textarea id="message" rows={1} className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer resize-none" placeholder=" "></textarea>
              <label htmlFor="message" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Additional Message
              </label>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button type="submit" className="inline-flex items-center gap-3 bg-[var(--color-amber)] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-charcoal)] transition-all duration-300 shadow-lg hover:gap-5">
              Submit Application <ArrowRight size={18} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
