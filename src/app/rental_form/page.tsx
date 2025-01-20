'use client';

import PaymentMethod from '@/components/RentalForm/paymentmethod';
import Confirmation from '@/components/RentalForm/confirmation';
import ButtonComponent from '@/components/button';
import BillingInfo from '@/components/RentalForm/billingInfo';
import Image from 'next/image';
import RatingStar from '@/components/ratingstar';
import { Input } from '@/components/ui/input'; 
import Link from "next/link";
import Ads1 from "../../../public/Ads1.png";
import car1 from "../../../public/car1.png";
import CartSummary from "../../components/Booking/CartSummary";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-2 p-4  wrapper bg-gray-50">
      {/* Form Section */}
      <div className="max-w-4xl w-full lg:w-2/3 mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Car Rental Form</h1>

        {/* Billing Info Section */}
        <BillingInfo />

        {/* Rental Info Section */}
        <div className="mb-8 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10 ">
          <h2 className="text-xl font-semibold mb-4">Rental Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Pick-Up Location</label>
              <input type="text" placeholder="Location" className="input w-full p-2 border rounded-md" />
              <input type="date" className="input mt-2 w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Drop-Off Location</label>
              <input type="text" placeholder="Location" className="input w-full p-2 border rounded-md" />
              <input type="date" className="input mt-2 w-full p-2 border rounded-md" />
            </div>
          </div>
        </div>

        {/* Payment Method Section */}
        <PaymentMethod />

        {/* Confirmation Section */}
        <Confirmation />

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
           <Link href="/car_rental">Submit</Link> 
          </button>
        </div>
      </div>

      {/* Rental Summary Section */}
      <div className="w-full lg:w-1/3">
        <RentalSummary />
      </div>
    </div>
  );
}

// Rental Summary Component
function RentalSummary() {
  return (
    <div>
      <CartSummary/>
    </div>
//     <Card className="w-full bg-white">
//       <CardHeader>
//         <CardTitle className="text-xl font-semibold">Rental Summary</CardTitle>
//         <p className="text-sm text-gray-500">
//           Prices may change depending on the length of the rental and the price of your rental car.
//         </p>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         {/* Car Details */}
//           <div className="flex items-center space-x-4">
//         {/* Left Div - Car Image */}
//   <div className="relative w-1/2">
//     <Image
//       src= {Ads1}
//       alt="Car Ad"
//       width={300}
//       height={300}
//       layout="responsive"
//       className="rounded-lg"
//     />

//     <div className="absolute bottom-8 left-8 w-2/3">
//       <Image
//         src={car1}
//         alt="Car"
//         width={400}
//         height={200}
//         layout="responsive"
//         className="rounded-lg"
//       />
//     </div>
//   </div>

//   {/* Right Div - Car Details */}
//   <div className="w-2/3 space-y-1">
//     <h3 className="text-xl text-[#1A202C] font-bold tracking-wide">Nissan GT - R</h3>
//     <div className="flex items-center gap-1">
//       <RatingStar starcount={5} />
//       <span className="text-sm text-gray-500">440+ Reviews</span>
//     </div>
//   </div>
// </div>

//     {/* Price Breakdown */}
//       <div className="space-y-4">
//           <div className="flex justify-between text-sm">
//             <span className="text-gray-500">Subtotal</span>
//             <span className="font-medium">$80.00</span>
//           </div>
//           <div className="flex justify-between text-sm">
//             <span className="text-gray-500">Tax</span>
//             <span className="font-medium">$0</span>
//           </div>

//           {/* Promo Code */}
//           <div className="flex gap-2">
//             <Input placeholder="Apply promo code" className="h-9 text-sm border rounded-md p-2" />
//             <ButtonComponent className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">
//               Apply
//             </ButtonComponent>
//           </div>

//           {/* Total */}
//           <div className="pt-4 border-t">
//             <div className="flex justify-between">
//               <div>
//                 <span className="font-semibold">Total Rental Price</span>
//                 <p className="text-sm text-gray-500">Overall price rental</p>
//               </div>
//               <span className="text-xl font-semibold">$80.00</span>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>

  );
}
