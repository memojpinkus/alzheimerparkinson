import React, { useEffect } from "react";
import * as tmImage from "@teachablemachine/image";

interface DetectionProps {
  onPredictions: (predictions: any[]) => void;
  file: File;
  modelURL: string; // Accept the model URL as a prop
}

const Detection: React.FC<DetectionProps> = ({
  onPredictions,
  file,
  modelURL,
}) => {
  useEffect(() => {
    const loadModel = async () => {
      const modelURLWithFile = modelURL + "model.json";
      const metadataURL = modelURL + "metadata.json";

      const model = await tmImage.load(modelURLWithFile, metadataURL);
      if (file) {
        const img = new Image();
        const reader = new FileReader();
        reader.onload = async () => {
          img.src = reader.result as string;
          img.onload = async () => {
            const predictions = await model.predict(img);
            console.log("Predictions:", predictions);
            onPredictions(predictions);
          };
        };
        reader.readAsDataURL(file);
      }
    };

    loadModel();
  }, [file, onPredictions, modelURL]);

  return null;
};

export default Detection;
