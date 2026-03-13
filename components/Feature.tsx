"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Sun, Sparkles, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: <Leaf size={32} strokeWidth={1.5} />,
    title: "100% Organic",
    desc: "Sourced from high-altitude organic farms where nature is preserved and chemicals are forbidden.",
    tag: "Purity",
    color: "text-emerald-900"
  },
  {
    icon: <Droplets size={32} strokeWidth={1.5} />,
    title: "Cold Ground",
    desc: "Our slow stone-grinding process locks in essential oils and natural aroma that high-speed mills destroy.",
    tag: "Traditional",
    color: "text-orange-900"
  },
  {
    icon: <Sun size={32} strokeWidth={1.5} />,
    title: "Sun Dried",
    desc: "Naturally dried to preserve vibrant colors and deep earthy flavors, just as nature intended.",
    tag: "Authentic",
    color: "text-amber-900"
  }
];

const Features = () => {
  return (
    <section className="py-24 md:py-40 bg-[#FDFCF9] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title with Split Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-8">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <Sparkles size={16} className="text-orange-900/40" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-orange-900/50 font-black">
                The Drylicious Standard
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-serif text-[#1a1a1a] leading-tight"
            >
              The Essence of <br />
              <span className="italic font-light text-orange-900/30 pl-4 md:pl-12">Pure Spices.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xs border-l border-orange-900/10 pl-8"
          >
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
              We don't just sell spices; we preserve a heritage of taste that has been passed down through generations.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-900">
              Discover Quality <ChevronRight size={14} />
            </div>
          </motion.div>
        </div>

        {/* Floating Feature Cards */}
        <div className="space-y-12 md:space-y-0 md:flex md:gap-8 items-start">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1] 
              }}
              viewport={{ once: true }}
              className={`relative group w-full ${index === 1 ? 'md:mt-24' : ''} ${index === 2 ? 'md:mt-12' : ''}`}
            >
              <div className="bg-white rounded-[2rem] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-stone-100/50 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-700 ease-in-out group-hover:-translate-y-4">
                
                {/* Floating Tag */}
                <div className="absolute -top-4 right-8 bg-orange-50 text-orange-900/70 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-orange-100">
                  {feature.tag}
                </div>

                <div className={`mb-12 ${feature.color} opacity-80 group-hover:scale-110 transition-transform duration-700`}>
                  {feature.icon}
                </div>

                <h3 className="text-3xl font-serif text-[#1a1a1a] mb-6">{feature.title}</h3>
                
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
                  {feature.desc}
                </p>

                <div className="w-10 h-[1px] bg-orange-900/20 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large Cinematic Visual with Perspective */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-32 relative group"
        >
          <div className="absolute -inset-4 bg-orange-900/[0.02] rounded-[5rem] blur-3xl group-hover:bg-orange-900/[0.05] transition-colors duration-1000" />
          
          <div className="relative aspect-[16/7] overflow-hidden rounded-[3rem] md:rounded-[4rem] border-[1px] border-white shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/674483/pexels-photo-674483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Artisan Spices" 
              className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
            />
            
            {/* Minimalist Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF9]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="hidden md:block">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-950 mb-2">Heritage</p>
                    <h4 className="text-xl font-serif text-orange-950/80"> Grounded Excellence</h4>
                </div>
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white">
                    <span className="text-3xl font-serif text-[#1a1a1a]">01 / 03</span>
                    <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-2">Quality Control</p>
                </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;