import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function useReqActor() {
  const { filmId } = useParams();
  const [actorData, setActorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function makeRequest() {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://dolphin-app-pc6ii.ondigitalocean.app/article/${filmId}/cast`);
        setActorData(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    makeRequest();
  }, [filmId]);

  return { actorData, loading, error };
}

export default useReqActor;

