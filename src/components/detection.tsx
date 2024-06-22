import React, { useEffect, useState } from "react";
import * as tmImage from "@teachablemachine/image";

interface DetectionProps {
  onPredictions: (predictions: any[]) => void;
  file: string | null;
}

const Detection: React.FC<DetectionProps> = ({ onPredictions, file }) => {
  const [model, setModel] = useState<any | null>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
  const URL = "https://teachablemachine.withgoogle.com/models/MjPyRRCJ9/";

  useEffect(() => {
    const loadModel = async () => {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
    };

    loadModel();
  }, []);

  const handlePredict = async () => {
    if (!file || !model) return;

    const img = document.createElement("img");
    img.src = file;

    img.onload = async () => {
      const prediction = await model.predict(img);
      console.log("Prediction results:", prediction);

      const formattedPrediction = prediction.map((p: any) => ({
        className: p.className,
        probability: p.probability,
      }));

      const newPredictions = [
        { prediction: formattedPrediction, imageUrl: file },
      ];
      setPredictions(newPredictions);
      onPredictions(newPredictions);
    };
  };

  useEffect(() => {
    if (file) {
      handlePredict();
    }
  }, [file]);

  return (
    <div>
      <button
        onClick={handlePredict}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Predict
      </button>
      <div
        id="label-container"
        className="mt-4 p-4 border border-gray-300 rounded"
      >
        {predictions.map((pred, index) => (
          <div key={index}>
            <img
              src={pred.imageUrl}
              alt={`Prediction ${index}`}
              className="h-16 w-16 object-cover"
            />
            {pred.prediction.map((p, idx) => (
              <p key={idx}>
                {p.className}: {p.probability.toFixed(2)}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detection;
