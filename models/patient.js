import mongoose, { Schema, mongo } from "mongoose";

const patientSchema = new Schema(
    {
        disease: String,
        name: String,
        phone: String,
    },
    {
        timestamps:true,
    },
);

const Patient = mongoose.models.Patient || mongoose.model("Patient", patientSchema)

export default Patient;