import React from 'react';



function HomestaysItineraryData({ id, imageOne, imageTwo, imageThree, imageFour, imageFive, detailsOneHeading, detailsOneBed, detailsOneLocation, checkIn, checkOut, moreDetails, someMoreDetails, specificationBed, price }) {
    return (
        <div className="homestaysItinerary">
            <div className="firstItineraryHomestays">
                <div className="itsone">
                    <img src={imageOne} alt="oneImage" />
                </div>
                <div className="itstwo">
                    <img src={imageTwo} alt="TwoImage" />
                    <img src={imageThree} alt="ThreeImage" />
                </div>
                <div className="itsthree">
                    <img src={imageFour} alt="FourImage" />
                    <img src={imageFive} alt="FiveImage" />
                </div>
            </div>
            <div className="homestaysDetails">
                <div className="detailsOne">
                    <div className="detailsOneFirst">
                        <h2>{detailsOneHeading}</h2>
                        <p>{detailsOneBed}</p>
                        <p>{detailsOneLocation}</p>
                    </div>
                    <div className="detailsOneSecond">
                        <div className="detailsOneSecondFirst">
                            <div className="detailsOneCheckIn">
                                <h5>Check In</h5>
                                <p>{checkIn}</p>
                            </div>
                            <div className="detailsOneCheckOut">
                                <h5>Check Out</h5>
                                <p>{checkOut}</p>
                            </div>
                        </div>
                        <div className="detailsOneSecondSecond">
                            <p>{moreDetails}</p>
                        </div>
                        <div className="detailsOneSecondThird">
                            <p>{someMoreDetails}</p>
                        </div>
                    </div>
                </div>
                <div className="detailsSecond">
                    <div className="detailsSecondOne">
                        <div className="detailsSecondOneFirst">
                            <h5>{detailsOneBed}</h5>
                            <p>{specificationBed}</p>
                        </div>
                        <div className="detailsSecondOneSecond">
                            <h5>Rs {price}/-</h5>
                            <p>(per night)</p>
                            <p>Refund as per policy</p>
                        </div>
                    </div>
                    <div className="detailsSecondTwo">
                        <div className="detailsSecondCheckIn">
                                <h5>Check In</h5>
                                <p>{checkIn}</p>
                            </div>
                            <div className="detailsSecondCheckOut">
                                <h5>Check Out</h5>
                                <p>{checkOut}</p>
                            </div>
                        </div>
                    <div className="detailsSecondThree">
                        <button>Enquire Now</button>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomestaysItineraryData;
