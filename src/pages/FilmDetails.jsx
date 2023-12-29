import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleItemHeader from "../components/SingleItemHeader/SingleItemHeader";
import SingleItemTabs from "../components/SingleItemTabs/SingleItemTabs";
import ActorItem from "../components/ActorItem/ActorItem";
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from "../store/FavoritesSlice";
import cloneDeep from 'lodash/cloneDeep';
import { DEFAULT_IMAGE } from "../constans/constans";

function FilmDetails() {
    const { filmId } = useParams();
    const [filmData, setFilmData] = useState({});
    const [activeTab, setActiveTab] = useState(0);
    const dispatch = useDispatch();

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
        series,
        image,
        summary,
        views,
      } = filmData;

      // const image = filmData.image || {};
      // const imageUrl = image?.original;
      const imageUrl = filmData.image?.original || DEFAULT_IMAGE;
      
    
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
              image={imageUrl}
              views={views}
              addToFavorites={(movie) => dispatch(addToFavorites(movie))}
              // addToFavorites={() => dispatch(addToFavorites({ id, name, image }))}

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