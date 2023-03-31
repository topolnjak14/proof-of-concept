import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "../thumbnail/drop.css";

function ThumbnailGenerator(): JSX.Element {
  const [image, setImage] = useState<File | null>(null);
  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(200);
    //Agregados
  const [dragging, setDragging] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

/* Modificando funcion */
/*   const handleImageChange = useCallback(
    (acceptedFiles: File[]) => {
      setImage(acceptedFiles[0]);
    },
    [setImage]
  ); */

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedImage = e.target.files ? e.target.files[0] : null;
    setImage(selectedImage);
  };

/* Modificando funcion 2 */  
/////////////////////////////////////////////////////
/*   const handleWidthChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newWidth = parseInt(e.target.value);
      setWidth(newWidth);
    },
    [setWidth]
  ); */

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newWidth = parseInt(e.target.value);
    setWidth(newWidth);
  };

/* Modificando funcion */
/*   const handleHeightChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newHeight = parseInt(e.target.value);
      setHeight(newHeight);
    },
    [setHeight]
  ); */
  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newHeight = parseInt(e.target.value);
    setHeight(newHeight);
  };

  /* Modificando Funcion */
  const handleDownload = useCallback(() => {
    if (!image) return;
    const canvas = document.createElement("canvas");
    const img = document.createElement("img");
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        const downloadLink = document.createElement("a");
        downloadLink.download = "thumbnail.jpg";
        downloadLink.href = canvas.toDataURL("image/jpeg");
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    };
    img.src = URL.createObjectURL(image);
  }, [image, width, height]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: handleImageChange,
  });

  return (
    <div>
      <div {...getRootProps()} style={{ cursor: "pointer" }} className="dropzone">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p >Drop the image file here ...</p>
        ) : (
          <p>Drag and drop an image file here, or click to select a file</p>
        )}
      </div>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="number"
          id="width"
          value={width}
          onChange={handleWidthChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default ThumbnailGenerator;
