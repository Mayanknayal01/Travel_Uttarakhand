// BannerCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './Banner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 images at a time
        slidesToScroll: 1, // Scroll one image at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Time between transitions
    };

    return (
        <Slider {...settings}>
            <div>
                <img
                    className="carousel-image"
                    src="/assets/images/trek.jpg"
                    alt="First slide"
                />
            </div>
            <div>
                <img
                    className="carousel-image"
                    src="/assets/images/homestays.jpg"
                    alt="Second slide"
                />
            </div>
            <div>
                <img
                    className="carousel-image"
                    src="/assets/images/travel.jpg"
                    alt="Third slide"
                />
            </div>
        </Slider>
    );
};

export default BannerCarousel;
