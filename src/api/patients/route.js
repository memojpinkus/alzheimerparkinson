import connectMongoDB from "@/libs/mongodb";
import Patient from "../../../models/patients";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {id, disease, name, phone} = await request.json();
    await connectMongoDB();
    await Patient.create({id, disease, name, phone});
    return NextResponse.json({message: "Patient Created"}, {stats:201});
}