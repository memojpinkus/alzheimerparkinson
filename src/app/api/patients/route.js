import connectMongoDB from "/libs/mongodb";
import Patient from "../../../../models/patient";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {
        name, phone, apellidoPaterno, apellidoMaterno, fechaDeNacimiento, lugarDeNacimiento, estatura, peso, curp, ocupacion, calle, ciudad, estado, colonia, codigoPostal, email, nombreFamiliar, phoneFamiliar, emailFamiliar, estadoCivil, genero, educacion, tabaco, alcohol, drogas, actividad, enfermedadCronica, alergias, cirugias, trastornos, cancer, hipertension, diabetes, cancerF, asma, enfermedadN
    } = await request.json();

    await connectMongoDB();

    await Patient.create({
        name, phone, apellidoPaterno, apellidoMaterno, fechaDeNacimiento, lugarDeNacimiento, estatura, peso, curp, ocupacion, calle, ciudad, estado, colonia, codigoPostal, email, nombreFamiliar, phoneFamiliar, emailFamiliar, estadoCivil, genero, educacion, tabaco, alcohol, drogas, actividad, enfermedadCronica, alergias, cirugias, trastornos, cancer, hipertension, diabetes, cancerF, asma, enfermedadN
    });
    
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