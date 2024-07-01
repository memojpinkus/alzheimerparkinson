import React, { useState } from "react";
import Detection from "./detection";

interface LabData {
  image: string | null;
  fileName: string;
  prediction: string;
}

interface LabInformationProps {
  labData: LabData[];
  patientId: string;
  onUpdateLabData: (updatedLabData: LabData[]) => void;
  onDelete: (index: number) => void;
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

  const handleUploadClick = () => {
    setSelectedFileIndex(labData.length); // Prepare to add a new entry
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFileIndex(null);
    setFileToPredict(null);
  };

  const handleFileUpload = (file: File) => {
    const updatedLabData = [...labData];
    const imageUrl = URL.createObjectURL(file);
    if (selectedFileIndex !== null) {
      updatedLabData[selectedFileIndex] = {
        image: imageUrl,
        fileName: file.name,
        prediction: "",
      };
      onUpdateLabData(updatedLabData);
    }
    setFileToPredict(file);
    setShowModal(false);
  };

  const handlePredictClick = (index: number) => {
    setSelectedFileIndex(index);
    const fileUrl = labData[index].image;
    if (fileUrl) {
      fetch(fileUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], labData[index].fileName, {
            type: blob.type,
          });
          setFileToPredict(file);
          setShowModal(true);
        });
    }
  };

  const handlePredictions = async (newPredictions: any) => {
    console.log("Predictions received:", newPredictions); // Console log the predictions

    if (selectedFileIndex !== null) {
      const updatedLabData = [...labData];
      const prediction = newPredictions
        .map((pred: any) => `${pred.className}: ${pred.probability.toFixed(2)}`)
        .join(", ");
      updatedLabData[selectedFileIndex].prediction = prediction;
      onUpdateLabData(updatedLabData);

      // Convert file to Base64
      const file = fileToPredict!;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64data = reader.result;

        // Format data for MongoDB
        const formattedPredictions = newPredictions.map((pred: any) => ({
          predictions: [pred],
          image: base64data,
        }));

        // Log data being sent to the API
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
      };
    }
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
              <th className="py-2">File Name</th>
              <th className="py-2">Prediction</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {labData.map((data, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">
                  <img
                    src={data.image || "https://via.placeholder.com/150"}
                    alt={data.fileName}
                    className="h-16 w-16 object-cover"
                  />
                </td>
                <td className="py-2">{data.fileName}</td>
                <td className="py-2">{data.prediction}</td>
                <td className="py-2 flex space-x-2 align-middle justify-center">
                  <button
                    onClick={() => handlePredictClick(index)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Predict
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
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
                />
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">Upload Image</h2>
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
