import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function useReqActor() {
  const { filmId } = useParams();
  const [actorData, setActorData] = useState([]);

  useEffect(() => {
    async function makeRequest() {
      try {
        const response = await axios.get(`https://dolphin-app-pc6ii.ondigitalocean.app/article/${filmId}/cast`);
        setActorData(response.data);
      } catch (error) {
        console.error(error);
      } 
    }

    makeRequest();
  }, [filmId]);

  return { actorData };
}

export default useReqActor;

