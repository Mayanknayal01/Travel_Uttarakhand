import React from "react";
import "./Treks.css";
import Sliders from "../../components/data_trek_homestays/treks_card_data.jsx";
import Header from "../../components/common/Header/Header.jsx";
import { track_items } from "../../assets/assets";
import SecondBanner from "../../components/Banner/secondBanner.jsx";
import GetTrack from "../../components/GetTrack/GetTrack.jsx";

const Treks = () => {
  const treks = GetTrack();
  return (
    <>
      <Header />
      <SecondBanner />
      <section className="Treks-section">
        <div className="trek-allCards">
          {treks.map((item, index) => {
            return (
              <Sliders
                key={index}
                id={item.id}
                name={item.name}
                duration={item.duration}
                difficulty={item.difficulty}
                real_price={item.realPrice}
                discounted_price={item.discountedPrice}
                image={item.image}
                difficulty_image={track_items[0].difficulty_image}
                dur_image={track_items[0].dur_image}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Treks;
