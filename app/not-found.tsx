"use client";

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, MapPinOff, Compass } from 'lucide-react';


export default function NotFound() {
  const links = [
    { href: "/categories/best-sellers", label: "Best Sellers" },
    { href: "/categories/pure-spices", label: "Pure Spices" },
    { href: "/categories/whole-spices", label: "Whole Spices" },
    { href: "/categories/pickles-sauces", label: "Pickles" },
  ];

  return (
    <>
      {/* SEO Optimization: Noindex robots tag and correct title */}
      <title>404 - Page Not Found | Drylicious</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="The page you are looking for has been moved or archived. Let us guide you back to Drylicious authentic spice collections." />

      {/* Screen height locked to prevent scrollbars */}
      <div className="h-screen w-full bg-[#FBF9F4] text-[#111111] overflow-hidden flex flex-col justify-between selection:bg-orange-100">
        
      

        {/* Main Content: Flex center to keep it perfectly balanced */}
        <main className="flex-grow flex flex-col items-center justify-center px-6 relative">
          
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/30 blur-[100px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-900/10 bg-white mb-6 shadow-sm"
            >
              <Sparkles size={12} className="text-orange-600" />
              <span className="text-[9px] font-black tracking-[0.3em] text-orange-950 uppercase">
                Lost in Flavour
              </span>
            </motion.div>

            {/* Premium Icon and Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="relative mb-2">
                <Compass size={40} className="text-orange-900/15 mx-auto" />
              </div>
              
              <h1 className="text-[110px] md:text-[130px] font-serif font-light leading-none tracking-tighter text-[#111111]">
                404
              </h1>
              
              <h2 className="text-lg md:text-xl font-serif italic text-orange-900/60 -mt-1 mb-4">
                This recipe was not found
              </h2>
              
              <p className="text-stone-500 text-sm font-light leading-relaxed max-w-sm mx-auto mb-10">
                The path or spice blend you are looking for has been moved. 
                Let us guide you back to our collections.
              </p>
            </motion.div>

            {/* Grid of Minimal Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="w-full grid grid-cols-2 gap-3"
            >
              {/* Main CTA - Full Width */}
              <Link href="/" className="col-span-2">
                <motion.div
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 py-4 bg-[#111111] text-white rounded-xl cursor-pointer shadow-lg hover:bg-orange-950 transition-all duration-300"
                >
                  <ArrowLeft size={14} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Go to Home</span>
                </motion.div>
              </Link>

              {/* Category Sub-links */}
              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <motion.div
                    whileHover={{ y: -3, borderColor: "rgba(0,0,0,0.15)", backgroundColor: "#ffffff" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center py-3.5 bg-white border border-black/[0.03] rounded-xl cursor-pointer transition-all duration-300"
                  >
                    <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#111111]">
                      {link.label}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </main>

        {/* Fixed Footer */}
        <footer className="py-5 text-center border-t border-black/[0.03] bg-white/40 backdrop-blur-md">
          <span className="text-[9px] font-black text-stone-400 uppercase tracking-[0.3em]">
            Drylicious • 2026
          </span>
        </footer>
      </div>
    </>
  );
}