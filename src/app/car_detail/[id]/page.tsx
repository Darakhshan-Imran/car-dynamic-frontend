import { client } from "../../../sanity/lib/client";
import DetailClient from "../../../components/Booking/DetailClient";
import ReviewDetails from "@/components/Booking/Review"

interface Params {
  params: {
    id: string;
  };
}

export const getCarData = async (id: string) => {
  return await client.fetch(
    `*[_type == "cars" && id == ${id}]{
      id,
      name,
      type,
      description,
      reviews,
      "average": rating.average,
      fuelCapacity,
      transmission,
      passengers,
      priceAfterDiscount,
      originalPrice,
      is_favourite,
      "image": images.mainImage.asset->url,
      "image1": images.sideAngleImages[0].asset->url,
      "image2": images.sideAngleImages[1].asset->url,
      "image3": images.sideAngleImages[2].asset->url
    }[0]`
  );
};

const CarDetailServer = async ({ params }: Params) => {
  const carData = await getCarData(params.id);
  return (
  <div>
  <DetailClient carData={carData} />;

  <ReviewDetails/>
  </div>
)};

export default CarDetailServer;



// "use client"

// import React, { useState } from "react";


// import { Heart } from 'lucide-react';
// import ButtonComponent from "@/components/button";
// import RatingStar from "../../../components/ratingstar";
// import Image from "next/image";
// import CarGrid from "@/components/cards";
// import RecomendedCars from "@/components/LandingPage/recommended";
// import Titlebar from "@/components/LandingPage/titlebar";
// import profileimage1 from "../../../../public/profileimage1.png";
// import profileimage2 from "../../../../public/profileimage2.png";
// import { Plus_Jakarta_Sans } from "next/font/google";
// import Ads1 from "../../../../public/Ads1.png";
// import car1 from "../../../../public/car1.png";
// import Link from "next/link";
// import {client} from "../../../sanity/lib/client"
// import { useCart } from "@/context/CartContext";





// interface CarCard {
//   id:string;
//   name: string; // The name of the car
//   type: string; // The type of the car
//   description:string;
//   originalPrice: number; // Price per day for renting the car
//   priceAfterDiscount?: string; // Discounted price for the car
//   fuelCapacity: string; // Fuel capacity of the car
//   transmission: string; // Transmission type (e.g., "Automatic", "Manual")
//   passengers: string; // Seating capacity of the car
//   image: string; // URL of the car image
//   image1: string; // URL of the car image
//   image2: string; // URL of the car image
//   image3: string; // URL of the car image
//   is_Favorite: boolean; // Whether the car is marked as a favorite 
// }

// interface Review {
//   rating: number; 
//   comment: string; 
//   _key: string; 
//   user: string; 
// }

// interface CarReviews {
//   reviews: Review[]; // Array of review objects
// }



// const ReviewsData = [
//   {
//     image:profileimage1,
//     name:"Alex Stanton",
//     designation:"CEO at Bukalapak",
//     comment:"We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
//     date:"21 July 2022"

//   },
//   {
//     image:profileimage2,
//     name:"Skylar Dias",
//     designation:"CEO at Amazon",
//     comment:"We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
//     date:"20 July 2022"

//   },

// ];

// const plusJakartaSans = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });



// interface Params {
//   params: {
//     id: string;
//   };
// }


// const Detail = async ({ params }: Params) => {
//   const { id } = params;

//   const { addToCart } = useCart();

//   const handleAddToCart = () => {
//     const { name, originalPrice, image } = carData;
//     addToCart({ id, name, originalPrice, image });
//   };

//   const carData: CarCard = await client.fetch(

//    `*[_type == "cars" && id == ${id}]{
//     id,
//     name,
//     type,
//     description,
//     reviews,
//    "average":rating.average,
//     fuelCapacity,
//     transmission,
//     passengers,
//     priceAfterDiscount,
//     originalPrice,
//     is_favourite,
//     "image": images.mainImage.asset->url,
//     "image1": images.sideAngleImages[0].asset->url,
//     "image2": images.sideAngleImages[1].asset->url,
//     "image3": images.sideAngleImages[2].asset->url,
  
//   }[0]`
  
// );
// // console.log(carData)




// const ViewData = [
//     {
//       id: 1,
//       src: carData?.image1,
//       alt: "exterior",
//     },
//     {
//       id: 2,
//       src: carData?.image2,
//       alt: "interior",
//     },
//     {
//       id: 3,
//       src: carData?.image3,
//       alt: "sitting",
//     },
//   ];

//   return (
 
