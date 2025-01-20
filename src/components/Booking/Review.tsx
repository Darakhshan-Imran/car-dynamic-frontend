 import RatingStar from "../../components/ratingstar";
// import profileimage1 from "../../../public/profileimage1.png";
// import profileimage2 from "../../../../public/profileimage2.png";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import RecomendedCars from "../LandingPage/recommended";

interface Review {
  rating: number; 
  comment: string; 
  _key: string; 
  user: string; 
}

interface CarReviews {
  reviews: Review[]; // Array of review objects
}

const ReviewsData = [
  {
    // image:profileimage1,
    name:"Alex Stanton",
    designation:"CEO at Bukalapak",
    comment:"We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date:"21 July 2022"

  },
  {
    // image:profileimage2,
    name:"Skylar Dias",
    designation:"CEO at Amazon",
    comment:"We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date:"20 July 2022"

  },

];

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});


import React from 'react'

const ReviewDetails = () => {
  return (
    <div>
      <div className="wrapper mt-16">
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
    <h2
      className={`${plusJakartaSans.className} text-[#1A202c] text-2xl font-semibold`}
    >
      Reviews
    </h2> <button className="bg-blue-600 w-[3.5rem] h-[2rem] border rounded-lg text-white font-medium text-lg hover:bg-blue-400 cursor-pointer">{13}</button>
    </div>
    {ReviewsData.map((review, index) => (
      <div
        key={index}
        className="p-4 rounded shadow-lg flex flex-col items-start bg-white"
      >
        <div className="flex w-full">
        <div className="flex items-center mb-4">
          {/* <Image
            src={review.image}
            alt={`${review.name}'s profile`}
            width={30}
            height={30}
            className="w-12 h-12 rounded-full object-cover mr-4"
          /> */}
          </div>
          <div className="w-full">
            {/* Adjusted this div */}
            <div className="flex justify-between w-full px-2 py-1">
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
            <div className="flex w-full justify-between px-2 py-1">
            <p className="text-sm text-gray-500">{review.designation}</p>
            <RatingStar starcount={5}/>
          </div>
          </div>
          </div>
        <p className="text-gray-700 mb-4">{review.comment}</p>
      </div>
    ))}
  </div>
</div>
<div className="mt-11">
      
    <RecomendedCars/>
     </div>
    </div>
  )
}

export default ReviewDetails

     

