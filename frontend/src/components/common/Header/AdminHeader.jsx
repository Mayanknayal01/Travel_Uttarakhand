import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './AdminHeader.css';

const AdminHeader = () => {
    return (
        <header className="admin_header">
        <div className="admin_logo">
            <Link to="/">Travel_Uttarakhand</Link>
        </div>
        <nav className="admin_nav">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/treks">Treks</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div className="admin-social-media">
            <a href="https://www.facebook.com/TravelUttarakhandOfficial/" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} style={{ height: '20px' }} /></a>
            <a href="https://www.instagram.com/traveluttarakhandofficial/" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} style={{ height: '20px' }} /></a>
            <a href="https://youtube.com/@traveluttarakhand?si=6f1D_OQqH0KOusad" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} style={{ height: '20px' }} /></a>
        </div>
        </header>
    )
}

export default AdminHeader;