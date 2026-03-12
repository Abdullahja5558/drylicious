"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sprout, Star, PackageCheck, ThermometerSun, Leaf } from 'lucide-react';

const badges = [
  { icon: <Shield size={20} strokeWidth={1.5} />, text: "Lab Certified Purity" },
  { icon: <Sprout size={20} strokeWidth={1.5} />, text: "Traditional Stone-Ground" },
  { icon: <Leaf size={20} strokeWidth={1.5} />, text: "Zero Added Colors" },
  { icon: <PackageCheck size={20} strokeWidth={1.5} />, text: "Export Quality Jars" },
  { icon: <ThermometerSun size={20} strokeWidth={1.5} />, text: "Natural Oil Retention" },
  { icon: <Star size={20} strokeWidth={1.5} />, text: "Pure Heritage Blend" },
];

const PremiumTrustSection = () => {
  // Triple the items for a smooth infinite loop
  const infiniteBadges = [...badges, ...badges, ...badges];

  return (
    <section className="py-24 md:py-32 bg-[#FBF9F4] overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        {/* Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-[#D7BDB1] text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] mb-6 block">
            The Drylicious Standard
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-[#111111] leading-[1.1] tracking-tight">
            Crafting Purity with <br />
            <span className="text-[#D7BDB1] italic font-light font-serif">Ancient Traditions.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex items-center w-full py-10 bg-white/30 backdrop-blur-sm">
        
        {/* Soft Edge Masking - Premium Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-96 bg-gradient-to-r from-[#FBF9F4] via-[#FBF9F4]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-96 bg-gradient-to-l from-[#FBF9F4] via-[#FBF9F4]/90 to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex gap-24 md:gap-48 whitespace-nowrap"
          animate={{ x: [0, -2500] }} 
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, // Speed optimized: Not too slow, not too fast
              ease: "linear",
            },
          }}
        >
          {infiniteBadges.map((badge, index) => (
            <div 
              key={index} 
              className="flex items-center gap-8 group"
            >
              {/* Icon with subtle background */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#D7BDB1] shadow-sm border border-[#D7BDB1]/10 group-hover:bg-[#111111] group-hover:text-white transition-all duration-700">
                {badge.icon}
              </div>
              
              {/* Large, Bold Black Typography */}
              <span className="text-sm md:text-lg font-bold uppercase tracking-[0.2em] text-[#111111] font-sans group-hover:text-[#D7BDB1] transition-colors duration-500">
                {badge.text}
              </span>

              {/* Decorative Element */}
              <div className="ml-12 md:ml-24 flex gap-1">
                <div className="w-1 h-1 rounded-full bg-[#D7BDB1]" />
                <div className="w-1 h-1 rounded-full bg-[#D7BDB1]/40" />
                <div className="w-1 h-1 rounded-full bg-[#D7BDB1]/10" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumTrustSection;