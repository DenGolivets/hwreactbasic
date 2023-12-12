import { useState, useEffect } from "react";
import axios from "axios";

function usePostRequest(url, data) {
    const [apiData, setApiData] = useState([]);
    
    useEffect (() => {
        async function makeRequest() {
            try {
                if (!url || !data) {
                    setApiData([]);
                    return;
                } 
                const response = await axios.post(url, data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setApiData(response.data);
                } catch (error) {
                    console.error(error);
            }
        }
        makeRequest();
    }, [url, data]);
    return apiData;
}

export default usePostRequest;