import { useEffect, useState } from 'react';

const useTracks = () => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const response = await fetch("http://localhost:5000/tracks");
                if (!response.ok) {
                    throw new Error("Failed to fetch tracks.");
                }
                const data = await response.json();
                setTracks(data);
            } catch (error) {
                console.error("Error fetching tracks: ", error);
            }
        };
        fetchTracks();
    }, []);

    return tracks;
}

export default useTracks;
