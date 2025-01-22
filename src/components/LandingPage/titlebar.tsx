import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link"

// Define the font at the module scope
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Titlebar = ({ title, buttontext }: { title: string; buttontext?: string }) => {
  return (
    <div className="wrapper h-[44px] mt-[5px] flex justify-between">
      {/* Title */}
      <div className="h-full flex justify-between">
        <h1 className={`${plusJakartaSans.className} text-4xl font-bold text-[#55709a]`}>{title}</h1>
      </div>

      {/* Button */}
      <div className="h-full flex items-end">
        <button className="px-4 py-2 text-blue-600 font-semibold text-3xl hover:opacity-60">
        <Link href="/product">{buttontext}</Link>  
        </button>
      </div>
    </div>
  );
};

export default Titlebar;

