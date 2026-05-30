import { React, useState } from "react";
import '../pages/Register.css';
export default function Register( {onSubmit, onCancel, onClose, title}) {
    const [userRegData, setUserRegData] = useState({
        firstname: "",
        lastname: "",
        gender: "",
        birthdate: "",
        email: "",
    })

    const handleChange =  e => {
        setUserRegData({...userRegData,[e.target.name]: e.target.value});
    };

    return (
        <>
            <div className="register-modal-backdrop">
                <div className="register-modal">
                    <div className="register-left-section">
                        <div className="modal-header-left">
                            <h2>{title}</h2>
                        </div>
                        <div className="register-modal-body">
                            <div className="form-wrapper">
                                <form className="form-card">
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input 
                                            type="text" 
                                            id="firstname" 
                                            name="firstname" 
                                            placeholder="Juan"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input 
                                            type="text" 
                                            id="lastname" 
                                            name="lastname" 
                                            placeholder="Dela Cruz"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group personal-info">
                                        <div>
                                            <label>Date of Birth: </label>
                                            <input 
                                                type="date" 
                                                id="birthdate" 
                                                name="birthdate"
                                                onChange={handleChange}
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <label>Gender: </label>
                                            <select 
                                                name="gender"
                                                onChange={handleChange}
                                                required
                                            >
                                                <option default disabled>Select</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Others</option>
                                            </select> 
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address: </label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            placeholder="juandelacruz@email.com"
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                     <div className="btn-register-form">
                                        <button className="btn-register register-submit" type="submit" onClick={() => onSubmit()}>Submit</button>
                                        <button className="btn-register register-cancel" onClick={() => onCancel()}>Cancel</button>
                                    </div>
                                </form>
                                <div className="google-account-register">
                                    <div>
                                        <button>Continue using your Google account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="register-right-section">
                        <div className="modal-header-right">
                        </div>
                        <div>
                            <button className="close-button" onClick={() => onClose()}>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}