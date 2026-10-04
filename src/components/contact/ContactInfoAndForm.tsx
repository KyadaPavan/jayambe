"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export function ContactInfoAndForm() {
  return (
    <section className="py-24 md:py-32 bg-white relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Contact Info & Quick Actions */}
          <div className="lg:w-5/12 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter mb-8">
                Headquarters
              </h3>
              
              <ul className="flex flex-col gap-8 text-[var(--color-charcoal)]">
                <li className="flex gap-4">
                  <MapPin className="text-[var(--color-teak)] shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-widest text-xs">Address</h4>
                    <p className="text-[var(--color-stone)] leading-relaxed">
                      Ward No. 13, Sahwajpur, PO Bhadreshwar,<br />
                      PS Bathnaha, Forbesganj, Dist. Araria,<br />
                      Bihar, PIN 854316
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <Phone className="text-[var(--color-teak)] shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-widest text-xs">Phone / WhatsApp</h4>
                    <a href="tel:+917091161465" className="text-[var(--color-stone)] hover:text-[var(--color-amber)] transition-colors text-lg font-bold block">
                      +91 70911 61465
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <Mail className="text-[var(--color-teak)] shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-widest text-xs">Email</h4>
                    <a href="mailto:info@jaishreeradhaplywood.com" className="text-[var(--color-stone)] hover:text-[var(--color-amber)] transition-colors block">
                      info@jaishreeradhaplywood.com
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <Clock className="text-[var(--color-teak)] shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-widest text-xs">Working Hours</h4>
                    <p className="text-[var(--color-stone)]">
                      Mon–Sat: 9:00 AM – 7:00 PM
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 pt-8 border-t border-[var(--color-charcoal)]/10"
            >
              <h4 className="font-bold uppercase tracking-widest text-xs text-[var(--color-stone)] mb-2">Instant Response</h4>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+917091161465" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-charcoal)] text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[var(--color-teak)] transition-colors">
                  <Phone size={14} /> Call Now
                </a>
                <a href="https://wa.me/917091161465" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-green-600 transition-colors">
                  <MessageCircle size={14} /> WhatsApp
                </a>
                <a href="#map" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-charcoal)]/20 text-[var(--color-charcoal)] rounded-full font-bold uppercase tracking-widest text-[10px] hover:border-[var(--color-teak)] hover:text-[var(--color-teak)] transition-colors">
                  <MapPin size={14} /> Get Directions
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Right: Form */}
          <div className="lg:w-7/12">
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[var(--color-cream)] p-8 md:p-12 lg:p-16 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
            >
              <h3 className="text-3xl font-montserrat font-black text-[var(--color-charcoal)] uppercase tracking-tighter mb-10">
                Send an Enquiry
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-12">
                <div className="relative group md:col-span-2">
                  <input type="text" id="name" required className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer" placeholder=" " />
                  <label htmlFor="name" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Full Name *
                  </label>
                </div>
                
                <div className="relative group">
                  <input type="tel" id="phone" required className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer" placeholder=" " />
                  <label htmlFor="phone" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Phone Number *
                  </label>
                </div>
                
                <div className="relative group">
                  <input type="email" id="email" className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer" placeholder=" " />
                  <label htmlFor="email" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Email Address
                  </label>
                </div>

                <div className="relative group md:col-span-2">
                  <select id="role" required defaultValue="" className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors appearance-none cursor-pointer">
                    <option value="" disabled>I am a...</option>
                    <option value="dealer">Dealer / Distributor</option>
                    <option value="contractor">Contractor / Builder</option>
                    <option value="furniture">Furniture Maker / Carpenter</option>
                    <option value="interior">Interior Designer</option>
                    <option value="retailer">Retailer / Homeowner</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-0 top-3 pointer-events-none text-[var(--color-stone)]">
                    ▼
                  </div>
                </div>
                
                <div className="relative group">
                  <input type="text" id="product" className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer" placeholder=" " />
                  <label htmlFor="product" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Product Needed
                  </label>
                </div>
                
                <div className="relative group">
                  <input type="text" id="city" className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer" placeholder=" " />
                  <label htmlFor="city" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    City / Area
                  </label>
                </div>
                
                <div className="relative group md:col-span-2 mt-4">
                  <textarea id="message" rows={3} className="w-full bg-transparent border-b-2 border-[var(--color-charcoal)]/20 py-3 text-[var(--color-charcoal)] font-bold focus:outline-none focus:border-[var(--color-teak)] transition-colors peer resize-none" placeholder=" "></textarea>
                  <label htmlFor="message" className="absolute left-0 top-3 text-[var(--color-stone)] text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-teak)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Message or Quantity Required
                  </label>
                </div>
              </div>
              
              <button type="submit" className="w-full flex items-center justify-center gap-3 bg-[var(--color-amber)] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-charcoal)] transition-all duration-300 shadow-lg group">
                Send Enquiry <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
