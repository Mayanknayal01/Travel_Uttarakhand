import React from "react";
import './Homestays.css';
import Header from "../../components/common/Header/Header";
import SecondBanner from "../../components/Banner/secondBanner";
import { homestays_items } from "../../assets/assets";
import Homestaysdata from "../../components/data_trek_homestays/homestays_card_data";

const Homestays = () => {
    return (
        <>
        <Header />
        <SecondBanner />
        <section className="Homestays-section">
            <div className="homestays-all-cards">
                {homestays_items.map((item, index) => {
                    return (
                        <Homestaysdata
                        key={index}
                        id={item.id}
                        homestay_name={item.homestay_name}
                        rating={item.rating}
                        remark={item.remark}
                        reviews={item.reviews}
                        real_price={item.real_price}
                        discounted_price={item.discounted_price}
                        image={item.image}
                        location={item.location}
                        availability={item.availability}
                        />
                    );
                })}
            </div>
        </section>
        </>
    )
}

export default Homestays;