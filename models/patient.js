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
      data: String, // base64 encoded image data
      contentType: String,
    },
  ],
});

const patientSchema = new Schema(
  {
    name: String,
    phone: String,
    apellidoPaterno: String, 
    apellidoMaterno: String, 
    fechaDeNacimiento: String, 
    lugarDeNacimiento: String, 
    estatura: String, 
    peso: String, 
    curp: String, 
    ocupacion: String, 
    calle: String, 
    ciudad: String,  
    estado: String, 
    colonia: String, 
    codigoPostal: String, 
    email: String, 
    nombreFamiliar: String, 
    phoneFamiliar: String,
    emailFamiliar: String, 
    estadoCivil: String, 
    genero: String, 
    educacion: String, 
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
