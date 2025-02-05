// import { defineType } from 'sanity';

// export default defineType({
//   name: 'productRentalCard',
//   title: 'Product Rental Card',
//   type: 'document',
//   fields: [
//     {
//       name: 'name',
//       title: 'Car Name',
//       type: 'string',
//       description: 'The name of the car (e.g., Koenigsegg)',
//       validation: (Rule) => Rule.required().error('Car Name is required'),
//     },
//     {
//       name: 'type',
//       title: 'Car Type',
//       type: 'string',
//       description: 'The type of car (e.g., Sport)',
//       validation: (Rule) => Rule.required().error('Car Type is required'),
//     },
//     {
//       name: 'pricePerDay',
//       title: 'Price Per Day',
//       type: 'string',
//       description: 'The regular rental price per day (e.g., 99)',
//       validation: (Rule) =>
//         Rule.required()
//           .min(0)
//           .error('Price Per Day is required and must be greater than or equal to 0'),
//     },
//     {
//       name: 'oldPrice',
//       title: 'Old Price',
//       type: 'string',
//       description: 'Optional discounted rental price per day. If set, it will appear as the main price.',
//       validation: (Rule) =>
//         Rule.custom((oldPrice, context) => {
//           const pricePerDay = context.document?.pricePerDay;
//           if (context.document && typeof oldPrice === 'string' && typeof pricePerDay === 'string' && oldPrice <= pricePerDay) {
//             return 'Discounted price should be less than the regular price';
//           }
//           return true;;
//         }),
//     },
//     {
//       name: 'fuelCapacity',
//       title: 'Fuel Capacity',
//       type: 'object',
//       fields: [
//         {
//           name: 'value',
//           title: 'Fuel Capacity Value',
//           type: 'string',
//           description: 'The fuel capacity of the car (e.g., 90L)',
//         },
//       ],
//     },
//     {
//       name: 'transmission',
//       title: 'Transmission',
//       type: 'object',
//       fields: [
//         {
//           name: 'value',
//           title: 'Transmission Type',
//           type: 'string',
//           description: 'The transmission type (e.g., Manual)',
//         },
//       ],
//     },
//     {
//       name: 'seatingCapacity',
//       title: 'Seating Capacity',
//       type: 'object',
//       fields: [
//         {
//           name: 'value',
//           title: 'Seating Capacity',
//           type: 'string',
//           description: 'Number of people the car can seat (e.g., 2)',
//         },
//       ],
//     },
//     {
//       name: 'image',
//       title: 'Car Image',
//       type: 'image',
//       description: 'Image of the car',
//       options: {
//         hotspot: true,
//       },
//       validation: (Rule) => Rule.required().error('Car Image is required'),
//     },
//     {
//       name: 'isFavorite',
//       title: 'Is Favorite',
//       type: 'boolean',
//       description: 'Indicates if the car is marked as favorite',
//       initialValue: false,
//     },
//   ],
// });

