import { useState, useEffect } from "react";
import axios from "axios";


function useFilmData(id) {
    const apiSearch = useSelector((state) => state.search.search);
    const [filmData, setFilmData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await axios.get(
              `https://dolphin-app-pc6ii.ondigitalocean.app/article/${id}`
            );
            setFilmData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [id]);
  
    return filmData;
  }
  
  export default useFilmData;
