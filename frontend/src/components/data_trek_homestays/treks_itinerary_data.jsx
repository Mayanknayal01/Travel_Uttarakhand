import React, {useState} from 'react';
import { itinerary_elements } from '../../assets/assets';

const TreksData = ({id, banner, name, heading, duration, difficulty, altitude, distance, transportation, meals, season, type, overview, toggle_heading, days_detail, highlights 
}) => {
    
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <div className="itinerary">

            <div className="itinerary_banner">
                <div className="itinerary_inner"
                style={{
                    backgroundImage: `url(${banner})`,
                    height: '700px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                </div>
                <h1>{name}</h1>
            </div>
            <div className="itinerary_first">
                <div className="itinerary_heading">
                    <h2>{heading}</h2>
                </div>    
                <div className="itinerary_grid">
                    <div className="itinerary_details">
                        <div className="itinerary_elements">
                            <div className="itinerary_duration same">
                                <img src={itinerary_elements.duration} alt="duration_image" />
                                <span><b>Duration - -</b></span>{duration}
                            </div>
                            <div className="itinerary_difficulty same">
                                <img src={itinerary_elements.difficulty} alt="difficulty_image" />
                                <span><b>Difficulty - -</b></span>{difficulty}
                            </div>
                            <div className="itinerary_altitude same">
                                <img src={itinerary_elements.altitude} alt="altitude_image" />
                                <span><b>Altitude - -</b></span>{altitude}
                            </div>
                            <div className="itinerary_distance same">
                                <img src={itinerary_elements.distance} alt="distance_image" />
                                <span><b>Distance - -</b></span>{distance}
                            </div>
                            <div className="itinerary_transportation same">
                                <img src={itinerary_elements.transportation} alt="transportation_image" />
                                <span><b>Transportation - -</b></span>{transportation}
                            </div>
                            <div className="itinerary_meals same">
                                <img src={itinerary_elements.meals} alt="meals_image" />
                                <span><b>Meals - -</b></span>{meals}
                            </div>
                            <div className="itinerary_season same">
                                <img src={itinerary_elements.season} alt="season_image" />
                                <span><b>Best Season - -</b></span>{season}
                            </div>
                            <div className="itinerary_type same">
                                <img src={itinerary_elements.type} alt="group_image" />
                                <span><b>Trek Type - -</b></span>{type}
                            </div>
                        </div>
                    </div>
                    {/* <div className="itinerary_pic">
                        <img src={second_img} alt={trek_name} />
                    </div> */}
                </div>
            </div>
            <div className="itinerary_second">
                <div className="overview_itinerary">
                    <div className="itinerary_overview">
                        <h1>Overview</h1>
                        <p>{overview}</p>
                    </div>
                    <div className="itinerary_days_details">
                    <h1>Itinerary</h1>
                    <div className="days">
                        <button onClick={toggleExpand} className='trek_itinerary_toggle_button'>
                            {isExpanded ? '-' : '+'} {toggle_heading}
                        </button>
                        <div className={`days-content ${isExpanded ? 'expanded' : ''}`}>
                            {isExpanded && (
                                <div className="expanded_content">
                                    <p>{days_detail}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                </div>
                <div className='itinerary_highlight'>
                    <div className="highlight_pic">
                        <img src={itinerary_elements.highlight} alt="highlight" />
                        <h2>Highlights</h2>
                    </div>
                    <div className='scroll'>
                        <ul>
                            <li>{highlights}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="itinerary_fourth">
                
                <div className="unknown">

                </div>
            </div>
            <div className="itinerary_third itinerary_mid_banner">
                <img src={itinerary_elements.i_m_banner} alt="mid banner" />
            </div>
        </div>
    )
}

export default TreksData;