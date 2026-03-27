"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Search, Smartphone, MapPin, 
  Loader2, User, ShoppingBag, Hash, Scale, Lock, ArrowRight, LogOut, CheckCircle2, AlertCircle
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Toaster, toast } from 'sonner';

const AdminOrders = () => {
  // Security & Auth States
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [attempts, setAttempts] = useState(0);
  
  // Data States
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Custom Premium Toast Component
  const showPremiumToast = (title: string, desc: string, type: 'success' | 'error') => {
    toast.custom((t) => (
      <div className="bg-[#111111] text-white p-4 rounded-[24px] shadow-2xl border border-white/10 flex items-center gap-4 min-w-[320px] backdrop-blur-xl bg-opacity-95">
        <div className={`p-2 rounded-full ${type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
          {type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-black uppercase tracking-[0.2em]">{title}</span>
          <span className="text-[13px] opacity-60 font-medium">{desc}</span>
        </div>
      </div>
    ), { duration: 3000 });
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('dry_admin_auth');
    if (authStatus === 'true') {
      setIsAuthorized(true);
      fetchOrders();
    }
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      showPremiumToast("Cloud Error", "Sync failed with database", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (attempts >= 5) {
      showPremiumToast("Security Lockout", "Too many failed attempts", "error");
      return;
    }

    setIsLoggingIn(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Mimic high-security check

    const envEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
    const envPass = process.env.NEXT_PUBLIC_ADMIN_PASS;

    if (email.trim() === envEmail && password.trim() === envPass) {
      setIsAuthorized(true);
      localStorage.setItem('dry_admin_auth', 'true');
      fetchOrders();
      showPremiumToast("Identity Verified", "Welcome back, Admin", "success");
    } else {
      setAttempts(prev => prev + 1);
      showPremiumToast("Access Denied", "Invalid security credentials", "error");
    }
    setIsLoggingIn(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('dry_admin_auth');
    setIsAuthorized(false);
    showPremiumToast("Logged Out", "Session terminated safely", "success");
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const previousOrders = [...orders];
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
    
    const { error } = await supabase.from('orders').update({ status: newStatus }).eq('id', id);

    if (error) {
      setOrders(previousOrders);
      showPremiumToast("Write Error", "Database update failed", "error");
    } else {
      showPremiumToast("Registry Updated", `Order is now ${newStatus.toUpperCase()}`, "success");
    }
  };

  const filteredOrders = orders.filter(order => {
    const searchStr = `${order.customer_name} ${order.phone} ${order.id}`.toLowerCase();
    return searchStr.includes(searchTerm.toLowerCase());
  });

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#FBF9F4] flex items-center justify-center p-4 font-sans">
        <Toaster position="top-center" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="bg-white rounded-[48px] p-10 md:p-14 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] border border-black/[0.04] text-center">
            <div className="w-20 h-20 bg-[#111111] rounded-[32px] flex items-center justify-center text-white mx-auto mb-8 shadow-2xl">
              <Lock size={32} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-900/80 mb-3 block">Encrypted Entry</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-[#111111] mb-10">Admin Portal.</h2>

            <form onSubmit={handleLogin} className="space-y-6 text-left">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-black/30 ml-1">Admin Identity</label>
                <input 
                  type="email" 
                  className="w-full bg-stone-50 border border-black/[0.08] rounded-2xl py-5 px-7 text-[14px] font-bold text-[#111111] outline-none focus:ring-4 ring-orange-900/5 focus:border-black transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-black/30 ml-1">Security Key</label>
                <input 
                  type="password" 
                  className="w-full bg-stone-50 border border-black/[0.08] rounded-2xl py-5 px-7 text-[14px] font-bold text-[#111111] outline-none focus:ring-4 ring-orange-900/5 focus:border-black transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={isLoggingIn}
                className="w-full bg-[#111111] text-white rounded-2xl py-5 mt-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-orange-900 active:scale-[0.98] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isLoggingIn ? <Loader2 size={18} className="animate-spin" /> : <>Authorize Access <ArrowRight size={18} /></>}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#111111] p-6 md:p-12 font-sans selection:bg-orange-100">
      <Toaster position="top-center" />

      <header className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#111111] rounded-2xl flex items-center justify-center text-white shadow-2xl">
              <LayoutDashboard size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-900/40">Logistics Hub</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none">
            Order <span className="italic font-light opacity-20 text-black">Registry.</span>
          </h1>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-[400px]">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-black/10" size={18} />
            <input 
              type="text" 
              placeholder="Search ID or Client..." 
              className="bg-white border border-black/[0.05] rounded-full py-6 pl-16 pr-8 text-[13px] font-bold outline-none focus:ring-4 ring-orange-900/5 w-full shadow-sm transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button onClick={handleLogout} className="p-6 bg-white border border-black/5 rounded-full hover:bg-red-50 hover:text-red-600 transition-all group shadow-sm">
            <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-8 pb-32">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 opacity-20">
            <Loader2 className="animate-spin mb-4" size={40} />
            <p className="text-[10px] font-black uppercase tracking-widest">Accessing manifest...</p>
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
                className="bg-white rounded-[40px] border border-black/[0.03] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)] overflow-hidden hover:border-black/10 transition-all duration-500"
              >
                {/* ID & Status Bar */}
                <div className="p-8 md:px-12 md:py-8 border-b border-black/[0.02] flex flex-wrap justify-between items-center gap-6 bg-stone-50/40">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-2xl shadow-sm border border-black/[0.03]">
                      <Hash size={14} className="text-orange-900/60" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-black/30 uppercase tracking-[0.3em]">System ID</p>
                      <p className="text-[14px] font-black tracking-widest text-[#111111]">DRY-{order.id.toString().slice(0,8).toUpperCase()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                     <select 
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className={`text-[10px] font-black uppercase tracking-[0.3em] px-8 py-4 rounded-2xl border-none outline-none cursor-pointer shadow-sm transition-all
                        ${order.status === 'pending' ? 'bg-orange-100 text-orange-900' : 
                          order.status === 'shipped' ? 'bg-blue-100 text-blue-900' : 
                          'bg-emerald-100 text-emerald-900'}`}
                      >
                      <option value="pending">Pending</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/[0.03]">
                  <div className="p-10 md:p-14 space-y-10">
                    <div>
                      <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-black/20 mb-8">
                        <User size={14}/> Client Profile
                      </h4>
                      <div className="space-y-5">
                        <p className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-[#111111]">{order.customer_name}</p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-black/60 font-bold text-[14px]">
                            <Smartphone size={16} className="opacity-20"/> 
                            <span>{order.phone}</span>
                          </div>
                          <div className="flex items-start gap-3 text-black/60 font-bold text-[14px] leading-relaxed">
                            <MapPin size={16} className="opacity-20 mt-1"/> 
                            <span className="max-w-[320px]">{order.address}, {order.city}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-10 md:p-14 bg-stone-50/20">
                    <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-black/20 mb-8">
                      <ShoppingBag size={14}/> Cargo Details
                    </h4>
                    <div className="space-y-4">
                      {order.items?.map((item: any, i: number) => (
                        <div key={i} className="flex justify-between items-center bg-white p-5 rounded-[24px] border border-black/[0.02] shadow-sm">
                          <div className="flex flex-col gap-1">
                            <span className="text-[13px] font-black text-[#111111]">{item.name}</span>
                            <span className="text-[9px] uppercase tracking-widest font-black text-orange-900/60 flex items-center gap-1">
                              <Scale size={10} /> {item.weight || item.size || 'Standard'}
                            </span>
                          </div>
                          <span className="text-[11px] font-black px-4 py-2 bg-[#111111] text-white rounded-xl">x{item.qty}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-12 pt-10 border-t border-black/[0.05]">
                      <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.4em] mb-2">Grand Total</p>
                      <p className="text-4xl font-serif font-bold text-orange-950">Rs. {order.total}</p>
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