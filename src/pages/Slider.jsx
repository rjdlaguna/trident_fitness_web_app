import React, { useState, useEffect } from 'react';
import './Slider.css';
import { imagesData } from '../assets/data/bannerImageData.js'

export default function Slider(){

  const [current, setCurrent] = useState(0);
  const length = imagesData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000); // Change image every 3 seconds
    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [current, length]);

  if (!Array.isArray(imagesData) || length <= 0) {
    return null;
  };

  return(
    <div className="slider-container">
      <button onClick={prevSlide} className="arrow prev">&#10094;</button>
      
      <button onClick={nextSlide} className="arrow next">&#10095;</button>
      
      {imagesData.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={slide.imageLocation} alt={slide.imageName} className="image" />
          )}
        </div>
      ))}
      
      <div className="dots-container">
        {imagesData.map((_, index) => (
          <span
            key={index}
            className={index === current ? 'dot active-dot' : 'dot'}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}