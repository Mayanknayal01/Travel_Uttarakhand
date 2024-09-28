import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-left">
            <h2>montaxe</h2>
            <p>Montaxe is India's Leading Adventure Travel Company.</p>
            <p>Follow us on</p>
            <div className="social-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-linkedin"></i>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Upcoming Tips & Treks</button>
            </div>
            </div>

            <div className="footer-middle">
            <ul>
                <li>Cancellation Policy</li>
                <li>Refund Policy</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
                <li>Trek & Trails</li>
                <li>Roadtrips</li>
                <li>Sherpa</li>
            </ul>
            </div>

            <div className="footer-right">
            <div className="address">
                <h3>Montaxe Headquarter</h3>
                <p>2nd Floor, Khalsa Arc, Dharampur Chowk, Dehradun, Uttarakhand, 248001</p>
            </div>
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
