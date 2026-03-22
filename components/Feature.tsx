"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, Sun, Sparkles, ChevronRight } from "lucide-react";

const features = [
  {
    icon: <Leaf size={32} strokeWidth={1.2} />,
    title: "100% Organic",
    desc: "Sourced from high-altitude organic farms where nature is preserved and chemicals are forbidden.",
    tag: "Purity",
    color: "text-emerald-900",
  },
  {
    icon: <Droplets size={32} strokeWidth={1.2} />,
    title: "Cold Ground",
    desc: "Our slow stone-grinding process locks in essential oils and natural aroma that high-speed mills destroy.",
    tag: "Traditional",
    color: "text-orange-900",
  },
  {
    icon: <Sun size={32} strokeWidth={1.2} />,
    title: "Sun Dried",
    desc: "Naturally dried to preserve vibrant colors and deep earthy flavors, just as nature intended.",
    tag: "Authentic",
    color: "text-amber-900",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 lg:py-48 bg-[#FDFCF9] px-6 md:px-12 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto">
        {/* --- Header Section: Centered on Mobile, Split on Desktop --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 md:mb-32 gap-10">
          <div className="relative text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <Sparkles size={14} className="text-orange-900/40" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-orange-900/50 font-black">
                The Drylicious Standard
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#1a1a1a] leading-[1.1] md:leading-tight tracking-tighter"
            >
              The Essence of <br />
              <span className="italic font-light text-orange-900/20 lg:pl-12">
                Pure Spices.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xs border-t lg:border-t-0 lg:border-l border-orange-900/10 pt-8 lg:pt-0 lg:pl-8 text-center lg:text-left mx-auto lg:mx-0"
          >
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              We don't just sell spices; we preserve a heritage of taste that
              has been passed down through generations.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-900 cursor-pointer group">
              Discover Quality
              <ChevronRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </motion.div>
        </div>

        {/* --- Feature Cards: Staggered on Desktop, Stacked on Mobile --- */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              /* Logic for staggered premium layout on desktop */
              className={`relative group w-full md:w-1/3 
                ${index === 1 ? "md:mt-24" : ""} 
                ${index === 2 ? "md:mt-12" : ""}`}
            >
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.01)] border border-stone-100/60 hover:shadow-[0_40px_80px_rgba(216,167,144,0.08)] transition-all duration-700 ease-in-out group-hover:-translate-y-3">
                {/* Floating Tag */}
                <div className="absolute -top-3 right-8 bg-orange-50/50 backdrop-blur-sm text-orange-900/70 text-[8px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-orange-100/50">
                  {feature.tag}
                </div>

                <div
                  className={`mb-10 ${feature.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-5 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-10">
                  {feature.desc}
                </p>

                <div className="w-8 h-[1px] bg-orange-900/10 group-hover:w-full transition-all duration-1000 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Cinematic Image Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-40 relative group px-2 md:px-0"
        >
          {/* Subtle Glow Background */}
          <div className="absolute -inset-10 bg-orange-900/[0.03] rounded-[5rem] blur-[100px] pointer-events-none group-hover:bg-orange-900/[0.06] transition-colors duration-1000" />

          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border-[1px] border-white/50 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/674483/pexels-photo-674483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Artisan Spices at Drylicious - Premium Quality"
              className="w-full h-full object-cover transition-transform duration-[15s] ease-out group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000" />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex justify-between items-end">
              <div className="text-white">
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] mb-2 opacity-80">
                  Heritage
                </p>
                <h4 className="text-lg md:text-2xl font-serif">
                  Grounded Excellence
                </h4>
              </div>

              <div className="bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/20 flex flex-col items-center min-w-[80px] md:min-w-[120px]">
                <span className="text-xl md:text-3xl font-serif text-white">
                  01 / 03
                </span>
                <p className="text-[7px] md:text-[9px] uppercase tracking-widest text-white/60 mt-2 whitespace-nowrap">
                  Quality Control
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
