'use client';

import { useState } from 'react';

const Confirmation = () => {
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-semibold mb-2">Confirmation</h2>
      <p className="text-gray-500 mb-6">
        We are getting to the end. Just a few clicks and your rental is ready!
      </p>

      {/* Checkboxes */}
      <div className="space-y-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={marketingChecked}
            onChange={() => setMarketingChecked(!marketingChecked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-gray-700">
            I agree with sending marketing and newsletter emails. No spam,
            promised!
          </span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={termsChecked}
            onChange={() => setTermsChecked(!termsChecked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-gray-700">
            I agree with our terms and conditions and privacy policy.
          </span>
        </label>
      </div>

      {/* Rent Now Button */}
      <div className="mt-6">
        <button
          className="w-full bg-blue-600 text-white text-lg py-2 rounded-md hover:bg-blue-700 transition"
          disabled={!termsChecked}
        >
          Rent Now
        </button>
      </div>

      {/* Data Security */}
      <div className="mt-6 text-center">
        <div className="flex justify-center mb-2">
          <span className="text-blue-600 text-3xl">🔒</span>
        </div>
        <h3 className="font-semibold text-gray-700">All your data are safe</h3>
        <p className="text-gray-500 text-sm mt-1">
          We are using the most advanced security to provide you the best
          experience ever.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
