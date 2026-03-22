"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FDFCF9] pt-24 pb-12 px-6 border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-serif text-[#1a1a1a] mb-6 tracking-tighter">
              Drylicious<span className="text-orange-900/40">.</span>
            </h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 max-w-xs">
              Sourcing the finest organic spices, cold-ground to preserve the raw essence of tradition for your modern kitchen.
            </p>
            <div className="flex gap-5">
              {/* Instagram Link */}
              <motion.a 
                href="https://www.instagram.com/drylicious_global.foods" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-gray-400 hover:text-orange-900 hover:border-orange-900/20 transition-all duration-300"
              >
                <Instagram size={18} />
              </motion.a>

              {/* Facebook Link */}
              <motion.a 
                href="https://www.facebook.com/drylicousGlobalFoods" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-gray-400 hover:text-orange-900 hover:border-orange-900/20 transition-all duration-300"
              >
                <Facebook size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-950/40 mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <a href="/categories/whole-spices" className="text-gray-500 hover:text-[#1a1a1a] text-sm font-light transition-colors flex items-center group">
                  Our Spices
                  <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-500 hover:text-[#1a1a1a] text-sm font-light transition-colors flex items-center group">
                  About Us
                  <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-950/40 mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin size={18} className="text-orange-900/30 shrink-0" />
                <span className="text-sm text-gray-500 font-light leading-relaxed italic">
                  Punjab , <br /> Faisalabad
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={18} className="text-orange-900/30 shrink-0" />
                <span className="text-sm text-gray-500 font-light tracking-wider">+92 336 7999509 </span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={18} className="text-orange-900/30 shrink-0" />
                <span className="text-sm text-gray-500 font-light tracking-wide">hello@drylicious.pk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Join Club */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-950/40 mb-8">Newsletter</h4>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed italic font-light">
              Get exclusive recipes and seasonal spice updates straight to your inbox.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 text-xs font-light outline-none focus:border-orange-900/20 transition-all shadow-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#1a1a1a] text-white px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-orange-900 transition-all">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-400 font-medium tracking-[0.1em] uppercase">
            © {currentYear} Drylicious Private Limited.
          </p>
          <div className="flex gap-8">
            <a href="/privacy-policy" className="text-[10px] text-gray-400 hover:text-[#1a1a1a] uppercase tracking-widest transition-colors font-medium">Privacy Policy</a>
            <a href="/term-service" className="text-[10px] text-gray-400 hover:text-[#1a1a1a] uppercase tracking-widest transition-colors font-medium">Terms of Service</a>
          </div>
          <p className="text-[10px] text-gray-400 italic">
            Designed with <span className="text-red-500 text-lg leading-none">♥</span> in FSD
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;