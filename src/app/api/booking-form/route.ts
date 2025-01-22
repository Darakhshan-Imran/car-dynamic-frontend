import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Your Sanity dataset
  apiVersion: "2023-01-01", // Use the latest Sanity API version
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Sanity token with write access
  useCdn: false, // Disable CDN for writing data
});


export async function POST(req: Request) {
  try {
    const {
      name,
      phoneNumber,
      address,
      city,
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      dropOffDate,
      marketingConsent,
      termsConsent,
    } = await req.json();

    const result = await client.create({
      _type: "carRentalForm",
      name,
      phoneNumber,
      address,
      city,
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      dropOffDate,
      marketingConsent,
      termsConsent,
    });

    return NextResponse.json({ message: "Car rental info saved successfully!", result }, { status: 200 });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ message: "Error saving data", error }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
