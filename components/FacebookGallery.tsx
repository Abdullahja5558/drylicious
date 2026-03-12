"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle, Heart, Share2, ExternalLink, MessageSquareText } from 'lucide-react';

const socialPosts = [
  {
    platform: "Instagram",
    icon: <Instagram size={18} className="text-pink-600" />,
    url: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "The golden hue of pure turmeric. #OrganicLiving",
    stats: "1.2k",
    link: "https://www.instagram.com/drylicious_global.foods",
    size: "md:col-span-1 md:row-span-2"
  },
  {
    platform: "Facebook",
    icon: <Facebook size={18} className="text-blue-600" />,
    url: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Tradition meets purity in every stone-ground grain.",
    stats: "4.5k",
    link: "https://www.facebook.com/dryliciousGlobalFoods",
    size: "md:col-span-2 md:row-span-1"
  },
  {
    platform: "WhatsApp",
    icon: <MessageSquareText size={18} className="text-green-600" />,
    url: "https://images.pexels.com/photos/674483/pexels-photo-674483.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Direct from the source. Chat with us for bulk orders. 🌿",
    stats: "Active",
    link: "https://wa.me/923367999509?text=Hello%20Drylicious!%20I%20am%20interested%20in%20your%20premium%20organic%20spices.",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    platform: "Instagram",
    icon: <Instagram size={18} className="text-pink-600" />,
    url: "https://images.pexels.com/photos/4199144/pexels-photo-4199144.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Restocked! Grab your organic spice kit today.",
    stats: "2.1k",
    link: "https://www.instagram.com/drylicious_global.foods",
    size: "md:col-span-1 md:row-span-1"
  }
];

const SocialGallery = () => {
  return (
    <section className="py-32 bg-[#FDFCF9] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-[1px] bg-orange-900/20" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-orange-900/60 font-black">
                Social Journal
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif text-[#1a1a1a] leading-[1.1]"
            >
              Connected by <br /> 
              <span className="italic font-light text-orange-900/30">Authenticity.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-3 pb-2"
          >
            {[
              { icon: <Instagram />, url: "https://www.instagram.com/drylicious_global.foods" },
              { icon: <Facebook />, url: "https://www.facebook.com/dryliciousGlobalFoods" },
              { icon: <MessageSquareText />, url: "https://wa.me/923367999509?text=Hello%20Drylicious!%20I%20am%20interested%20in%20your%20premium%20organic%20spices." }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-black/[0.05] bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-500 text-gray-400 hover:text-orange-900"
              >
                {React.cloneElement(social.icon as React.ReactElement<{ size: number }>, { size: 18 })}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bento-Style Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-full md:h-[800px]">
          {socialPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group relative rounded-[40px] overflow-hidden bg-white border border-black/[0.03] flex flex-col cursor-pointer ${post.size}`}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={post.url} 
                  alt={post.platform} 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              {/* Top Platform Tag */}
              <div className="relative z-10 p-6 flex justify-between items-start">
                <div className="backdrop-blur-md bg-white/80 p-3 rounded-2xl border border-white/20 shadow-sm flex items-center gap-2">
                  {post.icon}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">{post.platform}</span>
                </div>
                <div className="p-3 rounded-full bg-white/20 border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black">
                  <ExternalLink size={16} />
                </div>
              </div>

              {/* Bottom Content Layer */}
              <div className="relative z-10 mt-auto p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 line-clamp-2">
                  "{post.caption}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-6 items-center">
                    <div className="flex items-center gap-2 text-white/90">
                      <Heart size={16} className="group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
                      <span className="text-[11px] font-bold">{post.stats}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <MessageCircle size={16} />
                      <span className="text-[11px] font-bold">Details</span>
                    </div>
                  </div>
                  
                  <div className="h-1 w-12 bg-white/30 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-white" 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>

              {/* Glass Glare Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-1000" />
            </motion.a>
          ))}
        </div>

        {/* Bottom Social Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white border border-black/[0.03] p-8 rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-orange-900/10 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=dry${i}`} alt="user profile" />
                  </div>
                ))}
             </div>
             <p className="text-xs font-medium text-gray-500 tracking-wide">Join <span className="text-orange-900 font-bold">12k+ others</span> on our digital journey</p>
          </div>
          <a 
            href="https://wa.me/923367999509" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-10 py-4 bg-[#1a1a1a] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-green-600 transition-colors duration-500 text-center"
          >
            Chat on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default SocialGallery;