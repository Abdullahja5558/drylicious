"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Sparkles, Info, Medal } from 'lucide-react';

// --- PRICES UPDATED FOR 100G ---
export const WHOLE_SPICES = [
  { id: 'cloves', name: "Long (Cloves)", price: 380, image: "/long.png", tag: "Hand-Picked" },
  { id: 'coriander', name: "Sookha Dhania", price: 100, image: "/shoka-dhaniya.jpeg", tag: "Sun-Dried" },
  { id: 'cumin', name: "Safaid Zeera", price: 180, image: "/zera.jpeg", tag: "Aromatic" },
  { id: 'black-pepper', name: "Kali Mirch Sabit", price: 290, image: "/black-pepper.png", tag: "Bold Grade" },
  { id: 'garlic-powder', name: "Garlic Powder", price: 210, image: "/garlic-powder.jpeg", tag: "Pure Dehydrated" },
  { id: 'ginger-powder', name: "Ginger Powder", price: 240, image: "/ginger-powder.jpeg", tag: "Fine Grade" },
  { id: 'green-cardamom', name: "Sabz Ilaichi", price: 1380, image: "/ilaiche.jpeg", tag: "Super Bold" },
  { id: 'chilli-flakes', name: "Kuti Lal Mirch", price: 120, image: "/kali-mirch.jpeg", tag: "Extra Fiery" },
  { id: 'cinnamon', name: "Dar Chini", price: 120, image: "/dar-chini.jpeg", tag: "Ceylon Grade" },
  { id: 'star-anise', name: "Badiyan-e-Khatai", price: 170, image: "/star-anise.jpeg", tag: "Whole Star" },
  { id: 'nutmeg', name: "Jaiphal (Nutmeg)", price: 220, image: "/jaiphal.jpeg", tag: "Bold Intense" },
  { id: 'black-cardamom', name: "Moti Ilaichi", price: 900, image: "/kali-ilaiche.jpeg", tag: "Smoky" },
  { id: 'garam-masala', name: "Garam Masala Poweder", price: 300, image: "/garam-masala.jpeg", tag: "Special Blend" },
  { id: 'mustard-seeds', name: "Mustard Seeds (Rai)", price: 320, image: "/rai.jpeg", tag: "High Oil Content" },
  { id: 'white-pepper', name: "Safed Mirch", price: 320, image: "/safed-mirch.jpeg", tag: "Premium Quality" },
  { id: 'Mace', name: "Jaiwatri", price: 720, image: "/mace.png", tag: "Premium Quality" },
  { id: 'carom seeds', name: "ajwain", price: 70, image: "/ajwain.png", tag: "Special Blend" },
];

const WholeSpiceArchive = () => {
  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] selection:bg-orange-100 overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-[150] p-6 md:p-10 pointer-events-none flex justify-between items-center">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05, x: 5 }}
            className="pointer-events-auto flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-2xl border border-black/[0.03] rounded-full shadow-2xl cursor-pointer group"
          >
            <div className="w-8 h-8 bg-[#111111] rounded-full flex items-center justify-center transition-transform group-hover:-rotate-45">
                <ArrowLeft size={16} className="text-white" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111111]">Back to Home</span>
          </motion.div>
        </Link>
        <div className="pointer-events-auto hidden md:flex items-center gap-4 bg-white/30 backdrop-blur-md px-6 py-3 rounded-full border border-black/[0.03]">
            <Info size={14} className="text-orange-900/40" />
            <span className="text-[9px] font-bold uppercase tracking-widest opacity-40 italic">Premium Export Quality</span>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 pt-32 md:pt-48 pb-20">
        
        {/* --- HEADER --- */}
        <header className="mb-24 relative">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-10">
            <div className="h-[1.5px] w-14 bg-orange-900/40" />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-orange-900/60 leading-none">Global Heritage Spices</span>
          </motion.div>
          <h1 className="text-7xl md:text-[140px] font-serif leading-[0.8] tracking-tighter mb-16 text-[#111111]">
            Whole <br />
            <span className="italic font-light text-orange-900/20 md:ml-32 tracking-tight">Selection.</span>
          </h1>
        </header>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
          {WHOLE_SPICES.map((spice) => (
            <Link href={`/whole-spices/${spice.id}`} key={spice.id}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-[50px] md:rounded-[70px] overflow-hidden bg-stone-100 transition-all duration-1000 group-hover:shadow-[0_80px_100px_-30px_rgba(0,0,0,0.1)]">
                  <motion.img 
                    src={spice.image} 
                    alt={spice.name}
                    className="w-full h-full object-cover scale-110 transition-transform duration-[2.5s] ease-out group-hover:scale-[1.25]"
                  />
                  <div className="absolute top-10 left-10 z-20">
                    <div className="px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/10 rounded-full">
                       <span className="text-[8px] font-black uppercase tracking-widest text-white italic">{spice.tag}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl scale-50 group-hover:scale-100">
                       <ArrowUpRight size={24} className="text-[#111111]" />
                    </div>
                  </div>
                </div>

                <div className="mt-10 px-4">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.5em] text-orange-900/40">Pure Form</span>
                      <h3 className="text-4xl md:text-5xl font-serif tracking-tighter text-[#111111] group-hover:text-orange-900/80 transition-colors leading-[0.9]">
                        {spice.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-medium tracking-tighter text-[#111111]">Rs. {spice.price}</p>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">100g Net</p>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-black/[0.05] relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-orange-900/30"
                      initial={{ x: '-101%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <section className="mt-52 border-y border-black/[0.03] py-24 flex flex-col items-center text-center">
            <Medal className="text-orange-900/20 mb-10 w-20 h-20" />
            <h4 className="text-5xl md:text-8xl font-serif tracking-tighter mb-8 max-w-4xl leading-[0.85]">
              Trusted by thousands,<br />
              <span className="italic text-orange-900/30"> Loved by families</span>
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

export default WholeSpiceArchive;