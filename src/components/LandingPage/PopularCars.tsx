

"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { client } from "../../sanity/lib/client";
import fuel_icon from "../../../public/spec-icons/fuel_icon.png";
import transmission_icon from "../../../public/spec-icons/transmission_icon.png";
import persons_icon from "../../../public/spec-icons/persons_icon.png";

import Titlebar from "./titlebar";
import Link from "next/link";




interface ProductCard {
  id:number;
  name: string; // The name of the car
  type: string; // The type of the car
  originalPrice: string; // Price per day for renting the car
  priceAfterDiscount: string; // Discounted price for the car
  fuelCapacity: string; // Fuel capacity of the car
  transmission: string; // Transmission type (e.g., "Automatic", "Manual")
  passengers: string; // Seating capacity of the car
  image: string; // URL of the car image
  is_Favorite: boolean; // Whether the car is marked as a favorite
}

interface PopularCarsProps {
  searchTerm: string; // Accept search term as a prop
}
const PopularCars: React.FC<PopularCarsProps> = ({ searchTerm })  => {
  const [cardData, setCardData] = React.useState<ProductCard[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Sanity
        const data: ProductCard[] =
          await client.fetch(`*[_type == "cars" && "Popular Cars" in tags]{
  id,
  name,
  type,
  fuelCapacity,
  transmission,
  passengers,
  priceAfterDiscount,
  originalPrice,
  availability,
  is_favourite,
   "image":images.mainImage.asset->url
}`);

        setCardData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching car data:", error);
        setError("Error loading car recommendations. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = cardData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="wrapper mt-20">
     

      {/* Updated grid with spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-1 md:gap-2 lg:gap-3 gap-4 mt-7 wrapper">
      {filteredData.length > 0 ? (
        
        filteredData.map((car, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md p-4 hover:shadow-lg transition w-[304px] h-[388px] bg-white"
          >
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              {car.is_Favorite ? <Heart className="text-red-500" /> : <Heart />}
            </div>
            <p className="text-sm text-gray-500">{car.type}</p>
            <Image
              src={car.image}
              alt={car.name}
              width={232}
              height={70}
              className="w-full object-cover rounded-md mb-4 mt-10"
            />

            <div className="mt-8 flex gap-6">
              <p className="text-sm flex gap-2 items-center text-[#90A3BF] font-light">
                <Image src={fuel_icon} alt="fuel icon" width={15} height={15} />
                {car.fuelCapacity}
              </p>
              <p className="text-sm flex gap-2 items-center text-[#90A3BF] font-light">
                <Image
                  src={transmission_icon}
                  alt="transmission icon"
                  width={15}
                  height={15}
                />
                {car.transmission}
              </p>
              <p className="text-sm flex gap-2 items-center text-[#90A3BF] font-light">
                <Image
                  src={persons_icon}
                  alt="persons icon"
                  width={15}
                  height={15}
                />
                {car.passengers}
              </p>
            </div>
            <div className="flex justify-between items-center mt-12">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold">{car.priceAfterDiscount }</p>
                <p className="text-lg font-bold">
                {car.priceAfterDiscount ? <del className="text-sm font-semibold text-[#90A3BF]">{car.originalPrice}</del> : car.originalPrice}

                </p>
              </div>
              <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
              <Link href={`/car_detail/${car.id}`}>Rent Now</Link>
              </button>
            </div>
          </div>
        )
      )):(<div className="text-center text-grat-500 mt-10">No Cars Found</div>)}
      </div>
    </div>
  );
};

export default PopularCars;
