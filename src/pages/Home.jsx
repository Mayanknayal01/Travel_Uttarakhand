import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "../components/Sliders/Sliders";
import { background_img, track_items } from "../assets/assets.js";


function Home() {
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    enterMode: true, // Centers the active slide
    centerPadding: "30px",
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show 6 images at a time
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    // responsive: [
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             dots: true,
    //         },
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //         },
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //         },
    //     },
    // ],
  };

  return (
    <div className="home">
      <section className="carousel">
        <h1>Explore Destinations</h1>
        <Slider {...settings}>
          <div>
            <img src={background_img.uttkashi} alt="nainital" />
            <p className="image-caption">Nainital</p>
          </div>
          <div>
            <img src="./assets/images/almora.jpg" alt="almora" />
            <p className="image-caption">Almora</p>
          </div>
          <div>
            <img src="assets/images/bageshwar.jpg" alt="bageshwar" />
            <p className="image-caption">Bageshwar</p>
          </div>
          <div>
            <img src="assets/images/chamoli.jpg" alt="chamoli" />
            <p className="image-caption">Chamoli</p>
          </div>
          <div>
            <img src="assets/images/champawat.jpg" alt="champawat" />
            <p className="image-caption">Champawat</p>
          </div>
          <div>
            <img src="assets/images/dehradun.jpg" alt="dehradun" />
            <p className="image-caption">Dehradun</p>
          </div>
          <div>
            <img src="assets/images/haridwar.jpg" alt="haridwar" />
            <p className="image-caption">Haridwar</p>
          </div>
          <div>
            <img src="assets/images/pauri.jpg" alt="pauri garhwal" />
            <p className="image-caption">Pauri Garhwal</p>
          </div>
          <div>
            <img src="assets/images/pithoragarh.jpg" alt="pithoragarh" />
            <p className="image-caption">Pithoragarh</p>
          </div>
          <div>
            <img src="assets/images/rudraprayag.jpg" alt="rudraprayag" />
            <p className="image-caption">Rudraprayag</p>
          </div>
          <div>
            <img src="assets/images/tehri.jpg" alt="tehri garhwal" />
            <p className="image-caption">Tehri Garhwal</p>
          </div>
          <div>
            <img
              src="assets/images/udhamsinghnagar.jpg"
              alt="udham singh nagar"
            />
            <p className="image-caption">Udham Singh Nagar</p>
          </div>
          <div>
            <img src="assets/images/uttarkashi.jpg" alt="uttarkashi" />
            <p className="image-caption">Uttarkashi</p>
          </div>
        </Slider>
      </section>

      <section className="intro">
        <h2>
          Welcome to <span className="highlight_name">Travel_Uttarakhand</span>
        </h2>
        <div className="outer">
          <div className="card-one">
            <p>
              Discover the enchanting beauty of Uttarakhand with
              Travel_Uttarakhand! This stunning region offers thrilling treks
              through lush mountains, serene homestays that immerse you in local
              culture, and rich experiences that celebrate its heritage. Whether
              you're seeking adventure or tranquility, Uttarakhand has it all.
              Join us to create unforgettable memories in this captivating
              destination!
            </p>
          </div>
          <div className="card-two">
            <img
              className="about-img1"
              src="assets/images/beauty1.jpg"
              alt="beauty-one"
            />
            <img
              className="about-img2"
              src="assets/images/beauty2.jpg"
              alt="beauty-one"
            />
            <img
              className="about-img3"
              src="assets/images/beauty3.jpg"
              alt="beauty-one"
            />
          </div>
        </div>
      </section>

      <section className="services">
        <h3>Our Services</h3>
        <div className="service-cards">
          <div className="service-card">
            <img src="assets/images/trekking.jpg" alt="Trekking" />
            <h4>Trekking</h4>
            <p>
              Trekking in Uttarakhand offers an exhilarating experience through
              pristine landscapes, majestic peaks, and verdant forests. Explore
              hidden trails and connect with nature in this Himalayan paradise.
            </p>
            <button>Explore more</button>
          </div>
          <div className="service-card">
            <img src="assets/images/homestays1.jpg" alt="Homestays" />
            <h4>Homestays</h4>
            <p>
              Experience the charm of Uttarakhand with our cozy homestays,
              nestled in serene landscapes. Enjoy authentic hospitality and a
              peaceful retreat amidst nature's beauty.
            </p>
            <button>Explore more</button>
          </div>
          <div className="service-card">
            <img src="assets/images/travelpackage.jpg" alt="Travel Packages" />
            <h4>Travel Packages</h4>
            <p>
              Experience the best of Uttarakhand with our customized travel
              packages, designed to suit every explorer's needs. From serene
              hill stations to adventurous treks, we offer unforgettable
              journeys through the state's natural wonders.
            </p>
            <button>Explore more</button>
          </div>
        </div>
      </section>

      <section className="featured-treks">
        <h3>Featured Treks</h3>
        <div className="trek-cards">
          <Slider {...settings2}>
            {/* one */}
            {track_items.map((item, index) => {
              return (
                <Sliders
                  key={index}
                  id={item.id}
                  name={item.name}
                  duration={item.duration}
                  difficulty={item.difficulty}
                  real_price={item.real_price}
                  discounted_price={item.discounted_price}
                  image={item.image}
                  difficulty_image = {item.difficulty_image}
                  dur_image={item.dur_image}
                />
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Home;
