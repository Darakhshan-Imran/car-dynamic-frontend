"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import SideFilterBar from '../../components/sideBarFilter' // Import the SideFilterBar component
import { useSearch } from "@/context/SearchContext"; // Adjust path
import { StaticImageData } from "next/image";
import { FaRegHeart, FaHome, FaFilter } from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import Wishlist from "../wishlist";
import { useWishlist } from "@/context/WishlistContext"; // Add this import

interface Icon {
  type: "icon" | "image"; // Distinguish between icon and image
  src: React.ReactElement | StaticImageData;
  alt: string; // Optional alt text for images
 
  width?: number; // Width for images (optional for icons)
  height?: number; // Height for images (optional for icons)
}

const Navbar = () => {
 
  const [isWishlistOpen, setWishlistOpen] = useState(false);
  const { wishlist } = useWishlist();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false); // State to control the filter bar visibility
  const { searchTerm, setSearchTerm } = useSearch();
  const handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
    setSearchTerm(event.target.value);
  };

  const iconsList: Icon[] = [
    { 
      type: "icon", 
      src: (
        <Link href="/">
          <FaHome className="text-gray-600 hover:text-gray-800" />
        </Link>
      ), 
      alt: "Home"
    },
    {
      type: "icon",
      src: (
        <div className="relative">
          <FaRegHeart
            onClick={() => setWishlistOpen(true)}
            className={wishlist.length > 0 ? "text-red-500" : "text-gray-600"}
          />
          {wishlist.length > 0 && (
            <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {wishlist.length}
            </span>
          )}
        </div>
      ),
      alt: "Favorites",
    },
    { 
      type: "icon", 
      src: (
        <Link href="/dashboard">
          <RiDashboard2Line className="text-gray-600 hover:text-gray-800" />
        </Link>
      ), 
      alt: "Dashboard"
    },
  ]

  console.log("search Term",searchTerm)
  return (

    <>
      <nav className="fixed flex items-center pl-[3rem] md:pl-0 top-0 h-[7.75rem] left-0 right-0 bg-white z-40 shadow-sm">
        <div className="wrapper py-4 px-6 sm:px-6 lg:px-10">
         {/* Desktop Layout */}
<div className="flex items-center justify-between gap-5 lg:gap-64 w-full">
  {/* Logo Section */}
  <div className="flex items-center">
    <h1 className="text-[#3563E9] tracking-wide text-3xl sm:text-4xl font-bold whitespace-nowrap">
      MORENT
    </h1>
  </div>

  {/* Search Bar Section */}
  <div className="relative hidden md:flex w-full max-w-[500px] mx-auto">
    <Search
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      size={20}
    />
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Search something here"
      className="pl-10 pr-12 py-2 w-full border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
    />
    <button
      className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none hover:opacity-80 transition-opacity"
      aria-label="Filter"
      onClick={() => setIsFilterBarOpen(!isFilterBarOpen)}
    >
      <FaFilter className="w-5 h-5 object-contain text-gray-500" aria-label="Filter" />
    </button>
  </div>

  {/* Icons Section */}
  <div className="hidden lg:flex items-center space-x-6 lg:gap-5">
    {iconsList.map((item, index) => (
      <div
      key={index}
      className="cursor-pointer hover:opacity-80 transition-opacity"
      onClick={() => {
        if (item.alt === "Favorites") setWishlistOpen(true);
      }}
    >
      {item.type === "icon" ? (
        <span className="text-2xl">{item.src as React.ReactElement}</span>
      ) : (
        <Image src={item.src as StaticImageData} alt={item.alt} width={item.width} height={item.height} />
      )}
    </div>
    
     
    ))}
  </div>

  {/* Mobile Menu Button */}
  <button
    className="lg:hidden absolute right-4 top-4 p-2 rounded-md hover:bg-gray-100"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  >
    {isMobileMenuOpen ? (
      <X className="h-6 w-6 text-gray-600" />
    ) : (
      <Menu className="h-6 w-6 text-gray-600" />
    )}
  </button>
</div>


          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t pt-4">
              <div className="grid grid-cols-4 gap-6 justify-items-center">
              {iconsList.map((item, index) => (
                <div
                key={index}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => {
                  if (item.alt === "Favorites") setWishlistOpen(true);
                }}
              >
                {item.type === "icon" ? (
                  <span className="text-2xl">{item.src as React.ReactElement}</span>
                ) : (
                  <Image src={item.src as StaticImageData} alt={item.alt} width={item.width} height={item.height} />
                )}
              </div>
              
     
      ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Side Filter Bar */}
      {isFilterBarOpen && (
        <div className="fixed top-0 left-0 mt-[7.5rem] w-64 bg-white z-50 shadow-lg overflow-y-auto">
          <SideFilterBar />
        </div>
      )}
        {/* Wishlist Modal */}
        {isWishlistOpen && (
  <Wishlist
    onClose={() => setWishlistOpen(false)}
    className="z-50 fixed inset-0 bg-opacity-50 bg-gray-300"
  />
)}
    </>
  );
};

export default Navbar;
    