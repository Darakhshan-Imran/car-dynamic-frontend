
"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import RatingStar from "../ratingstar";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface CarCard {
  id: string;
  name: string;
  type: string;
  description: string;
  originalPrice: number;
  priceAfterDiscount?: number;
  fuelCapacity: string;
  transmission: string;
  passengers: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  is_Favorite: boolean;
}

const DetailClient = ({ carData }: { carData: CarCard }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const { id, name, originalPrice, priceAfterDiscount, image } = carData;
    addToCart({
      id,
      name,
      originalPrice,
      // priceAfterDiscount: carData.priceAfterDiscount || "",
      priceAfterDiscount,
      image,
    });
  };

  const ViewData = [
    { id: 1, src: carData?.image1, alt: "Exterior View" },
    { id: 2, src: carData?.image2, alt: "Interior View" },
    { id: 3, src: carData?.image3, alt: "Sitting Arrangement" },
  ];

  return (
    <div className="bg-slate-100 py-8">
      <div className="flex flex-col gap-8 px-4 container mx-auto md:flex-row md:gap-12 lg:gap-16">
        {/* Left Section */}
        <div className="w-4/5 flex flex-col gap-4">
        
          <div className="relative h-[80%] bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl p-6">
            <div className="flex flex-col gap-10 lg:w-96">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl mb-2">
              {carData?.name}
            </h2>
            <p className="text-sm md:text-xl lg:text-2xl">{carData?.description}</p>
            </div>
            <div className="absolute bottom-6 right-14 w-36 md:w-52 lg:w-96">
              <Image
                src={carData?.image}
                alt="Main Car Image"
                width={400}
                height={200}
              
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Image Thumbnails */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 h-[35%] justify-center overflow-y-hidden">
            {ViewData.map((view) => (
              <Image
                key={view.id}
                src={view.src}
                alt={view.alt}
                width={150}
                height={90}
                className="rounded-lg border border-gray-300 hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-white rounded-lg shadow-lg p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg md:text-xl font-bold">{carData?.name}</h3>
            <Heart className="text-red-500 cursor-pointer hover:fill-red-600" />
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <RatingStar starcount={5} />
            <span>440+ Reviews</span>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600">
            {carData?.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Car Type</p>
              <p className="font-medium text-gray-700">{carData?.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Steering</p>
              <p className="font-medium text-gray-700">
                {carData?.transmission}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Capacity</p>
              <p className="font-medium text-gray-700">
                {carData?.passengers} Person
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Gasoline</p>
              <p className="font-medium text-gray-700">
                {carData?.fuelCapacity}
              </p>
            </div>
          </div>

          {/* Pricing and Button */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col gap-2">
            <p className="text-lg font-bold">
                      ${carData?.originalPrice}/day
                    </p>
                    <p className="text-lg font-bold">
                      {carData?.priceAfterDiscount ? (
                        <>
                          <del className="text-sm font-semibold text-[#90A3BF]">
                            ${carData?.originalPrice}
                          </del>{" "}
                        </>
                      ) : (
                        <>{carData?.priceAfterDiscount}</>
                      )}
                    </p>
              

            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={handleAddToCart}
              id="book-car"
            >
              <Link href="/booking_form">Rent Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailClient;
