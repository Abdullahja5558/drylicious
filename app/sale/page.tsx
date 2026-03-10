"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Flame, Clock, Sparkles, Medal, ArrowRight, Zap } from 'lucide-react';

// --- UPDATED SALE PRODUCTS (Prices adjusted for 100g) ---
const SALE_ITEMS = [
  { id: 'green-cardamom', name: "Sabz Ilaichi", oldPrice: 1550, newPrice: 1380, weight: "100g", image: "/ilaiche.jpeg", tag: "Flash Sale", category: "whole-spices", note: "Super Bold 8mm" },
  { id: 'black-pepper', name: "Kali Mirch Sabit", oldPrice: 340, newPrice: 290, weight: "100g", image: "/black-pepper.png", tag: "Limited Deal", category: "whole-spices", note: "Steam Washed" },
  { id: 'garlic-powder', name: "Garlic Powder", oldPrice: 260, newPrice: 210, weight: "100g", image: "/garlic-powder.jpeg", tag: "Hot Price", category: "pure-spices", note: "Extra Fine" },
  { id: 'cumin', name: "Safaid Zeera", oldPrice: 220, newPrice: 180, weight: "100g", image: "/zera.jpeg", tag: "Best Seller", category: "whole-spices", note: "Aromatic" },
  { id: 'cloves', name: "Long (Cloves)", oldPrice: 440, newPrice: 380, weight: "100g", image: "/long.png", tag: "Heritage Pick", category: "whole-spices", note: "Hand-Picked" },
  { id: 'ginger-powder', name: "Ginger Powder", oldPrice: 300, newPrice: 240, weight: "100g", image: "/ginger-powder.jpeg", tag: "Chef's Choice", category: "pure-spices", note: "Sun Dried" },
  { id: 'cinnamon', name: "Dar Chini", oldPrice: 160, newPrice: 120, weight: "100g", image: "/dar-chini.jpeg", tag: "Top Rated", category: "whole-spices", note: "Ceylon Origin" },
  { id: 'star-anise', name: "Badiyan-e-Khatai", oldPrice: 220, newPrice: 170, weight: "100g", image: "/star-anise.jpeg", tag: "Daily Essential", category: "pure-spices", note: "Whole Quality" },
  { id: 'white-pepper', name: "Safed Mirch", oldPrice: 400, newPrice: 320, weight: "100g", image: "/safed-mirch.jpeg", tag: "Delicate", category: "whole-spices", note: "Gourmet Standard" },  
];

const SalePage = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          return { hours: 2, minutes: 59, seconds: 59 };
        }
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] selection:bg-orange-100 overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-[150] p-6 md:p-10 pointer-events-none">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05, x: 5 }}
            className="pointer-events-auto w-fit flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-2xl border border-black/[0.03] rounded-full shadow-xl cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Shop</span>
          </motion.div>
        </Link>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 pt-40 pb-20">
        
        {/* --- PREMIUM DYNAMIC TIMER --- */}
        <header className="mb-32 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-6 px-10 py-5 bg-[#111111] text-white rounded-[30px] mb-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] relative overflow-hidden"
          >
            <motion.div 
              animate={{ x: ['100%', '-100%'] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-full"
            />

            <div className="flex items-center gap-3 border-r border-white/10 pr-6">
              <Zap size={18} className="text-orange-400 fill-orange-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Offers Expire</span>
            </div>

            <div className="flex gap-6 items-center">
              {[timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((unit, i) => (
                <div key={i} className="flex flex-col items-center min-w-[40px]">
                  <span className="text-3xl md:text-4xl font-serif tracking-tighter tabular-nums">
                    {formatNum(unit)}
                  </span>
                  <span className="text-[7px] uppercase tracking-[0.3em] text-orange-900/60 font-black">
                    {['Hrs', 'Min', 'Sec'][i]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <h1 className="text-7xl md:text-[150px] font-serif leading-[0.75] tracking-tighter mb-8">
            Limited <br />
            <span className="italic font-light text-red-600/30">Archive.</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-sm md:text-xl font-light text-gray-400 italic leading-relaxed">
            "Rare opportunities to stock your kitchen with our heritage collection at 100g artisanal portions."
          </p>
        </header>

        {/* --- SALE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
          {SALE_ITEMS.map((item, idx) => (
            <Link href={`/${item.category}/${item.id}`} key={item.id}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-[70px] overflow-hidden bg-stone-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_80px_100px_-20px_rgba(180,83,9,0.12)] transition-all duration-1000">
                  
                  <div className="absolute top-10 left-10 z-30">
                    <div className="flex flex-col gap-2">
                      <div className="px-5 py-2 bg-red-600 text-white rounded-full flex items-center gap-2 shadow-2xl w-fit">
                         <Flame size={12} fill="currentColor" />
                         <span className="text-[9px] font-black uppercase tracking-widest">{item.tag}</span>
                      </div>
                      <span className="ml-2 text-[8px] font-black uppercase tracking-widest text-white italic drop-shadow-md">{item.note}</span>
                    </div>
                  </div>

                  <motion.img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover scale-110 transition-transform duration-[3s] group-hover:scale-[1.25]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                </div>

                <div className="mt-12 space-y-4 px-6">
                  <div className="flex justify-between items-end">
                    <h3 className="text-4xl md:text-5xl font-serif tracking-tighter leading-none group-hover:text-red-600 transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-right">
                       <p className="text-xs font-bold line-through text-black/20 leading-none mb-2">Rs.{item.oldPrice}</p>
                       <p className="text-2xl font-black tracking-tighter text-red-600 leading-none">Rs.{item.newPrice}</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-orange-900/40 mt-1">{item.weight} Net</p>
                    </div>
                  </div>
                  
                  <div className="h-[1px] w-full bg-black/[0.05] relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-red-600/40"
                      initial={{ x: '-101%' }}
                      whileInView={{ x: '0%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <section className="mt-40 py-40 border-y border-black/[0.03] flex flex-col items-center text-center">
            <Medal className="text-orange-900/20 mb-10 w-20 h-20" />
            <h4 className="text-5xl md:text-8xl font-serif tracking-tighter mb-8 max-w-4xl leading-[0.85]">
              Artisan quality at <br />
              <span className="italic text-red-600/30">unmatched value.</span>
            </h4>
        </section>
      </main>
    </div>
  );
};

export default SalePage;