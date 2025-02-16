
'use client';

import Confirmation from '@/components/RentalForm/confirmation';
// import Link from "next/link";
import CartSummary from "../../components/Rental-Summary-Card/CartSummary";
import CheckoutPage from '@/components/CheckoutPage';
import { Elements } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { loadStripe } from "@stripe/stripe-js";


if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

interface BookingDetail {
  carName: string;
  numberOfDays: number;
  totalPrice: number;
}

export default function BookingForm() {
  const [amount, setAmount] = useState<number | null>(null);
  const [bookingDetails, setBookingDetails] = useState<BookingDetail[]>([]);
  const [showBookingDetails, setShowBookingDetails] = useState(false);
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
    termsConsent: false
  });

  useEffect(() => {
    const handleBookingConfirmed = (event: CustomEvent) => {
      const bookingData = event.detail;
      setBookingDetails(bookingData);
      setShowBookingDetails(true);
      
      // Calculate total amount from all bookings
      const totalAmount = bookingData.reduce((sum: number, booking: BookingDetail) => 
        sum + booking.totalPrice, 0);
      setAmount(totalAmount);
    };
  
    window.addEventListener('bookingConfirmed', handleBookingConfirmed as EventListener);
    return () => {
      window.removeEventListener('bookingConfirmed', handleBookingConfirmed as EventListener);
    };
  }, []);
 
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? null : value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = {
      ...formData,
      bookings: bookingDetails,
      totalAmount: amount
    };
    console.log(bookingData)

    try {
      const response = await fetch("/api/booking-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
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


  return (
    <div id="rental-form-container" className="flex flex-col lg:flex-row w-full gap-2 p-4 wrapper bg-gray-50 mt-44 pb-20">
  <div id="rental-form" className="max-w-4xl w-full lg:w-2/3 mx-auto p-6 bg-white shadow-md rounded-md">
    <form id="car-rental-form" onSubmit={handleSubmit}>
      <h1 id="form-title" className="text-2xl font-semibold text-center mb-6">
        Car Rental Form
      </h1>

      <div id="billing-info" className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
        <h2 className="text-2xl font-semibold mb-2">Billing Info</h2>
        <p className="text-gray-500 mb-6">Please enter your billing info</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700 mb-1">
              Address
            </label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-gray-700 mb-1">
              Town / City
            </label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="Town or city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div id="rental-info" className="mb-8 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
        <h2 className="text-xl font-semibold mb-4">Rental Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="pickUpLocation" className="block text-gray-600 mb-2">
              Pick-Up Location
            </label>
            <input
              id="pickUpLocation"
              type="text"
              placeholder="Location"
              name="pickUpLocation"
              value={formData.pickUpLocation}
              onChange={handleChange}
              className="input w-full p-2 border rounded-md"
            />
            <input
              id="pickUpDate"
              type="date"
              name="pickUpDate"
              value={formData.pickUpDate}
              onChange={handleChange}
              className="input mt-2 w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="dropOffLocation" className="block text-gray-600 mb-2">
              Drop-Off Location
            </label>
            <input
              id="dropOffLocation"
              type="text"
              placeholder="Location"
              name="dropOffLocation"
              value={formData.dropOffLocation}
              onChange={handleChange}
              className="input w-full p-2 border rounded-md"
            />
            <input
              id="dropOffDate"
              type="date"
              name="dropOffDate"
              value={formData.dropOffDate}
              onChange={handleChange}
              className="input mt-2 w-full p-2 border rounded-md"
            />
          </div>
        </div>
      </div>

      {showBookingDetails && (
        <div id="booking-details" className="mb-8 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
          <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
          {bookingDetails.map((booking, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-gray-600 mb-2">Car Name</label>
                  <input
                    type="text"
                    value={booking.carName}
                    readOnly
                    className="w-full p-2 border rounded-md bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Number of Days</label>
                  <input
                    type="text"
                    value={booking.numberOfDays}
                    readOnly
                    className="w-full p-2 border rounded-md bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Total Price</label>
                  <input
                    type="text"
                    value={`$${booking.totalPrice}`}
                    readOnly
                    className="w-full p-2 border rounded-md bg-gray-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Confirmation />
    </form>

    <div id="payment-section" className="mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Payment Section</h2>
      <label htmlFor="amount" className="block text-gray-600 mb-2">
        Enter Amount
      </label>
      <input
        id="amount"
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
  </div>

  <div id="cart-summary" className="w-full lg:w-1/3">
    <CartSummary />
  </div>
</div>

    // <div className="flex flex-col lg:flex-row w-full gap-2 p-4 wrapper bg-gray-50 mt-44 pb-20">
    //   <div className='max-w-4xl w-full lg:w-2/3 mx-auto p-6 bg-white shadow-md rounded-md'>
    //     <form onSubmit={handleSubmit} className="">
    //       <h1 className="text-2xl font-semibold text-center mb-6">Car Rental Form</h1>
    //       <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
    //         <h2 className="text-2xl font-semibold mb-2">Billing Info</h2>
    //         <p className="text-gray-500 mb-6">Please enter your billing info</p>
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //           <div>
    //             <label className="block text-gray-700 mb-1">Name</label>
    //             <input
    //               type="text"
    //               name="name"
    //               placeholder="Your name"
    //               value={formData.name}
    //               onChange={handleChange}
    //               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             />
    //           </div>
    //           <div>
    //             <label className="block text-gray-700 mb-1">Phone Number</label>
    //             <input
    //               type="text"
    //               name="phoneNumber"
    //               placeholder="Phone number"
    //               value={formData.phoneNumber}
    //               onChange={handleChange}
    //               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             />
    //           </div>
    //           <div>
    //             <label className="block text-gray-700 mb-1">Address</label>
    //             <input
    //               type="text"
    //               name="address"
    //               placeholder="Address"
    //               value={formData.address}
    //               onChange={handleChange}
    //               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             />
    //           </div>
    //           <div>
    //             <label className="block text-gray-700 mb-1">Town / City</label>
    //             <input
    //               type="text"
    //               name="city"
    //               placeholder="Town or city"
    //               value={formData.city}
    //               onChange={handleChange}
    //               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mb-8 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
    //         <h2 className="text-xl font-semibold mb-4">Rental Info</h2>
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //           <div>
    //             <label className="block text-gray-600 mb-2">Pick-Up Location</label>
    //             <input type="text" placeholder="Location" name="pickUpLocation"
    //               value={formData.pickUpLocation}
    //               onChange={handleChange} className="input w-full p-2 border rounded-md" />
    //             <input type="date" name="pickUpDate"
    //               value={formData.pickUpDate}
    //               onChange={handleChange}
    //               className="input mt-2 w-full p-2 border rounded-md" />
    //           </div>
    //           <div>
    //             <label className="block text-gray-600 mb-2">Drop-Off Location</label>
    //             <input type="text" placeholder="Location" name="dropOffLocation"
    //               value={formData.dropOffLocation}
    //               onChange={handleChange}
    //               className="input w-full p-2 border rounded-md" />
    //             <input type="date" name="dropOffDate"
    //               value={formData.dropOffDate}
    //               onChange={handleChange}
    //               className="input mt-2 w-full p-2 border rounded-md" />
    //           </div>
    //         </div>
    //       </div>
    //       {showBookingDetails && (
    //         <div className="mb-8 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
    //           <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
    //           {bookingDetails.map((booking, index) => (
    //             <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
    //               <div className="grid grid-cols-1 gap-4">
    //                 <div>
    //                   <label className="block text-gray-600 mb-2">Car Name</label>
    //                   <input
    //                     type="text"
    //                     value={booking.carName}
    //                     readOnly
    //                     className="w-full p-2 border rounded-md bg-gray-100"
    //                   />
    //                 </div>
    //                 <div>
    //                   <label className="block text-gray-600 mb-2">Number of Days</label>
    //                   <input
    //                     type="text"
    //                     value={booking.numberOfDays}
    //                     readOnly
    //                     className="w-full p-2 border rounded-md bg-gray-100"
    //                   />
    //                 </div>
    //                 <div>
    //                   <label className="block text-gray-600 mb-2">Total Price</label>
    //                   <input
    //                     type="text"
    //                     value={`$${booking.totalPrice}`}
    //                     readOnly
    //                     className="w-full p-2 border rounded-md bg-gray-100"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       )}
    //       <Confirmation />
    //     </form>
    //     <div className="mt-8 p-6 bg-white shadow-md rounded-md">
    //       <h2 className="text-xl font-semibold mb-4">Payment Section</h2>
    //       <label className="block text-gray-600 mb-2">Enter Amount</label>
    //       <input
    //         type="number"
    //         placeholder="Enter amount to pay"
    //         value={amount ?? ""}
    //         onChange={handleAmountChange}
    //         className="input w-full p-2 border rounded-md mb-4"
    //       />
    //       {amount !== null && (
    //         <Elements
    //           stripe={stripePromise}
    //           options={{
    //             mode: "payment",
    //             amount: convertToSubcurrency(amount),
    //             currency: "usd",
    //           }}
    //         >
    //           <CheckoutPage amount={amount} />
    //         </Elements>
    //       )}
    //     </div>
        
    //   </div>
    //   <div className="w-full lg:w-1/3">
    //     <CartSummary />
    //   </div>
    // </div>
  );
}