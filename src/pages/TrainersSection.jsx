import '../pages/TrainersSection.css'
import { trainersImage } from '../assets/data/imagesData'
export default function TrainersSection(){
    const length = trainersImage.length;

   /*  useEffect(() => {
        const slideInterval = setInterval(nextSlide, 4000); // Change image every 3 seconds
        return () => clearInterval(slideInterval); // Cleanup interval on component unmount
    }, [current, length]); */

    if (!Array.isArray(trainersImage) || length <= 0) {
        return null;
    };

    return(
        <>
            <div className='trainers-container'>
                <div className='trainers-content'>
                    <div className='trainer-images-section'>
                        <h1>Meet the Trainers</h1>
                        <div className="trainer-slider-container">
                            <div className='carousel'>
                                <div className="card">
                                    <img src={trainersImage[0].trainerImageLocation} alt={trainersImage[0].trainerImageName} className="image" />
                                    <div className="card-content">
                                        <p>James Lee</p>
                                        <p>Strength Training</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={trainersImage[1].trainerImageLocation} alt={trainersImage[1].trainerImageName} className="image" />
                                    <div className="card-content">
                                        <p>Aaron Williams</p>
                                        <p>Weightlifting</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={trainersImage[2].trainerImageLocation} alt={trainersImage[2].trainerImageName} className="image" />
                                    <div className="card-content">
                                        <p>Michelle Wu</p>
                                        <p>Aerobics</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={trainersImage[3].trainerImageLocation} alt={trainersImage[3].trainerImageName} className="image" />
                                    <div className="card-content">
                                        <p>Patrick Green</p>
                                        <p>Boxing</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={trainersImage[4].trainerImageLocation} alt={trainersImage[4].trainerImageName} className="image" />
                                    <div className="card-content">
                                        <p>Daniel Alvarez</p>
                                        <p>Crossfit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="trainer-description-section">
                        <h3>About the Trainer</h3>
                    </div>*/}
                </div>
            </div>
        </>
    )
}