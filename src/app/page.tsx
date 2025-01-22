"use client"

import Hero from "@/components/LandingPage/hero";
import RecomendedCars from "@/components/LandingPage/recommended";
import LocationSelector from "@/components/LandingPage/postnavbar";
import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import PopularCars from "@/components/LandingPage/PopularCars";
import Titlebar from "@/components/LandingPage/titlebar"; // Adjust the import path as necessary

export default function Home() {
  const pickupFields = [
    { label: "Locations", placeholder: "Select your city" },
    { label: "Date", placeholder: "Select your date" },
    { label: "Time", placeholder: "Select your time" },
  ]

  const dropoffFields = [
    { label: "Locations", placeholder: "Select your city" },
    { label: "Date", placeholder: "Select your date" },
    { label: "Time", placeholder: "Select your time" },
  ]
  const [searchTerm] = useState<string>("");


  return (
    <div className=" bg-slate-100 flex justify-center items-center flex-col mt-32">
  
      {/* Wrapper for selection components */}
      <div className="flex flex-col sm:flex-row wrapper gap-4 sm:gap-6 lg:gap-12 items-center p-4">
        <LocationSelector title="Pick &mdash; Up" fields={pickupFields} />
        <div className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200">
          <ArrowUpDown className="w-6 h-6" />
        </div>
        <LocationSelector title="Drop &mdash; Off" fields={dropoffFields} />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Popular Cars */}
      <div className="px-4">
        <Titlebar title="Popular Cars" buttontext="View All" />
       <PopularCars searchTerm={searchTerm} />
      </div>

      {/* Recommended Cars */}
      <div className="px-4">
        <RecomendedCars />
      </div>
   
  
      <button className="flex px-6 py-2 bg-blue-500 text-white rounded-[3px] hover:bg-blue-600 transition-colors mt-10 mx-auto">
        <Link href="/product">Show More Cars</Link>
        </button>
       
    </div>
  );
}
