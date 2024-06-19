import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Patient from "../../../../../models/patient";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newPhone: phone,
    newApellidoPaterno: apellidoPaterno, 
    newApellidoMaterno: apellidoMaterno, 
    newFechaDeNacimiento: fechaDeNacimiento, 
    newLugarDeNacimiento: lugarDeNacimiento, 
    newEstatura: estatura, 
    newPeso: peso, 
    newCurp: curp, 
    newOcupacion: ocupacion, 
    newCalle: calle, 
    newCiudad: ciudad,  
    newEstado: estado, 
    newColonia: colonia, 
    newCodigoPostal: codigoPostal, 
    newEmail: email, 
    newNombreFamiliar: nombreFamiliar, 
    newPhoneFamiliar: phoneFamiliar,
    newEmailFamiliar: emailFamiliar, 
    newEstadoCivil: estadoCivil, 
    newGenero: genero, 
    newEducacion: educacion, 
    newTabaco: tabaco, 
    newAlcohol: alcohol, 
    newDrogas: drogas, 
    newActividad: actividad, 
    newEnfermedadCronica: enfermedadCronica,
    newAlergias: alergias,
    newCirugias: cirugias, 
    newTrastornos: trastornos,
    newCancer: cancer,
    newHipertension: hipertension, 
    newDiabetes: diabetes, 
    newCancerF: cancerF, 
    newAsma: asma,
    newEnfermedadN: enfermedadN, 
  } = await request.json();

  await connectMongoDB();

  await Patient.findByIdAndUpdate(id, { 
    name, phone, apellidoPaterno, apellidoMaterno, fechaDeNacimiento, lugarDeNacimiento, estatura, peso, curp, ocupacion, calle, ciudad, estado, colonia, codigoPostal, email, nombreFamiliar, phoneFamiliar, emailFamiliar, estadoCivil, genero, educacion, tabaco, alcohol, drogas, actividad, enfermedadCronica, alergias, cirugias, trastornos, cancer, hipertension, diabetes, cancerF, asma, enfermedadN 
  });
  
  return NextResponse.json({ message: "Patient updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const patient = await Patient.findOne({ _id: id });
  return NextResponse.json({ patient }, { status: 200 });
}
