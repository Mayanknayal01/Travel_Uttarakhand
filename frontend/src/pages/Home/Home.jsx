import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "../../components/Sliders/Sliders.jsx";
import SliderDist from "../../components/Sliders/SliderDist.jsx";
import Header from "../../components/common/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import {
  track_items,
  about_us_img,
  services_img,
  dist_slider,
} from "../../assets/assets.js";
import GetTrack from "../../components/GetTrack/GetTrack.jsx";

function Home() {
  const tracks = GetTrack();
  console.log(tracks);
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
      <Header />
      <Banner />
      <section className="carousel">
        <h1>Explore Destinations</h1>
        <Slider {...settings}>
          {dist_slider.map((item, index) => {
            return (
              <SliderDist
                key={index}
                id={item.id}
                dist_img={item.dist_img}
                name={item.name}
              />
            );
          })}
        </Slider>
      </section>

      <section
        className="intro"
        style={{
          position: "relative",
          zIndex: 0,
        }}
      >
        <div
          className="background"
          style={{
            backgroundImage: `url(${about_us_img.trekbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1, // Send the background behind content
          }}
        ></div>
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
              src={about_us_img.beauty1}
              alt="beauty-one"
            />
            <img
              className="about-img2"
              src={about_us_img.beauty2}
              alt="beauty-one"
            />
            <img
              className="about-img3"
              src={about_us_img.beauty3}
              alt="beauty-one"
            />
          </div>
        </div>
      </section>

      <section className="services">
        <h3>Our Services</h3>
        <div className="service-cards">
          <div className="service-card">
            <img src={services_img.trekking} alt="Trekking" />
            <h4>Trekking</h4>
            <p>
              Trekking in Uttarakhand offers an exhilarating experience through
              pristine landscapes, majestic peaks, and verdant forests. Explore
              hidden trails and connect with nature in this Himalayan paradise.
            </p>
            <button>Explore more</button>
          </div>
          <div className="service-card">
            <img src={services_img.homestays1} alt="Homestays" />
            <h4>Homestays</h4>
            <p>
              Experience the charm of Uttarakhand with our cozy homestays,
              nestled in serene landscapes. Enjoy authentic hospitality and a
              peaceful retreat amidst nature's beauty.
            </p>
            <button>Explore more</button>
          </div>
          <div className="service-card">
            <img src={services_img.travelpackage} alt="Travel Packages" />
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
            {tracks.map((item, index) => {
              return (
                <Sliders
                  key={index}
                  id={item.id}
                  name={item.name}
                  duration={item.duration}
                  difficulty={item.difficulty}
                  real_price={item.realprice}
                  discounted_price={item.discountedprice}
                  image={item.image}
                  difficulty_image={track_items[0].difficulty_image}
                  dur_image={track_items[0].dur_image}
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
