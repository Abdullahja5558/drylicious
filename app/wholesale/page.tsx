"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Truck, Package, ShieldCheck, PieChart, Scale } from 'lucide-react';
import Link from 'next/link';

const WholesalePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    item: 'Whole Spices Mix',
    requirement: '5' // Default as a number string
  });

  // Dynamic WhatsApp link using the custom weight input
  const whatsappUrl = `https://wa.me/923367999509?text=${encodeURIComponent(
    `Asalam-o-Alaikum Drylicious Wholesale! 📦\n\nBusiness Inquiry:\nName: ${formData.name}\nBusiness: ${formData.business}\nInterest: ${formData.item}\nVolume: ${formData.requirement}kg\n\nPlease share the bulk price list for this weight.`
  )}`;

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] selection:bg-orange-100">
      
      <nav className="fixed top-0 left-0 w-full z-[150] p-6 md:p-10 pointer-events-none">
        <Link href="/">
          <motion.div whileHover={{ x: 5 }} className="pointer-events-auto w-fit flex items-center gap-3 px-6 py-3 bg-white border border-black/[0.05] rounded-full shadow-xl cursor-pointer group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Home</span>
          </motion.div>
        </Link>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 pt-40 pb-20">
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1.5px] w-12 bg-orange-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-900">B2B & Bulk Solutions</span>
          </div>
          <h1 className="text-6xl md:text-[120px] font-serif leading-[0.85] tracking-tighter mb-10">
            Wholesale <br /> 
            <span className="italic font-light text-orange-900/20 text-5xl md:text-[100px]">Partnership.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-16">
            {/* PERKS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Scale size={24} />, title: "Flexible Tiers", desc: "Starting from 1kg trial packs up to 100kg+ commercial shipments." },
                { icon: <Package size={24} />, title: "Bulk Packaging", desc: "Vacuum-sealed master cartons for maximum freshness." },
                { icon: <Truck size={24} />, title: "Global Logistics", desc: "Door-to-door delivery with tracking for all bulk orders." },
                { icon: <ShieldCheck size={24} />, title: "Quality First", desc: "Batch-wise lab reports and 100% purity certification." },
              ].map((perk, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-8 bg-white border border-black/[0.03] rounded-[40px] shadow-sm">
                  <div className="text-orange-900 mb-6">{perk.icon}</div>
                  <h4 className="text-xl font-serif mb-2">{perk.title}</h4>
                  <p className="text-sm text-stone-400 font-medium leading-relaxed">{perk.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* VOLUME TIERS PREVIEW */}
            <div className="bg-[#111111] text-white p-8 md:p-12 rounded-[50px] shadow-2xl relative">
               <h3 className="text-3xl font-serif mb-8 italic text-orange-400">Wholesale Volume Tiers</h3>
               <div className="space-y-6">
                 {[
                   { label: "Premium Sample Tier", weight: "1kg - 5kg", discount: "Starter Price" },
                   { label: "Micro-Wholesale", weight: "6kg - 20kg", discount: "Premium Quality" },
                   { label: "Commercial Bulk", weight: "21kg - 100kg", discount: "Lab tested" },
                 ].map((tier, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                     <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-stone-500">{tier.label}</p>
                       <p className="text-xl tracking-tight">{tier.weight}</p>
                     </div>
                     <span className="text-[9px] font-black uppercase bg-white/10 px-4 py-2 rounded-full text-orange-400 border border-orange-400/20">{tier.discount}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* INQUIRY FORM */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="bg-white p-8 md:p-12 rounded-[50px] border border-black/[0.03] shadow-2xl">
              <h3 className="text-3xl font-serif mb-8">Wholesale Inquiry</h3>
              <div className="space-y-6">
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-stone-400 ml-4 mb-2 block">Full Name</label>
                  <input 
                    type="text" 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Abdullah Javed" 
                    className="w-full bg-[#FBF9F4] border-none rounded-2xl px-6 py-4 outline-none focus:ring-1 ring-orange-900/20"
                  />
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-stone-400 ml-4 mb-2 block">Business / Startup Name</label>
                  <input 
                    type="text" 
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                    placeholder="Drylicious Partner" 
                    className="w-full bg-[#FBF9F4] border-none rounded-2xl px-6 py-4 outline-none focus:ring-1 ring-orange-900/20"
                  />
                </div>
                
                {/* PREMIUM NUMBER INPUT FOR WEIGHT */}
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-stone-400 ml-4 mb-2 block">Expected Order Weight (kg)</label>
                  <div className="relative flex items-center">
                    <input 
                      type="number" 
                      min="1"
                      value={formData.requirement}
                      onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                      placeholder="5" 
                      className="w-full bg-[#FBF9F4] border-none rounded-2xl px-6 py-4 outline-none focus:ring-1 ring-orange-900/20 font-bold text-2xl"
                    />
                    <span className="absolute right-6 text-orange-900/40 font-black uppercase tracking-widest text-xs pointer-events-none">Kilograms</span>
                  </div>
                </div>
                
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  className="w-full flex items-center justify-center gap-3 py-6 bg-[#111111] text-white rounded-[25px] shadow-xl hover:bg-[#25D366] transition-all duration-500 group"
                >
                  <MessageCircle size={20} fill="white" />
                  <span className="text-[11px] font-black uppercase tracking-[0.3em]">Get Wholesale Rates</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default WholesalePage;