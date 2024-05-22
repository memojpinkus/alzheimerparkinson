import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Patient from "../../../../../models/patient";

export async function PUT(request, {params}){
    const { id } = params;
    const {newDisease: disease, newName: name, newPhone: phone} = await request.json();
    await connectMongoDB();
    await Patient.findByIdAndUpdate(id, {disease, name, phone});
    return NextResponse.json({message: "Patient updated"}, {status: 200});
}

export async function GET(request, {params}){
    const { id } = params;
    await connectMongoDB();
    const patient = await Patient.findOne({_id: id});
    return NextResponse.json({patient}, {status: 200});
}