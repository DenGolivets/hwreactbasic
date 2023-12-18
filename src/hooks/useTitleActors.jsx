import { useState, useEffect } from "react";
import axios from "axios";


function useTitleActors(filmId) {
    const [actorData, setActorData] = useState([]);

    useEffect(() => {
        async function makeRequest() {
            try {
            const response = await axios.get(`https://dolphin-app-pc6ii.ondigitalocean.app/article/${filmId?.id}/cast`);
            setActorData(response.data);
            } catch (error) {
            console.error(error);
            } 
        }

        makeRequest();
    }, [filmId]);

    return { actorData };
}

export default useTitleActors;