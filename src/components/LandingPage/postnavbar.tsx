// import React from "react";

// interface Option {
//   label: string;
//   placeholder: string;
// }

// interface SelectionProps {
//   title: string;
//   options: Option[];
// }

// const SelectionComponent: React.FC<SelectionProps> = ({ title, options }) => {
//   return (
//     <div className="rounded-xl shadow-md p-4 bg-white w-[35rem] max-w-5xl mx-auto mt-4">
//       {/* Title */}
//       <div className="flex items-center space-x-2 mb-2">

//         <h2 className="text-lg font-semibold">{title}</h2>
//       </div>

//       {/* Options */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {options.map((option, index) => (
//           <div key={index} className="flex flex-col">
//             <label className="text-sm font-medium text-gray-700">
//               {option.label}
//             </label>
//             <div className="relative">
//               <select
//                 className="w-full border border-gray-300 rounded-lg py-1 px-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   {option.placeholder}
//                 </option>
//                 {/* Example dropdown options */}
//                 <option value="1">Option 1</option>
//                 <option value="2">Option 2</option>
//                 <option value="3">Option 3</option>
//               </select>
//               <span className="absolute right-3 top-2/4 transform -translate-y-1/2 text-gray-500 pointer-events-none">
//                 ▼
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SelectionComponent;
"use client"

import React from 'react'
import { ChevronDown } from 'lucide-react'

interface Field {
  label: string
  placeholder: string
}

interface LocationSelectorProps {
  title: string
  fields: Field[]
  className?: string
}

export default function LocationSelector({ title, fields, className = '' }: LocationSelectorProps) {
  return (
    <div className={`w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-4 h-4 rounded-full border-2 border-blue-500">
          <div className="w-2 h-2 bg-blue-500 rounded-full m-0.5" />
        </div>
        <span className="text-sm font-medium text-gray-900">{title}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1.5">
              {field.label}
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-200 rounded-lg py-2.5 px-3 text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  {field.placeholder}
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
