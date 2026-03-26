"use client";

import React, { createContext, useContext, useState, useMemo } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  image: string;
  weight: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, delta: number) => void;
  cartCount: number;
  showAlert: boolean;
  lastAdded: string;
  setShowAlert: (val: boolean) => void;
  // --- New Logic Variables ---
  subtotal: number;
  isFreeDelivery: boolean;
  deliveryCharges: number;
  totalAmount: number;
  freeDeliveryThreshold: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [lastAdded, setLastAdded] = useState("");

  const FREE_DELIVERY_LIMIT = 3000;
  const STANDARD_SHIPPING_FEE = 250; // Aap isey change kar sakte hain

  // Calculations Memoized for Performance
  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  }, [cart]);

  const isFreeDelivery = subtotal >= FREE_DELIVERY_LIMIT;
  
  const deliveryCharges = useMemo(() => {
    if (cart.length === 0) return 0; // Empty cart par charges 0
    return isFreeDelivery ? 0 : STANDARD_SHIPPING_FEE;
  }, [isFreeDelivery, cart.length]);

  const totalAmount = subtotal + deliveryCharges;

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + item.qty } : i);
      }
      return [...prev, item];
    });
    setLastAdded(item.name);
    setShowAlert(true);
    // Alert auto-hide logic
    const timer = setTimeout(() => setShowAlert(false), 4000);
    return () => clearTimeout(timer);
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(i => i.id !== id));
  
  const updateQty = (id: string, delta: number) => {
    setCart(prev => prev.map(i => 
      i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
    ));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQty, 
      cartCount, 
      showAlert, 
      lastAdded, 
      setShowAlert,
      subtotal,
      isFreeDelivery,
      deliveryCharges,
      totalAmount,
      freeDeliveryThreshold: FREE_DELIVERY_LIMIT
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};