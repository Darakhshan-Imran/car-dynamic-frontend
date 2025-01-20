import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const CartSummary: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const calculateTotal = (): number => {
    return cart.reduce((total, item) => total + item.originalPrice, 0);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Rental Summary</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center mb-4 p-4 bg-white rounded-lg shadow-sm"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover mr-4"
                />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-500">{item.originalPrice}</p>
                
              </div>
            </div>
          ))}
          <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium">Total Rental Price</span>
              {/* <span className="text-lg font-semibold">
                ${calculateTotal().toFixed(2)}
              </span> */}
            </div>
            <button
              
              className="w-full px-4 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600"
            ><Link href="/">Book More</Link>
              
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;
