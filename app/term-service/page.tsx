"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Scale, Truck, RefreshCcw, CreditCard, HelpCircle, AlertCircle } from 'lucide-react';


const TermsOfService = () => {
  const router = useRouter();

  const terms = [
    {
      icon: <Truck size={20} />,
      title: "Shipping & Delivery",
      content: "All orders are processed within 24-48 hours. Delivery times vary by location (typically 3-5 working days across Pakistan). Freshness is guaranteed upon arrival."
    },
    {
      icon: <RefreshCcw size={20} />,
      title: "Returns & Refunds",
      content: "Due to the perishable nature of spices and pickles, we only accept returns if the seal is broken or the product is damaged during transit. Contact us within 24h."
    },
    {
      icon: <CreditCard size={20} />,
      title: "Payment Terms",
      content: "We currently accept Cash on Delivery (COD) and Bank Transfers. Prices are subject to change based on market spice rates without prior notice."
    },
    {
      icon: <AlertCircle size={20} />,
      title: "Product Usage",
      content: "Drylicious products are 100% natural. We recommend storing them in cool, dry places to maintain their essential oils and high potency."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] selection:bg-orange-100">
      

      {/* --- BACK NAV --- */}
      <nav className="fixed top-0 left-0 w-full z-[150] p-6 md:p-10 pointer-events-none">
        <motion.button 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => router.back()}
          className="pointer-events-auto mt-20 md:mt-0 flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-2xl border border-black/[0.05] rounded-full shadow-xl hover:shadow-orange-900/5 transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Go Back</span>
        </motion.button>
      </nav>

      <main className="max-w-[1100px] mx-auto px-6 pt-48 md:pt-56 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-20"
        >
          {/* HEADER */}
          <header className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-[1.5px] w-10 bg-orange-900/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-900/50">Service Agreement</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
              Terms of <br />
              <span className="italic font-light text-orange-900/20">Service</span>
            </h1>
          </header>

          {/* MAIN LEGAL SECTION */}
          <section className="bg-white/40 backdrop-blur-sm border border-black/[0.03] rounded-[40px] p-8 md:p-16 space-y-12 shadow-sm">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif italic text-orange-900/80">General Conditions</h2>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                By accessing Drylicious and placing an order, you confirm that you are in agreement with and bound by the terms of service contained in the conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and Drylicious.
              </p>
            </div>

            {/* TERMS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {terms.map((item, index) => (
                <div key={index} className="space-y-4 p-6 rounded-3xl hover:bg-white transition-colors duration-500 border border-transparent hover:border-black/5">
                  <div className="text-orange-900/40">{item.icon}</div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest">{item.title}</h4>
                  <p className="text-gray-500 font-light leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-orange-900/5 rounded-[30px] gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-serif italic">Have questions about our terms?</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-orange-900/40">Our support team is active 24/7 on WhatsApp</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/923367999509', '_blank')}
              className="px-8 py-4 bg-[#111111] text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-3"
            >
              <HelpCircle size={16} />
              Inquire Now
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="max-w-[1100px] mx-auto px-6 pb-12 opacity-30">
         <div className="flex justify-between items-center border-t border-black/10 pt-8">
            <span className="text-[9px] font-black uppercase tracking-[0.3em]">© 2026 Drylicious Corp.</span>
            <Scale size={16} />
         </div>
      </footer>
    </div>
  );
};

export default TermsOfService;