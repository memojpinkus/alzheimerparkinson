import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Patient from "../../../../../models/patient";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newApellidoPaterno: apellidoPaterno,
    newApellidoMaterno: apellidoMaterno,
    newFechaDeNacimiento: fechaDeNacimiento,
    newLugarDeNacimiento: lugarDeNacimiento,
    newGenero: genero,
    newEstatura: estatura,
    newPeso: peso,
    newCurp: curp,
    newEstadoCivil: estadoCivil,
    newEducacion: educacion,
    newOcupacion: ocupacion,
    newCiudad: ciudad,
    newEstado: estado,
    newCalle: calle,
    newColonia: colonia,
    newCodigoPostal: codigoPostal,
    newPhone: phone,
    newEmail: email,
    newNombreFamiliar: nombreFamiliar,
    newPhoneFamiliar: phoneFamiliar,
    newEmailFamiliar: emailFamiliar,
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
    name,
    apellidoPaterno,
    apellidoMaterno,
    fechaDeNacimiento,
    lugarDeNacimiento,
    genero,
    estatura,
    peso,
    curp,
    estadoCivil,
    educacion,
    ocupacion,
    ciudad,
    estado,
    calle,
    colonia,
    codigoPostal,
    phone,
    email,
    nombreFamiliar,
    phoneFamiliar,
    emailFamiliar,
    tabaco,
    alcohol,
    drogas,
    actividad,
    enfermedadCronica,
    alergias,
    cirugias,
    trastornos,
    cancer,
    hipertension,
    diabetes,
    cancerF,
    asma,
    enfermedadN,
  });

  return NextResponse.json({ message: "Patient updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const patient = await Patient.findOne({ _id: id });
  return NextResponse.json({ patient }, { status: 200 });
}
