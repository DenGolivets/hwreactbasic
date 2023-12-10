import { useState, useEffect } from "react";
import axios from "axios";

function usePopular() {
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    async function makeRequest() {
      try {
        const response = await axios.get(`https://dolphin-app-pc6ii.ondigitalocean.app/article/popular`);
        setPopularData(response.data);
      } catch (error) {
        console.error(error);
      } 
    }
    makeRequest();
  }, []);

  return { popularData };
}

export default usePopular;