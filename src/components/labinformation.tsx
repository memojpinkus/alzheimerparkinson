import React, { useState } from "react";
import Detection from "./detection";
import { uploadImage } from "../../libs/s3";
import Image from "next/image";

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

interface LabInformationProps {
  labData: LabData[];
  patientId: string;
  onUpdateLabData: (updatedLabData: LabData[]) => void;
  onDelete: (updatedLabData: LabData[]) => void;
}

export default function LabInformation({
  labData,
  patientId,
  onUpdateLabData,
  onDelete,
}: LabInformationProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedFileIndex, setSelectedFileIndex] = useState<number | null>(
    null
  );
  const [fileToPredict, setFileToPredict] = useState<File | null>(null);
  const [modelURL, setModelURL] = useState(
    "https://teachablemachine.withgoogle.com/models/ASVNnIYj4/"
  );

  const handleUploadClick = () => {
    setSelectedFileIndex(labData.length); // Prepare to add a new entry
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFileIndex(null);
    setFileToPredict(null);
  };

  const handleFileUpload = async (file: File) => {
    try {
      const s3Url = await uploadImage(file); // Upload image to S3
      console.log("S3 URL:", s3Url); // Log S3 URL for debugging
      if (selectedFileIndex !== null) {
        const updatedLabData = [...labData];
        updatedLabData[selectedFileIndex] = {
          predictions: [],
          images: [{ url: s3Url, contentType: file.type }],
        };
        onUpdateLabData(updatedLabData);
      }
      setFileToPredict(file);
      setShowModal(false);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handlePredictClick = (index: number) => {
    setSelectedFileIndex(index);
    const fileUrl = labData[index]?.images[0]?.url;
    if (fileUrl) {
      fetch(fileUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "prediction-file", {
            type: blob.type,
          });
          setFileToPredict(file);
          setShowModal(true);
        });
    }
  };

  const handlePredictions = async (newPredictions: any) => {
    console.log("Predictions received:", newPredictions);

    if (selectedFileIndex !== null) {
      const updatedLabData = [...labData];
      updatedLabData[selectedFileIndex].predictions = newPredictions;
      onUpdateLabData(updatedLabData);

      const imageUrl = labData[selectedFileIndex]?.images[0]?.url;

      // Format data for MongoDB
      const formattedPredictions = newPredictions.map((pred: any) => ({
        predictions: [pred],
        images: [{ url: imageUrl, contentType: fileToPredict!.type }],
      }));

      console.log("Data being sent to API:", {
        patientId,
        predictions: formattedPredictions,
      });

      // Upload the prediction to MongoDB
      const data = {
        patientId,
        predictions: formattedPredictions,
      };

      try {
        const res = await fetch("/api/patients/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          console.log("Prediction uploaded successfully!");
        } else {
          const result = await res.json();
          console.error("Failed to upload prediction:", result.message);
        }
      } catch (error) {
        console.error("Error uploading prediction:", error);
      }

      setShowModal(false);
      setFileToPredict(null);
    }
  };

  const handleDeleteRow = (index: number) => {
    const updatedLabData = [...labData];
    updatedLabData.splice(index, 1); // Remove 1 item at the row index
    onDelete(updatedLabData);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <h2 className="text-xl font-bold mb-4">Lab Information</h2>
      <button
        onClick={handleUploadClick}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Upload Image
      </button>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Image</th>
              <th className="py-2">Alzheimer</th>
              <th className="py-2">Parkinson's</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {labData.map((data, index) => {
              const alzheimerPrediction = data.predictions.find(
                (pred) =>
                  pred.className === "Alzheimer" ||
                  pred.className.includes("Demented")
              );
              const parkinsonPredictions = data.predictions.filter((pred) =>
                pred.className.includes("Parkinson")
              );
              return (
                <tr key={index} className="border-t">
                  <td className="py-2">
                    <div
                      style={{
                        position: "relative",
                        width: "64px",
                        height: "64px",
                      }}
                    >
                      {data.images.length > 0 && data.images[0]?.url ? (
                        <Image
                          src={data.images[0].url}
                          alt="Image"
                          layout="fill"
                          objectFit="cover"
                        />
                      ) : (
                        <Image
                          src="https://via.placeholder.com/150"
                          alt="placeholder"
                          layout="fill"
                          objectFit="cover"
                        />
                      )}
                    </div>
                  </td>
                  <td className="py-2">
                    {alzheimerPrediction
                      ? `${alzheimerPrediction.className}`
                      : "N/A"}
                  </td>
                  <td className="py-2">
                    {parkinsonPredictions.length > 0
                      ? parkinsonPredictions
                          .map(
                            (pred) =>
                              `${pred.className}: ${pred.probability.toFixed(
                                2
                              )}`
                          )
                          .join(", ")
                      : "N/A"}
                  </td>
                  <td className="py-2 flex space-x-2 align-middle justify-center">
                    <button
                      onClick={() => handlePredictClick(index)}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Predict
                    </button>
                    <button
                      onClick={() => handleDeleteRow(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            {fileToPredict ? (
              <>
                <h2 className="text-xl font-bold mb-4">Predict Image</h2>
                <Detection
                  onPredictions={handlePredictions}
                  file={fileToPredict}
                  modelURL={modelURL} // Pass the selected model URL
                />
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">Upload Image</h2>
                <select
                  value={modelURL}
                  onChange={(e) => setModelURL(e.target.value)}
                  className="block w-full mb-4 p-2 border border-gray-300 rounded"
                >
                  <option value="https://teachablemachine.withgoogle.com/models/ASVNnIYj4/">
                    Alzheimer's Model
                  </option>
                  <option value="https://teachablemachine.withgoogle.com/models/5KKVooXVW/">
                    Parkinson's Model
                  </option>
                </select>
                <input
                  type="file"
                  onChange={(e) => handleFileUpload(e.target.files![0])}
                />
              </>
            )}
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
