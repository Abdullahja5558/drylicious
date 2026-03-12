"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes Drylicious spices different from market brands?",
    answer: "Unlike mass-produced spices, Drylicious focuses on stone-ground processing. This traditional method ensures that the natural oils and volatile aromas are preserved, giving you a much deeper flavor and authentic color."
  },
  {
    question: "Do you use any artificial colors or preservatives?",
    answer: "Absolutely not. Our promise is 100% purity. We don't use lead chromate, artificial food colors, or anti-caking agents. What you get is the raw, organic essence of the spice."
  },
  {
    question: "How should I store my premium spices to maintain freshness?",
    answer: "We recommend keeping them in our air-tight glass jars, away from direct sunlight and moisture. Heat is the enemy of aroma, so a cool, dark pantry is the perfect home for your Drylicious collection."
  },
  {
    question: "Do you offer wholesale rates for restaurants or bulk buyers?",
    answer: "Yes, we have a dedicated wholesale program for culinary professionals and retailers. You can visit our 'Wholesale' page or contact us directly via WhatsApp for a customized quote."
  },
  {
    question: "How long does shipping take within Pakistan?",
    answer: "Standard delivery typically takes 3-5 business days. Each order is packed with care to ensure the jars arrive safely at your doorstep."
  }
];

const FAQSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#FDFCF9] text-[#1a1a1a] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7c2d12]/5 border border-[#7c2d12]/10 mb-6"
          >
            <HelpCircle size={14} className="text-[#D7BDB1]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D7BDB1]">Assistance</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif tracking-tighter text-[#1a1a1a]"
          >
            Common <span className="text-[#D7BDB1] italic font-light font-serif">Inquiries</span>
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden cursor-pointer ${
                activeId === index 
                ? 'bg-white border-[#D7BDB1]/20 shadow-[0_20px_40px_-15px_rgba(124,45,18,0.05)] cursor-pointer' 
                : 'bg-black/[0.02] border-black/[0.05] hover:border-black/[0.1] cursor-pointer'
              }`}
            >
              <button
                onClick={() => setActiveId(activeId === index ? null : index)}
                className="w-full px-6 md:px-8 py-7 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
              >
                <span className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 cursor-pointer ${activeId === index ? 'text-[#D7BDB1]' : 'text-[#1a1a1a]'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all duration-500 ${activeId === index ? 'bg-[#D7BDB1] text-white rotate-180' : 'bg-black/[0.05] text-[#1a1a1a]'}`}>
                  {activeId === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {activeId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-6 font-medium">Have more specific questions?</p>
          <a 
            href="https://wa.me/923367999509" 
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#7c2d12] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-all duration-500 shadow-xl shadow-[#7c2d12]/10"
          >
            Connect via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;