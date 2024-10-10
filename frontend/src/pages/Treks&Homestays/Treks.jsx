import React from 'react';
import './Treks.css';
import Sliders from "../../components/data_trek_homestays/treks_card_data.jsx";
import Header from "../../components/common/Header/Header.jsx";
import { track_items } from '../../assets/assets';
import SecondBanner from '../../components/Banner/secondBanner.jsx';

const Treks = () => {
    return (
        <>
            <Header />
            <SecondBanner />
            <section className='Treks-section'>
                <div className="trek-allCards">
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
                            difficulty_image={item.difficulty_image}
                            dur_image={item.dur_image}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    )
}

export default Treks;
