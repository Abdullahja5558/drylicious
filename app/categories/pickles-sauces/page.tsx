"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';

// Product Data - IDs are now strings for dynamic routing
export const PICKLE_PRODUCTS = [
  {
    id: "artisanal-salad-achar",
    name: "Artisanal Salad Achar",
    tagline: "Immunity",
    origin: "Sun-Matured",
    description: "A crunchy, tangy blend of seasonal vegetables preserved in mustard oil.",
    image: "/salad-achar.png",
    weights: [
      { label: "500g", price: 750 },
      { label: "1000g", price: 1400 },
      { label: "1500g", price: 2000 }
    ]
  },
  {
    id: "heritage-mango-pickle",
    name: "Heritage Mango Pickle",
    tagline: "Bold Grade",
    origin: "Dadi ka Nuskha",
    description: "Traditional style mango pickle with raw spices and pure oil.",
    image: "/mango-achar.png",
    weights: [
      { label: "500g", price: 750 },
      { label: "1000g", price: 1400 },
      { label: "1500g", price: 2000 }
    ]
  },
  {
    id: "spicy-mixed-veg",
    name: "Spicy Mixed Veg",
    tagline: "High-Heat",
    origin: "Traditional Ferment",
    description: "The perfect balance of spice and crunch for every meal.",
    image: "/mixed-achar.png",
    weights: [
      { label: "500g", price: 750 },
      { label: "1000g", price: 1400 },
      { label: "1500g", price: 2000 }
    ]
  }
];

const PicklePage = () => {
  // Independent state for weights using product index or ID
  const [selectedWeights, setSelectedWeights] = useState<Record<string, any>>({
    "artisanal-salad-achar": PICKLE_PRODUCTS[0].weights[0],
    "heritage-mango-pickle": PICKLE_PRODUCTS[1].weights[0],
    "spicy-mixed-veg": PICKLE_PRODUCTS[2].weights[0]
  });

  const handleWeightChange = (e: React.MouseEvent, productId: string, weightObj: any) => {
    e.preventDefault(); // Link click ko rokne ke liye taake sirf weight select ho
    setSelectedWeights(prev => ({ ...prev, [productId]: weightObj }));
  };

  const handleWhatsAppOrder = (e: React.MouseEvent, product: any) => {
    e.preventDefault(); // Link click block karega
    const weight = selectedWeights[product.id];
    const message = `As-salamu alaykum Drylicious! I want to order:\n\n*Product:* ${product.name}\n*Weight:* ${weight.label}\n*Price:* Rs. ${weight.price}\n\nPlease confirm my order.`;
    window.open(`https://wa.me/923367999509?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#1a1a1a] selection:bg-orange-100">
      
      {/* --- FIXED RETURN HOME --- */}
      <div className="fixed top-8 left-8 z-[150]">
        <Link href="/">
          <motion.div 
            whileHover={{ x: 5 }} 
            className="group flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-xl border border-black/5 rounded-full shadow-sm cursor-pointer"
          >
            <div className="w-8 h-8 bg-[#111111] rounded-full flex items-center justify-center">
               <ArrowLeft size={14} className="text-white" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Return Home</span>
          </motion.div>
        </Link>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 pt-44 pb-32">
        
        {/* --- HEADER --- */}
        <header className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-orange-900/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-900/40">Heritage Archive</span>
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-serif tracking-tighter text-[#111111]">
            Pickles & <br />
            <span className="italic font-light text-orange-900/20">Sauces.</span>
          </h1>
        </header>

        {/* --- 3 COLUMN PRODUCT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-32">
          {PICKLE_PRODUCTS.map((product, idx) => {
            const currentWeight = selectedWeights[product.id];

            return (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Main Link for Product Detail Page */}
                <Link href={`/pickle-sauce/${product.id}`}>
                  <div className="relative aspect-[1/1.25] rounded-[50px] overflow-hidden bg-stone-100 mb-10 shadow-sm transition-all duration-1000 group-hover:shadow-[0_50px_80px_-30px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* View Detail Icon */}
                    <div className="absolute top-8 right-8 z-20">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl scale-50 group-hover:scale-100">
                         <ArrowUpRight size={20} className="text-[#111111]" />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Content Section */}
                <div className="px-2">
                  <div className="flex justify-between items-start mb-8">
                    <div className="space-y-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-orange-900/50">{product.tagline}</span>
                      <h3 className="text-4xl font-serif tracking-tighter text-[#111111] leading-none group-hover:text-orange-900 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{product.origin}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-medium text-[#111111]">Rs.{currentWeight.price}</p>
                      <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mt-1">{currentWeight.label} Pack</p>
                    </div>
                  </div>

                  {/* Weight Selector - Prevents Link Navigation */}
                  <div className="flex gap-2 mb-10">
                    {product.weights.map((w) => (
                      <button
                        key={w.label}
                        onClick={(e) => handleWeightChange(e, product.id, w)}
                        className={`flex-1 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all duration-500 border ${
                          currentWeight.label === w.label 
                          ? 'bg-[#111111] text-white border-[#111111] shadow-lg' 
                          : 'bg-transparent text-gray-400 border-black/5 hover:border-orange-900/20'
                        }`}
                      >
                        {w.label}
                      </button>
                    ))}
                  </div>

                  {/* WhatsApp Order Action */}
                  <button 
                    onClick={(e) => handleWhatsAppOrder(e, product)}
                    className="w-full flex items-center justify-between py-5 border-t border-black/[0.06] group/action"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-900/5 flex items-center justify-center group-hover/action:bg-orange-900 group-hover/action:text-white transition-all">
                        <MessageCircle size={14} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#111111]">Order via WhatsApp</span>
                    </div>
                    <ArrowUpRight size={16} className="text-gray-300 group-hover/action:text-orange-900 transition-all" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- LUXURY FOOTER CALLOUT --- */}
        <section className="mt-60 pt-40 border-t border-black/[0.03] flex flex-col items-center text-center">
            <Sparkles className="text-orange-900/20 mb-10 w-16 h-16" />
            <h4 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 max-w-4xl leading-tight">
              Sun-matured, hand-preserved,<br />
              <span className="italic text-orange-900/30">delivered to your doorstep.</span>
            </h4>
        </section>

      </main>
    </div>
  );
};

export default PicklePage;