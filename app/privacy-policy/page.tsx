"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck, Lock, Eye, Gavel, FileText } from 'lucide-react';


const PrivacyPolicy = () => {
  const router = useRouter();

  const sections = [
    {
      icon: <Eye size={20} />,
      title: "Data Collection",
      content: "We collect minimal information necessary to process your orders, including your name, delivery address, and contact details for WhatsApp coordination."
    },
    {
      icon: <Lock size={20} />,
      title: "Information Security",
      content: "Your data is encrypted and stored securely. We do not sell your personal information to third parties. We only use it to enhance your experience at Drylicious."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Order Processing",
      content: "When you place an order via WhatsApp, we only share the essential details required for logistics and delivery partners to reach your doorstep."
    },
    {
      icon: <Gavel size={20} />,
      title: "Legal Rights",
      content: "You have the right to request access to your data, correction of errors, or complete deletion of your profile from our spice archive at any time."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] selection:bg-orange-100">
    

      {/* --- BACK BUTTON (Fixed & Responsive) --- */}
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

      <main className="max-w-[1000px] mx-auto px-6 pt-48 md:pt-56 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16 md:space-y-24"
        >
          {/* HEADER SECTION */}
          <header className="space-y-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="h-[1.5px] w-10 bg-orange-900/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-900/50">Legal Framework</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
              Privacy <br />
              <span className="italic font-light text-orange-900/20">Protocol</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 font-light italic max-w-2xl leading-relaxed border-l-2 border-orange-900/10 pl-8 hidden md:block">
              "At Drylicious, we value your trust as much as our spices. This policy outlines how we protect your digital footprint."
            </p>
          </header>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group space-y-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center shadow-sm text-orange-900/40 group-hover:text-orange-900 group-hover:bg-orange-50 transition-all duration-500">
                  {section.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-black uppercase tracking-widest">{section.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FOOTER NOTE */}
          <footer className="pt-20 border-t border-black/[0.05]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-50">
              <div className="flex items-center gap-4">
                <FileText size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Version 2026.1.0</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-center md:text-right">
                Last Updated: March 2026
              </p>
            </div>
          </footer>
        </motion.div>
      </main>

      {/* MOBILE STICKY CONTACT HELPER */}
      <div className="md:hidden fixed bottom-8 right-6 z-[160]">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open('https://wa.me/923367999509', '_blank')}
          className="w-16 h-16 bg-[#111111] text-white rounded-full shadow-2xl flex items-center justify-center"
        >
          <ShieldCheck size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;