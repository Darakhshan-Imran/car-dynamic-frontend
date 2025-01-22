export default {
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
    ],
  };
  