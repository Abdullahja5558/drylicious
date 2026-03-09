"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, MessageCircle, Minus, Plus, ShieldCheck, Zap, Star, Leaf, ShoppingBag } from 'lucide-react';
import { PURE_SPICES } from '@/app/categories/pure-spices/page';
import PremiumNavbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext'; // Cart Context Import

const SpiceDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Global state se function liya

  const spice = PURE_SPICES.find(s => s.id === id);

  // Cart Handler Function
  const handleAddToCart = () => {
    if (spice) {
      addToCart({
        id: spice.id,
        name: spice.name,
        price: spice.price,
        qty: quantity,
        image: spice.image,
        weight: "250g"
      });
    }
  };

  const whatsappUrl = useMemo(() => {
    if (!spice) return "#";
    const phoneNumber = "923367999509";
    const totalPrice = spice.price * quantity;
    const message = `Asalam-o-Alaikum Drylicious! 👋\n\nI want to order:\n📦 Product: ${spice.name}\n🔢 Quantity: ${quantity} units (250g each)\n💰 Total: Rs. ${totalPrice}\n\nPlease confirm my order.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }, [spice, quantity]);

  if (!spice) return (
    <div className="h-screen flex flex-col items-center justify-center font-serif px-6 text-center bg-[#FBF9F4]">
      <h2 className="text-2xl md:text-3xl mb-4">Spice not found</h2>
      <button onClick={() => router.push('/')} className="underline uppercase tracking-widest text-xs font-black cursor-pointer">Back to Home</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1a1a1a] selection:bg-orange-100">
      <PremiumNavbar/>
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] p-4 md:p-10 pointer-events-none">
        <motion.button 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => router.back()}
          className="pointer-events-auto flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white/80 backdrop-blur-2xl border border-black/5 rounded-full shadow-lg hover:bg-white transition-all group cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Back</span>
        </motion.button>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-32 md:pt-40 pb-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          {/* --- Left: Image Section --- */}
          <div className="relative lg:sticky lg:top-32 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group"
            >
              <img 
                src={spice.image} 
                alt={spice.name} 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/5" />
              <div className="absolute top-5 right-5 md:top-8 md:right-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center">
                 <Star size={14} className="text-white fill-white mb-1" />
                 <span className="text-[7px] md:text-[8px] font-black text-white uppercase tracking-tighter italic">Premium</span>
              </div>
            </motion.div>
          </div>

          {/* --- Right: Detail Section --- */}
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 md:space-y-10"
            >
              {/* Header */}
              <header className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-6 md:w-8 bg-orange-900/30" />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-orange-900/60">Selected Pure Spice</span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] md:leading-[0.9] tracking-tighter text-[#111111]">
                  {spice.name.split(' ')[0]} <br className="hidden sm:block" />
                  <span className="italic font-light text-orange-900/30">{spice.name.split(' ').slice(1).join(' ')}</span>
                </h1>
                
                <div className="flex items-center gap-4 md:gap-8 pt-2 md:pt-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Price</span>
                    <p className="text-3xl md:text-4xl font-medium text-[#111111]">Rs. {spice.price * quantity}</p>
                  </div>
                  <div className="h-8 md:h-10 w-[1px] bg-black/10" />
                  <div className="flex flex-col">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Weight</span>
                    <p className="text-lg md:text-xl font-serif italic text-orange-900/60">250g Pack</p>
                  </div>
                </div>
              </header>

              <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed italic max-w-lg border-l-2 border-orange-900/10 pl-4 md:pl-6">
                "Our {spice.name} is cold-ground at precisely 18°C to ensure the natural essential oils remain untouched."
              </p>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Select Quantity</span>
                <div className="flex items-center border border-black/5 rounded-full p-1.5 md:p-2 bg-white shadow-sm w-fit">
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-orange-50 transition-colors cursor-pointer"
                  >
                    <Minus size={16}/>
                  </motion.button>
                  <span className="w-12 md:w-16 text-center font-bold text-2xl md:text-3xl tabular-nums">{quantity}</span>
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(quantity + 1)} 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-orange-50 transition-colors cursor-pointer"
                  >
                    <Plus size={16}/>
                  </motion.button>
                </div>
              </div>

              {/* Action Buttons (Desktop) */}
              <div className="hidden lg:grid grid-cols-2 gap-4 pt-4">
                <motion.button
                  onClick={handleAddToCart}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 py-5 bg-white border border-black/10 text-black rounded-full shadow-sm hover:shadow-xl hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
                >
                  <ShoppingBag size={18} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add to Basket</span>
                </motion.button>

                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 py-5 bg-[#111111] text-white rounded-full shadow-xl hover:bg-[#25D366] transition-all duration-500 cursor-pointer"
                >
                  <MessageCircle size={18} fill="currentColor" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Order Now</span>
                </motion.a>
              </div>

              {/* Trust Section */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-8 md:pt-12 border-t border-black/5">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-emerald-50 flex items-center justify-center">
                    <ShieldCheck className="text-emerald-600" size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] md:text-[9px] font-black uppercase text-[#111111]">100% Pure</span>
                    <span className="text-[8px] text-gray-400 uppercase font-bold">Lab Certified</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-orange-50 flex items-center justify-center">
                    <Zap className="text-orange-600" size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] md:text-[9px] font-black uppercase text-[#111111]">Cold Ground</span>
                    <span className="text-[8px] text-gray-400 uppercase font-bold">Nutrient Locked</span>
                  </div>
                </div>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 md:gap-3 pt-4">
                 {['Eco-Friendly', 'Direct Farm', 'Non-GMO'].map(tag => (
                   <span key={tag} className="flex items-center gap-1.5 px-3 py-2 bg-stone-100 rounded-lg text-[8px] font-bold uppercase tracking-widest text-gray-500">
                     <Leaf size={10} /> {tag}
                   </span>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* --- MOBILE STICKY FOOTER --- */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full p-4 z-[110] flex gap-2 bg-gradient-to-t from-[#FBF9F4] via-[#FBF9F4] to-transparent">
        <motion.button
          onClick={handleAddToCart}
          className="flex-none p-5 bg-white border border-black/10 rounded-[20px] shadow-xl active:scale-95 transition-all cursor-pointer"
        >
          <ShoppingBag size={22} />
        </motion.button>
        
        <motion.a
          href={whatsappUrl}
          target="_blank"
          className="flex-grow flex items-center justify-between px-6 py-5 bg-[#111111] text-white rounded-[20px] shadow-2xl active:scale-95 transition-all cursor-pointer"
        >
          <div className="flex flex-col text-left">
              <span className="text-[7px] font-black uppercase tracking-widest opacity-40">Direct Order</span>
              <span className="text-lg font-bold tracking-tighter text-white">Rs. {spice.price * quantity}</span>
          </div>
          <div className="flex items-center gap-2">
              <span className="text-[9px] font-black uppercase tracking-widest">Send</span>
              <MessageCircle size={18} fill="currentColor" />
          </div>
        </motion.a>
      </div>

      <footer className="py-12 md:py-20 flex flex-col items-center opacity-20">
         <div className="h-12 md:h-20 w-[1px] bg-black mb-6 md:mb-8" />
         <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[1em]">Artisanal Heritage</span>
      </footer>
    </div>
  );
};

export default SpiceDetail;