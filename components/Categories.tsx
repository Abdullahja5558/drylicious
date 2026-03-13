"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const categories = [
  {
    title: "Pure Spices",
    subtitle: "Stone-Ground Excellence",
    desc: "Experience the raw, unadulterated essence of nature. Our single-origin powders are processed at low temperatures to retain natural oils.",
    image: "/pure-spices.png",
    slug: "pure-spices",
    price: "Starting Rs. 250",
    theme: "text-orange-900/80",
    border: "border-orange-100"
  },
  {
    title: "Best Sellers",
    subtitle: "The Gold Archive",
    desc: "The soul of every kitchen. A curated selection of our most-coveted blends, celebrated by chefs for their unmatched potency.",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2000&auto=format&fit=crop",
    slug: "best-sellers",
    price: "Starting Rs. 450",
    theme: "text-amber-900/80",
    border: "border-amber-100"
  },
  
  {
    title: "Whole Spices",
    subtitle: "The Raw Harvest",
    desc: "Hand-picked whole seeds and barks. Perfect for slow-cooking where the spice releases its flavor gradually over time.",
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
      <div className="max-w-7xl mx-auto">
        
        {/* --- CENTERED HEADER SECTION --- */}
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
            className="text-6xl md:text-[100px] font-serif tracking-tighter leading-[0.85] text-[#111111] mb-8"
          >
            Curated <br />
            <span className="italic font-light text-orange-900/20">Signatures.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-sm md:text-base font-light italic max-w-lg leading-relaxed"
          >
            "Elevating the ordinary to the extraordinary through centuries-old spice traditions and unmatched purity."
          </motion.p>
        </div>

        {/* --- CATEGORIES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {categories.map((item, index) => (
            <Link href={`/categories/${item.slug}`} key={index} className="group relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                {/* IMAGE BOX WITH LUXURY MASK */}
                <div className="relative w-full aspect-[4/6] overflow-hidden rounded-t-[140px] rounded-b-[30px] bg-stone-100 group-hover:shadow-[0_60px_100px_-30px_rgba(180,83,9,0.15)] transition-all duration-[1.5s]">
                  
                  {/* Glassmorphism Price Badge */}
                  <div className="absolute top-8 right-8 z-20">
                    <div className={`px-5 py-2 rounded-full border bg-white/40 backdrop-blur-md text-[9px] font-black uppercase tracking-widest transition-all duration-700 group-hover:bg-white group-hover:scale-110 ${item.theme} ${item.border}`}>
                      {item.price}
                    </div>
                  </div>

                  {/* The Image */}
                  <motion.img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover scale-110 group-hover:scale-[1.25] transition-transform duration-[4s] ease-out grayscale-[0.2] group-hover:grayscale-0"
                  />
                  
                  {/* Subtle Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>

                {/* CENTERED CONTENT BELOW IMAGE */}
                <div className="mt-12 w-full flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-4 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                    <Sparkles size={10} className="text-orange-900" />
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-orange-900">
                      {item.subtitle}
                    </span>
                    <Sparkles size={10} className="text-orange-900" />
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-serif text-[#111111] mb-6 tracking-tight transition-colors duration-500 group-hover:text-orange-950">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-500 font-light text-[15px] leading-relaxed mb-10 max-w-[280px] md:max-w-none opacity-80 group-hover:opacity-100 transition-all duration-700">
                    {item.desc}
                  </p>
                  
                  {/* Center-Aligned Explore Link */}
                  <div className="relative group/link flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center mb-3 group-hover:bg-[#111111] group-hover:text-white transition-all duration-500 group-hover:-translate-y-1">
                       <ArrowUpRight size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111111]">Explore Range</span>
                    <div className="mt-2 h-[1px] w-0 group-hover:w-full bg-orange-900/40 transition-all duration-700 ease-in-out" />
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