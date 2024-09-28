import React from 'react';
import './Treks.css';
import Sliders from "../../components/Sliders/Sliders.jsx";
import AdminHeader from "../../components/common/Header/AdminHeader";
import { track_items } from '../../assets/assets';

const Treks = () => {
    return (
        <>
            <AdminHeader />
            <section className='Treks-section'>
                <h1>All Treks</h1>
                <div className="allCards">
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
