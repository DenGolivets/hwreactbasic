import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleItemHeader from "../components/SingleItemHeader/SingleItemHeader";
import SingleItemTabs from "../components/SingleItemTabs/SingleItemTabs";
import useReqActor from "../hooks/useReqActor";
import ActorItem from "../components/ActorItem/ActorItem";

function FilmDetails() {
    const { filmId } = useParams();
    const [filmData, setFilmData] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

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
        name,
        rating,
        genres,
        averageRuntime,
        premiered,
        image,
        series,
        summary,
        views,
      } = filmData;
    
      const handleChangeTab = (event, newValue) => {
        setActiveTab(newValue);
      };
    
      return (
        <>
          <SingleItemHeader
              name={name}
              rating={rating}
              genres={genres}
              averageRuntime={averageRuntime}
              premiered={premiered}
              image={image}
              views={views}
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