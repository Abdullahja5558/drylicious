"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const categories = [
  {
    title: "Pure Spices",
    subtitle: "Stone-Ground Excellence",
    desc: "Experience the raw, unadulterated essence of nature. Our single-origin powders are processed at low temperatures.",
    image: "/pure-spices.png",
    slug: "pure-spices",
    price: "Starting Rs. 250",
    theme: "text-orange-900/80",
    border: "border-orange-100"
  },
  {
    title: "The Preserved Heritage", // NEW CATEGORY (Pickles & Sauces)
    subtitle: "Artisanal Fermentations",
    desc: "Aged to perfection in clay pots. Our pickles and sauces are crafted using sun-matured oils and secret family ferments.",
    image: "/pickle.png", // High-end pickle jar aesthetic
    slug: "pickles-sauces",
    price: "Starting Rs. 350",
    theme: "text-red-900/80",
    border: "border-red-100"
  },
  {
    title: "Best Sellers",
    subtitle: "The Gold Archive",
    desc: "The soul of every kitchen. A curated selection of our most-coveted blends, celebrated for their unmatched potency.",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2000&auto=format&fit=crop",
    slug: "best-sellers",
    price: "Starting Rs. 450",
    theme: "text-amber-900/80",
    border: "border-amber-100"
  },
  {
    title: "Whole Spices",
    subtitle: "The Raw Harvest",
    desc: "Hand-picked whole seeds and barks. Perfect for slow-cooking where the spice releases its flavor gradually.",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2000&auto=format&fit=crop",
    slug: "whole-spices",
    price: "Starting Rs. 300",
    theme: "text-stone-900/80",
    border: "border-stone-200"
  }
];

const Categories = () => {
  return (
    <section className="py-32 bg-[#FBF9F4] px-6 overflow-hidden" id='collection'>
      <div className="max-w-[1400px] mx-auto"> {/* Max width slightly increased for 4 items */}
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 md:w-16 bg-orange-900/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-orange-900/40">The Collection</span>
            <div className="h-[1px] w-8 md:w-16 bg-orange-900/20" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-[90px] font-serif tracking-tighter leading-[0.85] text-[#111111] mb-8"
          >
            Curated <br />
            <span className="italic font-light text-orange-900/20">Signatures.</span>
          </motion.h2>
        </div>

        {/* --- GRID (Adjusted for 4 Items) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {categories.map((item, index) => (
            <Link href={`/categories/${item.slug}`} key={index} className="group relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                {/* IMAGE BOX */}
                <div className="relative w-full aspect-[4/6] overflow-hidden rounded-t-[120px] rounded-b-[30px] bg-stone-100 group-hover:shadow-[0_60px_100px_-30px_rgba(180,83,9,0.15)] transition-all duration-[1.5s]">
                  
                  {/* Price Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className={`px-4 py-1.5 rounded-full border bg-white/40 backdrop-blur-md text-[8px] font-black uppercase tracking-widest transition-all duration-700 group-hover:bg-white group-hover:scale-110 ${item.theme} ${item.border}`}>
                      {item.price}
                    </div>
                  </div>

                  {/* Image */}
                  <motion.img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover scale-110 group-hover:scale-[1.2] transition-transform duration-[4s] ease-out grayscale-[0.2] group-hover:grayscale-0"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>

                {/* CONTENT */}
                <div className="mt-10 w-full flex flex-col items-center px-4">
                  <div className="flex items-center gap-2 mb-3 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                    <Sparkles size={8} className="text-orange-900" />
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-orange-900">
                      {item.subtitle}
                    </span>
                    <Sparkles size={8} className="text-orange-900" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-serif text-[#111111] mb-4 tracking-tight transition-colors duration-500 group-hover:text-orange-950">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-500 font-light text-[13px] leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-all duration-700">
                    {item.desc}
                  </p>
                  
                  {/* Link Icon */}
                  <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-all duration-500">
                     <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;