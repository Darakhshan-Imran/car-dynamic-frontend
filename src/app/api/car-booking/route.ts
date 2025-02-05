
import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Your Sanity dataset
  apiVersion: "2024-12-24", // Use the latest Sanity API version
  token: process.env.SANITY_TOKEN, // Sanity token with write access
  useCdn: false, // Disable CDN for writing data
});

export async function POST(req: Request) {
  try {
    const { name, totalPrice, image } = await req.json();

    if (!name||!totalPrice || !image) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const booking = await client.create({
      _type: "cart",
      name,
      totalPrice,
      image,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Car booking added successfully!", booking }, { status: 200 });
  } catch (error) {
    console.error("Error booking car:", error);
    return NextResponse.json({ message: "Error booking car", error }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
