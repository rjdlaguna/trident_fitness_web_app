
import '../ui/Footer.css'; 
export default function Footer() {
    return(
        <>
            <div className='footer-container'>
                <div className='footer-content'>
                    <div className='footer-content-upper'>
                        <div className='footer-content-section'>
                            <h3 className='footer-content-heading title-1'>Trident Fitness</h3>
                            <p>Trident Fitness provides guidance to individuals getting into fitness to find the right direction into their journey to fitness whether having a healthy lifestyle or improve overall body stregth.</p>
                        </div>
                        <div className='footer-content-section'>
                            <h3>Quick Links</h3>
                            <ul>
                                <li>Home</li>
                                <li>Workouts</li>
                                <li>Trainers</li>
                                <li>Contact</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        <div className='footer-content-section'>
                            <h3>Services</h3>
                            <ul>
                                <li>Strength Traning</li>
                                <li>Cardio Workouts</li>
                                <li>Group Classes</li>
                                <li>Nutrition Coaching</li>
                            </ul>
                        </div>
                        <div className='footer-content-section'>
                            <h3>Contact Information</h3>
                            <ul>
                                <li>101 Mabuhay Street, Magalang, Pampanga</li>
                                <li>0927-123-4567</li>
                                <li>myworkouts@tridentfitness.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-content-lower'>
                            <div className='footer-content-section2'>
                                <p>&copy;2026 Trident Fitness. All rights reserved.</p>
                            </div>
                            <div className='footer-content-section2'>
                                <p>Privacy Policy</p>
                                <p>Terms of Service</p>
                                <p>Cookie Settings</p>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}