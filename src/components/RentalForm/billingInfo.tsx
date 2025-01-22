// "use client";

// import { useState } from "react";

// const BillingInfo = () => {
//   // State for form data
//   const [formData, setFormData] = useState({
//     name: "",
//     phoneNumber: "",
//     address: "",
//     city: "",
//   });

//   // Handle form input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/api/booking-form", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Form submitted successfully!");
//       } else {
//         console.error("Error:", data.message);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10"
//     >
//       <h2 className="text-2xl font-semibold mb-2">Billing Info</h2>
//       <p className="text-gray-500 mb-6">Please enter your billing info</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-gray-700 mb-1">Name</label>
//           <input
//             type="text"
//             name="name" // Added name attribute
//             placeholder="Your name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 mb-1">Phone Number</label>
//           <input
//             type="text"
//             name="phoneNumber" // Added name attribute
//             placeholder="Phone number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 mb-1">Address</label>
//           <input
//             type="text"
//             name="address" // Added name attribute
//             placeholder="Address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 mb-1">Town / City</label>
//           <input
//             type="text"
//             name="city" // Added name attribute
//             placeholder="Town or city"
//             value={formData.city}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default BillingInfo;
