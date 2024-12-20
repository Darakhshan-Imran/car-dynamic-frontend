import React from 'react'
import Image from "next/image";
import {Heart} from "lucide-react";
import carImage1 from "../../../public/cards/carImage1.png"
import carImage2 from "../../../public/cards/carImage2.png"
import carImage3 from "../../../public/cards/carImage3.png"
import carImage4 from "../../../public/cards/carImage4.png"
import Titlebar from './titlebar';
import Link from "next/link";


const carData = [
    {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    image: carImage1,
    fuelCapacity: "90L",
    transmission: "Manual",
    passengers: "2 People",
    price: "$99.00/day",
    originalPrice: "$100.00/day",
    },
    {
    id: 2,
    name: "Nissan GT-R",
    type: "Sport",
    image: carImage2,
    fuelCapacity: "90L",
    transmission: "Manual",
    passengers: "2 People",
    price: "$80.00/day",
    originalPrice: "$90.00/day",
    },
    {
    id: 3,
    name: "Rolls-Royce",
    type: "Sedan",
    image: carImage3,
    fuelCapacity: "70L",
    transmission: "Manual",
    passengers: "4 People",
    price: "$96.00/day",
    originalPrice: "$100.00/day",
    },
    {
    id: 4,
    name: "All New Rush",
    type: "SUV",
    image: carImage4,
    fuelCapacity: "60L",
    transmission: "Manual",
    passengers: "4 People",
    price: "$72.00/day",
    originalPrice: "$80.00/day",
    },
    {
    id: 5,
    name: "CR-V",
    type: "SUV",
    image: carImage1,
    fuelCapacity: "60L",
    transmission: "Manual",
    passengers: "4 People",
    price: "$80.00/day",
    originalPrice: "$90.00/day",
    },
    {
    id: 6,
    name: "All New Terios",
    type: "SUV",
    image: carImage2,
    fuelCapacity: "60L",
    transmission: "Manual",
    passengers: "4 People",
    price: "$74.00/day",
    originalPrice: "$80.00/day",
    },
    {
    id: 7,
    name: "MG ZX Exclusive",
    type: "Hatchback",
    image: carImage3,
    fuelCapacity: "60L",
    transmission: "Manual",
    passengers: "4 People",
    price: "$76.00/day",
    originalPrice: "$90.00/day",
    },
    {
    id: 8,
    name: "New MG ZS",
    type: "SUV",
    image: carImage4,
    fuelCapacity: "60L",
    transmission: "Manual",
    passengers: "4 People",
    price: "$80.00/day",
    originalPrice: "$90.00/day",
    },
   ];
  


   const RecomendedCars = () => {
    return (
      <div className="wrapper mt-20">
        <Titlebar title="Recomendation Car" />
  
        {/* Updated grid with horizontal spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-1 md:gap-2 lg:gap-3 gap-4 mt-7 wrapper">
          {carData.map((car) => (
            <div
              key={car.id}
              className="rounded-xl shadow-md p-4 hover:shadow-lg transition- w-[304px] h-[388px] bg-white"
            >
              <div className='flex justify-between'>
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <Heart/>
              </div>
              <p className="text-sm text-gray-500">{car.type}</p>
              <Image
                src={car.image}
                alt={car.name}
                width={232}
                height={70}
                className="w-full object-cover rounded-md mb-4 mt-10"
              />
  
              <div className="mt-8 flex gap-2">
                <p className="text-sm">
                  <span className="font-semibold">Fuel:</span> {car.fuelCapacity}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Transmission:</span>{" "}
                  {car.transmission}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Passengers:</span>{" "}
                  {car.passengers}
                </p>
              </div>
              <div className="flex justify-between items-center mt-12">
                <p className="text-lg font-bold">{car.price}</p>
                <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
                 <Link href="/product">Rent Now</Link> 
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='flex gap-5 justify-center items-center'>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-[3px] hover:bg-blue-600 transition-colors mt-16 mb-9">
            <Link href="/car_detail">Show Details</Link> 
        </button>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-[3px] hover:bg-blue-600 transition-colors mt-16 mb-9">
            <Link href="/rental_form">Booking Details</Link> 
        </button>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-[3px] hover:bg-blue-600 transition-colors mt-16 mb-9">
            <Link href="/car_rental">Check Out</Link> 
        </button>
        </div>
      </div>
    );
  };
  
  export default RecomendedCars;
  