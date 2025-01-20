// // First, import the necessary types from Sanity
// import { defineType, defineField } from 'sanity';

// export default defineType({
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'id',
//       title: 'ID',
//       type: 'string',
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: 'originalPrice',
//       title: 'Original Price',
//       type: 'number',
//     }),
//     defineField({
//       name: 'discount',
//       title: 'Discount',
//       type: 'number',
//     }),
//     defineField({
//       name: 'category',
//       title: 'Category',
//       type: 'string',
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: 'tags',
//       title: 'Tags',
//       type: 'array',
//       of: [{ type: 'string' }],
//     }),
//     defineField({
//       name: 'images',
//       title: 'Images',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'mainImage',
//           title: 'Main Image',
//           type: 'image',
//           options: {
//             hotspot: true,
//           },
//         }),
//         defineField({
//           name: 'sideAngleImages',
//           title: 'Side Angle Images',
//           type: 'array',
//           of: [{ type: 'image' }],
//         }),
//       ],
//     }),
//     defineField({
//       name: 'color',
//       title: 'Color',
//       type: 'array',
//       of: [{ type: 'string' }],
//     }),
//     defineField({
//       name: 'sizes',
//       title: 'Sizes',
//       type: 'array',
//       of: [{ type: 'string' }],
//     }),
//     defineField({
//       name: 'stock',
//       title: 'Stock',
//       type: 'number',
//     }),
//     defineField({
//       name: 'dimensions',
//       title: 'Dimensions',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'width',
//           title: 'Width',
//           type: 'string',
//         }),
//         defineField({
//           name: 'height',
//           title: 'Height',
//           type: 'string',
//         }),
//         defineField({
//           name: 'depth',
//           title: 'Depth',
//           type: 'string',
//         }),
//         defineField({
//           name: 'weight',
//           title: 'Weight',
//           type: 'string',
//         }),
//         defineField({
//           name: 'seatHeight',
//           title: 'Seat Height',
//           type: 'string',
//         }),
//         defineField({
//           name: 'legHeight',
//           title: 'Leg Height',
//           type: 'string',
//         }),
//       ],
//     }),
//     defineField({
//       name: 'material',
//       title: 'Material',
//       type: 'string',
//     }),
//     defineField({
//       name: 'secondaryMaterial',
//       title: 'Secondary Material',
//       type: 'string',
//     }),
//     defineField({
//       name: 'configuration',
//       title: 'Configuration',
//       type: 'string',
//     }),
//     defineField({
//       name: 'upholsteryMaterial',
//       title: 'Upholstery Material',
//       type: 'string',
//     }),
//     defineField({
//       name: 'upholsteryColor',
//       title: 'Upholstery Color',
//       type: 'string',
//     }),
//     defineField({
//       name: 'fillingMaterial',
//       title: 'Filling Material',
//       type: 'string',
//     }),
//     defineField({
//       name: 'finishType',
//       title: 'Finish Type',
//       type: 'string',
//     }),
//     defineField({
//       name: 'originOfManufacture',
//       title: 'Origin of Manufacture',
//       type: 'string',
//     }),
//     defineField({
//       name: 'warranty',
//       title: 'Warranty',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'summary',
//           title: 'Summary',
//           type: 'string',
//         }),
//         defineField({
//           name: 'serviceType',
//           title: 'Service Type',
//           type: 'string',
//         }),
//         defineField({
//           name: 'covered',
//           title: 'Covered',
//           type: 'string',
//         }),
//         defineField({
//           name: 'notCovered',
//           title: 'Not Covered',
//           type: 'string',
//         }),
//         defineField({
//           name: 'domesticWarranty',
//           title: 'Domestic Warranty',
//           type: 'string',
//         }),
//       ],
//     }),
//     defineField({
//       name: 'rating',
//       title: 'Rating',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'average',
//           title: 'Average',
//           type: 'number',
//         }),
//         defineField({
//           name: 'breakdown',
//           title: 'Breakdown',
//           type: 'object',
//           fields: [
//             defineField({
//               name: 'fiveStars',
//               title: 'Five Stars',
//               type: 'number',
//             }),
//             defineField({
//               name: 'fourStars',
//               title: 'Four Stars',
//               type: 'number',
//             }),
//             defineField({
//               name: 'threeStars',
//               title: 'Three Stars',
//               type: 'number',
//             }),
//             defineField({
//               name: 'twoStars',
//               title: 'Two Stars',
//               type: 'number',
//             }),
//             defineField({
//               name: 'oneStar',
//               title: 'One Star',
//               type: 'number',
//             }),
//           ],
//         }),
//       ],
//     }),
//     defineField({
//       name: 'salesPackage',
//       title: 'Sales Package',
//       type: 'string',
//     }),
//     defineField({
//       name: 'modelNumber',
//       title: 'Model Number',
//       type: 'string',
//     }),
//     defineField({
//       name: 'sku',
//       title: 'SKU',
//       type: 'string',
//     }),
//     defineField({
//       name: 'features',
//       title: 'Features',
//       type: 'array',
//       of: [{ type: 'string' }],
//     }),
//   ],
// });