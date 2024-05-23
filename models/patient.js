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
    disease: String,
    name: String,
    phone: String,
    predictions: [predictionSchema], // Array of prediction objects
  },
  {
    timestamps: true,
  }
);

const Patient =
  mongoose.models.Patient || mongoose.model("Patient", patientSchema);

export default Patient;
