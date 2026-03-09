"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviewPages = [
  [
    {
      name: "Sara Ahmed",
      role: "Home Chef",
      comment: "The aroma of Drylicious Biryani Masala reminds me of my grandmother's hand-ground spices. Pure magic!",
      rating: 5,
    },
    {
      name: "Zainab Malik",
      role: "Food Blogger",
      comment: "I've never seen such vibrant color in Turmeric before. You can tell it's 100% organic and cold-ground.",
      rating: 5,
    },
    {
      name: "Omer Khan",
      role: "Restaurant Owner",
      comment: "Consistency is key in my kitchen, and Drylicious delivers the same premium quality every single time.",
      rating: 5,
    }
  ],
  [
    {
      name: "Hassan Raza",
      role: "Culinary Expert",
      comment: "Finally, a brand that doesn't compromise on purity. Their whole spices are incredibly fresh and potent.",
      rating: 5,
    },
    {
      name: "Ayesha Ali",
      role: "Nutritionist",
      comment: "As a nutritionist, I highly recommend Drylicious for their zero-additive policy. Pure and healthy.",
      rating: 5,
    },
    {
      name: "Bilal Sheikh",
      role: "Food Lover",
      comment: "The packaging is as premium as the spices themselves. A luxury experience for any modern kitchen.",
      rating: 5,
    }
  ],
  [
  {
    name: "Farhan Qureshi",
    role: "Professional Chef",
    comment: "The depth of flavor in their Garam Masala is unparalleled. It doesn't just add heat; it adds a complex character to the dish.",
    rating: 5,
  },
  {
    name: "Mariam Sohail",
    role: "Organic Advocate",
    comment: "Finding unadulterated spices is a struggle, but Drylicious is a breath of fresh air. You can smell the purity the moment you open the jar.",
    rating: 5,
  },
  {
    name: "Daniyal Ahmed",
    role: "BBQ Specialist",
    comment: "Their Red Chilli flakes have that perfect smoky kick. It’s clear they use high-quality dried chillies without any fillers.",
    rating: 5,
  }
],
[
  {
    name: "Sana Javed",
    role: "Lifestyle Influencer",
    comment: "Aesthetic packaging and top-tier quality. Drylicious has officially replaced every other spice brand in my pantry.",
    rating: 5,
  },
  {
    name: "Dr. Rizwan",
    role: "Health Consultant",
    comment: "I appreciate the cold-ground process. It preserves the essential oils and medicinal properties of spices like Ginger and Turmeric.",
    rating: 5,
  },
  {
    name: "Khadija Noor",
    role: "Grandmother / Home Expert",
    comment: "Beta, yeh bilkul waisa hi maza hai jo hum bachpan mein chakki se pise huye masalon mein paate thay. Bohat khoob!",
    rating: 5,
  }
]
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % reviewPages.length);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + reviewPages.length) % reviewPages.length);

  return (
    <section className="py-20 bg-[#FDFCF9] overflow-hidden px-6">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center mb-36">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-900/10 bg-orange-50/50 mb-6"
          >
            <Star size={12} className="text-orange-500 fill-orange-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-orange-900/60 uppercase">
              Trusted by 500+ Kitchens
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-[#1a1a1a]"
          >
            What they <span className="italic font-light text-orange-900/30">savor.</span>
          </motion.h2>
        </div>

        {/* --- Navigation Buttons (Left & Right) --- */}
        {/* Hidden on small screens, shown as absolute on MD+ */}
        <div className="hidden md:block">
           <button 
              onClick={prevPage}
              className="absolute left-[-40px] lg:left-[-80px] top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border border-black/10 flex items-center justify-center bg-black backdrop-blur-sm hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 group shadow-sm hover:shadow-xl"
            >
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextPage}
              className="absolute right-[-40px] lg:right-[-80px] top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border border-black/10 flex items-center justify-center bg-black backdrop-blur-sm hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 group shadow-sm hover:shadow-xl"
            >
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        {/* Staggered Grid Container */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {reviewPages[currentPage].map((rev, index) => (
                <div
                  key={index}
                  className={`relative p-10 rounded-[50px] bg-white border border-black/[0.03] flex flex-col justify-between hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 group ${
                    index === 1 ? 'md:-translate-y-12' : ''
                  }`}
                >
                  <div className="absolute top-8 right-10 text-orange-900/5 group-hover:text-orange-900/10 transition-colors">
                    <Quote size={60} />
                  </div>

                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-orange-400 fill-orange-400" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-serif text-[#1a1a1a] leading-relaxed mb-12">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-black/5 pt-8">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-900 font-bold text-sm">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider">{rev.name}</h4>
                      <p className="text-xs text-gray-400 italic">{rev.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Bottom Area (Pagination + Mobile Nav) --- */}
        <div className="mt-24 flex flex-col items-center gap-10">
          
          {/* Progress Indicators */}
          <div className="flex gap-3">
            {reviewPages.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  currentPage === i ? 'w-16 bg-orange-900/60' : 'w-4 bg-black/10'
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons (Mobile Only) */}
          <div className="flex gap-6 md:hidden">
            <button 
              onClick={prevPage}
              className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 group shadow-sm"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextPage}
              className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 group shadow-sm"
            >
              <ChevronRight size={28} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;