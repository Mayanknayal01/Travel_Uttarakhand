import React from 'react';
import { useLocation } from 'react-router-dom';
import './SecondBanner.css'; // Assuming you style the banner here
import { second_banner_img } from '../../assets/assets';

const SecondBanner = () => {
    const location = useLocation();
    
    // Define banners for each route
    const main_banners = {
        '/treks': {
        bgImage: second_banner_img.treks,
        heading: 'Explore Treks'
        },
        '/homestays': {
        bgImage: second_banner_img.homestaysbg,
        heading: 'Find Homestays'
        },
        '/contact': {
        bgImage: second_banner_img.contact,
        heading: 'Contact Us'
        }
    };

    // Get the banner for the current route
    const banner = main_banners[location.pathname] || {
        bgImage: 'default-bg-image.jpg', 
        heading: 'Welcome' 
    };

    return (
        <div className="main_banner">
            <div
            className="main_banner_bg"
            style={{
                backgroundImage: `url(${banner.bgImage})`,
                height: '600px', // Adjust as per your design
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.9,
            }}
            >
            </div>
            <h1>{banner.heading}</h1>
        </div>
    );
};

export default SecondBanner;
