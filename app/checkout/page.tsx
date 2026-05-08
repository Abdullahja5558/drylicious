"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, Sparkles, ShieldCheck, Truck, 
  CreditCard, Loader2, MapPin, PackageCheck, 
  ChevronRight, Home, User, Gift, Plus, Minus, Trash2
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import { Toaster, toast } from 'sonner';

const CheckoutPage = () => {
  const router = useRouter();
  
  
  const { 
    cart, 
    removeFromCart
  } = useCart();

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [step, setStep] = useState(1);
  const [orderId, setOrderId] = useState('');
  const [localCart, setLocalCart] = useState(cart);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', city: '', zip: ''
  });

  const checkoutSubtotal = localCart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  
  const isEligibleForFreeDelivery = checkoutSubtotal >= 3000;
  
  const deliveryCharges = isEligibleForFreeDelivery ? 0 : 180;
  
  const totalAmount = checkoutSubtotal + deliveryCharges;

  // Final amount locked for success screen
  const [finalStoredTotal, setFinalStoredTotal] = useState(0);

  const isStep1Valid = formData.name.length >= 3 && formData.phone.length >= 11;
  const isStep2Valid = formData.address.length >= 10 && formData.city.length >= 3;

  // Function to update quantity in local checkout state
  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty < 1) return;
    
    setLocalCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  // Function to remove item directly from checkout view
  const handleRemoveItem = (id: string) => {
    setLocalCart((prevCart) => prevCart.filter((item) => item.id !== id));
    removeFromCart(id); // Context sync
    toast.success("Item removed from cart");
  };

  const handleSubmit = async () => {
    if (!isStep1Valid || !isStep2Valid) return;
    if (localCart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    setLoading(true);
    const tempId = `DRY-${Math.random().toString(36).substr(2, 7).toUpperCase()}`;
    const orderTotal = totalAmount;

    try {
      const { error } = await supabase.from('orders').insert([{
        customer_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}`,
        items: localCart, // Sending the updated quantities
        total: orderTotal,
        status: 'pending'
      }]);

      if (error) throw error;

      setOrderId(tempId);
      setFinalStoredTotal(orderTotal); 
      setIsSuccess(true);
      
      // Clear cart items after successful order
      localCart.forEach(item => removeFromCart(item.id));
      
    } catch (err: any) {
      toast.error(`Connection Error: ${err.message}`);
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] pb-20 overflow-x-hidden">
      <Toaster position="top-center" richColors />
      
      {/* --- ELITE NAVIGATION --- */}
      <nav className="max-w-[1600px] mx-auto p-6 md:p-10 flex justify-between items-center sticky top-0 bg-[#FBF9F4]/90 backdrop-blur-xl z-[100]">
        <motion.button onClick={() => router.back()} className="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center cursor-pointer transition-colors hover:bg-black hover:text-white"><ArrowLeft size={16} /></motion.button>
        <div className="flex items-center gap-3 md:gap-8">
           {[1, 2, 3].map((s) => (
             <div key={s} className="flex items-center gap-2">
               <span className={`text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border transition-all ${step >= s ? 'bg-[#111111] text-white border-black' : 'border-black/10 text-black/20'}`}>{s}</span>
               <span className={`text-[8px] font-black uppercase tracking-[0.3em] hidden sm:block ${step >= s ? 'opacity-100' : 'opacity-20'}`}>{s === 1 ? 'Personal' : s === 2 ? 'Shipping' : 'Finalize'}</span>
               {s < 3 && <div className="w-4 md:w-8 h-[1px] bg-black/5" />}
             </div>
           ))}
        </div>
        <div className="hidden md:flex items-center gap-2 text-orange-900/30"><Sparkles size={12} /><span className="text-[9px] font-black uppercase tracking-[0.4em]">Secure Checkout</span></div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
        {/* LEFT SIDE: FORM */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}>
                <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 text-[#111111]">Identity <span className="italic font-light text-orange-900/20">& Contact.</span></h2>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InputField label="Receiver Name" placeholder="Full Name" value={formData.name} onChange={(v: string) => setFormData({...formData, name: v})} />
                    <InputField label="Phone Number" placeholder="03XX XXXXXXX" value={formData.phone} onChange={(v: string) => setFormData({...formData, phone: v})} />
                  </div>
                  <InputField label="Email Address" placeholder="your@email.com" value={formData.email} onChange={(v: string) => setFormData({...formData, email: v})} />
                  <button disabled={!isStep1Valid} onClick={() => setStep(2)} className={`w-full py-7 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] mt-8 flex items-center justify-center gap-4 transition-all ${isStep1Valid ? 'bg-[#111111] text-white cursor-pointer' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}>Next Step <ChevronRight size={14} /></button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}>
                <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 text-[#111111]">Shipping <span className="italic font-light text-orange-900/20">Archive.</span></h2>
                <div className="space-y-5">
                  <InputField label="Full Address" placeholder="House #, Street..." value={formData.address} onChange={(v: string) => setFormData({...formData, address: v})} />
                  <div className="grid grid-cols-2 gap-5">
                    <InputField label="City"  value={formData.city} onChange={(v: string) => setFormData({...formData, city: v})} />
                  
                    <InputField label="Zip Code"  value={formData.zip} onChange={(v: string) => setFormData({...formData, zip: v})} />
                  </div>
                  <div className="flex gap-4 pt-8">
                    <button onClick={() => setStep(1)} className="flex-1 py-7 border border-black/5 rounded-2xl text-[9px] font-black uppercase tracking-widest text-gray-400 cursor-pointer hover:bg-white transition-colors">Back</button>
                    <button disabled={!isStep2Valid} onClick={() => setStep(3)} className={`flex-[2.5] py-7 rounded-2xl text-[9px] font-black uppercase tracking-widest shadow-2xl transition-all ${isStep2Valid ? 'bg-[#111111] text-white cursor-pointer' : 'bg-gray-100 text-gray-300'}`}>Review Order</button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
                <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 text-[#111111]">Final <span className="italic font-light text-orange-900/20">Seal.</span></h2>
                <div className="bg-white rounded-[40px] p-10 border border-black/[0.02] space-y-8 mb-12 shadow-sm">
                   <ReviewItem title="Receiver" value={formData.name} />
                   <ReviewItem title="Destination" value={formData.address} />
                   <ReviewItem title="Method" value="Cash on Delivery" />
                </div>
                <button disabled={loading} onClick={handleSubmit} className="w-full py-8 bg-[#111111] text-white rounded-[32px] shadow-2xl flex items-center justify-center gap-5 cursor-pointer disabled:opacity-50">
                  {loading ? <Loader2 className="animate-spin" /> : <ShieldCheck size={20} className="text-orange-300" />}
                  <span className="text-[11px] font-black uppercase tracking-[0.5em]">Confirm Purchase • Rs. {totalAmount}</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE: CART SIDEBAR (Real-time Editable) */}
        <div className="lg:col-span-5 order-1 lg:order-2">
           <div className="bg-white rounded-[40px] p-10 border border-black/[0.01] shadow-xl lg:sticky lg:top-32">
              <p className="text-[9px] font-black uppercase tracking-[0.5em] text-orange-900/40 mb-10 border-b border-black/5 pb-5">Cart Inventory ({localCart.length})</p>
              
              <div className="space-y-6 max-h-[300px] overflow-y-auto mb-10 pr-4 custom-scrollbar">
                {localCart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center group">
                    <div className="relative w-12 h-14 bg-stone-50 rounded-xl overflow-hidden border border-black/5 flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-[10px] font-bold uppercase leading-none mb-1">{item.name}</h4>
                      <p className="text-[8px] font-black text-black/20 uppercase tracking-widest mb-2">{item.weight}</p>
                      
                      {/* INVENTORY QUANTITY CONTROLS */}
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleUpdateQuantity(item.id, item.qty - 1)}
                          className="w-5 h-5 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="text-[10px] font-black w-4 text-center">{item.qty}</span>
                        <button 
                          onClick={() => handleUpdateQuantity(item.id, item.qty + 1)}
                          className="w-5 h-5 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                        >
                          <Plus size={10} />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className="text-[10px] font-bold tabular-nums">Rs. {item.price * item.qty}</span>
                      {/* DELETE OPTION */}
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="opacity-0 group-hover:opacity-100 text-stone-400 hover:text-red-500 transition-all cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}

                {localCart.length === 0 && (
                  <p className="text-center text-xs text-stone-400 py-4">Your checkout cart is empty.</p>
                )}
              </div>

              <div className="space-y-3 pt-6 border-t border-black/5">
                <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-black/30">
                  <span>Subtotal</span>
                  <span className="tabular-nums">Rs. {checkoutSubtotal}</span>
                </div>
                
                <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest">
                  <span className="text-black/30">Logistics</span>
                  <span className={`tabular-nums ${isEligibleForFreeDelivery ? 'text-emerald-600' : 'text-orange-900/60'}`}>
                    {isEligibleForFreeDelivery ? (
                      <span className="flex items-center gap-1"><Gift size={10} /> FREE</span>
                    ) : (
                      `Rs. ${deliveryCharges}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between items-end pt-4">
                  <span className="text-xl font-serif">Grand Total</span>
                  <span className="text-4xl font-serif tracking-tighter tabular-nums">Rs. {totalAmount}</span>
                </div>
              </div>
           </div>
        </div>
      </main>

      {/* --- SUCCESS OVERLAY --- */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-[#FBF9F4] z-[600] flex flex-col items-center justify-center p-6 text-center overflow-hidden touch-none">
             <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="w-20 h-20 bg-[#111111] text-white rounded-[32px] flex items-center justify-center mb-8 shadow-2xl shrink-0"><PackageCheck size={36} /></motion.div>
             <h2 className="text-6xl md:text-8xl font-serif tracking-tighter mb-4 text-[#111111]">Order <span className="italic opacity-10 text-orange-900">Captured.</span></h2>
             
             <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white border border-black/[0.03] rounded-[40px] p-8 md:p-10 w-full max-w-sm mb-10 shadow-sm shrink-0">
                <div className="space-y-4 text-left">
                   <div className="flex justify-between border-b border-black/[0.03] pb-3"><span className="text-[8px] font-black uppercase text-black/20">Customer</span><span className="text-[10px] font-bold uppercase truncate max-w-[150px]">{formData.name}</span></div>
                   <div className="flex justify-between border-b border-black/[0.03] pb-3"><span className="text-[8px] font-black uppercase text-black/20">Order ID</span><span className="text-[10px] font-bold uppercase tracking-widest tabular-nums">{orderId}</span></div>
                   <div className="flex justify-between border-b border-black/[0.03] pb-3"><span className="text-[8px] font-black uppercase text-black/20">Method</span><span className="text-[10px] font-bold uppercase italic">Cash on Delivery</span></div>
                   <div className="flex justify-between pt-3">
                      <span className="text-[8px] font-black uppercase text-black/20">Final Amount</span>
                      <span className="text-[18px] font-serif font-bold text-orange-900 tabular-nums">Rs. {finalStoredTotal}</span>
                   </div>
                </div>
             </motion.div>
             
             <button onClick={() => router.push('/')} className="w-full max-w-xs py-7 bg-[#111111] text-white rounded-2xl flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] cursor-pointer shadow-2xl transition-transform hover:scale-[1.02] shrink-0"><Home size={18} /> Return Home</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- SMALL HELPERS ---
const InputField = ({ label, placeholder, value, onChange }: any) => (
  <div className="space-y-2 group flex-1">
    <label className="text-[8px] font-black uppercase tracking-[0.4em] text-orange-900/40 px-1">{label} *</label>
    <input required placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-white border border-black/[0.05] rounded-2xl p-6 text-[13px] outline-none shadow-sm focus:ring-1 ring-black/10 transition-all placeholder:text-gray-200" />
  </div>
);

const ReviewItem = ({ title, value }: any) => (
  <div className="text-left border-l-2 border-orange-900/10 pl-4">
    <p className="text-[8px] font-black uppercase tracking-[0.4em] text-black/20 mb-1">{title}</p>
    <p className="text-[12px] font-bold text-[#111111] uppercase">{value}</p>
  </div>
);

export default CheckoutPage;