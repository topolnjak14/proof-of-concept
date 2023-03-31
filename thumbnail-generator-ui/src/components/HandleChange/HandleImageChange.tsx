import React, {useState} from 'react'
import { useDropzone } from "react-dropzone";
import CircularProgress from '@mui/material/CircularProgress';

 function HandleImageChange() {
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = async (selectedImage: File): Promise<void> => {
        setIsLoading(true);
        setTimeout(() => {
          setImage(selectedImage);
          setPreviewImage(URL.createObjectURL(selectedImage));
          setIsLoading(false);
        }, 2000);
      };

      const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles: File[]) => {
          handleImageChange(acceptedFiles[0]);
        },
      });
  return (
    <div>
              <div
        {...getRootProps()}
        className={`dropzone ${previewImage ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {previewImage ? (
          <img src={previewImage} alt="Preview" />
        ) : (
          <p>Drag 'n' drop an image here, or click to select an image</p>
        )}
        {isLoading && <CircularProgress />}
      </div>
    </div>
  )
}

export default HandleImageChange;