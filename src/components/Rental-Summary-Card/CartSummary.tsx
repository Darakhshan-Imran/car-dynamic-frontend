"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { FaTrash } from 'react-icons/fa';



const CartSummary: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [daysPerCar, setDaysPerCar] = useState<{ [key: string]: number }>({});
  const [isBooked, setIsBooked] = useState<boolean>(false);

  const incrementDays = (id: string) => {
    setDaysPerCar(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }));
  };

  const decrementDays = (id: string) => {
    setDaysPerCar(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1)
    }));
  };

  const getDays = (id: string): number => {
    return daysPerCar[id] || 1;
  };

  const calculateTotal = (): number => {
    return cart.reduce((total, item) => {
      return total + (item.originalPrice || 0) * getDays(item.id);
    }, 0);
  };

  const handleBookCars = async () => {
    try {
      const bookingData = cart.map(car => ({
        carName: car.name,
        numberOfDays: getDays(car.id),
        totalPrice: car.originalPrice * getDays(car.id)
      }));


      const event = new CustomEvent('bookingConfirmed', { 
        detail: bookingData 
      });
      window.dispatchEvent(event);

      setIsBooked(true);

    } catch (error) {
      console.error("Error booking cars:", error);
      alert("Failed to book cars. Please try again.");
    }
  };

  const handleRemoveItem = (id: string) => {
    if (removeFromCart) {
      removeFromCart(id);
      setDaysPerCar(prev => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Rental Summary</h2>
      {!cart || cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center mb-4 p-4 bg-white rounded-lg shadow-sm relative"
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={8}
                  className="rounded-lg object-cover mr-4"
                />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-500">${item.originalPrice}/day</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => decrementDays(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                      type="button"
                    >-</button>
                    <span>{getDays(item.id)} days</span>
                    <button 
                      onClick={() => incrementDays(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                      type="button"
                    >+</button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-2 text-red-500 hover:text-red-700 transition-colors"
                    title="Remove from cart"
                    type="button"
                  >
                    <FaTrash />
                  </button>
                </div>
                <p className="text-gray-500 mt-2">Total: ${item.originalPrice * getDays(item.id)}</p>
              </div>
            </div>
          ))}
          <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Total Rental Price</span>
              <span className="text-lg font-semibold">${calculateTotal()}</span>
            </div>
            {isBooked ? (
              <div className="w-full px-4 py-2 bg-green-100 text-green-800 text-center rounded-md">
                Booking Confirmed
              </div>
            ) : (
              <button
                onClick={handleBookCars}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mb-4"
                type="button"
              >
                Book Now
              </button>
            )}
            <Link href="/" className="block w-full mt-2">
              <button 
                className="w-full px-4 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600"
                type="button"
              >
                Book More
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;



