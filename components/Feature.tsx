"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Sun, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="text-emerald-800/60" size={28} />,
    title: "100% Organic",
    desc: "Sourced from high-altitude organic farms where nature is preserved.",
    delay: 0.1
  },
  {
    icon: <Droplets className="text-orange-800/60" size={28} />,
    title: "Cold Ground",
    desc: "Slow stone-grinding that locks in essential oils and natural aroma.",
    delay: 0.2
  },
  {
    icon: <Sun className="text-amber-800/60" size={28} />,
    title: "Sun Dried",
    desc: "Naturally dried to preserve vibrant colors and deep earthy flavors.",
    delay: 0.3
  }
];

const Features = () => {
  return (
    <section className="py-32 bg-[#FDFCF9] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles size={14} className="text-orange-900/40" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-orange-900/50 font-bold">
                The Drylicious Standard
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif text-[#1a1a1a] leading-[1.1]"
            >
              Crafting Purity <br /> 
              <span className="italic font-light text-orange-900/30">In Every Grain.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="md:max-w-xs pb-2"
          >
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              We believe in the power of nature. No chemicals, no additives—just the raw, authentic essence of traditional spices.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.delay, duration: 0.8 }}
              viewport={{ once: true }}
              className="group p-10 rounded-[40px] bg-white border border-black/[0.03] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-700"
            >
              <div className="mb-8 w-14 h-14 rounded-2xl bg-[#FDFCF9] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4">{feature.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-24 relative aspect-[21/9] w-full rounded-[40px] md:rounded-[60px] overflow-hidden border-[6px] md:border-[12px] border-white shadow-2xl bg-stone-100"
        >
          {/* Using a more reliable image source */}
          <img 
            src="https://images.pexels.com/photos/674483/pexels-photo-674483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Spice Texture" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-[10s] hover:scale-110"
            loading="lazy"
          />
          
          {/* Subtle Glass Card Overlay */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-white/90 backdrop-blur-md px-6 py-3 md:px-10 md:py-5 rounded-full shadow-2xl border border-white/20">
             <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-orange-950">A Legacy of Taste • Since 2024</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;