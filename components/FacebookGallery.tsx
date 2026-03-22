"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Heart,
  ExternalLink,
  MessageSquareText,
} from "lucide-react";

const socialPosts = [
  {
    platform: "Instagram",
    icon: <Instagram size={18} className="text-pink-600" />,
    url: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "The golden hue of pure turmeric. #OrganicLiving",
    stats: "1.2k",
    link: "https://www.instagram.com/drylicious_global.foods",
    size: "md:col-span-1 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    platform: "Facebook",
    icon: <Facebook size={18} className="text-blue-600" />,
    url: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Tradition meets purity in every stone-ground grain.",
    stats: "4.5k",
    link: "https://www.facebook.com/dryliciousGlobalFoods",
    size: "md:col-span-2 md:row-span-1 aspect-video md:aspect-auto",
  },
  {
    platform: "WhatsApp",
    icon: <MessageSquareText size={18} className="text-green-600" />,
    url: "https://images.pexels.com/photos/674483/pexels-photo-674483.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Direct from the source. Chat with us for bulk orders. 🌿",
    stats: "Active",
    link: "https://wa.me/923367999509?text=Hello%20Drylicious!%20I%20am%20interested%20in%20your%20premium%20organic%20spices.",
    size: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
  },
  {
    platform: "Instagram",
    icon: <Instagram size={18} className="text-pink-600" />,
    url: "https://images.pexels.com/photos/4199144/pexels-photo-4199144.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Restocked! Grab your organic spice kit today.",
    stats: "2.1k",
    link: "https://www.instagram.com/drylicious_global.foods",
    size: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
  },
];

const SocialGallery = () => {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[#FDFCF9] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-24 gap-10 text-center lg:text-left">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <div className="hidden lg:block w-10 h-[1px] bg-orange-900/20" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-orange-900/60 font-black">
                Social Journal
              </span>
              <div className="lg:hidden w-10 h-[1px] bg-orange-900/20" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#1a1a1a] leading-[1.1] tracking-tighter"
            >
              Connected by <br />
              <span className="italic font-light text-orange-900/20">
                Authenticity.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-4 pb-2"
          >
            {[
              {
                icon: <Instagram />,
                url: "https://www.instagram.com/drylicious_global.foods",
              },
              {
                icon: <Facebook />,
                url: "https://www.facebook.com/dryliciousGlobalFoods",
              },
              {
                icon: <MessageSquareText />,
                url: "https://wa.me/923367999509",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 md:p-5 rounded-full border border-black/[0.05] bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-gray-400 hover:text-orange-900"
              >
                {React.cloneElement(
                  social.icon as React.ReactElement<{ size: number }>,
                  { size: 20 },
                )}
              </a>
            ))}
          </motion.div>
        </div>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[700px] lg:h-[800px]">
          {socialPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group relative rounded-[2.5rem] md:rounded-[40px] overflow-hidden bg-white border border-black/[0.03] flex flex-col cursor-pointer transition-all duration-700 ${post.size}`}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src={post.url}
                  alt={`Facebook post about ${post.platform} from Drylicious`}
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-700" />
              </div>

              {/* Top Platform Tag */}
              <div className="relative z-10 p-6 md:p-8 flex justify-between items-start">
                <div className="backdrop-blur-xl bg-white/90 p-3 px-4 rounded-2xl border border-white/40 shadow-xl flex items-center gap-2">
                  {post.icon}
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-800">
                    {post.platform}
                  </span>
                </div>
                <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                  <ExternalLink size={16} />
                </div>
              </div>

              {/* Bottom Content Layer */}
              <div className="relative z-10 mt-auto p-8 lg:p-10 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out">
                <p className="text-white text-sm md:text-base font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 line-clamp-2 md:line-clamp-none">
                  "{post.caption}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-6 items-center">
                    <div className="flex items-center gap-2 text-white/90">
                      <Heart
                        size={18}
                        className="group-hover:fill-red-500 group-hover:text-red-500 transition-colors duration-300"
                      />
                      <span className="text-[10px] font-black tracking-widest">
                        {post.stats}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <MessageCircle size={18} />
                      <span className="text-[10px] font-black tracking-widest uppercase">
                        Explore
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:block h-[2px] w-16 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Glare Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-1000" />
            </motion.a>
          ))}
        </div>

        {/* --- Footer Banner --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white border border-black/[0.03] p-8 rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-white bg-orange-900/10 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/150?u=dry${i}`}
                    alt="user profile"
                  />
                  <img
                    src={`https://i.pravatar.cc/150?u=dry${i}`}
                    alt="Drylicious customer profile avatar"
                  />
                </div>
              ))}
            </div>

            <p className="text-xs font-medium text-gray-500 tracking-wide">
              Join{" "}
              <span className="text-orange-900 font-bold">120k+ others</span> on
              our digital journey and digital family of organic enthusiasts{" "}
            </p>
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
