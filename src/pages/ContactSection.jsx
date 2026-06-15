//ContactSection.jsx
import '../pages/ContactSection.css';
import chatIcon from '../assets/icons/chat.png';
import phoneIcon from '../assets/icons/phone.png';
import mapPinIcon from '../assets/icons/map_pin.png';

export default function ContactSection(){
    return(
        <>
            <div className='contact-container' id="contact-section">
                <div className="contact-heading">
                    <h1>Talk to Us</h1>
                </div>
                <div className="contact-email-section">
                    <h3>Any questions or comments? Just write us a message!</h3>
                    <div className='contact-email-form'>
                        <div className='contact-email-info'>
                            <div className='contact-email-field'>
                                <label>Email</label>
                                <input type="email" name="email" placeholder='Enter a valid email address' />
                            </div>
                            <div className='contact-email-field'>
                                <label>Name</label>
                                <input type="text" name="name" placeholder='Enter your Name' />
                            </div>
                        </div>
                        <div className='contact-email-message'>
                            <label>Message</label>
                            <textarea name="message"></textarea>
                        </div>
                        <div className='contact-email-button'>
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="contact-body-content">
                    <div className="contact-cards">
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <img src={phoneIcon} alt="Phone Icon" />
                            </div>
                            <div className="contact-card-heading">
                                <h2 className='contact-card-heading-title'>Call Us</h2>
                            </div>
                            <div className="contact-card-body">
                                <p>Telephone No: (045)885-1536</p>
                                <p>Mobile No: 0927-123-4567</p>
                                </div>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <img src={chatIcon} alt="Chat Icon" />
                            </div>
                            <div className="contact-card-heading">
                                <h2 className='contact-card-heading-title'>Chat Live</h2>
                            </div>
                            <div className="contact-card-body">
                                <p>We're available for live chat during weekdays from 08:00AM to 05:00PM</p>
                                <button className="contact-card-button">Chat Now</button>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <img src={mapPinIcon} alt="Map Pin Icon" />
                            </div>
                            <div className="contact-card-heading">
                                <h2 className='contact-card-heading-title'>Location</h2>
                            </div>
                            <div className="contact-card-body">
                                <p>#100 Payapa St. San Joaquin, Magalang, Pampanga, 2011</p>
                                <button className="contact-card-button">Check Map</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}