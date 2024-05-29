// src/app/Detection.tsx
"use client";
///Updated 1
import Uploader from "@/components/uploader";
import PatientSearch from "@/components/search-input";
import React, { useState, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";

const Detection = () => {
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const [model, setModel] = useState<any | null>(null);
  const [maxPredictions, setMaxPredictions] = useState<number>(0);
  const [predictions, setPredictions] = useState<any[]>([]);
  const URL = "https://teachablemachine.withgoogle.com/models/MjPyRRCJ9/";
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
      setMaxPredictions(loadedModel.getTotalClasses());
    };

    loadModel();
  }, []);

  const handleFileChange = (file: File | null, id: number) => {
    const updatedFiles = [...files];
    updatedFiles[id] = file;
    setFiles(updatedFiles);
  };

  const handlePredict = async (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const imageUrl = reader.result as string;
        const img = document.createElement("img");
        img.src = imageUrl;

        img.onload = async () => {
          const prediction = await model.predict(img);
          resolve({ prediction, imageUrl });
        };
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!model) return;

    const labelContainer = document.getElementById(
      "label-container"
    ) as HTMLDivElement;
    labelContainer.innerHTML = ""; // Clear previous predictions

    const allPredictions = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file) {
        const { prediction, imageUrl } = await handlePredict(file);
        console.log(`Prediction results for image ${i + 1}:`, prediction); // Log the prediction result

        const formattedPrediction = prediction.map((p) => ({
          className: p.className,
          probability: p.probability,
        }));

        allPredictions.push({ prediction: formattedPrediction, imageUrl });

        const predictionContainer = document.createElement("div");
        predictionContainer.className = "file-result-container";
        labelContainer.appendChild(predictionContainer);

        for (let j = 0; j < maxPredictions; j++) {
          const classPrediction =
            prediction[j].className +
            ": " +
            prediction[j].probability.toFixed(2);
          const p = document.createElement("p");
          p.innerText = classPrediction;
          predictionContainer.appendChild(p);
        }
      }
    }

    setPredictions(allPredictions);
  };

  const handleUploadData = async () => {
    if (!selectedPatient) {
      alert("Please select a patient first.");
      return;
    }

    const data = {
      patientId: selectedPatient._id,
      predictions: predictions.map((p) => ({
        predictions: p.prediction.map((pred) => ({
          className: pred.className,
          probability: pred.probability,
        })),
        image: {
          data: p.imageUrl,
          contentType: "image/png", // Or the correct content type
        },
      })),
    };

    try {
      const res = await fetch("http://localhost:3000/api/patients/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        alert("Data uploaded successfully!");
      } else {
        alert("Failed to upload data: " + result.message);
      }
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Error uploading data. Please try again.");
    }
  };

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <>
      <span className="font-bold text-4xl">Detection</span>

      <h1 className="text-1xl font-extrabold dark:text-white">Instructions</h1>
      <ol className="my-4 text-lg text-gray-500">
        {selectedPatient ? (
          <li>Selected User: {selectedPatient.name}</li>
        ) : (
          <li>Select User</li>
        )}
        <li>Select Model</li>
        <li>Upload Image (up to 3 images)</li>
        <li>Wait for the loading to finish</li>
      </ol>

      <div
        style={{ marginTop: "20px" }}
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      >
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <PatientSearch onSelectPatient={handleSelectPatient} />
          </div>

          <div className="relative">
            <label
              style={{ marginTop: "15px" }}
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select model to start detection
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue="">Choose a model</option>
              <option value="AL">Alzheimer</option>
              <option value="PA">Parkinson</option>
            </select>
          </div>

          <label
            style={{ marginTop: "15px" }}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload file
          </label>

          <div id="uploaders-container" className="flex flex-row space-x-80">
            {files.map((_, index) => (
              <Uploader
                key={index}
                id={index}
                onFileChange={handleFileChange}
              />
            ))}
          </div>

          <div
            style={{ marginTop: "20px" }}
            id="label-container"
            className="mt-4 p-4 border border-gray-300 rounded flex space-x-80"
          ></div>

          <button
            type="submit"
            style={{ marginTop: "20px" }}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Submit
          </button>

          <button
            onClick={handleUploadData}
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-800"
          >
            Upload Data
          </button>
        </form>
      </div>
    </>
  );
};

export default Detection;
