import '../pages/ContactSection.css';
import chatIcon from '../assets/icons/chat.png';
import phoneIcon from '../assets/icons/phone.png';
import emailIcon from '../assets/icons/email.png';

export default function ContactSection(){
    return(
        <>
            <div className='contact-container'>
                <div className="contact-heading">
                    <h1>Talk to Us</h1>
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
                                <img src={emailIcon} alt="Email Icon" />
                            </div>
                            <div className="contact-card-heading">
                                <h2 className='contact-card-heading-title'>Email Us</h2>
                            </div>
                            <div className="contact-card-body">
                                <p>Fill out the form and we'll get back to you within 24 hours.</p>
                                <button className="contact-card-button">Send Email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}