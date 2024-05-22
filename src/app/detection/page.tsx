// src/app/Detection.tsx (or wherever your Detection component is located)
"use client";

import Uploader from "@/components/uploader";
import React, { useState, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";

const Detection = () => {
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const [model, setModel] = useState<any | null>(null);
  const [maxPredictions, setMaxPredictions] = useState<number>(0);
  const URL = "https://teachablemachine.withgoogle.com/models/MjPyRRCJ9/";
  const [isSelected, setIsSelected] = useState<Boolean>(false);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!model) return;

    const labelContainer = document.getElementById(
      "label-container"
    ) as HTMLDivElement;
    labelContainer.innerHTML = ""; // Clear previous predictions

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file) {
        const reader = new FileReader();
        reader.onload = async () => {
          const imageUrl = reader.result as string;
          const img = document.createElement("img");
          img.src = imageUrl;

          img.onload = async () => {
            const prediction = await model.predict(img);
            console.log(`Prediction results for image ${i + 1}:`, prediction); // Log the prediction result

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
          };
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <>
      <span className="font-bold text-4xl">Detection</span>

      <div className="border-dashed border border-zinc-500 w-full h-auto rounded-lg ">
        <h1 className="text-1xl font-extrabold dark:text-white">
          Instructions
        </h1>
        <ol className="my-4 text-lg text-gray-500">
          {isSelected ? <li>Select User</li> : <></>}
          <li>Select Model</li>
          <li>Upload Image (up to 3 images)</li>
          <li>Wait for the loading to finish</li>
        </ol>
      </div>
      <div className="border-dashed border border-zinc-500 w-full h-auto rounded-lg  ">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              User
            </label>
          </div>
          <div className="relative">
            <label
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
            id="label-container"
            className="mt-4 p-4 border border-gray-300 rounded flex space-x-80"
          ></div>
          <button
            type="submit"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Detection;
