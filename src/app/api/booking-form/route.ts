import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Your Sanity dataset
  apiVersion: "2024-12-24", // Use the latest Sanity API version
  token: process.env.SANITY_TOKEN, // Sanity token with write access
  useCdn: false, // Disable CDN for writing data
});

interface BookingDetail {
  carName: string;
  numberOfDays: number;
  totalPrice: number;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
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
      bookings, // Array of booking details
    } = body;

    // Create documents for each booking
    const bookingPromises = bookings.map((booking: BookingDetail) => {
      return client.create({
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
        carName: booking.carName,
        totalPrice: booking.totalPrice,
        numberOfDays: booking.numberOfDays,
        createdAt: new Date().toISOString(),
      });
    });

    await Promise.all(bookingPromises);

    return NextResponse.json({ message: "Booking Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json({ message: "Error creating booking" }, { status: 500 });
  }
}