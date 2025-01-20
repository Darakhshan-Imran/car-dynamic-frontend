// schemas/car.js
// export default {
//     name: 'car',
//     type: 'document',
//     title: 'Car',
//     fields: [
//       {
//         name: 'name',
//         type: 'string',
//         title: 'Car Name',
   
//       },
//       {
//         name: 'type',
//         type: 'string',
//         title: 'Car Type',
//         options: {
//           list: [
//             { title: 'Sport', value: 'Sport' },
//             { title: 'Sedan', value: 'Sedan' },
//             { title: 'SUV', value: 'SUV' },
//             { title: 'Hatchback', value: 'Hatchback' },
//           ],
//         },
//       },
//       {
//         name: 'fuelCapacity',
//         type: 'string',
//         title: 'Fuel Capacity',
//       },
//       {
//         name: 'transmission',
//         type: 'string',
//         title: 'Transmission',
//         options: {
//           list: [
//             { title: 'Manual', value: 'Manual' },
//             { title: 'Automatic', value: 'Automatic' },
//           ],
//         },
//       },
//       {
//         name: 'passengers',
//         type: 'string',
//         title: 'Passengers',
//       },
//       {
//         name: 'priceAfterDiscount',
//         type: 'string',
//         title: 'Price After Discount',
//         initialValue: null,
//       },
//       {
//         name: 'originalPrice',
//         type: 'string',
//         title: 'Original Price',
    
//       },
//       {
//         name: 'availability',
//         type: 'boolean',
//         title: 'Availability',
//         initialValue: true,
//       },
//       {
//         name: 'is_favourite',
//         title: 'Is Favourite',
//         type: 'boolean',
//       },
//       {
//         name: 'description',
//         title: 'Description',
//         type: 'text',
//       },
//       {
//         name: 'images',
//         title: 'Images',
//         type: 'object',
//         fields: [
//           {
//             name: 'mainImage',
//             title: 'Main Image',
//             type: 'image',
//             options: {
//               hotspot: true,
//             },
//           },
//           {
//             name: 'sideAngleImages',
//             title: 'Side Angle Images',
//             type: 'array',
//             of: [{ type: 'image', options: { hotspot: true } }],
//           },
//         ],
//       },
//       {
//         name: 'inventory_details',
//         title: 'Inventory Details',
//         type: 'object',
//         fields: [
//           {
//             name: 'total_units',
//             title: 'Total Units',
//             type: 'number',
//           },
//           {
//             name: 'units_available',
//             title: 'Units Available',
//             type: 'number',
//           },
//           {
//             name: 'availability',
//             title: 'Availability',
//             type: 'boolean',
//           },
//         ],
//       },
//       {
//         name: 'tags',
//         title: 'Tags',
//         type: 'array',
//         of: [{ type: 'string' }],
//         options: {
//           list: [
//             { title: "Popular Cars", value: "Popular Cars" },
//             { title: "Recommended Cars", value: "Recommended Cars" },
//             { title: "Recent Cars", value: "Recent Cars" },
//           ]}
//       },
//       {
//         name: 'reviews',
//         title: 'Reviews',
//         type: 'array',
//         of: [
//           {
//             type: 'object',
//             fields: [
//               {
//                 name: 'rating',
//                 title: 'Rating',
//                 type: 'number',
//               },
//               {
//                 name: 'comment',
//                 title: 'Comment',
//                 type: 'string',
//               },
//               {
//                 name: 'user',
//                 title: 'User',
//                 type: 'string',
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'rating',
//         title: 'Rating',
//         type: 'object',
//         fields: [
//           {
//             name: 'average',
//             title: 'Average Rating',
//             type: 'number',
//           },
//           {
//             name: 'breakdown',
//             title: 'Rating Breakdown',
//             type: 'object',
//             fields: [
//               {
//                 name: 'star_1',
//                 title: '1 Star',
//                 type: 'number',
//               },
//               {
//                 name: 'star_2',
//                 title: '2 Stars',
//                 type: 'number',
//               },
//               {
//                 name: 'star_3',
//                 title: '3 Stars',
//                 type: 'number',
//               },
//               {
//                 name: 'star_4',
//                 title: '4 Stars',
//                 type: 'number',
//               },
//               {
//                 name: 'star_5',
//                 title: '5 Stars',
//                 type: 'number',
//               },
//             ],
//           },
//         ],
//       },
//     ],
     
//   };
  