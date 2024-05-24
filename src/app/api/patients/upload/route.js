import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Patient from "../../../../../models/patient";

export async function POST(request) {
  const { patientId, predictions } = await request.json();

  await connectMongoDB();

  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      patientId,
      {
        $push: {
          predictions: predictions.map((p) => ({
            predictions: p.predictions,
            images: [p.image],
          })),
        },
      },
      { new: true }
    );

    if (!updatedPatient) {
      return NextResponse.json(
        { message: "Patient not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Data uploaded successfully", updatedPatient },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading data:", error);
    return NextResponse.json(
      { message: "Error uploading data" },
      { status: 500 }
    );
  }
}
