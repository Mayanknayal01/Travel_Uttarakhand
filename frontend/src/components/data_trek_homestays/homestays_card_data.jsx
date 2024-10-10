import React from 'react';

const Homestaysdata = ({id, homestay_name, real_price, discounted_price, image, location, availability}) => {
    return (
        <div className="homestays_card">
            <img src={image} alt={homestay_name} />
            <div className="homestays_content">
                <h3>{homestay_name}</h3>
                <div className='homestays-location'>Location:- {location}</div>
                <div className="homestays-price">
                    <div>
                        <p>{availability}</p>
                    </div>
                    <div>
                        <del>₹{real_price}</del><span>({Math.floor(discounted_price/real_price*100)}% Off)</span><br />
                        <span>starting from</span>
                        <div className="discount">₹{discounted_price}
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <a href="/homestays" className="btnone">Know More</a>
                    <a href="google.com" className="btntwo">Send Query</a>
                </div>

            </div>
        </div>
    )
}

export default Homestaysdata;