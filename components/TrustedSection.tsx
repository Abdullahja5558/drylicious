"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Sprout, Star, PackageCheck, ThermometerSun, Leaf } from 'lucide-react';

// 1. Data ko component se bahar rakha hai taake re-renders slow na hon
const badges = [
  { id: 'purity', icon: <Shield size={20} strokeWidth={1.5} />, text: "Lab Certified Purity" },
  { id: 'stone-ground', icon: <Sprout size={20} strokeWidth={1.5} />, text: "Traditional Stone-Ground" },
  { id: 'colors', icon: <Leaf size={20} strokeWidth={1.5} />, text: "Zero Added Colors" },
  { id: 'export', icon: <PackageCheck size={20} strokeWidth={1.5} />, text: "Export Quality Jars" },
  { id: 'oil', icon: <ThermometerSun size={20} strokeWidth={1.5} />, text: "Natural Oil Retention" },
  { id: 'heritage', icon: <Star size={20} strokeWidth={1.5} />, text: "Pure Heritage Blend" },
];

const PremiumTrustSection = () => {
  // 2. useMemo use kiya hai taake array bar-bar create na ho
  const infiniteBadges = useMemo(() => [...badges, ...badges, ...badges], []);

  return (
    // 3. semantic <section> tag with aria-label for SEO/Accessibility
    <section 
      aria-label="Quality Standards" 
      className="py-24 md:py-32 bg-[#FBF9F4] overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // 4. Sirf ek baar animate hoga performance ke liye
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-[#D7BDB1] text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] mb-6 block">
            The Drylicious Standard
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-[#111111] leading-[1.1] tracking-tight">
            Crafting Purity with <br />
            <span className="text-[#D7BDB1] italic font-light">Ancient Traditions.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex items-center w-full py-10 bg-white/30 backdrop-blur-sm group/marquee">
        
        {/* Gradients Optimized with pointer-events-none */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-96 bg-gradient-to-r from-[#FBF9F4] via-[#FBF9F4]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-96 bg-gradient-to-l from-[#FBF9F4] via-[#FBF9F4]/90 to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex gap-24 md:gap-48 whitespace-nowrap"
          animate={{ x: ["0%", "-33.33%"] }} // 5. Percentage use karne se responsive issue nahi ata
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          // 6. Pause on hover (User experience better karta hai)
          whileHover={{ animationPlayState: "paused" }}
        >
          {infiniteBadges.map((badge, index) => (
            <div 
              key={`${badge.id}-${index}`} 
              className="flex items-center gap-8 group"
            >
              <div 
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#D7BDB1] shadow-sm border border-[#D7BDB1]/10 group-hover:bg-[#111111] group-hover:text-white transition-all duration-700"
                aria-hidden="true" // Screen readers icons ko skip karein text par focus karein
              >
                {badge.icon}
              </div>
              
              <span className="text-sm md:text-lg font-bold uppercase tracking-[0.2em] text-[#111111] font-sans group-hover:text-[#D7BDB1] transition-colors duration-500">
                {badge.text}
              </span>

              {/* Decorative Dots */}
              <div className="ml-12 md:ml-24 flex gap-1" aria-hidden="true">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D7BDB1]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#D7BDB1]/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#D7BDB1]/10" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumTrustSection;