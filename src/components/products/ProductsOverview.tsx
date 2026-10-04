"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: "01",
    name: "Furniture Plywood",
    short: "Beds, wardrobes, cabinets, tables",
    desc: "Engineered for a smooth finish and strong screw-holding capacity. Remains perfectly stable over time.",
    specs: ["Smooth finish", "High stability", "Strong screw-holding"],
    color: "hover:bg-[#f4f1ee]",
    dark: false
  },
  {
    id: "02",
    name: "Interior Plywood",
    short: "Wall panelling, partitions, ceilings",
    desc: "Provides a clean, uniform surface that is exceptionally easy to laminate or veneer for modular interiors.",
    specs: ["Clean surface", "Easy lamination", "Uniform thickness"],
    color: "hover:bg-[#eae0d5]",
    dark: false
  },
  {
    id: "03",
    name: "Waterproof (BWP)",
    short: "Kitchens, bathrooms, damp areas",
    desc: "Boiling Waterproof plywood that resists moisture and provides a long life even in highly humid conditions.",
    specs: ["Moisture resistant", "Boiling waterproof", "Long life"],
    color: "hover:bg-[var(--color-teak)]",
    dark: true
  },
  {
    id: "04",
    name: "Commercial Plywood",
    short: "General use, shops, offices",
    desc: "Economical and versatile plywood ideal for general purpose applications, retail shops, and office fit-outs.",
    specs: ["Versatile", "Economical", "General purpose"],
    color: "hover:bg-[#d8c3a5]",
    dark: false
  },
  {
    id: "05",
    name: "Marine-Grade",
    short: "High-moisture or demanding uses",
    desc: "Manufactured for extreme conditions, offering superior water resistance for demanding architectural applications.",
    specs: ["Extreme durability", "High water resistance", "Marine grade"],
    color: "hover:bg-[var(--color-charcoal)]",
    dark: true
  },
  {
    id: "06",
    name: "Construction",
    short: "Concrete formwork, site work",
    desc: "Heavy-duty shuttering plywood built for structural needs. Strong, reusable, and dependable on site.",
    specs: ["Reusable", "Heavy-duty", "Structural strength"],
    color: "hover:bg-[#1a1815]",
    dark: true
  }
];

export function ProductsOverview() {
  return (
    <section className="w-full bg-white py-24 md:py-32 z-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col border-t border-[var(--color-charcoal)]/10">
          {products.map((product, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row group border-b border-[var(--color-charcoal)]/10 transition-colors duration-500 ${product.color}`}
            >
              {/* Number & Name */}
              <div className="lg:w-1/3 py-12 lg:py-24 lg:pr-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--color-charcoal)]/10 group-hover:border-transparent transition-colors duration-500">
                <span className={`text-sm font-bold tracking-[0.3em] mb-12 flex items-center gap-4 transition-colors duration-500 ${product.dark ? 'text-[var(--color-teak)] group-hover:text-white/50' : 'text-[var(--color-teak)] group-hover:text-[var(--color-charcoal)]/50'}`}>
                  <span className={`w-8 h-[1px] transition-colors duration-500 ${product.dark ? 'bg-[var(--color-teak)] group-hover:bg-white/50' : 'bg-[var(--color-teak)] group-hover:bg-[var(--color-charcoal)]/50'}`} />
                  {product.id}
                </span>
                <h3 className={`text-4xl md:text-5xl lg:text-6xl font-montserrat font-black uppercase tracking-tighter leading-none transition-colors duration-500 ${product.dark ? 'text-[var(--color-charcoal)] group-hover:text-white' : 'text-[var(--color-charcoal)] group-hover:text-[var(--color-charcoal)]'}`}>
                  {product.name}
                </h3>
              </div>
              
              {/* Details */}
              <div className="lg:w-2/3 py-12 lg:py-24 lg:pl-16 flex flex-col justify-center">
                <p className={`text-2xl md:text-3xl font-bold mb-6 leading-tight transition-colors duration-500 ${product.dark ? 'text-[var(--color-charcoal)] group-hover:text-white/90' : 'text-[var(--color-charcoal)] group-hover:text-[var(--color-charcoal)]'}`}>
                  {product.short}
                </p>
                <p className={`text-lg font-medium mb-12 max-w-2xl leading-relaxed transition-colors duration-500 ${product.dark ? 'text-[var(--color-stone)] group-hover:text-white/70' : 'text-[var(--color-stone)] group-hover:text-[var(--color-charcoal)]/70'}`}>
                  {product.desc}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-12">
                  {product.specs.map((spec, s) => (
                    <span key={s} className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border transition-colors duration-500 ${product.dark ? 'border-[var(--color-charcoal)]/10 text-[var(--color-charcoal)] group-hover:border-white/20 group-hover:text-white/80' : 'border-[var(--color-charcoal)]/10 text-[var(--color-charcoal)] group-hover:border-[var(--color-charcoal)]/20 group-hover:text-[var(--color-charcoal)]'}`}>
                      {spec}
                    </span>
                  ))}
                </div>
                
                <div>
                  <Link href="/contact-us" className={`inline-flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:gap-5 ${product.dark ? 'text-[var(--color-teak)] group-hover:text-[var(--color-amber)]' : 'text-[var(--color-teak)] hover:text-[var(--color-amber)]'}`}>
                    Get a Quote <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
