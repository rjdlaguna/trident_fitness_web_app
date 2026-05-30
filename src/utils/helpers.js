import { useState } from 'react';
// import {trainersImage} from '../assets/data/trainersImage.js';

export const useSlider = (length) => {
    const [current, setCurrent] = useState(0);
    
    const nextSlide = () => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrent(index);
    };

    return { current, nextSlide, prevSlide, goToSlide };
}

export const useUpdateCarousel = (length) => {
    const [currentImage, setCurrentImage] = useState(0);
    
    const nextImageSlide = () => {
        setCurrentImage((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const prevImageSlide = () => {
        setCurrentImage((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    const goToImageSlide = (index) => {
        setCurrentImage(index);
    };

    return { currentImage, nextImageSlide, prevImageSlide, goToImageSlide };
}
