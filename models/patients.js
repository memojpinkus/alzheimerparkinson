import mongoose, { Schema, mongo } from "mongoose";

const patientSchema = new Schema(
    {
        id: Int32Array,
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