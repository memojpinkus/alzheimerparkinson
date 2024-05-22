// src/components/Uploader.tsx
'use client';

import { useState, ChangeEvent, useEffect } from 'react';
import Image from 'next/image';

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
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {selectedFile && (
        <div className="mt-4">
          <div id={`prediction-container-${id}`} className="prediction-container"></div>
          {imageUrl && (
            <Image src={imageUrl} alt="Selected" width={200} height={200} className="mt-4 max-w-xs" />
          )}
        </div>
      )}
    </div>
  );
};

export default Uploader;
