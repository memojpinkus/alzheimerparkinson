import mongoose, { Schema } from "mongoose";

const predictionSchema = new Schema({
  predictions: [
    {
      className: String,
      probability: Number,
    },
  ],
  images: [
    {
      url: String, // URL of the image stored in S3
      contentType: String,
    },
  ],
});

const patientSchema = new Schema(
  {
    name: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    fechaDeNacimiento: String,
    lugarDeNacimiento: String,
    phone: String,
    genero: String,
    estatura: String,
    peso: String,
    curp: String,
    estadoCivil: String,
    educacion: String,
    ocupacion: String,
    ciudad: String,
    estado: String,
    calle: String,
    colonia: String,
    codigoPostal: String,
    email: String,
    nombreFamiliar: String,
    phoneFamiliar: String,
    emailFamiliar: String,
    tabaco: String,
    alcohol: String,
    drogas: String,
    actividad: String,
    enfermedadCronica: String,
    alergias: String,
    cirugias: String,
    trastornos: String,
    cancer: String,
    hipertension: String,
    diabetes: String,
    cancerF: String,
    asma: String,
    enfermedadN: String,
    predictions: [predictionSchema], // Array of prediction objects
  },
  {
    timestamps: true,
  }
);

const Patient =
  mongoose.models.Patient || mongoose.model("Patient", patientSchema);

export default Patient;
