"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  // --- WhatsApp Logic ---
  const phoneNumber = "923367999509";
  const premiumMessage = "As-salamu alaykum Drylicious! I'm exploring your hero collection and would like to place an order or see your full menu.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(premiumMessage)}`;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#FDFCF9] overflow-hidden px-6 pt-32 pb-20 text-center">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100/30 blur-[120px] rounded-full" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-900/10 bg-orange-50 mb-8"
        >
          <Sparkles size={14} className="text-orange-600" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-orange-900/60 uppercase">
            100% Organic & Stone Ground
          </span>
        </motion.div>

        {/* Hero Title - Adjusted for Laptop and Mobile sizes */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[110px] font-serif text-[#1a1a1a] leading-[1.1] md:leading-[1] tracking-tighter mb-8"
        >
          Drylicious{" "}
          <span className="italic font-light text-orange-800/40 whitespace-nowrap block md:inline text-4xl md:text-6xl lg:text-[90px]">
            From farm to flavour
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-[#4a4a4a] text-lg md:text-xl font-light leading-relaxed mb-12"
        >
          Elevate your home-cooked meals with <b>Drylicious</b>. We hand-pick and sun-dry every spice to ensure the authentic flavor of tradition reaches your kitchen.
        </motion.p>

        {/* Centered CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <Link href="/#collection" className="w-full sm:w-auto">
            <button className="w-full px-10 py-5 bg-[#1a1a1a] text-white rounded-full font-bold hover:bg-orange-900 transition-all duration-500 shadow-2xl flex items-center justify-center gap-2 group cursor-pointer">
              Explore Collection
            </button>
          </Link>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-white text-[#1a1a1a] border border-black/5 rounded-full font-bold shadow-lg hover:shadow-xl hover:border-black/10 transition-all flex items-center justify-center gap-3 group cursor-pointer"
          >
            <MessageCircle size={20} className="text-emerald-500 group-hover:scale-110 transition-transform" />
            Order on WhatsApp
          </a>
        </motion.div>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 relative w-full max-w-5xl group"
        >
          <div className="relative aspect-[21/9] w-full rounded-[40px] overflow-hidden border-[8px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-orange-50">
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" 
              alt="Premium Spices Showcase" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>

          <div className="absolute -bottom-6 -right-6 md:right-12 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-orange-100 hidden md:block">
            <p className="text-[#1a1a1a] font-bold text-sm">Aromatic Guarantee</p>
            <p className="text-gray-400 text-xs italic">Vacuum sealed for freshness.</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>

    </section>
  );
};

export default Hero;