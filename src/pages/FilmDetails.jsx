import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleItemHeader from "../components/SingleItemHeader/SingleItemHeader";
import SingleItemTabs from "../components/SingleItemTabs/SingleItemTabs";
import ActorItem from "../components/ActorItem/ActorItem";

function FilmDetails() {
    const { filmId } = useParams();
    const [filmData, setFilmData] = useState({});
    const [activeTab, setActiveTab] = useState(0);
    // const [favorites, setFavorites] = useState([]);

//     const addToFavorites = (movie) => {
//       setFavorites((prevFavorites) => [...prevFavorites, movie]);
//   };

//   const handleCardClick = (id) => {
//     setFilmData(id)
// };

    useEffect(() => {
        async function fetchFilmData() {
          try {
            const response = await axios.get(
              `https://dolphin-app-pc6ii.ondigitalocean.app/article/${filmId}`
            );
            
            setFilmData(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        fetchFilmData();
      }, [filmId]);

      const {
        id,
        name,
        rating,
        genres,
        averageRuntime,
        premiered,
        image,
        series,
        summary,
        views
      } = filmData;
    
      const handleChangeTab = (event, newValue) => {
        setActiveTab(newValue);
      };
    
      return (
        <>
          <SingleItemHeader
              id={id}
              name={name}
              rating={rating}
              genres={genres}
              averageRuntime={averageRuntime}
              premiered={premiered}
              image={image}
              views={views}
              // onClick={handleCardClick}
              // onAddToFavorites={addToFavorites}
              // onClick={() => handleCardClick(id)}
              // onAddToFavorites={() => addToFavorites({ id, name, image })}
          />
            <SingleItemTabs
              activeTab={activeTab}
              handleChangeTab={handleChangeTab}
              genres={genres}
              summary={summary}
              series={series}
          />
          <ActorItem />
        </>
      );
    }

export default FilmDetails;