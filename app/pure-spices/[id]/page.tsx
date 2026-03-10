"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, MessageCircle, Minus, Plus, ShieldCheck, Zap, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { PURE_SPICES } from '@/app/categories/pure-spices/page';
import PremiumNavbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';

const SpiceDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(100); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { addToCart } = useCart();

  const spice = PURE_SPICES.find(s => s.id === id);

  const currentPrice = useMemo(() => {
    if (!spice) return 0;
    const basePrice = spice.price; 
    if (selectedWeight === 50) return Math.round(basePrice * 0.55); 
    if (selectedWeight === 250) return Math.round(basePrice * 2.5); 
    return basePrice;
  }, [spice, selectedWeight]);

  const handleAddToCart = () => {
    if (spice) {
      addToCart({
        id: `${spice.id}-${selectedWeight}`,
        name: spice.name,
        price: currentPrice,
        qty: quantity,
        image: spice.image,
        weight: `${selectedWeight}g`
      });
    }
  };

  const whatsappUrl = useMemo(() => {
    if (!spice) return "#";
    const phoneNumber = "923367999509";
    const totalPrice = currentPrice * quantity;
    const message = `Asalam-o-Alaikum Drylicious! 👋\n\nI want to order:\n📦 Product: ${spice.name}\n⚖️ Weight: ${selectedWeight}g\n🔢 Quantity: ${quantity} units\n💰 Total: Rs. ${totalPrice}\n\nPlease confirm my order.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }, [spice, quantity, currentPrice, selectedWeight]);

  if (!spice) return null;

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1a1a1a] selection:bg-orange-100">
      <PremiumNavbar/>
      
      {/* --- FIXED BACK BUTTON (Z-Index & Position Fix) --- */}
      <nav className="fixed top-0 left-0 w-full z-[200] p-6 md:p-10 pointer-events-none">
        <motion.button 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => router.back()}
          className="pointer-events-auto mt-20 md:mt-0 flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-2xl border border-black/5 rounded-full shadow-xl hover:shadow-orange-900/10 transition-all group cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back</span>
        </motion.button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-48 md:pt-40 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          {/* Left: Image Section */}
          <div className="relative lg:sticky lg:top-32 w-full">
            <motion.div className="relative aspect-[4/5] rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl group">
              <img src={spice.image} alt={spice.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
              <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 flex flex-col items-center">
                 <Star size={14} className="text-white fill-white mb-1" />
                 <span className="text-[8px] font-black text-white uppercase tracking-tighter italic">Premium</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Detail Section */}
          <div className="flex flex-col space-y-10">
            <header className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-10 bg-orange-900/30" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-900/60">Selected Pure Spice</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-serif leading-[0.85] tracking-tighter text-[#111111]">
                {spice.name.split(' ')[0]} <br />
                <span className="italic font-light text-orange-900/30">{spice.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <div className="flex items-center gap-10 pt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Price</span>
                  <p className="text-4xl md:text-5xl font-medium tracking-tighter tabular-nums text-[#111111]">Rs. {currentPrice * quantity}</p>
                </div>
                <div className="h-10 w-[1px] bg-black/10" />
                
                <div className="relative">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 block">Weight</span>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-3 text-xl font-serif italic text-orange-900/60 group cursor-pointer"
                  >
                    {selectedWeight}g Pack
                    <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-4 bg-white border border-black/5 shadow-2xl rounded-2xl p-2 z-[150] min-w-[140px] backdrop-blur-xl"
                      >
                        {[50, 100, 250].map((w) => (
                          <button
                            key={w}
                            onClick={() => { setSelectedWeight(w); setIsDropdownOpen(false); }}
                            className={`w-full text-left px-4 py-3 rounded-xl text-[12px] font-bold uppercase tracking-widest transition-colors ${selectedWeight === w ? 'bg-orange-900 text-white' : 'hover:bg-orange-50'}`}
                          >
                            {w}g
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </header>

            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed italic border-l-2 border-orange-900/10 pl-8">
              "Our {spice.name} is cold-ground at precisely 18°C to ensure natural essential oils remain untouched."
            </p>

            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Select Quantity</span>
              <div className="flex items-center border border-black/5 rounded-full p-2 bg-white shadow-sm w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-14 h-14 rounded-full flex items-center justify-center hover:bg-orange-50 cursor-pointer"><Minus size={16}/></button>
                <span className="w-20 text-center font-bold text-4xl tabular-nums tracking-tighter">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-14 h-14 rounded-full flex items-center justify-center hover:bg-orange-50 cursor-pointer"><Plus size={16}/></button>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4">
              <motion.button onClick={handleAddToCart} whileHover={{ y: -5 }} className="flex items-center justify-center gap-3 py-6 bg-white border border-black/10 rounded-full shadow-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
                <ShoppingBag size={20} />
                <span className="text-[11px] font-black uppercase tracking-widest">Add to Basket</span>
              </motion.button>
              <motion.a href={whatsappUrl} target="_blank" whileHover={{ y: -5 }} className="flex items-center justify-center gap-3 py-6 bg-[#111111] text-white rounded-full shadow-xl hover:bg-[#25D366] transition-all duration-500 cursor-pointer">
                <MessageCircle size={20} fill="currentColor" />
                <span className="text-[11px] font-black uppercase tracking-widest">Order Now</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-12 border-t border-black/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center"><ShieldCheck className="text-emerald-600" size={18} /></div>
                <div className="flex flex-col"><span className="text-[9px] font-black uppercase text-[#111111]">100% Pure</span><span className="text-[8px] text-gray-400 uppercase font-bold">Lab Certified</span></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center"><Zap className="text-orange-600" size={18} /></div>
                <div className="flex flex-col"><span className="text-[9px] font-black uppercase text-[#111111]">Cold Ground</span><span className="text-[8px] text-gray-400 uppercase font-bold">Nutrient Locked</span></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Footer */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full p-4 z-[110] flex gap-2 bg-gradient-to-t from-[#FBF9F4] to-transparent">
        <button onClick={handleAddToCart} className="flex-none p-5 bg-white border border-black/10 rounded-[20px] shadow-xl active:scale-95 transition-transform"><ShoppingBag size={22} /></button>
        <a href={whatsappUrl} target="_blank" className="flex-grow flex items-center justify-between px-6 py-5 bg-[#111111] text-white rounded-[20px] shadow-2xl active:scale-95 transition-transform">
          <div className="flex flex-col text-left">
              <span className="text-[7px] font-black uppercase opacity-40">{selectedWeight}g Direct Order</span>
              <span className="text-lg font-bold">Rs. {currentPrice * quantity}</span>
          </div>
          <MessageCircle size={18} fill="currentColor" />
        </a>
      </div>
    </div>
  );
};

export default SpiceDetail;