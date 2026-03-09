"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Star, Crown, ShoppingBag, Medal, Sparkles, Trophy } from 'lucide-react';

// --- SELECTION FROM YOUR 15 WHOLE SPICES ---
// Added "weight" property to each item
const BEST_SELLING_WHOLE_SPICES = [
  { 
    id: 'green-cardamom', 
    name: "Sabz Ilaichi", 
    price: 3450, 
    weight: "250g",
    image: "/ilaiche.jpeg", 
    tag: "High Demand", 
    rating: "5.0/5",
    sold: "1.8k+ Sold",
    note: "Super Bold 8mm Grade"
  },
  { 
    id: 'black-pepper', 
    name: "Kali Mirch Sabit", 
    price: 725, 
    weight: "250g",
    image: "/kali-mirch.jpeg", 
    tag: "Chef's Choice", 
    rating: "4.9/5",
    sold: "1.4k+ Sold",
    note: "Steam Washed Purity"
  },
  { 
    id: 'cumin', 
    name: "Safaid Zeera", 
    price: 450, 
    weight: "250g",
    image: "/zera.jpeg", 
    tag: "Top Rated", 
    rating: "4.9/5",
    sold: "2.1k+ Sold",
    note: "Extra Aromatic"
  },
  { 
    id: 'cloves', 
    name: "Long (Cloves)", 
    price: 950, 
    weight: "250g",
    image: "/long.png", 
    tag: "Premium Grade", 
    rating: "4.8/5",
    sold: "900+ Sold",
    note: "Hand-Picked Buds"
  },
  { 
    id: 'star-anise', 
    name: "Badiyan-e-Khatai", 
    price: 425, 
    weight: "250g",
    image: "/star-anise.jpeg", 
    tag: "Aroma King", 
    rating: "5.0/5",
    sold: "750+ Sold",
    note: "Whole Star Quality"
  },
  { 
    id: 'cinnamon', 
    name: "Dar Chini", 
    price: 300, 
    weight: "250g",
    image: "/dar-chini.jpeg", 
    tag: "Heritage Pick", 
    rating: "4.7/5",
    sold: "1.1k+ Sold",
    note: "Ceylon Origin"
  },
  { id: 'garlic-powder', name: "Garlic Powder", price: 525, weight: "250g", image: "/garlic-powder.jpeg", tag: "Pure Essence", rating: "4.7/5", sold: "2.5k+ Sold", note: "No Clumping Tech" },
  { id: 'ginger-powder', name: "Ginger Powder", price: 600, weight: "250g", image: "/ginger-powder.jpeg", tag: "Daily Essential", rating: "4.6/5", sold: "2.2k+ Sold", note: "Farm-Fresh Roots" },
  { id: 'white-pepper', name: "Safed Mirch", price: 800, weight: "250g", image: "/safed-mirch.jpeg", tag: "Delicate", rating: "4.9/5", sold: "350+ Sold", note: "Gourmet Standard" },
];


const BestSellerPage = () => {
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
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return to Shop</span>
          </motion.div>
        </Link>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 pt-40 pb-20">
        
        {/* --- HERO --- */}
        <header className="mb-32 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-[#111111] text-white rounded-full mb-10"
          >
            <Trophy size={14} className="text-orange-400" />
            <span className="text-[9px] font-black uppercase tracking-[0.5em]">The Gold Standard Archive</span>
          </motion.div>

          <h1 className="text-7xl md:text-[150px] font-serif leading-[0.75] tracking-tighter mb-8">
            Most <br />
            <span className="italic font-light text-orange-900/20">Desired.</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-sm md:text-xl font-light text-gray-400 italic leading-relaxed">
            "A collection of our highest-rated raw spices, celebrated for their purity and unmatched potency."
          </p>
        </header>

        {/* --- BEST SELLER GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
          {BEST_SELLING_WHOLE_SPICES.map((item, idx) => (
            <Link href={`/whole-spices/${item.id}`} key={item.id}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
                className="group relative"
              >
                {/* Product Card */}
                <div className="relative aspect-[3/4] rounded-[70px] overflow-hidden bg-stone-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_80px_100px_-20px_rgba(180,83,9,0.12)] transition-all duration-1000">
                  
                  {/* FLOATING BEST SELLER TAG */}
                  <div className="absolute top-10 left-10 z-30">
                    <div className="flex flex-col gap-2">
                      <div className="px-5 py-2 bg-white rounded-full flex items-center gap-2 shadow-2xl w-fit">
                         <Crown size={12} className="text-orange-500 fill-orange-500" />
                         <span className="text-[9px] font-black uppercase tracking-widest text-[#111111]">{item.tag}</span>
                      </div>
                      <span className="ml-2 text-[8px] font-black uppercase tracking-widest text-white/60 italic drop-shadow-md">{item.note}</span>
                    </div>
                  </div>

                  <motion.img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover scale-110 transition-transform duration-[3s] group-hover:scale-[1.25]"
                  />

                  {/* Rating & Sold Stats */}
                  <div className="absolute bottom-10 left-10 right-10 z-30">
                    <div className="px-6 py-4 bg-white/10 backdrop-blur-2xl rounded-[30px] border border-white/20 flex justify-between items-center">
                       <div className="flex items-center gap-2">
                          <Star size={12} className="text-orange-400 fill-orange-400" />
                          <span className="text-[11px] font-bold text-white tracking-tighter">{item.rating}</span>
                       </div>
                       <div className="w-px h-4 bg-white/20" />
                       <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{item.sold}</span>
                    </div>
                  </div>

                  {/* Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                </div>

                {/* Info */}
                <div className="mt-12 space-y-4 px-6">
                  <div className="flex justify-between items-end">
                    <h3 className="text-4xl md:text-5xl font-serif tracking-tighter leading-none group-hover:text-orange-900 transition-colors">
                      {item.name}
                    </h3>
                    {/* Updated Price & Weight Display */}
                    <div className="text-right">
                       <p className="text-2xl font-medium tracking-tighter opacity-80 leading-none">Rs.{item.price}</p>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-orange-900/40 mt-1">{item.weight}</p>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-black/[0.05] relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-orange-900/40"
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

        {/* --- LUXURY CALLOUT --- */}
        <section className="mt-40 py-40 border-y border-black/[0.03] flex flex-col items-center text-center">
            <Medal className="text-orange-900/20 mb-10 w-20 h-20" />
            <h4 className="text-5xl md:text-8xl font-serif tracking-tighter mb-8 max-w-4xl leading-[0.85]">
              Chosen by thousands of <br />
              <span className="italic text-orange-900/30">home chefs daily.</span>
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

export default BestSellerPage;