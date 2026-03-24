"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const allReviews = [
  { name: "Sara Ahmed", role: "Home Chef", comment: "The aroma of Drylicious Biryani Masala reminds me of my grandmother's hand-ground spices. Pure magic!", rating: 5 },
  { name: "Zainab Malik", role: "Food Blogger", comment: "I've never seen such vibrant color in Turmeric before. You can tell it's 100% organic and cold-ground.", rating: 5 },
  { name: "Omer Khan", role: "Restaurant Owner", comment: "Consistency is key in my kitchen, and Drylicious delivers the same premium quality every single time.", rating: 5 },
  { name: "Hassan Raza", role: "Culinary Expert", comment: "Finally, a brand that doesn't compromise on purity. Their whole spices are incredibly fresh and potent.", rating: 5 },
  { name: "Ayesha Ali", role: "Nutritionist", comment: "As a nutritionist, I highly recommend Drylicious for their zero-additive policy. Pure and healthy.", rating: 5 },
  { name: "Bilal Sheikh", role: "Food Lover", comment: "The packaging is as premium as the spices themselves. A luxury experience for any modern kitchen.", rating: 5 },
  { name: "Farhan Qureshi", role: "Professional Chef", comment: "The depth of flavor in their Garam Masala is unparalleled. It doesn't just add heat.", rating: 5 },
  { name: "Mariam Sohail", role: "Organic Advocate", comment: "Finding unadulterated spices is a struggle, but Drylicious is a breath of fresh air.", rating: 5 },
  { name: "Daniyal Ahmed", role: "BBQ Specialist", comment: "Their Red Chilli flakes have that perfect smoky kick. High-quality dried chillies.", rating: 5 },
];

interface Review {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

const ReviewCard = ({ rev }: { rev: Review }) => (
  <div className="relative p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-white border border-black/[0.05] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] mb-4 md:mb-6 group transition-all duration-500 hover:border-orange-200">
    <div className="absolute top-6 right-6 text-orange-900/5 group-hover:text-orange-900/10 transition-colors">
      <Quote size={32} />
    </div>
    <div className="flex gap-1 mb-3 md:mb-4">
      {[...Array(rev.rating)].map((_, i) => (
        <Star key={i} size={10} className="text-orange-400 fill-orange-400" />
      ))}
    </div>
    <p className="text-base md:text-lg font-serif text-[#1a1a1a] leading-relaxed mb-6">
      "{rev.comment}"
    </p>
    <div className="flex items-center gap-3 pt-5 border-t border-black/5">
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-900 font-bold text-xs">
        {rev.name.charAt(0)}
      </div>
      <div>
        <h4 className="text-[10px] md:text-xs font-bold text-[#1a1a1a] uppercase tracking-wider">{rev.name}</h4>
        <p className="text-[9px] md:text-[10px] text-gray-400 italic uppercase tracking-tight">{rev.role}</p>
      </div>
    </div>
  </div>
);

const VerticalColumn = ({ reviews, duration, reverse = false, className = "" }: { reviews: Review[], duration: number, reverse?: boolean, className?: string }) => {
  return (
    <div className={`relative h-[500px] md:h-[800px] overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: reverse ? "-50%" : "0%" }}
        animate={{ y: reverse ? "0%" : "-50%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col"
      >
        {[...reviews, ...reviews].map((rev, index) => (
          <ReviewCard key={index} rev={rev} />
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const col1 = allReviews.slice(0, 3);
  const col2 = allReviews.slice(3, 6);
  const col3 = allReviews.slice(6, 9);

  return (
    <section className="py-16 md:py-24 bg-[#FDFCF9] overflow-hidden px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-orange-900/10 bg-orange-50/50 mb-4 md:mb-6"
          >
            <Star size={10} className="text-orange-500 fill-orange-500" />
            <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-orange-900/60 uppercase">
              Trusted by 500+ Kitchens
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif text-[#1a1a1a] leading-tight"
          >
            What they <span className="italic font-light text-orange-900/30">savor.</span>
          </motion.h2>
        </div>

        {/* Vertical Marquee Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 h-[500px] md:h-[800px]">
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-b from-[#FDFCF9] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-[#FDFCF9] to-transparent z-10 pointer-events-none" />

          {/* Left Column - Hamesha Visible */}
          <VerticalColumn reviews={col1} duration={25} reverse={true} />
          
          {/* Middle Column - Tablet/Desktop par dikhega */}
          <VerticalColumn reviews={col2} duration={20} reverse={false} className="hidden sm:block" />
          
          {/* Right Column - Sirf Desktop par dikhega */}
          <VerticalColumn reviews={col3} duration={30} reverse={true} className="hidden md:block" />

        </div>
      </div>
    </section>
  );
};

export default Testimonials;