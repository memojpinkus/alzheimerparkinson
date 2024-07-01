// src/pages/api/patients/upload.js
import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Patient from "../../../../../models/patient";
import { uploadImage } from "../../../../lib/s3";

export async function POST(request) {
  try {
    const { patientId, predictions } = await request.json();

    await connectMongoDB();
    console.log("Connected to MongoDB");
    console.log("Patient ID:", patientId);
    console.log("Predictions:", predictions);

    const formattedPredictions = await Promise.all(
      predictions.map(async (p) => {
        let imageUrl = "";
        if (p.image) {
          try {
            console.log("Fetching image from URL:", p.image);
            const response = await fetch(p.image);
            console.log("Response status:", response.status);
            if (!response.ok) {
              throw new Error(`Failed to fetch image: ${response.statusText}`);
            }
            const blob = await response.blob();
            const file = new File([blob], "image.png", { type: blob.type });
            imageUrl = await uploadImage(file); // Upload image to S3
            console.log("Image URL:", imageUrl); // Log the image URL
          } catch (imageError) {
            console.error("Error fetching or uploading image:", imageError);
          }
        } else {
          console.warn("No image provided for prediction:", p);
        }
        return {
          predictions: p.predictions,
          images: imageUrl ? [{ url: imageUrl, contentType: "image/png" }] : [],
        };
      })
    );

    const updatedPatient = await Patient.findByIdAndUpdate(
      patientId,
      {
        $push: {
          predictions: { $each: formattedPredictions },
        },
      },
      { new: true }
    );

    if (!updatedPatient) {
      console.error("Patient not found");
      return NextResponse.json(
        { message: "Patient not found" },
        { status: 404 }
      );
    }

    console.log("Data uploaded successfully", updatedPatient);
    return NextResponse.json(
      { message: "Data uploaded successfully", updatedPatient },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading data:", error);
    return NextResponse.json(
      { message: "Error uploading data", error: error.message },
      { status: 500 }
    );
  }
}
