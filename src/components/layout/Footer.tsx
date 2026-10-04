"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative h-auto min-h-[90vh] w-full z-0"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* THE FIXED BACKGROUND THAT GETS REVEALED */}
      <div className="fixed bottom-0 left-0 w-full h-[90vh] min-h-[650px] bg-[var(--color-cream)] text-[var(--color-charcoal)] flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-16 pb-10 md:pb-12 z-0">

        {/* Creative Abstract Background: Giant Spinning Geometric SVG */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center overflow-hidden mix-blend-multiply text-[var(--color-charcoal)]">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            viewBox="0 0 200 200"
            className="w-[150vw] md:w-[80vw] h-[150vw] md:h-[80vw] absolute"
          >
            <path fill="currentColor" d="M100,0 C120,50 150,80 200,100 C150,120 120,150 100,200 C80,150 50,120 0,100 C50,80 80,50 100,0 Z" />
          </motion.svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 w-full mt-4 md:mt-8">

          {/* LEFT: Branding & Vision */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block group">
              <div className="flex flex-col gap-2">
                <span className="font-montserrat font-black text-3xl md:text-4xl uppercase tracking-tighter leading-[0.9] mt-2 group-hover:text-[var(--color-amber)] transition-colors duration-300">
                  Jai Shree <br /> Radha Plywood
                </span>
              </div>
            </Link>
            <p className="font-bold text-lg md:text-xl mt-4 leading-tight opacity-80">
              Built on trust.<br />Crafted for strength.
            </p>
          </div>

          {/* MIDDLE: Contact Info */}
          <div className="flex flex-col gap-6 font-montserrat mt-4 lg:mt-0">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 text-[var(--color-amber)] mb-1">
                <Phone size={18} strokeWidth={2} />
                <span className="font-bold text-xs tracking-widest uppercase text-[var(--color-charcoal)]">Phone</span>
              </div>
              <a href="tel:+917091161465" className="font-bold text-lg md:text-xl hover:text-[var(--color-amber)] transition-colors cursor-pointer w-fit">
                +91 70911 61465
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 text-[var(--color-amber)] mb-1">
                <Mail size={18} strokeWidth={2} />
                <span className="font-bold text-xs tracking-widest uppercase text-[var(--color-charcoal)]">Email</span>
              </div>
              <a href="mailto:jayparkas709116@gmail.com" className="font-bold text-lg md:text-xl hover:text-[var(--color-amber)] transition-colors break-all">
                jayparkas709116@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 text-[var(--color-amber)] mb-1">
                <MapPin size={18} strokeWidth={2} />
                <span className="font-bold text-xs tracking-widest uppercase text-[var(--color-charcoal)]">Address</span>
              </div>
              <p className="font-bold text-sm md:text-base leading-relaxed opacity-80 max-w-[380px]">
                WARD NO -13, SAHWAJPUR,
                PO- BHADRESHWAR, PS- BATHNAHA,
                FORBESGANJ, DIST.- ARARIA (BIHAR),
                PIN CODE- 854316
              </p>
            </div>
          </div>

          {/* RIGHT: Unconventional Massive Links */}
          <div className="flex flex-col items-start lg:items-end gap-1 md:gap-2">
            {[
              { name: "Our Products", href: "/products" },
              { name: "About Us", href: "/about-us" },
              { name: "Dealer Network", href: "/become-a-dealer" },
              { name: "Get in Touch", href: "/contact-us" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group flex items-center justify-end w-fit">
                <span className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-montserrat font-black uppercase tracking-tighter group-hover:-skew-x-12 group-hover:text-[var(--color-amber)] transition-all duration-300 origin-right whitespace-nowrap">
                  {item.name}
                </span>
                <div className="w-0 overflow-hidden group-hover:w-8 md:group-hover:w-12 transition-all duration-500 ease-out flex items-center justify-center">
                  <ArrowUpRight className="text-[var(--color-amber)] w-6 h-6 md:w-8 md:h-8" />
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="relative z-10 w-full mt-auto">
          {/* Interactive Fast Marquee */}
          <div className="w-full overflow-hidden border-y-2 border-[var(--color-charcoal)]/20 py-3 md:py-4 mb-6 mt-12 bg-transparent">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="flex whitespace-nowrap"
            >
              <span className="text-3xl md:text-[4vw] font-black uppercase tracking-tighter leading-none mr-8 hover:text-[var(--color-amber)] hover:italic transition-all duration-300 cursor-crosshair">
                STRENGTH IN EVERY LAYER •
              </span>
              <span className="text-3xl md:text-[4vw] font-black uppercase tracking-tighter leading-none mr-8 hover:text-[var(--color-amber)] hover:italic transition-all duration-300 cursor-crosshair">
                TRUST IN EVERY PLY •
              </span>
              <span className="text-3xl md:text-[4vw] font-black uppercase tracking-tighter leading-none mr-8 hover:text-[var(--color-amber)] hover:italic transition-all duration-300 cursor-crosshair">
                STRENGTH IN EVERY LAYER •
              </span>
              <span className="text-3xl md:text-[4vw] font-black uppercase tracking-tighter leading-none mr-8 hover:text-[var(--color-amber)] hover:italic transition-all duration-300 cursor-crosshair">
                TRUST IN EVERY PLY •
              </span>
            </motion.div>
          </div>

          {/* Legal / Small Info */}
          <div className="flex justify-center items-center text-sm md:text-base font-bold uppercase tracking-widest text-[var(--color-charcoal)]/70">
            <p>© {new Date().getFullYear()} Jai Shree Radha Plywood. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
