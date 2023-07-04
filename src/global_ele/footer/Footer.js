import React from "react"
import "./Footer.css"


const Footer = () =>{
    return(
       <footer className="footer">
        <div className="footer-container container">
            <h1 className="footer-title">Aditi</h1>
            <ul className="footer-list">
                <li>
                    <a href="#home" className="footer-link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer-link">About</a>
                </li>
                <li>
                    <a href="#myart" className="footer-link">Art Works</a>
                </li>
            </ul>
            <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=100059796821713" className="footer-icon" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/dasaditi22/" className="footer-icon" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/aditi-das-28b414203" className="footer-icon" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>
            </div>
            <span className="footer-dev">
                Developed by Aditi 2023
            </span>
        </div>
        
       </footer>

    )
}

export default Footer