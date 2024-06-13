import React, { useState } from "react";

export default function LabInformation({ labData, onPredict, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const placeholderImage = "https://via.placeholder.com/150";

  const handleUploadClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Gabinete</h2>
      <button
        onClick={handleUploadClick}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Upload
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
                  onClick={() => onPredict(index)}
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

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Upload Image</h2>
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
