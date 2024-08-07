"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import LabInformation from "./labinformation";
import Evaluation from "./evaluation";

interface Prediction {
  className: string;
  probability: number;
}

interface ImageData {
  url: string;
  contentType: string;
}

interface LabData {
  predictions: Prediction[];
  images: ImageData[];
}

interface ViewPatientProps {
  id: string;
  name: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  fechaDeNacimiento: string;
  lugarDeNacimiento: string;
  phone: string;
  genero: string;
  estatura: string;
  peso: string;
  curp: string;
  estadoCivil: string;
  educacion: string;
  ocupacion: string;
  ciudad: string;
  estado: string;
  calle: string;
  colonia: string;
  codigoPostal: string;
  email: string;
  nombreFamiliar: string;
  phoneFamiliar: string;
  emailFamiliar: string;
  tabaco: string;
  alcohol: string;
  drogas: string;
  actividad: string;
  enfermedadCronica: string;
  alergias: string;
  cirugias: string;
  trastornos: string;
  cancer: string;
  hipertension: string;
  diabetes: string;
  cancerF: string;
  asma: string;
  enfermedadN: string;
  predictions: LabData[];
}

export default function ViewPatient(props: ViewPatientProps) {
  const [activeTab, setActiveTab] = useState("patientInfo");
  const [labData, setLabData] = useState(props.predictions);

  const handleUpdateLabData = (updatedLabData: LabData[]) => {
    setLabData(updatedLabData);
  };

  const handleDelete = (updatedLabData: LabData[]) => {
    setLabData(updatedLabData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-gray-200">
        <span className="font-bold text-4xl">View Patient</span>
      </header>

      <div className="flex justify-center space-x-4 mt-6 mb-6">
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

      <div className="flex-1 flex justify-center items-center w-full">
        {activeTab === "patientInfo" && (
          <div className="flex flex-col gap-3 w-full max-w-4xl">
            {Object.entries(props).map(
              ([key, value]) =>
                key !== "predictions" && (
                  <div className="mb-6" key={key}>
                    <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                      :
                    </span>
                    <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      {value}
                    </label>
                  </div>
                )
            )}
          </div>
        )}

        {activeTab === "labInfo" && (
          <div className="w-full h-full">
            <LabInformation
              labData={labData}
              patientId={props.id}
              onUpdateLabData={handleUpdateLabData}
              onDelete={handleDelete}
            />
          </div>
        )}

        {activeTab === "evaluation" && (
          <div className="w-full max-w-4xl">
            <Evaluation />
          </div>
        )}
      </div>

      <footer className="p-4 bg-gray-200">
        <div className="flex justify-between">
          <Link
            href={"/patients"}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Back to Patients List
          </Link>
          <Link
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            href={`/patients/editpatient/${props.id}`}
          >
            Edit
          </Link>
        </div>
      </footer>
    </div>
  );
}
