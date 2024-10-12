import React from 'react';

const Homestaysdata = ({id, homestay_name,rating, remark, reviews, real_price, discounted_price, image, location, availability}) => {
    return (
        <div className="homestays_card">
            <div className="imageReviews">
                <img src={image} alt={homestay_name} />
                <div className="homestaysRating">
                    <div className="ratingNumber">{rating}</div>
                    <div className="itsHeading">{remark}</div>
                    <div className="itsReviews">{reviews} reviews</div>
                </div>
            </div>


            <div className="homestays_content">
                <h3>{homestay_name}</h3>
                <div className='homestays-location'>Location:- {location}</div>
                <div className="homestays-price">
                    <div className='availabilityCheck'>
                        <span className='homestayAvailable'>{availability}</span>
                    </div>
                    <div className='homestayPrize'>
                        <div className="prizeAll">
                            <del>₹{real_price}</del><span>({Math.floor(discounted_price/real_price*100)}% Off)</span><br />
                            <span>starting from</span>
                            <div className="discount">₹{discounted_price}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homestaysButtons">
                    <a href="/homestays" className="homestaysBtnone">Know More</a>
                    <a href="google.com" className="homestaysBtntwo">Send Query</a>
                </div>

            </div>
        </div>
    )
}

export default Homestaysdata;