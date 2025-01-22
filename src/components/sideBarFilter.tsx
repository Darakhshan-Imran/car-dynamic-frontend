// Sidebar.jsx
import React from "react";

const SideFilterBar = () => {
  return (
    <div className="hidden md:block md:w-64 bg-white p-4 h-full z-20">
      <div className="space-y-6">
        {/* Type Section */}
        <div>
          <h2 className="text-[#90A3BF] text-lg font-medium mb-4 mt-10">TYPE</h2>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center text-slate-600 text-lg font-medium">
                <input type="checkbox" className="mr-2" checked readOnly />
                Sport (10)
              </label>
            </li>
            <li>
              <label className="flex items-center text-slate-600 text-lg font-medium">
                <input type="checkbox" className="mr-2" checked readOnly />
                SUV (12)
              </label>
            </li>
            <li>
              <label className="flex items-center text-slate-600 text-lg font-medium">
                <input type="checkbox" className="mr-2" />
                MPV (16)
              </label>
            </li>
            <li>
              <label className="flex items-center text-slate-600 text-lg font-medium">
                <input type="checkbox" className="mr-2" />
                Sedan (20)
              </label>
            </li>
            <li>
              <label className="flex items-center text-slate-600 text-lg font-medium">
                <input type="checkbox" className="mr-2" />
                Coupe (14)
              </label>
            </li>
            <li>
              <label className="flex items-center text-slate-600 text-lg font-medium">
                <input type="checkbox" className="mr-2" />
                Hatchback (14)
              </label>
            </li>
          </ul>
        </div>

        {/* Capacity Section */}
        <div>
          <h2 className="text-[#90A3BF] text-lg font-medium mb-6 mt-12">CAPACITY</h2>
          <ul className="space-y-2">
            <li>
              <label className="flex items-center text-slate-600 text-lg font-medium">
                <input type="checkbox" className="mr-2" checked readOnly />
                2 Person (10)
              </label>
            </li>
            <li>
              <label className="flex items-center text-slate-600 text-lg font-medium">
                <input type="checkbox" className="mr-2" />
                4 Person (14)
              </label>
            </li>
            <li>
              <label className="flex items-center text-slate-600 text-lg font-medium">
                <input type="checkbox" className="mr-2" />
                6 Person (12)
              </label>
            </li>
            <li>
              <label className="flex items-center text-slate-600 text-lg font-medium">
                <input type="checkbox" className="mr-2" checked readOnly />
                8 or More (16)
              </label>
            </li>
          </ul>
        </div>

        {/* Price Section */}
        <div>
          <h2 className="text-[#90A3BF] text-lg font-medium mb-4 mt-16">PRICE</h2>
          <div className="flex flex-col gap-3 first-letter:items-center space-x-2">
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="100"
              className="w-full"
            />
            <p className="text-[#596780] text-lg font-medium">Max: $100.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideFilterBar;



