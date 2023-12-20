import React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { DEFAULT_IMAGE } from "../../constans/constans";
import WebFont from 'webfontloader';
import useTitleActors from "../../hooks/useTitleActors";
import { useTheme } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import * as styles from './styledSingleCard'
// import './styles.css'
import styled from '@emotion/styled';
import { styledAnimationImg } from "./styledAnimationImg";
import { StyledCardMedia } from "./styledSingleCard";
import BackBanner from '../../img/bannerbackground.jpg'

function SlideCard({
  id,
  name,
  image,
  genres,
  summary,
  index,
}) {
    const { actorData } = useTitleActors({id});
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up(2300));

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Abel', 'Roboto', 'Bungee Spice'], 
          },
        });
      }, []);

      const showStyles = isLargeScreen ? { ...styles.commonStyles , ...styles.largeScreenStyles } : styles.commonStyles;

  return (
    <Card style={styles.slideMediaStyles} className="slideCard">
      <Box sx={styles.containerStyles}>

      <Box sx={styles.infoContainerStyles}>
      <Box sx={styles.overlayStyles}>
      <Box sx={{
        ...styles.darkOverlayStyles, 
        background: `url(${BackBanner}) center/cover no-repeat`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
        }}
        >
      </Box>
      <Grid container>
          <Grid item xs={12}>
        <Box sx={showStyles} className='showstyles'>
          <Typography 
            style={{
              margin: "4px 0 4px",
              textAlign: "left",
              fontSize: '78px',
              color: "rgba(228, 228, 228)",
              fontFamily: 'Bungee Spice'
            }}
          >
            {name}
            <Typography>
            <div
            dangerouslySetInnerHTML={{ __html: summary }}
            style={{
                margin: "10px 0",
                width: '800px',
                color: "white",
                textAlign: "left",
            }}
          >
          </div>
          </Typography>
          </Typography>
          <Typography
            style={{
              margin: "4px 0 15px",
              textAlign: "left",
            }}
          >
           <span
           style={{
            color:'#ef233c',
            fontWeight: 'bold'
           }}
           > Genres:
           </span>
           &nbsp;&nbsp;&nbsp;&nbsp;
           {genres?.join(', ')}
          </Typography>
          <Typography
          style={{
            margin: "4px 0 15px",
            textAlign: "left",
          }}
        >
          <span
            style={{
              color: "#ef233c",
              fontWeight: "bold",
            }}
          >
            Actors:
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ color: 'white' }}> 
            {actorData?.slice(0, 4).map((actor) => actor.person.name).join(", ")}
            {actorData && actorData.length > 4 && ", etc"}
            </span>
        </Typography>
          <Link to={`/show/${id}`} style={styles.linkStyles}>
            Show more
          </Link>
        </Box>
        </Grid>
        </Grid>
      </Box>
      </Box>
      <Box sx={styles.imageContainerStyles}>
      <StyledCardMedia
        component="img"
        style={{
          ...styles.slideMediaStyles,
          ...styledAnimationImg[index],
        }}
        image={image || DEFAULT_IMAGE}
        alt={name}
      />
      </Box>
      </Box>
    </Card>
  );
}

export default SlideCard;