"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, ThumbsUp, Share2, MessageSquare } from 'lucide-react';

const fbPosts = [
  {
    url: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Our freshly ground Turmeric is back in stock!",
    engagement: "4.2k Likes"
  },
  {
    url: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Stone-ground spices for the perfect Biryani.",
    engagement: "1.8k Likes"
  },
  {
    url: "https://images.pexels.com/photos/674483/pexels-photo-674483.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Pure, Organic, and Sun-dried to perfection.",
    engagement: "3.5k Likes"
  },
  {
    url: "https://images.pexels.com/photos/4199144/pexels-photo-4199144.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Tradition in every grain. Order now via WhatsApp.",
    engagement: "2.9k Likes"
  }
];

const FacebookGallery = () => {
  return (
    <section className="py-24 bg-[#FDFCF9] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center md:justify-start gap-2 mb-3"
            >
              <div className="h-[1px] w-8  bg-[#FDFCF9]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-black font-black">
                Community Updates
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
              From our <span className="italic font-light text-orange-900/30">Facebook</span> Wall
            </h2>
          </div>
          
          <motion.a 
            href="https://facebook.com"
            target="_blank"
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 px-8 py-4 bg-[#1877F2] text-white rounded-full shadow-lg shadow-[#1877F2]/20 transition-all duration-500"
          >
            <Facebook size={20} fill="white" />
            <span className="text-xs font-bold uppercase tracking-widest">Follow Drylicious</span>
          </motion.a>
        </div>

        {/* Facebook Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fbPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[35px] overflow-hidden border border-black/[0.03] shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={post.url} 
                  alt="Facebook Post" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                   <p className="text-white text-xs font-light leading-relaxed mb-4 line-clamp-2">
                     {post.caption}
                   </p>
                   <div className="flex gap-4">
                      <ThumbsUp size={16} className="text-white" />
                      <MessageSquare size={16} className="text-white" />
                      <Share2 size={16} className="text-white" />
                   </div>
                </div>
              </div>

              {/* Engagement Bar (Visible on Desktop) */}
              <div className="p-5 flex justify-between items-center bg-white">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-[#1877F2]/10 rounded-full">
                    <ThumbsUp size={12} className="text-[#1877F2]" fill="#1877F2" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                    {post.engagement}
                  </span>
                </div>
                <Facebook size={14} className="text-gray-200" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FacebookGallery;