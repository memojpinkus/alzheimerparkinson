import connectMongoDB from "/libs/mongodb";
import Patient from "../../../../models/patient";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {disease, name, phone} = await request.json();
    await connectMongoDB();
    await Patient.create({disease, name, phone});
    return NextResponse.json({message: "Patient Created"}, {status:201});
}

export async function GET() {
    await connectMongoDB();
    const patients = await Patient.find();
    return NextResponse.json({patients});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Patient.findByIdAndDelete(id);
    return NextResponse.json({message: "Patient deleted"}, {status: 200});
}