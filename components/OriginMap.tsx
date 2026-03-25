"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Data ko Memoize kiya taake unnecessary re-renders na hon
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

  useEffect(() => {
    const handleScroll = () => setActiveId(null);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // 2. Semantic <section> with ID for navigation SEO
    <section 
      id="sourcing-map"
      className="relative w-full py-16 md:py-24 lg:py-32 bg-[#fdfcf9] overflow-hidden"
      aria-label="Global Spice Sourcing Map"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* --- Content Section --- */}
          <header className="w-full lg:col-span-5 z-20 order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="hidden lg:block w-12 h-[1px] bg-[#d8a790]" />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-[#d8a790] font-black">
                  The Global Anthology
                </span>
                <div className="lg:hidden w-8 h-[1px] bg-[#d8a790]" />
              </div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black leading-[0.95] mb-8 md:mb-12 tracking-tighter">
                A Taste <br />
                <span className="text-[#d8a790] italic font-light">Without</span> <br />
                Boundaries.
              </h2>

              <div className="space-y-8 md:space-y-10 border-t border-black/5 pt-8 md:pt-12 max-w-sm w-full">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[10px] md:text-[11px] uppercase tracking-widest text-black font-bold">The Philosophy</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed px-4 lg:px-0">
                    Bypassing the industrial complex through direct trade with legacy farmers. Stone-ground to preserve nature's essential oils.
                  </p>
                </div>
                <p className="hidden md:block text-[#d8a790] font-serif italic text-xl leading-relaxed">
                  "From the soil of the ancients, to your modern kitchen."
                </p>
              </div>
            </motion.div>
          </header>

          {/* --- Map Section --- */}
          <div className="w-full lg:col-span-7 relative order-2 mt-8 lg:mt-0" role="img" aria-label="World map showing spice origins">
            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full flex items-center justify-center bg-black/[0.01] rounded-[40px] lg:bg-transparent overflow-visible">
              
              {/* World Map Background - Performance: Use local SVG if possible */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.25 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="absolute inset-0 z-0 grayscale contrast-125 select-none pointer-events-none scale-110 md:scale-100"
                style={{
                  backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              {/* Hotspots */}
              {hotspots.map((spot) => (
                <div
                  key={spot.id}
                  className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ top: spot.top, left: spot.left }}
                >
                  <button // 3. Link/Button for Accessibility (Tab key support)
                    className="relative flex items-center justify-center cursor-pointer p-4 outline-none focus:scale-125 transition-transform"
                    onMouseEnter={() => setActiveId(spot.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onClick={() => setActiveId(activeId === spot.id ? null : spot.id)}
                    aria-expanded={activeId === spot.id}
                    title={spot.name}
                  >
                    {/* Magnetic Aura */}
                    <motion.div 
                      animate={{ scale: [1, 2.4, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="absolute w-6 h-6 md:w-8 md:h-8 bg-[#d8a790] rounded-full blur-lg"
                    />
                    
                    {/* Pin Point */}
                    <motion.div 
                      animate={{ 
                        scale: activeId === spot.id ? 1.4 : 1,
                        backgroundColor: activeId === spot.id ? "#d8a790" : "#000"
                      }}
                      className="w-2 h-2 md:w-2.5 md:h-2.5 border border-[#d8a790] rounded-full relative z-10 shadow-2xl transition-all" 
                    />

                    {/* Tooltip Content */}
                    <AnimatePresence>
                      {activeId === spot.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.9 }}
                          animate={{ opacity: 1, y: -10, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9, y: 8 }}
                          className="absolute bottom-full mb-4 w-44 md:w-56 p-4 md:p-6 bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl md:rounded-[32px] z-50 border border-white/60 text-center"
                        >
                          <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-[#d8a790] font-black mb-1 md:mb-2 block">
                            {spot.origin}
                          </span>
                          <h4 className="text-black font-serif text-sm md:text-lg mb-1 md:mb-2 leading-none">{spot.name}</h4>
                          <p className="text-gray-500 text-[8px] md:text-[9px] leading-relaxed font-medium uppercase tracking-widest">
                            {spot.description}
                          </p>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/95 backdrop-blur-2xl rotate-45 border-r border-b border-white/60" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-[7px] md:text-[8px] tracking-[0.6em] md:tracking-[1em] text-gray-400 uppercase font-bold opacity-30 whitespace-nowrap">
        Drylicious Sourcing Index 2026
      </footer>
    </section>
  );
};

export default OriginMap;