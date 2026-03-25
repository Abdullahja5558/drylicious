"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ShoppingBag,
  MessageCircle,
  Menu,
  X,
  Flame,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

interface NavItem {
  name: string;
  href: string;
  isSale?: boolean;
  isWholesale?: boolean;
}

const navLinks: NavItem[] = [
  { name: "Best Sellers", href: "/categories/best-sellers" },
  { name: "Whole Spices", href: "/categories/whole-spices" },
  { name: "Pure Spices", href: "/categories/pure-spices" },
  { name: "Wholesale", href: "/wholesale", isWholesale: true },
  { name: "Sale", href: "/sale", isSale: true },
  { name: "Our Story", href: "/about" },
];

const PremiumNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const { scrollY } = useScroll();

  const widthRaw = useTransform(
    scrollY,
    [0, 150],
    ["100%", isMobileMenuOpen ? "100%" : "85%"],
  );
  const scaleRaw = useTransform(
    scrollY,
    [0, 150],
    [1, isMobileMenuOpen ? 1 : 0.98],
  );
  const yRaw = useTransform(scrollY, [0, 150], [0, isMobileMenuOpen ? 0 : 10]);

  const navWidth = useSpring(widthRaw, { stiffness: 300, damping: 30 });
  const navScale = useSpring(scaleRaw, { stiffness: 300, damping: 30 });
  const navY = useSpring(yRaw, { stiffness: 300, damping: 30 });

  const whatsappUrl = `https://wa.me/923367999509?text=${encodeURIComponent("As-salamu alaykum Drylicious! I want to order premium spices.")}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[300] p-3 md:p-6 flex justify-center pointer-events-none">
        <motion.nav
          role="navigation"
          aria-label="Main Navigation"
          style={{
            width: navWidth,
            scale: navScale,
            y: navY,
          }}
          className={`
            relative flex items-center justify-between gap-4 px-5 md:px-10 py-2.5 md:py-4 rounded-full pointer-events-auto transition-colors duration-700
            ${
              isScrolled || isMobileMenuOpen
                ? "bg-white/80 backdrop-blur-2xl border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                : "bg-transparent border-transparent"
            }
          `}
        >
          {/* LOGO */}
          <div className="flex-shrink-0 z-[310]">
            <Link
              href="/"
              aria-label="Drylicious Home"
              className="relative block group transition-transform duration-500 hover:scale-105"
            >
              <div className="relative w-[110px] h-[30px] md:w-[155px] md:h-[45px]">
                <Image
                  src="/logo.png"
                  alt="Drylicious Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1 bg-black/[0.03] p-1.5 rounded-full border border-black/[0.02]">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-5 py-2 group"
              >
                <span
                  className={`
                  relative z-10 text-[9.5px] font-black uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-2
                  ${hoveredIndex === i ? "text-black" : "text-black/50"}
                  ${link.isSale ? "text-red-600" : ""}
                  ${link.isWholesale ? "text-amber-800" : ""}
                `}
                >
                  {link.name}
                  {link.isSale && (
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Flame size={12} fill="currentColor" className="text-red-600" aria-hidden="true" />
                    </motion.span>
                  )}
                </span>

                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      layoutId="nav-pill-bg"
                      className="absolute inset-0 bg-white shadow-sm rounded-full z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 md:gap-4 z-[310]">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Place an order via WhatsApp"
              whileHover={{ y: -2 }}
              className="hidden md:flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all"
            >
              <MessageCircle size={14} className="text-emerald-400" aria-hidden="true" />
              Order
            </motion.a>

            {/* CART BUBBLE */}
            <Link href="/cart" aria-label={`View shopping cart with ${cartCount} items`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 md:p-3 rounded-full bg-black/5 hover:bg-black/10 transition-all group"
              >
                <ShoppingBag size={18} strokeWidth={1.5} className="text-black" aria-hidden="true" />

                <AnimatePresence mode="popLayout">
                  {cartCount > 0 && (
                    <motion.span
                      key={cartCount}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-orange-950 text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2.5 rounded-full bg-black text-white z-[320] transition-transform active:scale-90 relative"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[250] flex flex-col pt-32 pb-8 px-6 lg:hidden h-[100dvh]"
          >
            <div className="flex flex-col flex-1 justify-center gap-2">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-black/40 mb-2 px-2">Menu</p>
              {navLinks.map((link, i) => (
                <motion.div key={link.name} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3.5 px-2 border-b border-black/5 rounded-xl transition-colors"
                  >
                    <span className={`text-3xl md:text-4xl font-medium tracking-tight ${link.isSale ? "text-red-600" : "text-black"}`}>
                      {link.name}
                    </span>
                    <ArrowRight size={18} className="text-black/20" aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-6">
              <Link
                href="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Go to shopping basket"
                className="w-full flex items-center justify-between bg-black text-white px-6 py-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag size={20} aria-hidden="true" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Basket</span>
                </div>
                <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold">{cartCount} items</span>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-md"
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp Order
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PremiumNavbar;