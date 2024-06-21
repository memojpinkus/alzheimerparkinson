"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import LabInformation from "./LabInformation";
import Evaluation from "./evaluation";
export default function ViewPatient({ id, name, apellidoPaterno, apellidoMaterno, fechaDeNacimiento, lugarDeNacimiento, phone, genero, estatura, peso, curp, estadoCivil, educacion, ocupacion, ciudad, estado, calle, colonia, codigoPostal, email, nombreFamiliar, phoneFamiliar, emailFamiliar, tabaco, alcohol, drogas, actividad, enfermedadCronica, alergias, cirugias, trastornos, cancer, hipertension, diabetes, cancerF, asma, enfermedadN, predictions }) {
  const [activeTab, setActiveTab] = useState("patientInfo");
  const [labData, setLabData] = useState([]);

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

  const handlePredict = (index) => {
    // Implement prediction logic here
    console.log(`Predicting for index: ${index}`);
  };

  const handleDelete = (index) => {
    // Implement delete logic here
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

      
      {activeTab === "patientInfo" && (
        <>
        <div className="flex flex-col gap-3">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ID{" "}
            </label>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {id}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {name}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Apellido paterno{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {apellidoPaterno}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Apellido materno:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {apellidoMaterno}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Fecha de nacimiento:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {fechaDeNacimiento}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Lugar de nacimiento:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {lugarDeNacimiento}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Genero:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {genero}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Peso:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {peso}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Estatura:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {estatura}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              CURP:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {curp}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Estado civil:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {estadoCivil}
            </label>
          </div>

          <hr style={{borderTop: '2px solid #bbb', margin: '20px 0' }}></hr>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nivel de educacion:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {educacion}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ocupacion:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {ocupacion}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Telefono:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {phone}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Correo electronico:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {email}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre de familiar responsable:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {nombreFamiliar}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Telefono de familiar responsable:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {phoneFamiliar}
            </label>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Correo electronico de familiar responsable:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {emailFamiliar}
            </label>
          </div>

          <hr style={{borderTop: '2px solid #bbb', margin: '20px 0' }}></hr>

          <div className="grid md:grid-cols-2 md:gap-6">

            <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ciudad:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {ciudad}
            </label>
          </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Estado:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {estado}
              </label>
            </div>
          </div>

          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Calle:{" "}
            </span>
            <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {calle}
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Colonia:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {colonia}
              </label>
            </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                C.P.:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {codigoPostal}
              </label>
            </div>
          </div>

          <hr style={{borderTop: '2px solid #bbb', margin: '20px 0' }}></hr>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tabaco:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {tabaco}
              </label>
            </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Alcohol:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {alcohol}
              </label>
            </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Drogas:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {drogas}
              </label>
            </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Actividad fisica:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {actividad}
              </label>
            </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enfermedades cronicas:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {enfermedadCronica}
              </label>
            </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Alergias:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {alergias}
              </label>
            </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Cirugias:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {cirugias}
              </label>
            </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Trastornos mentales:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {trastornos}
              </label>
            </div>

            <div className="mb-6">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Historial de cancer:{" "}
              </span>
              <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {cancer}
              </label>
            </div>
          </div>

          <hr style={{borderTop: '2px solid #bbb', margin: '20px 0' }}></hr>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Hipertension arterial:{" "}
                </span>
                <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {hipertension}
                </label>
              </div>

              <div className="mb-6">
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Diabetes:{" "}
                </span>
                <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {diabetes}
                </label>
              </div>

              <div className="mb-6">
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Cancer:{" "}
                </span>
                <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {cancerF}
                </label>
              </div>

              <div className="mb-6">
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Asma:{" "}
                </span>
                <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {asma}
                </label>
              </div>

              <div className="mb-6">
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enfermedad neurodegenerativa:{" "}
                </span>
                <label className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {enfermedadN}
                </label>
              </div>
            </div>
          
        </div>
          
        </>
      )}

      {activeTab === "labInfo" && (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <LabInformation
          labData={labData}
          onPredict={handlePredict}
          onDelete={handleDelete}
          />
        </div>
      )}

      {activeTab === "evaluation" && (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="mb-6">
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Evaluation:{" "}
            </span>
            <Evaluation />
          </div>
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

    </>
  );
}
