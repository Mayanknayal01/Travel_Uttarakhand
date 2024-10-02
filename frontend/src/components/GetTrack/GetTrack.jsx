import React, { useEffect, useState } from 'react'

const GetTrack = () => {
    const [tracks, setTracks] = useState([]);

    useEffect(()=>{
        const fetchTrack = async ()=> {
            try {
                const response = await fetch("http://localhost:5000/tracks");
                if (!response.ok){
                    throw new Error("Failed to fetch tracks.");
                }
                const data  = await response.json();
                setTracks(data);
            } catch (error) {
                console.error("Error fetching tracks: ", error);
            }
        };
        fetchTrack();
    },[]);

return tracks;
}

export default GetTrack;