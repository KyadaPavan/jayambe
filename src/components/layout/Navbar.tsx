"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Products", href: "/products" },
  { name: "Become a Dealer", href: "/become-a-dealer" },
  { name: "Contact", href: "/contact-us" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 w-full z-[110] transition-all duration-700",
          scrolled ? "py-6" : "py-8"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

          <Link href="/" className="relative z-[110] group overflow-hidden">
            <span className={cn(
              "block font-montserrat font-bold text-xl md:text-2xl tracking-tight transform transition-all duration-500 group-hover:-translate-y-full",
              isOpen ? "text-white" : "text-[var(--color-teak)]"
            )}>
              Jai Shree Radha Plywood
            </span>
            <span className="absolute top-0 left-0 block font-montserrat font-bold text-xl md:text-2xl text-[var(--color-amber)] tracking-tight transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              Jai Shree Radha Plywood
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[110] w-12 h-12 flex flex-col items-center justify-center gap-2 group cursor-pointer"
          >
            <span
              className={cn(
                "block w-8 h-[3px] transition-all duration-500 origin-right rounded-full",
                isOpen ? "bg-white -rotate-45 -translate-y-1" : "bg-[var(--color-teak)] group-hover:w-10"
              )}
            />
            <span
              className={cn(
                "block w-8 h-[3px] transition-all duration-500 origin-right rounded-full",
                isOpen ? "bg-white rotate-45 translate-y-1" : "bg-[var(--color-teak)] group-hover:w-6"
              )}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-full h-screen bg-[var(--color-charcoal)] z-[105] flex items-center justify-center"
          >
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center w-full relative z-10 pt-24 md:pt-0">

              <div className="flex flex-col gap-3 md:gap-6">
                {links.map((link, i) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%", rotate: 5 }}
                      animate={{ y: 0, rotate: 0 }}
                      exit={{ y: "-100%", rotate: -5 }}
                      transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white hover:text-[var(--color-amber)] transition-colors inline-block group"
                      >
                        <span className="flex items-center gap-6">
                          {link.name}
                          <span className="text-2xl md:text-4xl text-[var(--color-teak)] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500">
                            →
                          </span>
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="hidden md:flex flex-col gap-8 text-[var(--color-cream)] mt-12 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h4 className="font-montserrat font-bold text-xl text-[var(--color-teak)] mb-4">Contact Us</h4>
                  <p className="text-lg opacity-80 mb-2">+91 70911 61465</p>
                  <p className="text-lg opacity-80">info@jaishreeradhaplywood.com</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <h4 className="font-montserrat font-bold text-xl text-[var(--color-teak)] mb-4">Visit Us</h4>
                  <p className="text-lg opacity-80 max-w-[200px]">Forbesganj, Araria, Bihar 854318</p>
                </motion.div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
