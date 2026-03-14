"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, MessageCircle, Minus, Plus, ShieldCheck, Zap, Star, ChevronDown, ShoppingBag, Droplet, Leaf } from 'lucide-react';
import { PICKLE_PRODUCTS } from '@/app/categories/pickles-sauces/page'; // Ensure this path is correct
import { useCart } from '@/context/CartContext';
import PremiumNavbar from '@/components/Navbar';

const PickleDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(500); // Default weight for pickles
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { addToCart } = useCart();

  const product = PICKLE_PRODUCTS.find(p => p.id === id);

  // Price Logic based on your pickle weight variations
  const currentUnitPrice = useMemo(() => {
    if (!product) return 0;
    const basePrice = product.weights.find(w => parseInt(w.label) === selectedWeight)?.price || product.weights[0].price;
    return basePrice;
  }, [product, selectedWeight]);

  const totalPrice = currentUnitPrice * quantity;

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: `${product.id}-${selectedWeight}`,
        name: product.name,
        price: currentUnitPrice,
        qty: quantity,
        image: product.image,
        weight: `${selectedWeight}g`
      });
    }
  };

  const whatsappUrl = useMemo(() => {
    if (!product) return "#";
    const phoneNumber = "923367999509";
    const message = `Asalam-o-Alaikum Drylicious! 👋\n\nI want to order Pickle/Sauce:\n📦 Product: ${product.name}\n⚖️ Size: ${selectedWeight}g\n🔢 Quantity: ${quantity} units\n💰 Total: Rs. ${totalPrice}\n\nPlease confirm my order.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }, [product, quantity, totalPrice, selectedWeight]);

  if (!product) return (
    <div className="h-screen flex flex-col items-center justify-center font-serif bg-[#FBF9F4] px-6 text-center">
      <h2 className="text-xl md:text-2xl mb-4 tracking-tighter uppercase font-light">Product Archive Not Found</h2>
      <button onClick={() => router.push('/')} className="underline uppercase tracking-[0.3em] text-[10px] font-black cursor-pointer">Back to Home</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] selection:bg-orange-100">
      <PremiumNavbar/>
      
      {/* --- BACK BUTTON --- */}
      <nav className="fixed top-0 left-0 w-full z-[200] p-6 md:p-10 pointer-events-none">
        <motion.button 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => router.back()}
          className="pointer-events-auto mt-20 md:mt-0 flex items-center gap-2 md:gap-3 px-5 py-3 bg-white/90 backdrop-blur-2xl border border-black/[0.05] rounded-full shadow-2xl hover:shadow-orange-900/10 transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Gallery</span>
        </motion.button>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 pt-48 md:pt-40 pb-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-start">
          
          {/* LEFT: STICKY IMAGE */}
          <div className="lg:col-span-7 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl group bg-stone-100"
            >
              <motion.img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[3s] ease-out" 
              />
              <div className="absolute top-8 left-8 flex gap-2">
                 <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-4 py-2 flex items-center gap-2">
                    <Droplet size={12} className="text-white fill-white" />
                    <span className="text-[8px] font-black text-white uppercase tracking-widest italic">Sun Matured</span>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 md:space-y-12">
              <header className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-[1.5px] w-10 bg-orange-900/30" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-900/50">Heritage Preserves</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-serif leading-[0.85] tracking-tighter text-[#111111]">
                  {product.name.split(' ')[0]} <br />
                  <span className="italic font-light text-orange-900/30">{product.name.split(' ').slice(1).join(' ')}</span>
                </h1>
                
                <div className="flex items-center gap-10 pt-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Total Value</span>
                    <p className="text-4xl md:text-5xl font-medium tracking-tighter tabular-nums">Rs. {totalPrice}</p>
                  </div>
                  <div className="h-10 w-px bg-black/5" />
                  
                  {/* VOLUME DROPDOWN */}
                  <div className="relative">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 block">Volume Selection</span>
                    <button 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 text-xl font-serif italic text-orange-900/60 leading-none group cursor-pointer"
                    >
                      {selectedWeight} Grams
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-4 bg-white border border-black/5 shadow-2xl rounded-2xl p-2 z-[120] min-w-[140px]"
                        >
                          {product.weights.map((w) => (
                            <button
                              key={w.label}
                              onClick={() => { setSelectedWeight(parseInt(w.label)); setIsDropdownOpen(false); }}
                              className={`w-full text-left px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors ${selectedWeight === parseInt(w.label) ? 'bg-orange-900 text-white' : 'hover:bg-stone-50'}`}
                            >
                              {w.label} gram
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </header>

              <p className="text-xl md:text-2xl text-[#333333] font-light leading-relaxed italic border-l-2 border-orange-900/10 pl-8">
                "{product.description}"
              </p>

              {/* QUANTITY PICKER */}
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Jar Quantity</span>
                <div className="flex items-center bg-white border border-black/5 rounded-full p-2 w-fit shadow-sm">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-14 h-14 rounded-full flex items-center justify-center hover:bg-orange-50 cursor-pointer transition-colors"><Minus size={18} className="text-gray-400" /></button>
                  <span className="w-20 text-center font-bold text-4xl tabular-nums tracking-tighter">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-14 h-14 rounded-full flex items-center justify-center hover:bg-orange-50 cursor-pointer transition-colors"><Plus size={18} /></button>
                </div>
              </div>

              {/* DESKTOP ACTIONS */}
              <div className="hidden lg:grid grid-cols-2 gap-4 pt-4">
                <motion.button onClick={handleAddToCart} whileHover={{ y: -5 }} className="flex items-center justify-center gap-3 py-6 bg-white border border-black/10 rounded-[25px] hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
                  <ShoppingBag size={20} /><span className="text-[11px] font-black uppercase tracking-widest">Add to Basket</span>
                </motion.button>
                <motion.a href={whatsappUrl} target="_blank" whileHover={{ y: -5 }} className="flex items-center justify-center gap-3 py-6 bg-[#111111] text-white rounded-[25px] shadow-2xl hover:bg-emerald-600 transition-all duration-500">
                  <MessageCircle size={20} /><span className="text-[11px] font-black uppercase tracking-widest">Direct Order</span>
                </motion.a>
              </div>

              {/* TRUST BADGES */}
              <div className="grid grid-cols-2 gap-8 pt-12 border-t border-black/[0.05]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-black/5 flex items-center justify-center shadow-sm text-emerald-600"><ShieldCheck size={18} /></div>
                  <div className="flex flex-col"><span className="text-[9px] font-black uppercase text-gray-400">Authenticity</span><span className="text-[10px] uppercase font-black tracking-widest">Heritage Grade</span></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-black/5 flex items-center justify-center shadow-sm text-orange-600"><Leaf size={18} /></div>
                  <div className="flex flex-col"><span className="text-[9px] font-black uppercase text-gray-400">All Natural</span><span className="text-[10px] uppercase font-black tracking-widest">Slow Matured</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* MOBILE STICKY FOOTER */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full p-4 z-[110] flex gap-2 bg-gradient-to-t from-[#FBF9F4] via-[#FBF9F4] to-transparent">
        <button onClick={handleAddToCart} className="flex-none p-5 bg-white border border-black/10 rounded-[22px] shadow-xl active:scale-95 transition-transform"><ShoppingBag size={22} /></button>
        <a href={whatsappUrl} target="_blank" className="flex-grow flex items-center justify-between px-6 py-5 bg-[#111111] text-white rounded-[22px] shadow-2xl active:scale-95 transition-transform">
          <div className="flex flex-col text-left">
              <span className="text-[7px] font-black uppercase opacity-40">{selectedWeight}g Jar Order</span>
              <span className="text-lg font-bold">Rs. {totalPrice}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black uppercase tracking-widest">Order Now</span>
            <MessageCircle size={18} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default PickleDetail;