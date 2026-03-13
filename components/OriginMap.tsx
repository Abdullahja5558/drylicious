"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const hotspots = [
  { id: 1, name: "Sabz Ilaichi", origin: "Idukki Hills", top: "35%", left: "18%", description: "Floral, hand-picked green cardamom pods." },
  { id: 2, name: "Kali Mirch Sabit", origin: "Malabar Coast", top: "55%", left: "56%", description: "Bold, sun-dried black gold with woody heat." },
  { id: 3, name: "Badiyan-e-Khatai", origin: "Vietnam Highlands", top: "45%", left: "25%", description: "Artisanal star anise with deep licorice notes." },
  { id: 4, name: "Safaid Zeera", origin: "Thar Region", top: "32%", left: "64%", description: "Earthy, high-oil content cumin seeds." },
  { id: 5, name: "Jaiphal & Jaiwatri", origin: "Spice Islands", top: "25%", left: "59%", description: "Sweet, exotic nutmeg and mace duo." },
  { id: 6, name: "Dar Chini", origin: "Ceylon Forests", top: "60%", left: "72%", description: "Pure, thin-bark sweet cinnamon quills." },
  { id: 7, name: "Moti Ilaichi", origin: "Sikkim Peaks", top: "28%", left: "69%", description: "Smoky, bold pods for authentic depth." },
  { id: 8, name: "Ajwain", origin: "Rajasthan Plains", top: "42%", left: "60%", description: "Sharp, medicinal carom seeds for purity." },
];

const OriginMap = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="relative w-full py-32 bg-[#fdfcf9] overflow-hidden">
      {/* Editorial Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="max-w-[1440px] mx-auto px-12 md:px-20 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* --- Left Side: "Taste Without Boundaries" Content --- */}
          <div className="lg:col-span-5 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#d8a790]" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#d8a790] font-black">
                  The Global Anthology
                </span>
              </div>

              <h2 className="text-6xl md:text-8xl font-serif text-black leading-[0.9] mb-12 tracking-tighter">
                A Taste <br />
                <span className="text-[#d8a790] italic font-light text-5xl md:text-7xl">Without</span> <br />
                Boundaries.
              </h2>

              <div className="space-y-10 border-t border-black/5 pt-12 max-w-sm">
                <div className="flex flex-col gap-3">
                  <h4 className="text-[11px] uppercase tracking-widest text-black font-bold">The Philosophy</h4>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    Bypassing the industrial complex through direct trade with legacy farmers. Stone-ground to preserve nature's essential oils.
                  </p>
                </div>

                <p className="text-[#d8a790] font-serif italic text-xl leading-relaxed">
                  "From the soil of the ancients, to your modern kitchen."
                </p>
              </div>
            </motion.div>
          </div>

          {/* --- Right Side: Map Display --- */}
          <div className="lg:col-span-7 relative aspect-[16/11] w-full flex items-center justify-center">
            
            {/* Real World Map Background */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 0.22, scale: 1 }}
              transition={{ duration: 1.8 }}
              className="absolute inset-0 z-0 grayscale contrast-125 select-none pointer-events-none"
              style={{
                backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />

            {/* Decorative Symmetrical Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[90%] h-[90%] border border-[#d8a790]/10 rounded-full" />
              <div className="absolute w-[65%] h-[65%] border border-black/[0.03] rounded-full" />
            </div>

            {/* Hotspots with Liquid Motion */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="absolute z-30"
                style={{ top: spot.top, left: spot.left }}
              >
                <div 
                  className="relative flex items-center justify-center cursor-pointer group p-2"
                  onMouseEnter={() => setActiveId(spot.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  {/* Magnetic Pulse Aura */}
                  <motion.div 
                    animate={{ scale: [1, 2.6, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute w-8 h-8 bg-[#d8a790] rounded-full blur-xl"
                  />
                  
                  {/* Pin Point */}
                  <motion.div 
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="w-2 h-2 bg-black border border-[#d8a790] rounded-full relative z-10 shadow-2xl transition-colors group-hover:bg-[#d8a790]" 
                  />

                  {/* Glassmorphism Tooltip */}
                  <AnimatePresence>
                    {activeId === spot.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: -12, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 250, 
                          damping: 30, // Maximum smoothness
                          mass: 0.5 
                        }}
                        className="absolute bottom-full mb-6 w-56 p-6 bg-white/75 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.1)] rounded-[32px] z-50 border border-white/60 text-center"
                      >
                        <span className="text-[8px] uppercase tracking-[0.4em] text-[#d8a790] font-black mb-2 block">
                          {spot.origin}
                        </span>
                        <h4 className="text-black font-serif text-lg mb-2 leading-none">{spot.name}</h4>
                        <p className="text-gray-400 text-[9px] leading-relaxed font-light uppercase tracking-[0.2em]">
                          {spot.description}
                        </p>
                        
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/75 backdrop-blur-2xl rotate-45 border-r border-b border-white/60 shadow-lg" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Branding Label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[8px] tracking-[1em] text-gray-300 uppercase font-bold opacity-50">
        Drylicious Sourcing Index 2026
      </div>
    </section>
  );
};

export default OriginMap;