//     <div className="bg-slate-100">
//     <div className="wrapper flex flex-col lg:flex-row mt-11">
     

//       {/* Detail page */}
//       <div className="bg-slate-100 py-10">
//   <div className="container mx-auto flex flex-col lg:flex-row gap-8 px-4">
//     {/* Left Section */}
//     <div className="lg:w-[90%] flex flex-col gap-4">
//       <div className="relative h-[70%] bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-lg p-6">
//         <h2 className="font-bold text-2xl lg:text-3xl mb-2">
//           {carData?.name}
//         </h2>
//         <p className="text-sm lg:text-base">
//           {carData?.description}
//         </p>
//         <div className="absolute bottom-4 right-12 w-32 lg:w-96">
//           <Image
//             src={carData?.image}
//             alt="Main Car Image"
//             width={300}
//             height={200}
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//       <div className="flex gap-6 justify-center overflow-hidden w-full">
//         {ViewData.map((view) => (
//           <Image
//             key={view.id}
//             src={view.src}
//             alt={view.alt}
//             width={130}
//             height={20}
//             className="rounded-lg border border-gray-300 hover:scale-105 transition-transform"
//           />
//         ))}
//       </div>
//     </div>

//     {/* Right Section */}
//     <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4">
//       <div className="flex justify-between items-center">
//         <h3 className="text-2xl font-bold">{carData?.name}</h3>
//         <Heart className="text-red-500 cursor-pointer hover:fill-red-600" />
//       </div>
//       <div className="flex items-center gap-2 text-gray-500 text-sm">
//         <RatingStar starcount={5} />
//         <span>440+ Reviews</span>
//       </div>
//       <p className="text-gray-600">{carData?.description}</p>
//       <div className="grid grid-cols-2 gap-4 mt-4">
//         <div>
//           <p className="text-sm text-gray-500">Car Type</p>
//           <p className="font-medium text-gray-700">{carData?.type}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Steering</p>
//           <p className="font-medium text-gray-700">{carData?.transmission}</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Capacity</p>
//           <p className="font-medium text-gray-700">{carData?.passengers} Person</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500">Gasoline</p>
//           <p className="font-medium text-gray-700">{carData?.fuelCapacity}L</p>
//         </div>
//       </div>
//       <div className="flex justify-between items-center mt-6">
//         <div>
//           <p className="text-xl font-bold text-blue-600">${carData?.priceAfterDiscount}/days</p>
//           <p className="text-sm text-gray-500 line-through">${carData?.originalPrice}</p>
//         </div>
//         <div className="flex gap-4">
//         <button className="px-6 py-2 bg-blue-500 text-white text-base rounded-lg hover:bg-blue-600 transition-colors"
//     onClick={handleAddToCart} >
//         Book Now
//         </button>
//         <button className="px-6 py-2 bg-blue-500 text-white text-base rounded-lg hover:bg-blue-600 transition-colors"
//        >
//        <Link href="/rental_form">Rent Now</Link> 
//         </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//       {/* <div className="flex flex-col w-full lg:flex-row">
//         <div className="w-full lg:w-1/2 flex flex-col justify-around items-center mx-0 lg:mx-3 mb-4 lg:mb-0">
//           <div className="w-full relative m-2 px-2">
//             <Image
//               src={Ads1}
//               alt="ads 1"
//               width={300}
//               height={300}
              
//               className="rounded-lg"
//             />
//             <div className="absolute top-2 lg:top-5 w-full lg:w-4/5 pl-3 bg-opacity-75 flex flex-col p-2 lg:p-4 rounded-lg">
//               <h2 className="font-semibold text-xl lg:text-3xl text-white mb-2 lg:mb-4 text-balance">
//                 Sports car with the best design and acceleration
//               </h2>
//               <p className="font-normal text-sm lg:text-lg text-white text-balance">
//                 Safety and comfort while driving a futuristic and elegant sports car
//               </p>
//             </div>
//             <div className="absolute bottom-3 right-3 w-1/2 lg:w-3/4">
//               <Image
//                 src={carData?.image}
//                 alt="car1"
//                 width={300}
//                 height={100}
                
