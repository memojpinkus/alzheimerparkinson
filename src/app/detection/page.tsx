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

      <div className="border-dashed border border-zinc-500 w-full h-auto rounded-lg">
        <h1 className="m-xl">Instructions</h1>
        <ol className="">
          {!isSelected ? <li>Select User</li> : <></>}
          <li>Select Model</li>
          <li>Upload Image (up to 3 images)</li>
          <li>Wait for the loading to finish</li>
        </ol>
      </div>
      <div className="border-dashed border border-zinc-500 w-full h-auto rounded-lg">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="User"
            className="mb-2 p-2 border border-zinc-500 rounded"
          />
          <input
            placeholder="Model"
            className="mb-2 p-2 border border-zinc-500 rounded"
          />

          <div id="uploaders-container" className="flex flex-col gap-4">
            {files.map((_, index) => (
              <Uploader
                key={index}
                id={index}
                onFileChange={handleFileChange}
              />
            ))}
          </div>

          <button
            type="submit"
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </form>
        <div
          id="label-container"
          className="mt-4 p-4 border border-gray-300 rounded"
        ></div>
      </div>
    </>
  );
};

export default Detection;
