"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Search, Smartphone, MapPin, 
  Loader2, User, ShoppingBag, Hash, Scale, Lock, ShieldCheck, ArrowRight
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Toaster, toast } from 'sonner';

const AdminOrders = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const ADMIN_EMAIL = "admin@drylicious.com";
  const ADMIN_PASS = "dry@786";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
      setIsAuthorized(true);
      fetchOrders();
      toast.success("Identity Verified", { description: "Access granted to Drylicious Center" });
    } else {
      toast.error("Access Denied", { description: "Invalid admin credentials" });
    }
    setIsLoggingIn(false);
  };

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setOrders(data || []);
    else toast.error("Cloud synchronization failed");
    setLoading(false);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
    const { error } = await supabase.from('orders').update({ status: newStatus }).eq('id', id);

    if (!error) {
      toast.success(`Registry Updated: ${newStatus.toUpperCase()}`, {
        description: `Order ID: DRY-${id.slice(0, 8).toUpperCase()}`,
        style: { background: '#fff', border: '1px solid #111' }
      });
    } else {
      toast.error("Database Write Error");
      fetchOrders();
    }
  };

  const filteredOrders = orders.filter(order => {
    const searchStr = `${order.customer_name} ${order.phone} ${order.id}`.toLowerCase();
    return searchStr.includes(searchTerm.toLowerCase());
  });

  // --- LOGIN UI (ENHANCED VISIBILITY & RESPONSIVE) ---
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#FBF9F4] flex items-center justify-center p-4 md:p-6 font-sans">
        <Toaster position="top-center" richColors />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Main Card */}
          <div className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] border border-black/[0.04]">
            
            <div className="flex flex-col items-center mb-10 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#111111] rounded-[24px] md:rounded-[32px] flex items-center justify-center text-white mb-6 md:mb-8 shadow-2xl">
                <Lock size={28} className="md:size-[32px]" />
              </div>
              
              {/* Text Visibility Fixes */}
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-900/80 mb-3 block">
                Security Protocol
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-[#111111]">
                Admin Entry.
              </h2>
              <p className="mt-4 text-[13px] text-black/60 font-medium leading-relaxed">
                Enter your unique credentials to access the manifest.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-[#111111] ml-1">
                  Admin Email
                </label>
                <input 
                  type="email" 
                  placeholder="email" 
                  className="w-full bg-stone-50 border border-black/[0.12] rounded-2xl py-4 md:py-5 px-6 text-[14px] font-bold text-[#111111] outline-none focus:ring-4 ring-orange-900/5 focus:border-black transition-all placeholder:text-black/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-[#111111] ml-1">
                  Security Key
                </label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-stone-50 border border-black/[0.12] rounded-2xl py-4 md:py-5 px-6 text-[14px] font-bold text-[#111111] outline-none focus:ring-4 ring-orange-900/5 focus:border-black transition-all placeholder:text-black/20"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button 
                type="submit"
                disabled={isLoggingIn}
                className="w-full bg-[#111111] text-white rounded-2xl py-4 md:py-5 mt-4 text-[12px] font-black uppercase tracking-[0.2em] hover:bg-orange-900 active:scale-[0.98] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isLoggingIn ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <>Authorize Access <ArrowRight size={18} /></>
                )}
              </button>
            </form>
          </div>
          
          <p className="text-center mt-8 md:mt-10 text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
            Internal Use Only • Drylicious Logistics
          </p>
        </motion.div>
      </div>
    );
  }

  // --- MAIN ADMIN PANEL UI (STAYS SAME) ---
  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] p-4 md:p-12 font-sans selection:bg-orange-100">
      <Toaster position="top-center" richColors closeButton />

      <header className="max-w-6xl mx-auto mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#111111] rounded-2xl flex items-center justify-center text-white shadow-2xl">
              <LayoutDashboard size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-900/40">Drylicious Control</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none">
            Order <span className="italic font-light opacity-20">Manifest.</span>
          </h1>
        </div>

        <div className="relative w-full md:w-[400px]">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-black/10" size={18} />
          <input 
            type="text" 
            placeholder="Search Client or ID..." 
            className="bg-white border border-black/[0.05] rounded-[24px] md:rounded-[32px] py-5 md:py-6 pl-16 pr-8 text-[13px] font-bold outline-none focus:ring-4 ring-orange-900/5 w-full shadow-sm transition-all text-[#111111]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-6 md:space-y-8 pb-20">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 opacity-20">
            <Loader2 className="animate-spin mb-4" size={40} />
            <p className="text-[10px] font-black uppercase tracking-widest">Accessing Secure Cloud...</p>
          </div>
        ) : (
          <AnimatePresence mode='popLayout'>
            {filteredOrders.map((order) => (
              <motion.div 
                key={order.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-[32px] md:rounded-[40px] border border-black/[0.03] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] overflow-hidden group hover:border-black/10 transition-all duration-500"
              >
                <div className="p-6 md:p-10 border-b border-black/[0.02] flex flex-wrap justify-between items-center gap-4 bg-stone-50/30">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-black/[0.03]">
                      <Hash size={14} className="text-orange-900/40" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.3em]">Registry ID</p>
                      <p className="text-[14px] font-black tracking-widest text-[#111111]">DRY-{order.id.slice(0,8).toUpperCase()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                       <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.3em] mb-2">Process State</p>
                       <select 
                        value={order.status}
                        onChange={(e) => updateStatus(order.id, e.target.value)}
                        className={`text-[10px] font-black uppercase tracking-[0.3em] px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border-none outline-none cursor-pointer shadow-sm transition-colors
                          ${order.status === 'pending' ? 'bg-orange-50 text-orange-900' : 
                            order.status === 'shipped' ? 'bg-blue-50 text-blue-900' : 
                            'bg-emerald-50 text-emerald-900'}`}
                        >
                        <option value="pending">Pending</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/[0.03]">
                  <div className="p-8 md:p-12 space-y-8 text-[#111111]">
                    <div>
                      <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-black/20 mb-6">
                        <User size={12}/> Customer Profile
                      </h4>
                      <div className="space-y-4">
                        <p className="text-2xl md:text-3xl font-serif font-bold leading-none">{order.customer_name}</p>
                        <div className="flex items-center gap-3 text-black/60 font-semibold">
                          <Smartphone size={14} className="opacity-30"/> 
                          <span className="text-[14px] tracking-tight">{order.phone}</span>
                        </div>
                        <div className="flex items-start gap-3 text-black/60 font-semibold pt-2">
                          <MapPin size={14} className="opacity-30 mt-1"/> 
                          <span className="text-[13px] leading-relaxed max-w-[300px]">{order.address}, {order.city}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 bg-stone-50/20">
                    <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-black/20 mb-6">
                      <ShoppingBag size={12}/> Logistics Details
                    </h4>
                    <div className="space-y-3">
                      {order.items?.map((item: any, i: number) => (
                        <div key={i} className="flex justify-between items-center bg-white p-4 rounded-2xl border border-black/[0.02] shadow-sm">
                          <div className="flex flex-col">
                            <span className="text-[12px] font-bold text-[#111111]">{item.name}</span>
                            {(item.weight || item.size) && (
                              <span className="text-[9px] uppercase tracking-widest font-black text-orange-900/60 flex items-center gap-1 mt-1">
                                <Scale size={10} /> {item.weight || item.size}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-black px-3 py-1 bg-[#111111] text-white rounded-lg">x{item.qty}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-10 pt-8 border-t border-black/[0.03]">
                      <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.3em] mb-1">Total Valuation</p>
                      <p className="text-3xl font-serif font-bold text-orange-900">Rs. {order.total}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </main>
    </div>
  );
};

export default AdminOrders;