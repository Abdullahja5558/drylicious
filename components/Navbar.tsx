"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { MessageCircle, Menu, X, ShoppingBag, Flame } from 'lucide-react'; 
import { useCart } from '@/context/CartContext';

interface NavItem {
  name: string;
  href: string;
  isSale?: boolean;
}

const navLinks: NavItem[] = [
  { name: 'Best Sellers', href: '/categories/best-sellers' },
  { name: 'Whole spices', href: '/categories/whole-spices' },
  { name: 'Pure Spices', href: '/categories/pure-spices' },
  { name: 'Wholesale', href: '/wholesale' }, 
  { name: 'Sale', href: '/sale', isSale: true },
  { name: 'Our Story', href: '/about' },
];

const PremiumNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart(); 
  const controls = useAnimation();

  const phoneNumber = "923367999509";
  const premiumMessage = "As-salamu alaykum Drylicious! I've just seen your website and would love to experience your premium spices.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(premiumMessage)}`;

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[150] px-4 md:px-6 py-2 md:py-4 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-7xl flex items-center justify-between lg:grid lg:grid-cols-3 px-4 md:px-8 py-3 rounded-full transition-all duration-500 pointer-events-auto relative z-[160] ${
          isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border border-black/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] text-black' 
          : 'bg-transparent border-transparent text-black'
        }`}
      >
        {/* LEFT SECTION */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            href={whatsappUrl}
            target="_blank"
            className={`flex items-center px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-500 shadow-sm cursor-pointer ${
              isScrolled ? 'bg-[#111111] text-white' : 'bg-black text-white'
            }`}
          >
            <MessageCircle size={12} className="mr-2 text-emerald-500" />
            <span>Order</span>
          </motion.a>
          
          <div className="flex items-center gap-6">
            {leftLinks.map((link) => (
              <NavLinkItem key={link.name} link={link} />
            ))}
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="flex justify-start lg:justify-center items-center">
          <Link href="/" className="shrink-0 cursor-pointer pointer-events-auto">
            <div className="relative w-[130px] h-[35px] md:w-[160px] md:h-[53px]">
              <Image src="/logo.png" alt="Drylicious Logo" fill className="object-contain" priority />
            </div>
          </Link>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-end gap-3 md:gap-5">
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 mr-4">
            {rightLinks.map((link) => (
              <NavLinkItem key={link.name} link={link} />
            ))}
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <Link href="/cart">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className={`relative p-2.5 md:p-3 rounded-full transition-all duration-500 cursor-pointer group ${
                    isScrolled ? 'bg-black/[0.03] border border-black/[0.05]' : 'bg-transparent border-transparent'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} className="text-[#1a1a1a]" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-0.5 -right-0.5 w-4 h-4 md:w-5 md:h-5 bg-orange-900 text-white text-[8px] md:text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>

            <button 
              className="lg:hidden text-black p-2 z-[200] relative pointer-events-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-white/98 backdrop-blur-2xl z-[140] flex flex-col items-center justify-center lg:hidden pointer-events-auto touch-none"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3" // Container for Link + Tag
                >
                  <Link 
                    href={link.href} 
                    className={`text-4xl font-serif tracking-tighter ${link.isSale ? 'text-red-600' : 'text-[#1a1a1a]'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>

                  {/* HOT Tag for Mobile Overlay */}
                  {link.isSale && (
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="bg-red-600 text-white text-[10px] px-3 py-1 rounded-full font-black flex items-center gap-1 shadow-lg"
                    >
                      <Flame size={10} fill="currentColor" />
                      HOT
                    </motion.span>
                  )}
                </motion.div>
              ))}
              
              <div className="mt-10 flex flex-col gap-4 px-6 w-full max-w-[300px]">
                 <Link 
                    href="/cart" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-4 py-5 bg-[#111111] text-white rounded-full uppercase text-[10px] font-black tracking-[0.3em]"
                 >
                    Basket ({cartCount}) <ShoppingBag size={16} />
                 </Link>
                 <a href={whatsappUrl} target="_blank" className="text-emerald-600 font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                    <MessageCircle size={14} /> WhatsApp Order
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLinkItem = ({ link }: { link: NavItem }) => (
  <Link 
    href={link.href}
    className={`relative text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 group cursor-pointer flex items-center gap-1.5 shrink-0
      ${link.isSale ? 'text-red-600 hover:text-red-500' : 'text-black/60 hover:text-black'}`}
  >
    {link.name}
    {link.isSale && (
      <motion.span 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="bg-red-600 text-white text-[7px] px-1.5 py-0.5 rounded-full flex items-center gap-0.5"
      >
        <Flame size={8} fill="currentColor" />
        HOT
      </motion.span>
    )}
    <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all duration-500 group-hover:w-full ${link.isSale ? 'bg-red-600' : 'bg-orange-900/30'}`} />
  </Link>
);

export default PremiumNavbar;