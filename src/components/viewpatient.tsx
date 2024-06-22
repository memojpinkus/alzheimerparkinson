"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import LabInformation from "./labinformation";
import Evaluation from "./evaluation";

export default function ViewPatient({ id, disease, name, phone, predictions }) {
  const [activeTab, setActiveTab] = useState("patientInfo");
  const [labData, setLabData] = useState<LabData[]>([]);

  useEffect(() => {
    // Transform predictions into the format needed for labData
    const transformedData = predictions.map((prediction, index) => ({
      image: null, // Placeholder images will be used in LabInformation component
      fileName: `Image ${index + 1}`,
      prediction: prediction.predictions
        .map((p) => `${p.className}: ${p.probability.toFixed(2)}`)
        .join(", "),
    }));
    setLabData(transformedData);
  }, [predictions]);

  const handleUpdateLabData = (updatedLabData) => {
    setLabData(updatedLabData);
  };

  const handleDelete = (index) => {
    setLabData(labData.filter((_, i) => i !== index));
  };

  return (
    <>
      <span className="font-bold text-4xl">View Patient</span>

      <div className="flex space-x-4 mt-6 mb-6">
        <button
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === "patientInfo"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("patientInfo")}
        >
          Patient Information
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === "labInfo"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("labInfo")}
        >
          Lab Information
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === "evaluation"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("evaluation")}
        >
          Evaluation
        </button>
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        {activeTab === "patientInfo" && (
          <>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                ID:{" "}
              </label>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {id}
              </label>
            </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Possible Disease:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {disease}
              </label>
            </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Patient Name:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {name}
              </label>
            </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone Number:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {phone}
              </label>
            </div>
          </>
        )}

        {activeTab === "labInfo" && (
          <LabInformation
            labData={labData}
            onUpdateLabData={handleUpdateLabData}
            onDelete={handleDelete}
          />
        )}

        {activeTab === "evaluation" && (
          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Evaluation:{" "}
            </span>
            <Evaluation />
          </div>
        )}

        <div style={{ flex: "flex" }}>
          <Link
            href={"/patients"}
            style={{ width: "200px", height: "40px", textAlign: "center" }}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Back to Patients List
          </Link>
          <Link
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            style={{ width: "200px", height: "40px", textAlign: "center" }}
            href={`/patients/editpatient/${id}`}
          >
            Edit
          </Link>
        </div>
      </div>
    </>
  );
}
