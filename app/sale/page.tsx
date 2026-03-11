"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Flame, Medal, Zap } from 'lucide-react';

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
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const SALE_DURATION_MS = 15 * 24 * 60 * 60 * 1000; 
    const getTargetTime = () => {
      const savedTarget = localStorage.getItem('drylicious_sale_target');
      const now = Date.now();
      if (savedTarget && parseInt(savedTarget) > now) return parseInt(savedTarget);
      const newTarget = now + SALE_DURATION_MS;
      localStorage.setItem('drylicious_sale_target', newTarget.toString());
      return newTarget;
    };

    const targetTime = getTargetTime();
    const interval = setInterval(() => {
      const now = Date.now();
      const difference = targetTime - now;
      if (difference <= 0) {
        localStorage.setItem('drylicious_sale_target', (Date.now() + SALE_DURATION_MS).toString());
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] selection:bg-orange-100 overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[150] p-4 md:p-10 pointer-events-none">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05, x: 5 }}
            className="pointer-events-auto w-fit flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 bg-white/90 backdrop-blur-2xl border border-black/[0.05] rounded-full shadow-2xl cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">Back to Shop</span>
          </motion.div>
        </Link>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 pt-32 md:pt-40 pb-20">
        
        {/* TIMER HEADER */}
        <header className="mb-24 md:mb-32 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 p-6 md:px-12 md:py-6 bg-[#111111] text-white rounded-[30px] md:rounded-full mb-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] relative border border-white/5"
          >
            <div className="flex items-center gap-3 md:border-r md:border-white/10 md:pr-8">
              <Zap size={20} className="text-orange-400 fill-orange-400 animate-pulse" />
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-orange-100/40">Offers Expire</span>
            </div>

            <div className="flex gap-4 md:gap-8 items-center">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hrs', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Sec', value: timeLeft.seconds }
              ].map((unit, i) => (
                <div key={i} className="flex flex-col items-center min-w-[50px] md:min-w-[60px]">
                  <span className="text-3xl md:text-5xl font-serif tracking-tighter tabular-nums leading-none">
                    {formatNum(unit.value)}
                  </span>
                  <span className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] text-orange-400/50 font-black mt-2">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-[150px] font-serif leading-[0.85] tracking-tighter mb-8">
            Limited <br />
            <span className="italic font-light text-red-600/30">Archive.</span>
          </h1>
        </header>

        {/* SALE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 md:gap-y-32">
          {SALE_ITEMS.map((item, idx) => (
            <Link href={`/${item.category}/${item.id}`} key={item.id} className="relative">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
                className="group relative cursor-pointer"
              >
                {/* --- OUTSIDE ROTATED TAG --- */}
                <div className="absolute -top-4 -right-2 md:-top-6 md:-right-4 z-40 pointer-events-none">
                  <motion.div 
                    initial={{ rotate: 0, scale: 0.8 }}
                    whileInView={{ rotate: 12, scale: 1 }}
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-[12px] shadow-[0_20px_40px_rgba(220,38,38,0.3)] flex flex-col items-center border-2 border-white/20 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-1.5">
                      <Flame size={12} fill="currentColor" />
                      <span className="text-[10px] md:text-[12px] font-black uppercase tracking-tighter whitespace-nowrap">
                        {item.tag}
                      </span>
                    </div>
                    <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-white/60 leading-none mt-0.5 italic">
                      {item.note}
                    </span>
                  </motion.div>
                </div>

                {/* IMAGE CONTAINER */}
                <div className="relative aspect-[3/4] rounded-[50px] md:rounded-[70px] overflow-hidden bg-stone-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_80px_100px_-20px_rgba(180,83,9,0.12)] transition-all duration-1000 border border-black/[0.03]">
                  <motion.img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover scale-110 transition-transform duration-[3s] group-hover:scale-[1.25]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                </div>

                {/* PRODUCT INFO */}
                <div className="mt-8 md:mt-12 space-y-4 px-4 md:px-6">
                  <div className="flex justify-between items-end">
                    <h3 className="text-3xl md:text-5xl font-serif tracking-tighter leading-none group-hover:text-red-600 transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-right">
                       <p className="text-[10px] md:text-xs font-bold line-through text-black/20 leading-none mb-1 md:mb-2">Rs.{item.oldPrice}</p>
                       <p className="text-xl md:text-3xl font-black tracking-tighter text-red-600 leading-none">Rs.{item.newPrice}</p>
                       <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-orange-900/40 mt-1">{item.weight}</p>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-black/[0.05] relative overflow-hidden">
                    <motion.div className="absolute inset-0 bg-red-600/40" initial={{ x: '-101%' }} whileInView={{ x: '0%' }} transition={{ duration: 1, delay: 0.5 }} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SalePage;