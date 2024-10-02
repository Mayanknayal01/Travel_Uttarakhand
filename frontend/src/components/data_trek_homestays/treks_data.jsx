import React from 'react';

const Sliders = ({id, name, duration, difficulty, real_price, discounted_price, image,difficulty_image , dur_image}) => {
    return (
        <div className="trek-card">
            <img src={image} alt={name} />
            <div className="trek-card-content">
                <h3>{name}</h3>
                <div className="details">
                    <div className="duration">
                        <img src={dur_image} alt="Duration" />
                        <span>Duration - -</span>{duration}
                    </div>
                    <div className="difficulty">
                        <img src={difficulty_image} alt="Difficulty" />
                        <span>Difficulty - -</span>{difficulty}
                    </div>
                </div>
                <div className="price">
                    <div>
                        <del>₹{real_price}</del><span>({Math.floor(discounted_price/real_price*100)}% Off)</span><br />
                        <span>starting from</span>
                        <div className="discount">₹{discounted_price}</div>
                    </div>
                </div>
                <div className="buttons">
                    <a href="/treks" className="btnone">Know More</a>
                    <a href="google.com" className="btntwo">Send Query</a>
                </div>
            </div>
        </div>
)
}

export default Sliders;