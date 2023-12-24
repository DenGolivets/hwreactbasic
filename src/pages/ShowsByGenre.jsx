import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from '../components/SingleCard/SingleCard'
import useReqGenre from "../hooks/useReqGenre";
import { useParams } from "react-router-dom";


function ShowsByGenre () {
    const { genres } = useParams();
    const genresFilms = useReqGenre(`https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/${genres}`);

    return(
        <div style={{
            width: '100%',
            minHeight: '100vh',
            height: '100%',
            overflow: 'hidden',
            position: 'relative'
        }}>
        <Grid container sx={{marginTop:'20px'}}>
            <h2 style={{textTransform:'uppercase', margin:'auto', color: 'red'}}>Genres: {genres}</h2> 
            
            <Grid container spacing={2} sx={{ padding: "20px" }} className="card-container">
                {genresFilms.map((show, index) =>  (
                    <Grid conteiner key={index} className="single-card-container">
                        <SingleCard
                        id={show.id} 
                        name={show.name} 
                        image={show.image.medium}>
                        </SingleCard>
                </Grid>
                ))}
            </Grid> 
        </Grid>
        </div>
    )
}

export default ShowsByGenre;