import React, { useEffect } from 'react';
import '../pages/Slider.css';
import { imagesData } from '../assets/data/imagesData.js'
import { useSlider } from '../utils/helpers.js';

export default function Slider(){

  const { current, nextSlide, prevSlide, goToSlide } = useSlider(imagesData.length);
  const length = imagesData.length;

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
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}