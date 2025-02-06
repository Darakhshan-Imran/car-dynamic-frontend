// "use client"

// import Hero from "@/components/LandingPage/hero";
// import RecomendedCars from "@/components/LandingPage/recommended";
// import LocationSelector from "@/components/LandingPage/postnavbar";
// // import React, { useState } from "react";
// import { ArrowUpDown } from "lucide-react";
// import Link from "next/link";
// import PopularCars from "@/components/LandingPage/PopularCars";
// import Titlebar from "@/components/LandingPage/titlebar"; // Adjust the import path as necessary
// // import { SearchProvider } from "@/context/SearchContext";

// type Field = {
//   label: string;
//   placeholder: string;
//   type: "location" | "date" | "time";
// };

// export default function Home() {
//   const pickupFields: Field[] = [
//     { label: "Location", placeholder: "Select your city", type: "location" },
//     { label: "Pick-up Date", placeholder: "Select date", type: "date" },
//     { label: "Pick-up Time", placeholder: "Select time", type: "time" },
//   ];

//   const dropoffFields: Field[] = [
//     { label: "Location", placeholder: "Select your city", type: "location" },
//     { label: "Drop-off Date", placeholder: "Select date", type: "date" },
//     { label: "Drop-off Time", placeholder: "Select time", type: "time" },
//   ];
  
//   // const [searchTerm, setSearchTerm] = useState<string>("");


//   return (
//     <div className=" bg-slate-100 flex justify-center items-center flex-col mt-32 pb-10">
  
      
//       <div className="flex flex-col sm:flex-row wrapper gap-4 sm:gap-6 lg:gap-12 items-center p-4">
//         <LocationSelector title="Pick &mdash; Up" fields={pickupFields} />
//         <div className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200">
//           <ArrowUpDown className="w-6 h-6" />
//         </div>
//         <LocationSelector title="Drop &mdash; Off" fields={dropoffFields} />
//       </div>

//       {/* Hero Section */}
//       <div className="mt-7">
//       <Hero />
//       </div>

    
//       {/* Popular Cars */}
//       <div className="px-4 mt-14">
//         <Titlebar title="Popular Cars" buttontext="View All" />
//         <PopularCars/>
//       </div>

//       {/* Recommended Cars */}
//       <div className="px-4">
//         <Titlebar title="Recommendation Car" />
//         <RecomendedCars />
//       </div>
      
  
//       <button className="flex px-8 py-4 bg-blue-500 text-white text-xl font-semibold rounded-[3px] hover:bg-blue-600 transition-colors mt-10 mx-auto">
//         <Link href="/product">Show More Cars</Link>
//         </button>
       
//     </div>
//   );
// }
"use client"

import Hero from "@/components/LandingPage/hero";
import RecomendedCars from "@/components/LandingPage/recommended";
import LocationSelector from "@/components/LandingPage/postnavbar";
// import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import PopularCars from "@/components/LandingPage/PopularCars";
import Titlebar from "@/components/LandingPage/titlebar"; // Adjust the import path as necessary
// import { SearchProvider } from "@/context/SearchContext";

type Field = {
  label: string;
  placeholder: string;
  type: "location" | "date" | "time";
};

export default function Home() {
  const pickupFields: Field[] = [
    { label: "Location", placeholder: "Select your city", type: "location" },
    { label: "Pick-up Date", placeholder: "Select date", type: "date" },
    { label: "Pick-up Time", placeholder: "Select time", type: "time" },
  ];

  const dropoffFields: Field[] = [
    { label: "Location", placeholder: "Select your city", type: "location" },
    { label: "Drop-off Date", placeholder: "Select date", type: "date" },
    { label: "Drop-off Time", placeholder: "Select time", type: "time" },
  ];
  
  return (
    <div id="home-page" className="bg-slate-100 flex justify-center items-center flex-col mt-32 pb-10">
      <div id="location-selector" className="flex flex-col sm:flex-row wrapper gap-4 sm:gap-6 lg:gap-12 items-center p-4">
        <LocationSelector  title="Pick &mdash; Up" fields={pickupFields} />
        <div id="swap-button" className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200">
          <ArrowUpDown className="w-6 h-6" />
        </div>
        <LocationSelector  title="Drop &mdash; Off" fields={dropoffFields} />
      </div>

      {/* Hero Section */}
      <div id="hero-section" className="mt-7">
        <Hero />
      </div>
    
      {/* Popular Cars */}
      <div id="popular-cars" className="px-4 mt-14">
        <Titlebar title="Popular Cars" buttontext="View All" />
        <PopularCars />
      </div>

      {/* Recommended Cars */}
      <div id="recommended-cars" className="px-4">
        <Titlebar title="Recommendation Car" />
        <RecomendedCars />
      </div>
      
      <button id="show-more-button" className="flex px-8 py-4 bg-blue-500 text-white text-xl font-semibold rounded-[3px] hover:bg-blue-600 transition-colors mt-10 mx-auto">
        <Link href="/product">Show More Cars</Link>
      </button>
    </div>
  );
}
