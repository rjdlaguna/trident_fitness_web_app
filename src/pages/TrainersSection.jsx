//TrainersSection.jsx
import '../pages/TrainersSection.css'
import { trainersImage } from '../assets/data/imagesData'
import TrainerCard from '../components/ui/TrainerCard'
import { useUpdateCarousel } from '../utils/helpers.js';
export default function TrainersSection(){
    const length = trainersImage.length;
    const { currentImage, nextImageSlide, prevImageSlide, goToImageSlide } = useUpdateCarousel(trainersImage.length);
    
    const left1 = (currentImage - 1 + length) % length;
    const left2 = (currentImage - 2 + length) % length;
    const right1 = (currentImage + 1) % length;
    const right2 = (currentImage + 2) % length;


    if (!Array.isArray(trainersImage) || length <= 0) {
        return null;
    };

    return(
        <>
            <div className='trainers-container' id="trainers-section">
                <div className='trainers-content'>
                    <div className='trainer-images-section'>
                        <h1>Meet the Trainers</h1>
                        <div className="trainer-slider-container">
                            <button className="arrow-button left" onClick={() => prevImageSlide()}>
                                &#10094;
                            </button>
                            <div className='carousel'>
                                {trainersImage.map((trainer, index) => (               
                                    <div
                                    className={
                                        index === currentImage
                                        ? 'card center'
                                        : index === left1
                                        ? 'card left-1'
                                        : index === left2
                                        ? 'card left-2'
                                        : index === right1
                                        ? 'card right-1'
                                        : index === right2
                                        ? 'card right-2'
                                        : 'card hidden'
                                    }
                                    key={index}
                                    >
                                    {[currentImage, left1, left2, right1, right2].includes(index) && (
                                        <><img
                                                src={trainer.trainerImageLocation}
                                                alt={trainer.trainerImageName}
                                                className="trainer-image" /><div className="card-content">
                                                    <p>{trainer.trainerName}</p>
                                                    <p>{trainer.trainerSpecialty}</p>
                                                </div></>
                                    )}
                                    </div>
                                  ))}
                            </div>
                            <button className="arrow-button right" onClick={() => nextImageSlide()}>
                                &#10095;
                            </button>
                        </div>
                        <div className="trainer-dots-container">
                            {trainersImage.map((_, index) => (
                                <span
                                key={index}
                                className={index === currentImage ? 'trainer-dot trainer-active-dot' : 'trainer-dot'}
                                onClick={() => goToImageSlide(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}