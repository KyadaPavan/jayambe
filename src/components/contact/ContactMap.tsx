"use client";
import { motion } from "framer-motion";

export function ContactMap() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-[var(--color-charcoal)] overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-full h-full relative"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114523.50494493392!2d87.17066922579177!3d26.312999052528773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef8f20b33b0067%3A0xc6c4f344e666a3d6!2sForbesganj%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full grayscale contrast-125 mix-blend-screen opacity-50"
        />
        
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[var(--color-charcoal)] via-transparent to-white" />
        
        {/* Overlay Content */}
        <div className="absolute bottom-12 md:bottom-24 left-0 right-0 z-10 pointer-events-none">
          <div className="container mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
            <h3 className="text-3xl md:text-5xl font-montserrat font-black text-white uppercase tracking-tighter">
              Based In <br />
              <span className="text-[var(--color-teak)]">Forbesganj.</span>
            </h3>
            <p className="text-white/60 font-medium max-w-sm">
              Supplying premium plywood to dealers, contractors, and builders across Bihar.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
