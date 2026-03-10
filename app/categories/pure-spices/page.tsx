"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Sparkles, Leaf, ShieldCheck, Zap, Medal } from 'lucide-react';

// --- UPDATED PRICES CALCULATED FOR 100G ---
export const PURE_SPICES = [
  {
    id: 'turmeric',
    name: "Organic Turmeric",
    price: 180, // 450/250 * 100
    image: "/organic-turmeric.png",
    tag: "Immunity",
    origin: "Southern Punjab"
  },
  {
    id: 'chilli',
    name: "Red Chilli Powder",
    price: 120, // 300/250 * 100
    image: "/red-chilli.png",
    tag: "High-Heat",
    origin: "Sindh Valley"
  },
  {
    id: 'black-pepper',
    name: "Black Pepper",
    price: 290, // 725/250 * 100
    image: "/black-pepper.png",
    tag: "Bold Grade",
    origin: "Malabar Import"
  },
  {
    id: 'coriander',
    name: "Whole Coriander",
    price: 100, // 250/250 * 100
    image: "/coriander.png",
    tag: "Roasted",
    origin: "Upper Indus"
  },
  {
    id: 'cumin',
    name: "Pure Cumin Seeds",
    price: 180, // 450/250 * 100
    image: "/cuminn.png",
    tag: "Aromatic",
    origin: "Balochistan"
  },
  {
    id: 'cloves',
    name: "Premium Cloves",
    price: 380, // 950/250 * 100
    image: "/clovess.png",
    tag: "Hand-Picked",
    origin: "Zanzibar Special"
  }
];

const SpiceListing = () => {
  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1a1a1a] selection:bg-orange-200 overflow-x-hidden">
      
      {/* --- FIXED HOME BUTTON --- */}
      <div className="fixed top-8 left-8 z-[150]">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 px-6 py-3 bg-white/60 backdrop-blur-2xl border border-black/5 rounded-full shadow-2xl hover:bg-white transition-all cursor-pointer"
          >
            <div className="w-8 h-8 bg-[#111111] rounded-full flex items-center justify-center transition-transform group-hover:-rotate-45">
               <ArrowLeft size={16} className="text-white" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111111]">Return Home</span>
          </motion.div>
        </Link>
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-44 pb-32">
        
        {/* --- HEADER SECTION --- */}
        <header className="mb-32 relative">
          <div className="absolute -left-20 top-0 text-[180px] font-serif opacity-[0.03] select-none pointer-events-none uppercase">
            Pure
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-[1.5px] w-14 bg-orange-900/40" />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-orange-900/70">Artisanal Archive</span>
          </motion.div>

          <h1 className="text-8xl md:text-[140px] font-serif leading-[0.8] tracking-tighter mb-16 text-[#111111]">
            Pure <br />
            <span className="italic font-light text-orange-900/20 md:ml-32">Essentials.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-end justify-between border-t border-black/10 pt-12">
            <p className="max-w-md text-sm md:text-xl font-light leading-relaxed text-[#333333] italic">
              "Raw essence of the Indus valley, preserved in its most potent form for the modern connoisseur."
            </p>
            <div className="flex flex-wrap gap-4">
               {['Organic', 'Lab-Tested', 'Cold-Ground'].map((tag) => (
                 <span key={tag} className="px-6 py-3 border-2 border-black/5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all cursor-default">
                   {tag}
                 </span>
               ))}
            </div>
          </div>
        </header>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
          {PURE_SPICES.map((spice, idx) => (
            <Link href={`/pure-spices/${spice.id}`} key={spice.id}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-[60px] overflow-hidden bg-stone-200 transition-all duration-1000 group-hover:shadow-[0_80px_100px_-30px_rgba(0,0,0,0.25)] group-hover:-translate-y-4">
                  <motion.img 
                    src={spice.image} 
                    alt={spice.name}
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="absolute top-10 right-10 z-20">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl scale-50 group-hover:scale-100">
                       <ArrowUpRight size={24} className="text-[#111111]" />
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-10 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    <p className="text-[10px] text-orange-400 font-black uppercase tracking-widest mb-1">Heritage Origin</p>
                    <h4 className="text-white text-4xl font-serif tracking-tight">{spice.origin}</h4>
                  </div>
                </div>

                <div className="mt-10 px-4">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-900/50">{spice.tag}</span>
                      <h3 className="text-5xl font-serif tracking-tighter text-[#111111] group-hover:text-orange-900 transition-colors leading-none">{spice.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-medium text-[#111111]">Rs.{spice.price}</p>
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">100g Pack</p>
                    </div>
                  </div>
                  <div className="h-[1.5px] w-full bg-black/[0.04] relative">
                    <motion.div 
                      className="absolute inset-0 bg-orange-900/40"
                      initial={{ width: '0%' }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* --- LUXURY CALLOUT --- */}
        <section className="mt-40 py-40 border-y border-black/[0.03] flex flex-col items-center text-center">
            <Medal className="text-orange-900/20 mb-10 w-20 h-20" />
            <h4 className="text-5xl md:text-8xl font-serif tracking-tighter mb-8 max-w-4xl leading-[0.85]">
              The gold standard for home kitchens,<br />
              <span className="italic text-orange-900/30">trusted by thousands daily.</span>
            </h4>
            <div className="flex items-center gap-4 mt-10">
               <div className="h-px w-20 bg-orange-900/20" />
               <Sparkles className="text-orange-900/40" />
               <div className="h-px w-20 bg-orange-900/20" />
            </div>
        </section>

      </main>
    </div>
  );
};

export default SpiceListing;