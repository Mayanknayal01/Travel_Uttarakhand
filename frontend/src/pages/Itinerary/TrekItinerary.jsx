import React from 'react';
import './Trek_itinerary.css';
import TreksData from "../../components/data_trek_homestays/treks_itinerary_data.jsx";
import Header from '../../components/common/Header/Header.jsx';
import { itinerary_items } from '../../assets/assets.js';

const TrekItinerary = () => {
    return (
        <>
            <Header />
            <section className="allItinerary">
                {itinerary_items.map((item, index) => {
                    return (
                        <TreksData
                        key={index}
                        id={item.id}
                        banner={item.banner}
                        trek_name={item.trek_name}
                        second_img={item.second_img}
                        heading={item.heading}
                        duration={item.duration}
                        difficulty={item.difficulty}
                        altitude={item.altitude}
                        distance={item.distance}
                        transportation={item.transportation}
                        meals={item.meals}
                        season={item.season}
                        type={item.type}
                        overview={item.overview}
                        highlights={item.highlights}
                        />
                    );
                })}
            </section>
        </>
    )
}

export default TrekItinerary;