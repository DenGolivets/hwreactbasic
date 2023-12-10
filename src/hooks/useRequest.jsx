import { useState, useEffect } from "react";
import axios from "axios";

function useRequest(search) {
    const [apiData, setApiData] = useState([]);
    
    useEffect (() => {
        async function makeRequest() {
            try {
                if (search.length >= 3) {
                const response = await axios.get(
                    `https://dolphin-app-pc6ii.ondigitalocean.app/article?q=${search}`
                );
                setApiData(response.data);
        }
                if(search.length === 0) {
                    setApiData([]);
                }
                } catch (error) {
                    console.error(error);
            }
        }
        makeRequest();
    }, [search]);
    return apiData;
}

export default useRequest;

