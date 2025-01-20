"use client"

import Hero from "@/components/LandingPage/hero";
import RecomendedCars from "@/components/LandingPage/recommended";
import SelectionComponent from "@/components/LandingPage/postnavbar";
import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import ButtonComponent from "@/components/button"; // Adjust the import path as necessary
import Link from "next/link";
import PopularCars from "@/components/LandingPage/PopularCars";
import Navbar from "@/components/LandingPage/navbar";

export default function Home() {
  const options = [
    { label: "Locations", placeholder: "Select your city" },
    { label: "Date", placeholder: "Select your date" },
    { label: "Time", placeholder: "Select your time" },
  ];
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mb-10 bg-slate-100">
      <Navbar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <div className="flex flex-col sm:flex-row wrapper gap-3 sm:gap-12 items-center">
        <SelectionComponent title="Pick &mdash; Up" options={options} />
        <div className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200">
          <ArrowUpDown className="w-6 h-6" />
        </div>

        <SelectionComponent title="Drop &mdash; Off" options={options} />
      </div>
      <Hero />
      
      <PopularCars searchTerm={searchTerm} />
      <RecomendedCars/>
  
      <ButtonComponent className="flex px-6 py-2 bg-blue-500 text-white rounded-[3px] hover:bg-blue-600 transition-colors mt-10 mx-auto">
        <Link href="/product">Show More Cars</Link>
        </ButtonComponent>
       
    </div>
  );
}
