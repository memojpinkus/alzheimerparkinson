import React, { useState } from "react";
import Detection from "./detection";

interface LabData {
  image: string | null;
  fileName: string;
  prediction: string;
}

interface LabInformationProps {
  labData: LabData[];
  onUpdateLabData: (updatedLabData: LabData[]) => void;
  onDelete: (index: number) => void;
}

export default function LabInformation({
  labData,
  onUpdateLabData,
  onDelete,
}: LabInformationProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedFileIndex, setSelectedFileIndex] = useState<number | null>(
    null
  );
  const placeholderImage = "https://via.placeholder.com/150";

  const handleUploadClick = () => {
    setSelectedFileIndex(labData.length);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFileIndex(null);
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
    setShowModal(false);
  };

  const handlePredictClick = (index: number) => {
    setSelectedFileIndex(index);
    setShowModal(true);
  };

  const handlePredictions = async (newPredictions: any[]) => {
    if (selectedFileIndex !== null && newPredictions.length > 0) {
      const updatedLabData = [...labData];
      const prediction = newPredictions[0].prediction
        .map((pred) => `${pred.className}: ${pred.probability.toFixed(2)}`)
        .join(", ");
      updatedLabData[selectedFileIndex].prediction = prediction;
      onUpdateLabData(updatedLabData);

      // Upload the prediction to MongoDB
      const data = {
        patientId: id, // Assuming `id` is available in scope
        predictions: newPredictions[0].prediction,
      };

      try {
        const res = await fetch("http://localhost:3000/api/patients/upload", {
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
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lab Information</h2>
      <button
        onClick={handleUploadClick}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Upload Image
      </button>
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
                  src={data.image || placeholderImage}
                  alt={data.fileName}
                  className="h-16 w-16 object-cover"
                />
              </td>
              <td className="py-2">{data.fileName}</td>
              <td className="py-2">{data.prediction}</td>
              <td className="py-2 space-x-2">
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

      {showModal && selectedFileIndex !== null && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            {labData[selectedFileIndex] && labData[selectedFileIndex].image ? (
              <>
                <h2 className="text-xl font-bold mb-4">Predict Image</h2>
                <Detection
                  onPredictions={handlePredictions}
                  file={labData[selectedFileIndex].image}
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
