// "use client"
// import { useState } from "react";

// export default function RentalInfo() {

//   const [formData, setFormData] = useState({
     
//       pickUpLocation: "",
//       dropOffLocation: "",
//       pickUpDate: "",
//       dropOffDate: "",
      
//     });

//      // Handle form input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };
//     return (
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Rental Info</h2>
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <p>Pick-up</p>
//             <input type="text" placeholder="Location" className="input"  value={formData.pickUpLocation}
//             onChange={handleChange}/>
//             <input type="date" className="input mt-2" value={formData.pickUpDate}
//         onChange={handleChange} />
//           </div>
//           <div>
//             <p>Drop-off</p>
//             <input type="text" placeholder="Location" className="input" value={formData.dropOffLocation}
//            onChange={handleChange} />
//             <input type="date" className="input mt-2" value={formData.dropOffDate}
//              onChange={handleChange} />
//           </div>
//         </form>
//       </div>
//     );
//   }
  