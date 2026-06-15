import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import '../pages/Navbar.css';
import RegisterModal from "./Register.jsx"
import { nav } from '../assets/data/imagesData'
export default function Navbar() {

     const [hoveredLink, setHoveredLink] = useState(
        nav.length > 0 ? nav[0].id : null
    )

    const [isNavOpen, setNavOpen] = useState(false)
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false)

    const toggleMenu = ()=> {
        setNavOpen(!isNavOpen)
    }

    const handleButtonClick = () => {
        setRegisterModalOpen(false)
    }

    return(
        <>
            <header className='menu-header'>
                <nav>
                    <div className='menu-content'>
                        <div className='logo'>
                            <h2><a className ="logo-text" href={nav[0].link}><p className="logo-name1">TRIDENT</p><p className="logo-name2">FITNESS</p></a></h2>
                        </div>
                        <ul className={isNavOpen ? "nav-link active" : "nav-link"}>
                            {nav.map((item) => (
                                <li key={item.id}>
                                    <a 
                                        href={item.anchorTag} 
                                        onMouseEnter={() => setHoveredLink(item.id)}
                                        className={hoveredLink == item.id ? "active" : ""}
                                        >
                                            {item.label.toUpperCase()}
                                        </a></li>
                            ))}
                        </ul>
                        <div className="login-register">
                            <button className='login-register-button'>LOGIN</button> | <button className='login-register-button' onClick={() => setRegisterModalOpen(true)}>REGISTER</button>
                            {isRegisterModalOpen && (
                                <RegisterModal 
                                    onSubmit={handleButtonClick} 
                                    onCancel={handleButtonClick} 
                                    onClose={handleButtonClick}
                                    title = "Create your account"
                                />
                            )}
                        </div>
                        <div className="icon" onClick={toggleMenu}>
                            <FaBars />
                        </div>
                    </div>
                </nav>
            </header>

        </>   
    )
}