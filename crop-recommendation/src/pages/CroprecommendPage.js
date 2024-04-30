import React, { useState } from 'react';
import '../styles/Croprecommend.css';
import Menu from './Menu';


const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    pH: '',
    rainfall: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      const resultArea = document.getElementById('result-area');
      resultArea.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="container">
      <header>
        <Menu />
        </header>
      <div className="form-container">
        <div className="hth-container">
          <h2>Share your land info and let's make it thrive!</h2>
        </div>
        <form onSubmit={handleSubmit} className="crop-form">
          <div className="input-group">
            <label htmlFor="N">N (Nitrogen)</label>
            <input type="number" name="N" value={formData.N} onChange={handleChange} placeholder="N" />
          </div>
          <div className="input-group">
            <label htmlFor="P">P (Phosphorus)</label>
            <input type="number" name="P" value={formData.P} onChange={handleChange} placeholder="P" />
          </div>
          <div className="input-group">
            <label htmlFor="K">K (Potassium)</label>
            <input type="number" name="K" value={formData.K} onChange={handleChange} placeholder="K" />
          </div>
          <div className="input-group">
            <label htmlFor="temperature">Temperature</label>
            <input type="number" name="temperature" value={formData.temperature} onChange={handleChange} placeholder="Temperature in °C" />
          </div>
          <div className="input-group">
            <label htmlFor="humidity">Humidity</label>
            <input type="number" name="humidity" value={formData.humidity} onChange={handleChange} placeholder="Humidity%" />
          </div>
          <div className="input-group">
            <label htmlFor="pH">pH</label>
            <input type="number" name="pH" value={formData.pH} onChange={handleChange} placeholder="pH" />
          </div>
          <div className="input-group">
            <label htmlFor="rainfall">Rainfall</label>
            <input type="number" name="rainfall" value={formData.rainfall} onChange={handleChange} placeholder="Rainfall in mm" />
          </div>
          <div className="button-container">
            <button type="submit">Recommend!</button>
          </div>
        </form>
      </div>
      <div className="result-area">
        <h3>Based on your input, the best plant to grow is:</h3>
      </div>
    </div>
  );
};

export default FormComponent;



