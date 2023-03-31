import React, { useState } from "react";

function ThumbnailGenerator(): JSX.Element {
  const [image, setImage] = useState<File | null>(null);
  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(200);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedImage = e.target.files ? e.target.files[0] : null;
    setImage(selectedImage);
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

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
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
