import React, { useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import "../Resizer/drop.css";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";
import HeroImage from "../Home/HeroImage";


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
  
 
  @media (max-width: 1400px) {
    width: 90%; 
  }
  
  `;

const DragContainer = styled.div`
  width: 60%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: #3b3731;
  border: 1px solid gray;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  ;
  `;

  const Label = styled.label`
  color: #3b3731; 
;
`;

  const Input = styled.input`
  border: none;
  border-radius: 5px;
;
`;

  const ButtonContainer = styled.div`
  padding: 5px;
;
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
        <Label htmlFor="width">Width:</Label>
        <Input
          type="number"
          id="width"
          value={width}
          onChange={handleWidthChange}
        />
      </div>
      <div>
        <Label htmlFor="height">Height:</Label>
        <Input
          type="number"
          id="height"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <ButtonContainer>
      <Button variant="contained" onClick={handleDownload} disabled={!image}>
        Download
      </Button>      
      </ButtonContainer>       
    </Container>
  )) 
    ||<HeroImage title={"Resize images"} subtitle={"#ByYourself"} buttonText={" Log in to keep going!"}/>  
  );
}



export default Resizer;
