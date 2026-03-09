"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, Globe, Leaf, Star, Sparkles, Users, Award, MapPin, ArrowLeft } from 'lucide-react';

const STATS = [
  { id: 1, label: "Happy Customers", value: "950k+", icon: <Users size={18} /> },
  { id: 2, label: "Pure Whole Spices", value: "15+", icon: <Leaf size={18} /> },
  { id: 3, label: "Quality Rating", value: "4.9/5", icon: <Star size={18} /> },
  { id: 4, label: "Cities Reached", value: "50+", icon: <MapPin size={18} /> },
];

const TRUST_BADGES = [
  { title: "Lab Tested", desc: "Every batch is tested for 100% purity.", icon: <ShieldCheck className="text-orange-900" size={24} /> },
  { title: "Farm Direct", desc: "No middleman. Sourced from heritage farms.", icon: <Globe className="text-orange-900" size={24} /> },
  { title: "No Additives", desc: "Zero colors, zero preservatives, 100% raw.", icon: <Award className="text-orange-900" size={24} /> },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] selection:bg-orange-100 overflow-x-hidden">
      
      {/* --- TOP NAV --- */}
      <nav className="fixed top-0 left-0 w-full z-[150] p-4 md:p-10 pointer-events-none">
        <Link href="/" className="pointer-events-auto inline-block">
          <motion.div 
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white/80 backdrop-blur-2xl border border-black/[0.03] rounded-full shadow-lg cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Home</span>
          </motion.div>
        </Link>
      </nav>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 pt-28 md:pt-40 pb-20 md:pb-32">
        
        {/* --- HERO SECTION --- */}
        <header className="mb-20 md:mb-40 flex flex-col items-center">
           <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8"
          >
            <div className="h-[1px] w-6 md:w-8 bg-orange-900/20" />
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-orange-900/40 text-center">Heritage Selection</span>
            <div className="h-[1px] w-6 md:w-8 bg-orange-900/20" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="text-5xl sm:text-7xl md:text-9xl lg:text-[160px] font-serif leading-none tracking-tighter text-[#111111] text-center"
          >
            Dryli<span className="italic font-light text-orange-900/20">cious.</span>
          </motion.h1>
        </header>

        {/* --- MANIFESTO --- */}
        <section className="mb-24 md:mb-48 relative">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-serif leading-[0.9] tracking-tighter mb-12 md:mb-20 max-w-5xl">
            Purity In Every <br className="hidden sm:block" />
            <span className="italic font-light text-orange-900/20 sm:ml-20 md:ml-32 leading-[1.2]">Whole Grain.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end pt-8 md:pt-12 border-t border-black/[0.05]">
             <div className="lg:col-span-6">
                <p className="text-xl md:text-3xl lg:text-4xl font-serif italic text-gray-400 leading-tight tracking-tight">
                  "Drylicious was born from a simple obsession: to bring back the forgotten aroma of unadulterated spices."
                </p>
             </div>
             <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-base md:text-lg font-light leading-relaxed text-[#555555]">
                    Pakistan ki matti sonay jaisi hai. We travel to the heart of farms to find the most potent seeds, pods, and barks so you get nothing but the absolute truth in every pouch. 
                    Our mission is to replace chemical-laden powders with nature's raw gold.
                </p>
             </div>
          </div>
        </section>

        {/* --- STATS GRID --- */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-24 md:mb-48">
           {STATS.map((stat, idx) => (
             <motion.div 
               key={stat.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="p-6 md:p-10 bg-white border border-black/[0.02] rounded-[30px] md:rounded-[40px] flex flex-col items-center text-center group hover:bg-[#111111] hover:text-white transition-all duration-700 shadow-sm"
             >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-900/5 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-orange-900/20 text-orange-900 transition-colors">
                    {stat.icon}
                </div>
                <h4 className="text-3xl md:text-5xl font-serif tracking-tighter mb-1 md:mb-2">{stat.value}</h4>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{stat.label}</p>
             </motion.div>
           ))}
        </section>

        {/* --- IMAGE & TRUST --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-24 md:mb-48 items-center">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative aspect-[4/5] sm:aspect-video lg:aspect-square rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl bg-stone-100"
           >
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover scale-105 hover:scale-115 transition-transform duration-[4s]"
                alt="Spice Crafting"
              />
              <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply" />
           </motion.div>
           
           <div className="lg:pl-10 space-y-10 md:space-y-16">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tighter leading-[1] md:leading-[0.9]">
                 No Colors. <br />
                 No Fillers. <br />
                 <span className="italic font-light text-orange-900/30">Just Nature.</span>
              </h2>
              <div className="space-y-6 md:space-y-10">
                 {TRUST_BADGES.map((badge, idx) => (
                   <div key={idx} className="flex gap-4 md:gap-6 items-start">
                      <div className="mt-1 p-2 bg-orange-900/[0.03] rounded-lg">{badge.icon}</div>
                      <div>
                         <h5 className="text-base md:text-lg font-bold tracking-tight mb-1">{badge.title}</h5>
                         <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed max-w-sm">{badge.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- PROMISE SECTION --- */}
        <section className="relative py-24 md:py-48 px-6 md:px-10 bg-[#111111] rounded-[40px] md:rounded-[100px] text-center overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative z-10"
           >
              <Sparkles className="text-orange-400 mx-auto mb-8 md:mb-12 w-10 h-10 md:w-16 md:h-16 opacity-40" />
              <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tighter leading-[1.1] md:leading-[0.85] mb-10 max-w-4xl mx-auto">
                Bringing the gold of <br /> 
                <span className="italic text-orange-400">heritage farms</span> <br /> 
                to your dining table.
              </h3>
              <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.8em] md:tracking-[1.5em] text-white/30">The Drylicious Standard</p>
           </motion.div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-40 flex flex-col items-center">
           <div className="h-16 md:h-24 w-px bg-gradient-to-b from-orange-900/40 to-transparent mb-8 md:mb-12" />
           <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-[1em] text-gray-300 text-center">Est. 2024 • Pakistan</h5>
        </footer>

      </main>
    </div>
  );
};

export default AboutPage;