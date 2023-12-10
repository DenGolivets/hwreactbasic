import React from "react";
import Grid from "@mui/material/Grid";
import SingleCard from '../components/SingleCard/SingleCard'
import usePopular from '../hooks/usePopular'
import { DEFAULT_IMAGE } from '../constans/constans'
import './tvshows.css'


function TvShows() {
  const { popularData } = usePopular();

  return (
    <>
      <div
      style={{
        textAlign: 'center',
        marginTop: '40px',
        color: 'red'
      }}
      >
        <h1
        className="popular_show_text"
        style={{ 
        margin: '0',
        padding: '10px',
        marginLeft: '850px',
        textTransform: 'uppercase'
        }}
        >Popular Shows</h1>
      </div>
      <Grid container pt={2} spacing={4}
        sx={{ display: "flex", justifyContent: "center", }}
      >
            {popularData.map(({ name, image, id, premiered }) => (
              <SingleCard
                key={id}
                id={id}
                name={name}
                premiered={premiered}
                image={image ? image.original || DEFAULT_IMAGE : DEFAULT_IMAGE}
              />
              ))}
      </Grid>   
      </>
  );
}

export default TvShows;