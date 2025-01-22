'use client';


import Confirmation from '@/components/RentalForm/confirmation';

import Link from "next/link";
import CartSummary from "../../components/Rental-Summary-Card/CartSummary";
import CheckoutPage from '@/components/CheckoutPage';
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from 'react';


if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function BookingForm() {

  //State for PAyment Amount//

  const [amount, setAmount] = useState<number | null>(null);

    // Handle payment amount change

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? null : value);
  };

    // State for form data
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: "",
    dropOffDate: "",
    marketingConsent: false,
    termsConsent: false,
  });

 // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/booking-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
//

  return (
    <div className="flex flex-col lg:flex-row w-full gap-2 p-4 wrapper bg-gray-50">
      <div className='max-w-4xl w-full lg:w-2/3 mx-auto p-6 bg-white shadow-md rounded-md'>
    <form onSubmit={handleSubmit} className="">
      {/* Form Section */}
      
        <h1 className="text-2xl font-semibold text-center mb-6">Car Rental Form</h1>

        {/* Billing Info Section */}
        
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10"
    >
      <h2 className="text-2xl font-semibold mb-2">Billing Info</h2>
      <p className="text-gray-500 mb-6">Please enter your billing info</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name" // Added name attribute
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Phone Number</label>
          <input
            type="text"
            name="phoneNumber" // Added name attribute
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Address</label>
          <input
            type="text"
            name="address" // Added name attribute
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Town / City</label>
          <input
            type="text"
            name="city" // Added name attribute
            placeholder="Town or city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
    </div>

        {/* Rental Info Section */}
        <div className="mb-8 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
          <h2 className="text-xl font-semibold mb-4">Rental Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Pick-Up Location</label>
              <input type="text" placeholder="Location" name="pickUpLocation"
              value={formData.pickUpLocation}
              onChange={handleChange} className="input w-full p-2 border rounded-md" />

              <input type="date" name="pickUpDate"
              value={formData.pickUpDate}
              onChange={handleChange} 
              className="input mt-2 w-full p-2 border rounded-md" />

            </div>
            
            <div>
              <label className="block text-gray-600 mb-2">Drop-Off Location</label>
              <input type="text" placeholder="Location" name="dropOffLocation" 
              value={formData.dropOffLocation}
              onChange={handleChange}
              className="input w-full p-2 border rounded-md" />

              <input type="date" name="dropOffDate" 
              value={formData.dropOffDate}
             onChange={handleChange} 
             className="input mt-2 w-full p-2 border rounded-md" />
            </div>
          </div>
        </div>

         {/* Confirmation Section */}
        
         <Confirmation />
         
         </form>
         
        {/* Stripe Payment Section */}
        <div className="mt-8 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Payment Section</h2>
          <label className="block text-gray-600 mb-2">Enter Amount</label>
          <input
            type="number"
            placeholder="Enter amount to pay"
            value={amount ?? ""}
            onChange={handleAmountChange}
            className="input w-full p-2 border rounded-md mb-4"
          />
          {amount !== null && (
            <Elements
              stripe={stripePromise}
              options={{
                mode: "payment",
                amount: convertToSubcurrency(amount),
                currency: "usd",
              }}
            >
              <CheckoutPage amount={amount} />
            </Elements>
          )}
        </div>

       
        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <Link href="/car_rental">Submit</Link>
          </button>
        </div>
      
        </div>
      {/* Rental Summary Section */}
      <div className="w-full lg:w-1/3">
      <CartSummary/>
      </div>
    </div>
   
  );
}
