
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { iconsList } from "../../constants";
import PopularCars from "../LandingPage/PopularCars"; // Adjust the path as needed

interface NavbarProps {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, handleSearchChange }) => {
  return (
    <nav className="h-auto py-4 md:h-[124px] flex flex-col md:flex-row justify-between items-center wrapper">
      <div className="flex flex-col md:flex-row items-center justify-between md:items-start gap-4 md:gap-8 lg:gap-20 px-4 md:px-10 w-full">
        <h1 className="text-[#3563E9] tracking-wide text-6xl md:text-4xl font-bold">MORENT</h1>

        {/* Search Bar */}
        <div className="relative w-full max-w-[500px]">
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
        </div>

          {/* Navbar Icons */}
          <div className="hidden md:flex space-x-4">
            {iconsList.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
      </nav>

    
  );
};

export default Navbar;


// const Navbar = () => {
//   return (
//     <nav className="h-auto py-4 md:h-[124px] flex flex-col md:flex-row justify-between items-center wrapper">
//       <div className="flex flex-col md:flex-row items-center justify-between md:items-start gap-4 md:gap-8 lg:gap-20 px-4 md:px-10 w-full">
//         <h1 className="text-[#3563E9] tracking-wide text-6xl md:text-4xl font-bold">MORENT</h1>

//         <div className="relative w-full max-w-[500px]">
//           {<Search
//             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//             size={20}
//           /> }
//           { <input
//             type="text"
//             placeholder="Search something here"
//             className="pl-10 pr-12 py-2 w-full border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
//           /> }
         
          {/* <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
            aria-label="Filter"
          >
            <Image 
              src="/filter.jpg" 
              alt="Filter" 
              width={20} 
              height={20}
              className="w-5 h-5 object-contain"
            />
          </button> */}
//           </div>
//           <div className="hidden md:flex space-x-4">
//             {iconsList.map((icon, index) => (
//             <Image
//             key={index}
//             src={icon.src}
//             alt={icon.alt}
//             width={icon.width}
//             height={icon.height}
//             className="cursor-pointer"
//             />
//           ))}
//         </div>
//     </div>
//   </nav>
//   )
// }

// export default Navbar

