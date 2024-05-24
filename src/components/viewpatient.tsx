"use client";

import React from "react";
import Link from "next/link";

export default function ViewPatient({ id, disease, name, phone, predictions }) {
  console.log(predictions);

  return (
    <>
      <span className="font-bold text-4xl">View Patient</span>

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID: </label>
          <label
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {id}
            </label>
        </div>

        <div className="mb-6">
          <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Possible Disease: </span>
          <label
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {disease}
          </label>
        </div>

        <div className="mb-6">
          <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient Name: </span>
          <label
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {name}
          </label>
        </div>

        <div className="mb-6">
          <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number: </span>
          <label
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {phone}
          </label>
        </div>

        {predictions && predictions.length > 0 && (
          <div className="mb-6">
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

        <div style={{flex:"flex"}}>
          <Link
            href={"/patients"}
            style={{width:"200px", height:"40px", textAlign:"center"}}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Back to Patients List
          </Link>
          <Link 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            style={{width:"200px", height:"40px", textAlign:"center"}}
            href={`/patients/editpatient/${id}`}>
              Edit
          </Link>     
        </div>

        
      </div>
    </>
  );
}
