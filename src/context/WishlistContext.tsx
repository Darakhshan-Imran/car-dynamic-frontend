"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ProductCard {
  id: number;
  name: string;
  type: string;
  originalPrice: string;
  priceAfterDiscount: string;
  fuelCapacity: string;
  transmission: string;
  passengers: string;
  image: string;
}

interface WishlistContextType {
  wishlist: ProductCard[];
  addToWishlist: (car: ProductCard) => void;
  removeFromWishlist: (id: number) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<ProductCard[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Save wishlist to localStorage on change
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (car: ProductCard) => {
    setWishlist((prev) => {
      if (!prev.some((item) => item.id === car.id)) {
        return [...prev, car];
      }
      return prev; // Avoid duplicates
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((car) => car.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
