import React from "react";
import "./Footer.css";
import { footer_img } from "../../../assets/assets.js";

const Footer = () => {
    const footerStyle = {
        backgroundImage: `url(${footer_img.footer}), linear-gradient(to right, rgb(0, 128, 255), rgb(0, 77, 153))`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        minHeight: "300px",
        padding: "30px 120px",
        color: "white",
    };

    return (
        <footer className="footer" style={footerStyle}>
        <div className="footer-container">
            <div className="footer-left">
            <h2>Travel_Uttarakhand</h2>
            <p>Discover the enchanting beauty of Uttarakhand with Travel_Uttarakhand! </p>
            <p>Follow us on</p>
            <div className="social-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-linkedin"></i>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Upcoming Treks</button>
            </div>
            </div>

            <div className="footer-middle one">
            <ul>
                <li>Cancellation Policy</li>
                <li>Refund Policy</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
            </ul>
            </div>
            
            <div className="footer-middle two">
            <ul>
                <li>Trek & Trails</li>
                <li>Roadtrips</li>
                <li>Sherpa</li>
                <li>Developer's Contact</li>
            </ul>
            </div>

            <div className="footer-right">
            <div className="address">
                <h3>Regional Office</h3>
                <p>Hotel Shiva, Barkot, Uttarkashi, Uttarakhand</p>
                <p>HHC, Saari, Chopta Valley, Rudraprayag, Uttarakhand</p>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
