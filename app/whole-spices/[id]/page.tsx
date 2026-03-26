"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  MessageCircle, 
  Minus, 
  Plus, 
  ShieldCheck, 
  Zap, 
  Star, 
  ChevronDown, 
  ShoppingBag, 
  CreditCard 
} from 'lucide-react';
import { WHOLE_SPICES } from '@/app/categories/whole-spices/page';
import { useCart } from '@/context/CartContext';
import PremiumNavbar from '@/components/Navbar';

const WholeSpiceDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(100); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { addToCart } = useCart();

  const spice = WHOLE_SPICES.find(s => s.id === id);

  const currentUnitPrice = useMemo(() => {
    if (!spice) return 0;
    const basePrice = spice.price; 
    if (selectedWeight === 50) return Math.round(basePrice * 0.55);
    if (selectedWeight === 250) return Math.round(basePrice * 2.5);
    return basePrice;
  }, [spice, selectedWeight]);

  const totalPrice = currentUnitPrice * quantity;

  const handleAddToCart = () => {
    if (spice) {
      addToCart({
        id: `${spice.id}-${selectedWeight}`,
        name: spice.name,
        price: currentUnitPrice,
        qty: quantity,
        image: spice.image,
        weight: `${selectedWeight}g`
      });
    }
  };

  const handleBuyNow = () => {
    if (spice) {
      handleAddToCart();
      router.push('/checkout');
    }
  };

  const whatsappUrl = useMemo(() => {
    if (!spice) return "#";
    const phoneNumber = "923367999509";
    const message = `Asalam-o-Alaikum Drylicious! 👋\n\nI want to order Whole Spice:\n📦 Product: ${spice.name}\n⚖️ Size: ${selectedWeight}g\n🔢 Quantity: ${quantity} units\n💰 Total: Rs. ${totalPrice}\n\nPlease confirm my order.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }, [spice, quantity, totalPrice, selectedWeight]);

  if (!spice) return (
    <div className="h-screen flex flex-col items-center justify-center font-serif bg-[#FBF9F4] px-6 text-center">
      <h2 className="text-xl md:text-2xl mb-4 tracking-tighter uppercase font-light">Archive Entry Not Found</h2>
      <button onClick={() => router.push('/')} className="underline uppercase tracking-[0.3em] text-[10px] font-black cursor-pointer">Back to Home</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] selection:bg-orange-100">
      <div className="relative z-[300]">
        <PremiumNavbar />
      </div>
      
      {/* BACK BUTTON */}
      <nav className="fixed top-0 left-0 w-full z-[400] pointer-events-none">
        <div className="max-w-[1600px] mx-auto p-6 md:p-10">
          <motion.button 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.back()}
            className="pointer-events-auto mt-15 md:mt-1 flex items-center justify-center gap-3 bg-white border border-black/5 shadow-2xl transition-all duration-300 group cursor-pointer px-6 py-2.5 rounded-full md:px-0 md:py-0 md:w-16 md:h-16 md:rounded-full"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] md:hidden">Go Back</span>
          </motion.button>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 pt-44 md:pt-48 pb-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-start">
          
          {/* IMAGE */}
          <div className="lg:col-span-7 lg:sticky lg:top-36">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-[4/5] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl group bg-stone-100"
            >
              <motion.img src={spice.image} alt={spice.name} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[3s] ease-out" />
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-3 flex flex-col items-center shadow-2xl">
                 <Star size={14} className="text-white fill-white mb-1 animate-pulse" />
                 <span className="text-[8px] font-black text-white uppercase tracking-tighter italic">Origin Pure</span>
              </div>
            </motion.div>
          </div>

          {/* CONTENT */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 md:space-y-12">
              <header className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-[1.5px] w-10 bg-orange-900/30" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-900/50">Raw Whole Spices</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-serif leading-[0.85] tracking-tighter text-[#111111]">
                  {spice.name.split(' ')[0]} <br />
                  <span className="italic font-light text-orange-900/30">{spice.name.split(' ').slice(1).join(' ')}</span>
                </h1>
                
                <div className="flex items-center gap-10 pt-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Total Value</span>
                    <p className="text-4xl md:text-5xl font-medium tracking-tighter tabular-nums">Rs. {totalPrice}</p>
                  </div>
                  <div className="h-10 w-px bg-black/5" />
                  
                  <div className="relative">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 block">Pouch Size</span>
                    <button 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 text-xl font-serif italic text-orange-900/60 leading-none group cursor-pointer"
                    >
                      {selectedWeight} Grams
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-4 bg-white border border-black/5 shadow-2xl rounded-2xl p-2 z-[120] min-w-[140px]">
                          {[50, 100, 250].map((w) => (
                            <button key={w} onClick={() => { setSelectedWeight(w); setIsDropdownOpen(false); }} className={`w-full text-left px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors ${selectedWeight === w ? 'bg-orange-900 text-white' : 'hover:bg-stone-50'}`}>
                              {w}g Pouch
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </header>

              <p className="text-xl md:text-2xl text-[#333333] font-light leading-relaxed italic border-l-2 border-orange-900/10 pl-8">
                "Our {spice.name} is selected for its high essential oil content, ensuring maximum potency in every {selectedWeight}g pack."
              </p>

              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Specify Quantity</span>
                <div className="flex items-center bg-white border border-black/5 rounded-full p-2 w-fit shadow-sm">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-14 h-14 rounded-full flex items-center justify-center hover:bg-orange-50 cursor-pointer transition-colors"><Minus size={18} className="text-gray-400" /></button>
                  <span className="w-20 text-center font-bold text-4xl tabular-nums tracking-tighter">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-14 h-14 rounded-full flex items-center justify-center hover:bg-orange-50 cursor-pointer transition-colors"><Plus size={18} /></button>
                </div>
              </div>

              {/* DESKTOP ACTIONS */}
              <div className="hidden lg:flex flex-col gap-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <motion.button onClick={handleAddToCart} whileHover={{ y: -5 }} className="flex items-center justify-center gap-3 py-6 bg-white border border-black/10 rounded-[25px] hover:bg-black hover:text-white transition-all duration-500 cursor-pointer group">
                    <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-black uppercase tracking-widest">Add to Basket</span>
                  </motion.button>
                  <motion.a href={whatsappUrl} target="_blank" whileHover={{ y: -5 }} className="flex items-center justify-center gap-3 py-6 bg-white border border-black/10 text-emerald-600 rounded-[25px] hover:bg-emerald-600 hover:text-white transition-all duration-500">
                    <MessageCircle size={20} fill="currentColor" className="fill-transparent group-hover:fill-current" />
                    <span className="text-[11px] font-black uppercase tracking-widest">Order Now</span>
                  </motion.a>
                </div>

                <motion.button 
                  onClick={handleBuyNow}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-4 py-8 bg-[#111111] text-white rounded-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-none transition-all duration-500 cursor-pointer group"
                >
                  
                  <span className="text-[12px] font-black uppercase tracking-[0.3em]">Checkout Now</span>
                </motion.button>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-12 border-t border-black/[0.05]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-black/5 flex items-center justify-center shadow-sm text-emerald-600"><ShieldCheck size={18} /></div>
                  <div className="flex flex-col"><span className="text-[9px] font-black uppercase">Lab Certified</span><span className="text-[8px] text-gray-400 uppercase font-bold">100% Purity</span></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-black/5 flex items-center justify-center shadow-sm text-orange-600"><Zap size={18} /></div>
                  <div className="flex flex-col"><span className="text-[9px] font-black uppercase">High Potency</span><span className="text-[8px] text-gray-400 uppercase font-bold">Fresh Batch</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* MOBILE STICKY FOOTER */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full p-4 z-[110] bg-gradient-to-t from-[#FBF9F4] via-[#FBF9F4] to-transparent">
        <div className="max-w-md mx-auto flex items-center gap-2">
          {/* WhatsApp Circle */}
          <a href={whatsappUrl} target="_blank" className="flex-none p-5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-[20px] shadow-xl active:scale-95">
            <MessageCircle size={22} fill="currentColor" className="fill-emerald-100" />
          </a>

          {/* Cart Circle */}
          <button onClick={handleAddToCart} className="flex-none p-5 bg-white border border-black/10 rounded-[20px] shadow-xl active:scale-95">
            <ShoppingBag size={22} />
          </button>
          
          {/* Main Buy Now Button */}
          <button 
            onClick={handleBuyNow}
            className="flex-grow flex items-center justify-between px-6 py-5 bg-[#111111] text-white rounded-[20px] shadow-2xl active:scale-95"
          >
           
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black uppercase tracking-widest">Buy Now</span>
              <CreditCard size={18} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WholeSpiceDetail;