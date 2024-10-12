import React, { useEffect, useState } from 'react';
import './Trek_itinerary.css';
import TreksData from "../../components/data_trek_homestays/treks_itinerary_data.jsx";
import Header from '../../components/common/Header/Header.jsx';
import { useParams } from 'react-router-dom';

const TrekItinerary = () => {
    const [trekDetails, setTrekDetails] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        const fetchTrekDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/trekdetails/${id}`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setTrekDetails(data);
            } catch (error) {
                console.error('Error fetching trek details:', error);
            }
        };

        fetchTrekDetails();
    }, [id]);

    if (!trekDetails) {
        return <p>Loading...</p>; // Or some loading indicator
    }
    
    

    return (
        <>
            <Header />
            <section className="allItinerary">
                
                        <TreksData
                        key={trekDetails.id}
                        id={trekDetails.id}
                        mainImage={trekDetails.mainImage}
                        banner={trekDetails.banner}
                        trek_name={trekDetails.name}
                        heading={trekDetails.heading}
                        duration={trekDetails.duration}
                        difficulty={trekDetails.difficulty}
                        altitude={trekDetails.altitude}
                        distance={trekDetails.distance}
                        transportation={trekDetails.transportation}
                        meals={trekDetails.meals}
                        season={trekDetails.bestSeason}
                        type={trekDetails.trekType}
                        overview={trekDetails.overview}
                        toggle_heading={trekDetails.dayHighlight}
                        days_detail={trekDetails.dayExplain}
                        highlights={trekDetails.highlight}
                        />
            </section>
        </>
    )
}

export default TrekItinerary;