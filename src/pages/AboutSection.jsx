import '../pages/AboutSection.css';
import aboutImage from '../assets/images/adult-exercising-in-a-gym-on-a-stationary-bike.jpg'
import groupIcon from '../assets/icons/group.png';
import workoutIcon from '../assets/icons/workout.png';
export default function AboutSection(){
    return(
        <>
            <div className='about-container' id="about-section">
                <div className="about-heading">
                    <h1>About Us</h1>
                </div>
                <div className="about-body-content">
                    <div className="about-image-section">
                        <img src={aboutImage} alt="About Us Image" className='about-image' />
                    </div>
                    <div className="about-description-section">
                        <div className="about-description-content">
                            <div className="about-inner-content">
                                <div className="about-description-content-front">
                                    <div className="about-description-content-icon">
                                        <img src={groupIcon} alt="Group Icon" />
                                    </div>
                                    <div className="about-description-content-heading">
                                        <h2>Who We Are</h2>
                                    </div>
                                </div>
                                <div className="about-description-content-back">
                                    <p>We are a team of fitness enthusiasts and professionals who are passionate about helping people lead healthier lives. Our team consists of certified personal trainers, nutritionists, and wellness coaches who are dedicated to providing personalized fitness programs and guidance to our members.</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-description-content">
                            <div className="about-inner-content">
                                <div className="about-description-content-front">
                                    <div className="about-description-content-icon">
                                        <img src={workoutIcon} alt="Workout Icon" />
                                    </div>
                                    <div className="about-description-content-heading">
                                        <h2>What We Do</h2>
                                    </div>
                                </div>
                                <div className="about-description-content-back">
                                    <p>We are a fitness center dedicated to helping individuals achieve their health and wellness goals. Our mission is to provide a supportive and motivating environment where people can improve their physical fitness, mental well-being, and overall quality of life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}