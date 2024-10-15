import React from 'react';
import './HomestaysItinerary.css';
import Header from '../../components/common/Header/Header.jsx';
import { homestaysItineraryArray } from '../../assets/assets.js';
import HomestaysItineraryData from '../../components/data_trek_homestays/HomestaysItineraryData.jsx';



const HomestaysItinerary = () => {

    const headerStyle = {
        backgroundColor: 'blue',
        position: 'static',
    };
    
    return (
        <>
            <Header style={headerStyle}/>
            <section className="allHomestaysItinerary">
                {homestaysItineraryArray.map((items,index) => {
                    return(
                    <HomestaysItineraryData
                        key={index.id}
                        id={items.id}
                        imageOne={items.imageOne}
                        imageTwo={items.imageTwo}
                        imageThree={items.imageThree}
                        imageFour={items.imageFour}
                        imageFive={items.imageFive}
                        detailsOneHeading={items.detailsOneHeading}
                        detailsOneBed={items.detailsOneBed}
                        detailsOneLocation={items.detailsOneLocation}
                        checkIn={items.checkIn}
                        checkOut={items.checkOut}
                        moreDetails={items.moreDetails}
                        someMoreDetails={items.someMoreDetails}
                        specificationBed={items.specificationBed}
                        price={items.price}
                        />
                    )
                })};
            </section>
        </>
)
}

export default HomestaysItinerary;
