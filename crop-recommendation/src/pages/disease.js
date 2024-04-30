import React, { useState } from 'react';
import '../styles/disease.css';
import Menu from './Menu';

function Disease() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setUploadedImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleDetect = () => {
    
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
    }, 2500); 
  };

  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <h1>Find out what disease caught your plant!</h1>
      <div className="content">
        <input
          type="file"
          accept="image/*"
          id="image-upload"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
        <label htmlFor="image-upload" className="upload-btn">
          Upload Image
        </label>
        <button className="detect-btn" onClick={handleDetect} disabled={processing}>
          Detect!
        </button>
      </div>
      {uploadedImage && (
        <div className={`uploaded-image-container ${processing ? 'processing' : ''}`}>
          <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />
          {processing && <div className="processing-overlay"></div>}
        </div>
      )}
    </div>
  );
}

export default Disease;

