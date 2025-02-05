// const bookingFormSchema = {
//     name: "carRentalForm",
//     type: "document",
//     title: "Car Rental",
//     fields: [
//       {
//         name: "name",
//         type: "string",
//         title: "Name",
//       },
//       {
//         name: "phoneNumber",
//         type: "string",
//         title: "Phone Number",
//       },
//       {
//         name: "address",
//         type: "string",
//         title: "Address",
//       },
//       {
//         name: "city",
//         type: "string",
//         title: "Town / City",
//       },
//       {
//         name: "pickUpLocation",
//         type: "string",
//         title: "Pick-Up Location",
//       },
//       {
//         name: "dropOffLocation",
//         type: "string",
//         title: "Drop-Off Location",
//       },
//       {
//         name: "pickUpDate",
//         type: "datetime",
//         title: "Pick-Up Date",
//       },
//       {
//         name: "dropOffDate",
//         type: "datetime",
//         title: "Drop-Off Date",
//       },
//       {
//         name: "marketingConsent",
//         type: "boolean",
//         title: "Marketing Consent",
//       },
//       {
//         name: "termsConsent",
//         type: "boolean",
//         title: "Terms Consent",
//       },
//     ],
//   };
//   export default bookingFormSchema;
const bookingFormSchema = {
  name: "carRentalForm",
  type: "document",
  title: "Car Rental",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "phoneNumber",
      type: "string",
      title: "Phone Number",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
    },
    {
      name: "city",
      type: "string",
      title: "Town / City",
    },
    {
      name: "pickUpLocation",
      type: "string",
      title: "Pick-Up Location",
    },
    {
      name: "dropOffLocation",
      type: "string",
      title: "Drop-Off Location",
    },
    {
      name: "pickUpDate",
      type: "datetime",
      title: "Pick-Up Date",
    },
    {
      name: "dropOffDate",
      type: "datetime",
      title: "Drop-Off Date",
    },
    {
      name: "marketingConsent",
      type: "boolean",
      title: "Marketing Consent",
    },
    {
      name: "termsConsent",
      type: "boolean",
      title: "Terms Consent",
    },

    {
      name: "carName",
      type: "string",
      title: "Car Name",
    },
    {
      name: "totalPrice",
      type: "number",
      title: "Total Price",
    },
    {
      name: "numberOfDays",
      type: "number",
      title: "Number of Rental Days",
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
    },
    // {
    //   name: "cartItems",
    //   type: "array",
    //   title: "Cart Items",
    //   of: [
    //     {
    //       type: "object",
    //       fields: [
    //         {
    //           name: "carId",
    //           type: "string",
    //           title: "Car ID"
    //         },
    //         {
    //           name: "carName",
    //           type: "string",
    //           title: "Car Name"
    //         },
    //         {
    //           name: "pricePerDay",
    //           type: "number",
    //           title: "Price Per Day"
    //         },
    //         {
    //           name: "image",
    //           type: "string",
    //           title: "Car Image URL"
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   name: "totalPrice",
    //   type: "number",
    //   title: "Total Price"
    // },
    // {
    //   name: "numberOfDays",
    //   type: "number",
    //   title: "Number of Rental Days"
    // },
    // {
    //   name: "createdAt",
    //   type: "datetime",
    //   title: "Created At",
    //   options: {
    //     dateFormat: "YYYY-MM-DD",
    //     timeFormat: "HH:mm",
    //   }
    // }
  ],
};
export default bookingFormSchema;
