import React from 'react';

const slider_dist = ({id, dist_img, name}) => {
    return (
        <div>
            <img src={dist_img} alt="nainital" />
            <p className="image-caption">{name}</p>
        </div>
    )
}

export default slider_dist;