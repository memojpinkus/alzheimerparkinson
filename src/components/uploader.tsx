// src/components/Uploader.tsx
"use client";

import { useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";

interface UploaderProps {
  onFileChange: (file: File | null, id: number) => void;
  id: number;
}

const Uploader: React.FC<UploaderProps> = ({ onFileChange, id }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    onFileChange(file, id);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl(null);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      />
      {selectedFile && (
        <div className="mt-4">
          <div
            id={`prediction-container-${id}`}
            className="prediction-container"
          ></div>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Selected"
              width={200}
              height={200}
              className="mt-4 max-w-xs"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Uploader;
