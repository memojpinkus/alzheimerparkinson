"use client";

import React from "react";
import Link from "next/link";

export default function ViewPatient({ id, disease, name, phone, predictions }) {
  console.log(predictions);

  return (
    <>
      <span className="font-bold text-4xl">View Patient</span>

      <div className="flex flex-col gap-3">
        <div className="border border-slate-500 px-8 py-2">
          <span className="font-bold">ID: </span>
          {id}
        </div>
        <div className="border border-slate-500 px-8 py-2">
          <span className="font-bold">Possible Disease: </span>
          {disease}
        </div>
        <div className="border border-slate-500 px-8 py-2">
          <span className="font-bold">Patient Name: </span>
          {name}
        </div>
        <div className="border border-slate-500 px-8 py-2">
          <span className="font-bold">Phone Number: </span>
          {phone}
        </div>

        {predictions && predictions.length > 0 && (
          <div className="border border-slate-500 px-8 py-2">
            <span className="font-bold">Predictions: </span>
            <ul>
              {predictions.map((prediction, index) => (
                <li key={index} className="mb-4">
                  <div>
                    {prediction.predictions.map((p, idx) => (
                      <p key={idx}>
                        {p?.className}: {p?.probability?.toFixed(2)}
                      </p>
                    ))}
                  </div>
                  {prediction.image && (
                    <div className="mt-2">
                      <img
                        src={prediction.image.data}
                        alt={`Prediction ${index + 1}`}
                        className="max-w-full h-auto border border-gray-300"
                        onError={() =>
                          console.log(
                            "Error loading image:",
                            prediction.image.data
                          )
                        }
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={"/patients"}
          className="bg-blue-600 font-bold text-white py-3 px-6 w-fit mt-4"
        >
          Back to Patients List
        </Link>
        <Link href={`/patients/editpatient/${id}`}>Edit</Link>
      </div>
    </>
  );
}
