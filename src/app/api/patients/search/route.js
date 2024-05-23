// pages/api/patients/search.js
import connectMongoDB from "/libs/mongodb";
import Patient from "../../../../../models/patient";
import { NextResponse } from "next/server";

export async function GET(request) {
  const query = request.nextUrl.searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  await connectMongoDB();

  try {
    const patients = await Patient.find({
      name: { $regex: query, $options: "i" },
    }).limit(5);
    return NextResponse.json({ patients });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to search patients" },
      { status: 500 }
    );
  }
}
