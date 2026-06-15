//WorkoutSection.jsx
import '../pages/WorkoutSection.css';

export default function WorkoutSection(){
    return(
        <>
            <div className='workout-container' id="workouts-section">
                <div className='workout-content-heading'>
                    <h1>Discover Your Perfect Workout</h1>
                </div>
                <div className="workout-content-body">
                    <div className="workout-section left-content">
                        <div className="training-type-container">
                            <div className="training-type left-content">
                                <h2>Strength</h2>
                            </div>
                        </div>
                        <div className="training-type-list">
                            <ul>
                                <li>Weightlifting</li>
                                <li>Bodyweight Exercises</li>
                                <li>Resistance Training</li>
                                <li>Powerlifting</li>
                            </ul>
                        </div>
                        <div className="workout-program-btn left-btn">
                            <button className="see-program-btn">See Program</button>
                        </div>
                    </div>
                    <div className="workout-section center-content">
                        <div className="training-type-container">
                            <div className="training-type center-content">
                                <h2>Cardio</h2>
                            </div>
                        </div>
                        <div className="training-type-list">
                            <ul>
                                <li>Running</li>
                                <li>Cycling</li>
                                <li>HIIT</li>
                                <li>Yoga</li>
                            </ul>
                        </div>
                        <div className="workout-program-btn center-btn">
                            <button className="see-program-btn">See Program</button>
                        </div>
                    </div>
                    <div className="workout-section right-content">
                        <div className="training-type-container">
                            <div className="training-type right-content">
                                <h2>Flexibility</h2>
                            </div>
                        </div>
                        <div className="training-type-list">
                            <ul>
                                <li>Stretching</li>
                                <li>Pilates</li>
                                <li>Dynamic Stretching</li>
                                <li>Static Stretching</li>
                            </ul>
                        </div>
                        <div className="workout-program-btn right-btn">
                            <button className="see-program-btn">See Program</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}