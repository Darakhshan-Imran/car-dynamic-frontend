// "use client";

// import LocationSelector from "../../components/LandingPage/postnavbar";
// import React from "react";
// import { ArrowUpDown } from "lucide-react";
// import RecomendedCars from "@/components/LandingPage/recommended";
// import Titlebar from "@/components/LandingPage/titlebar";

// type Field = {
//   label: string;
//   placeholder: string;
//   type: "location" | "date" | "time";
// };


// export default function Page() {

//   const pickupFields: Field[] = [
//     { label: "Location", placeholder: "Select your city", type: "location" },
//     { label: "Pick-up Date", placeholder: "Select date", type: "date" },
//     { label: "Pick-up Time", placeholder: "Select time", type: "time" },
//   ];

//   const dropoffFields: Field[] = [
//     { label: "Location", placeholder: "Select your city", type: "location" },
//     { label: "Drop-off Date", placeholder: "Select date", type: "date" },
//     { label: "Drop-off Time", placeholder: "Select time", type: "time" },
//   ];
//   return (
//     <div className="bg-gray-100 max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8">
    
//       {/* Main content */}
//       <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-32 pb-10">
//         <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">

//           {/* Main content area */}
//           <main className="flex-1">
//              <div className="flex flex-col sm:flex-row wrapper gap-4 sm:gap-6 lg:gap-12 items-center p-4">
//                     <LocationSelector title="Pick &mdash; Up" fields={pickupFields} />
//                     <div className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200">
//                       <ArrowUpDown className="w-6 h-6" />
//                     </div>
//                      <LocationSelector title="Drop &mdash; Off" fields={dropoffFields} />
//                   </div>
//             <div className="mt-6">
//                 <Titlebar title="Recent Cars" />
//               <RecomendedCars />
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import LocationSelector from "../../components/LandingPage/postnavbar";
import React from "react";
import { ArrowUpDown } from "lucide-react";
import RecomendedCars from "@/components/LandingPage/recommended";
import Titlebar from "@/components/LandingPage/titlebar";

type Field = {
  label: string;
  placeholder: string;
  type: "location" | "date" | "time";
};

export default function Page() {
  const pickupFields: Field[] = [
    { label: "Location", placeholder: "Select your city", type: "location" },
    { label: "Pick-up Date", placeholder: "Select date", type: "date" },
    { label: "Pick-up Time", placeholder: "Select time", type: "time" },
  ];

  const dropoffFields: Field[] = [
    { label: "Location", placeholder: "Select your city", type: "location" },
    { label: "Drop-off Date", placeholder: "Select date", type: "date" },
    { label: "Drop-off Time", placeholder: "Select time", type: "time" },
  ];

  return (
    <div id="home-page" className="bg-gray-100 max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Main content */}
      <div id="main-content" className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-32 pb-10">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Main content area */}
          <main id="main-section" className="flex-1">
            <div id="location-selector" className="flex flex-col sm:flex-row wrapper gap-4 sm:gap-6 lg:gap-12 items-center p-4">
              <LocationSelector  title="Pick &mdash; Up" fields={pickupFields} />
              <div id="swap-button" className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200">
                <ArrowUpDown className="w-6 h-6" />
              </div>
              <LocationSelector  title="Drop &mdash; Off" fields={dropoffFields} />
            </div>

            <div id="recent-cars-section" className="mt-6">
              <Titlebar  title="Recent Cars" />
              <RecomendedCars />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
