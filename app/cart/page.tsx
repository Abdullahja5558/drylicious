"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; // For Performance
import { useRouter } from 'next/navigation';
import { Trash2, MessageCircle, ArrowLeft, ShoppingBag, Plus, Minus, MoveRight, Sparkles, Medal, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const router = useRouter();
  const { cart, updateQty, removeFromCart, cartCount } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const delivery = subtotal > 0 ? 250 : 0; 
  const total = subtotal + delivery;

  const generateWhatsAppOrder = () => {
    const phoneNumber = "923367999509";
    const orderDetails = cart.map((item, index) => 
      `${index + 1}. *${item.name}* ⚖️ Size: ${item.weight}\n🔢 Qty: ${item.qty}\n💰 Price: Rs. ${item.price * item.qty}`
    ).join('\n\n');
    
    const message = `Asalam-o-Alaikum Drylicious! 👋✨\n\nI want to place a *New Order*:\n\n${orderDetails}\n\n--- 💳 *Billing Summary* ---\n📝 Subtotal: Rs. ${subtotal}\n🚚 Delivery: Rs. ${delivery}\n⭐ *Grand Total: Rs. ${total}*\n\nPlease confirm my order. Thank you!`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#FBF9F4] px-6 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-orange-900/5 rounded-full flex items-center justify-center mb-8"
        >
           <ShoppingBag size={40} strokeWidth={1} className="text-orange-900/20" />
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-serif tracking-tighter mb-6">Your basket is <span className="italic font-light opacity-30">empty.</span></h2>
        <Link href="/" className="px-12 py-5 bg-[#111111] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-orange-900 transition-colors shadow-xl">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] selection:bg-orange-100 pb-20">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 w-full z-[400] pointer-events-none">
        <div className="max-w-[1600px] mx-auto p-6 md:p-12 flex justify-between items-center">
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.back()}
            aria-label="Go Back"
            className="pointer-events-auto flex items-center justify-center gap-3 bg-white border border-black/5 shadow-2xl transition-all duration-300 group cursor-pointer px-6 py-2.5 rounded-full md:w-16 md:h-16 md:p-0"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </motion.button>

          <div className="flex items-center gap-2 text-orange-900/40">
             <Sparkles size={14} />
             <span className="text-[10px] font-black uppercase tracking-[0.5em]">Checkout Archive</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 pt-32 md:pt-40">
        
        {/* Left: Items List */}
        <div className="lg:col-span-8">
          <header className="mb-16">
             <h1 className="text-6xl md:text-9xl font-serif tracking-tighter leading-none mb-4">
              Your <span className="italic font-light text-orange-900/20">Cart.</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Total Items: {cartCount}</p>
          </header>

          <div className="divide-y divide-black/[0.05]">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="group flex flex-col md:flex-row items-center gap-8 py-12"
                >
                  <div className="relative w-40 h-52 md:w-32 md:h-40 bg-stone-100 rounded-3xl overflow-hidden shrink-0 shadow-sm">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex-grow text-center md:text-left">
                    <span className="text-[9px] font-black uppercase tracking-widest text-orange-900/40 mb-2 block">Heritage Selection • {item.weight}</span>
                    <h3 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">{item.name}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-8">
                       <div className="flex items-center bg-white border border-black/[0.03] rounded-full p-1 shadow-sm">
                          <button aria-label="Decrease quantity" onClick={() => updateQty(item.id, -1)} className="p-3 hover:bg-orange-50 rounded-full"><Minus size={14}/></button>
                          <span className="w-12 text-center font-bold text-lg tabular-nums">{item.qty}</span>
                          <button aria-label="Increase quantity" onClick={() => updateQty(item.id, 1)} className="p-3 hover:bg-orange-50 rounded-full"><Plus size={14}/></button>
                       </div>
                       <button onClick={() => removeFromCart(item.id)} className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 hover:text-red-500 transition-colors flex items-center gap-2">
                          <Trash2 size={14} /> Remove
                       </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-3xl font-medium tracking-tighter">Rs. {item.price * item.qty}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Checkout Sidebar */}
        <div className="lg:col-span-4">
           <div className="bg-white rounded-[50px] p-10 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] border border-black/[0.01] sticky top-32">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-orange-900/40 border-b border-black/5 pb-6">Order Summary</h4>
              
              <div className="space-y-6 mb-12">
                <div className="justify-between flex text-sm">
                  <span className="text-gray-400 font-light italic">Order Subtotal</span>
                  <span className="font-medium tracking-tighter">Rs. {subtotal}</span>
                </div>
                <div className="justify-between flex text-sm">
                  <span className="text-gray-400 font-light italic">Flat Delivery Fee</span>
                  <span className="font-medium tracking-tighter text-orange-900">Rs. {delivery}</span>
                </div>
                <div className="pt-6 border-t border-black/5 flex justify-between items-end">
                  <span className="text-2xl font-serif">Grand Total</span>
                  <span className="text-5xl font-serif tracking-tighter">Rs. {total}</span>
                </div>
              </div>

              {/* ACTION BUTTONS: Now with Dual Strategy */}
              <div className="space-y-4">
                {/* 1. Supabase Checkout (Direct Order Page) */}
                <motion.button 
                  onClick={() => router.push('/checkout')} // Is page par hum Supabase form banayenge
                  whileHover={{ y: -5, backgroundColor: "#000" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-7 bg-[#111111] text-white rounded-[30px] flex items-center justify-center gap-4 group shadow-2xl transition-all duration-500"
                >
                   <CreditCard size={20} />
                   <span className="text-[11px] font-black uppercase tracking-[0.3em]">Direct Checkout</span>
                   <MoveRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>

                {/* 2. WhatsApp Option (Secondary) */}
                <motion.button 
                  onClick={generateWhatsAppOrder}
                  whileHover={{ y: -5, backgroundColor: "#25D366", color: "#fff" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 border border-black/5 text-[#111111] rounded-[30px] flex items-center justify-center gap-4 group transition-all duration-500"
                >
                   <MessageCircle size={20} />
                   <span className="text-[11px] font-black uppercase tracking-[0.3em]">WhatsApp Buy</span>
                </motion.button>
              </div>
              
              <div className="mt-10 p-6 bg-[#FBF9F4] rounded-3xl">
                 <p className="text-center text-[9px] text-gray-400 font-medium uppercase tracking-[0.2em] leading-relaxed">
                    Direct checkout lets you track your order in real-time.
                 </p>
              </div>
           </div>
        </div>

      </main>

       <section className="mt-30 border-y border-black/[0.03] flex flex-col items-center text-center py-20">
          <Medal className="text-orange-900/20 mb-10 w-20 h-20" />
          <h4 className="text-5xl md:text-8xl font-serif tracking-tighter mb-8 max-w-4xl leading-[0.85]">
            Ready to cook?<br />
             <span className="italic text-orange-900/30"> Let's get these to your doorstep</span>
          </h4>
       </section>
    </div>
  );
};

export default CartPage;