//                 className="rounded-lg"
//               />
//             </div>
//           </div>
//           <div className="w-full flex gap-2 lg:gap-3 px-2 overflow-x-auto lg:overflow-x-visible">

          
//             {ViewData.map((view) => (
//               <div key={view.id} className="w-1/3 lg:w-auto flex-shrink-0">
//                 <Image
//                   src={view.src}
//                   alt={view.alt}
//                   width={50}
//                   height={50}
                 
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
     
        
//         <div className="w-full lg:w-1/2 mt-9">
//           <Card className="h-full flex justify-around flex-col border-none bg-white shadow-lg">
//             <CardHeader>
//               <CardTitle>
//                 <div className="text-2xl lg:text-4xl font-bold text-balance tracking-[0.010rem] flex justify-between items-center">
//                  {carData?.name}
//                   <span className="text-lg cursor-pointer hover:fill-red-600">
//                     <Heart />
//                   </span>
//                 </div>
//               </CardTitle>
//               <CardDescription>
//                 <div className="flex items-center gap-1 mt-1">
//                   <RatingStar starcount={5} />
//                   <span className="text-sm text-muted-foreground">
//                     440+ Reviews
//                   </span>
//                 </div>
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="text-base lg:text-lg font-thin">{carData?.description}</p>
//               <div className="flex flex-col sm:flex-row w-full mt-4">
//                 <div className="flex flex-col w-full sm:w-1/2 mb-2 sm:mb-0">
//                   <div className="flex justify-between items-center">
//                     <p className="text-base lg:text-lg text-gray-600 font-medium">
//                       Car Type
//                     </p>
//                     <p className="text-base lg:text-lg text-gray-700 font-semibold">
//                       {carData?.type}
//                     </p>
//                   </div>
//                   <div className="flex justify-between items-end">
//                     <p className="text-base lg:text-lg text-gray-600 font-medium">
//                       Steering
//                     </p>
//                     <p className="text-base lg:text-lg text-gray-700 font-semibold">
//                       {carData?.transmission}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col w-full sm:w-1/2">
//                   <div className="flex justify-between items-end">
//                     <p className="text-base lg:text-lg text-gray-600 font-medium">
//                       Capacity
//                     </p>
//                     <p className="text-base lg:text-lg text-gray-700 font-semibold">
//                      {carData?.passengers}
//                     </p>
//                   </div>
//                   <div className="flex justify-between items-end">
//                     <p className="text-base lg:text-lg text-gray-600 font-medium">
//                       Gasoline
//                     </p>
//                     <p className="text-base lg:text-lg text-gray-700 font-semibold">
//                       {carData?.fuelCapacity}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter className="flex flex-col sm:flex-row justify-between items-center">
//               <div className="flex flex-col gap-1" >
//               <p className="text-lg font-bold">{carData.priceAfterDiscount }</p>
//                 <p className="text-lg font-bold">
//                 {carData.priceAfterDiscount ? <del className="text-sm font-semibold text-[#90A3BF]">{carData.originalPrice}</del> : carData.originalPrice}

//                 </p>
              
//               </div>
//               <ButtonComponent className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white text-base rounded-lg hover:bg-blue-600 transition-colors">
//                <Link href="/rental_form">Rent Now</Link> 
//               </ButtonComponent>
//             </CardFooter>
//           </Card>
//         </div>
//       </div> */}

//     </div>

//       {/* Review Section */}
// <div className="wrapper mt-16">
//   <div className="flex flex-col gap-4">
//     <div className="flex items-center gap-3">
//     <h2
//       className={`${plusJakartaSans.className} text-[#1A202c] text-2xl font-semibold`}
//     >
//       Reviews
//     </h2> <button className="bg-blue-600 w-[3.5rem] h-[2rem] border rounded-lg text-white font-medium text-lg hover:bg-blue-400 cursor-pointer">{13}</button>
//     </div>
//     {ReviewsData.map((review, index) => (
//       <div
//         key={index}
//         className="p-4 rounded shadow-lg flex flex-col items-start bg-white"
//       >
//         <div className="flex w-full">
//         <div className="flex items-center mb-4">
//           <Image
//             src={review.image}
//             alt={`${review.name}'s profile`}
//             width={30}
//             height={30}
//             className="w-12 h-12 rounded-full object-cover mr-4"
//           />
//           </div>
//           <div className="w-full">
//             {/* Adjusted this div */}
//             <div className="flex justify-between w-full px-2 py-1">
//               <h3 className="font-semibold text-lg">{review.name}</h3>
//               <p className="text-sm text-gray-500">{review.date}</p>
//             </div>
//             <div className="flex w-full justify-between px-2 py-1">
//             <p className="text-sm text-gray-500">{review.designation}</p>
//             <RatingStar starcount={5}/>
//           </div>
//           </div>
//           </div>
//         <p className="text-gray-700 mb-4">{review.comment}</p>
//       </div>
//     ))}
//   </div>
// </div>

//     <div className="mt-11">
   
//     <CarGrid/>    
//     <RecomendedCars/>
//     </div>
//   </div>
//  );
// };

// export default Detail;
