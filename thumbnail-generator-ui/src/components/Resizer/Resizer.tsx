import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../Resizer/drop.css";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';
import LogoutButton from "../Login/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";


const Container = styled.div`
  width: 60%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(45deg, #FF8C00, #FFA500);
  border-radius: 10px;
  color: white;
  padding-top: 20px;
  
  `;

const DragContainer = styled.div`
  width: 60%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #FF8C00, #FFA500);
  border-radius: 10px;
  color: #3b3731;
  border: 2px solid gray;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-left: 0;
  margin-right: 0;
  `;

  

function Resizer(): JSX.Element {
  const { isAuthenticated } = useAuth0();
  const [image, setImage] = useState <File | null>(null);
  const [width, setWidth] = useState <number>(200);
  const [height, setHeight] = useState <number>(200);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);



  const handleImageChange = async (selectedImage: File): Promise<void> => {
    setIsLoading(true);
    setTimeout(() => {
      setImage(selectedImage);
      setPreviewImage(URL.createObjectURL(selectedImage));
      setIsLoading(false);
    }, 2000);
  };

   const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newWidth = parseInt(e.target.value);
    setWidth(newWidth);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newHeight = parseInt(e.target.value);
    setHeight(newHeight);
  }; 

  const handleDownload = (): void => {
    if (!image) return;
    const canvas = document.createElement("canvas");
    const img = document.createElement("img");
    img.onload = (): void => {
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
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles: File[]) => {
      handleImageChange(acceptedFiles[0]);
    },
  });



  return ( 
    (isAuthenticated && (  
     <Container>
       <DragContainer
        {...getRootProps()}
        className={`dropzone ${previewImage ? "active" : ""}`}>
      
        <input {...getInputProps()} />
        {previewImage ? (
          <img src={previewImage} alt="Preview" />
        ) : (
          <p>Drag 'n' drop an image here, or click to select an image</p>
        )}
        {isLoading && <CircularProgress />}
      </DragContainer> 
       
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
      <Button variant="contained" onClick={handleDownload} disabled={!image}>
        Download
      </Button>
      <LogoutButton/>
      
    </Container>
  )) || <h2>Error: Debes logiarte para ingresar a este sitio</h2>   
  );
}



export default Resizer;