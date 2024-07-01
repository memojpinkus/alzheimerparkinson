import React, { useEffect } from "react";
import * as tmImage from "@teachablemachine/image";

const Detection = ({ onPredictions, file }) => {
  const URL = "https://teachablemachine.withgoogle.com/models/MjPyRRCJ9/";

  useEffect(() => {
    const loadModel = async () => {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      const model = await tmImage.load(modelURL, metadataURL);
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
  }, [file, onPredictions]);

  return null;
};

export default Detection;
