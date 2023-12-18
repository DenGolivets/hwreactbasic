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

const slideMediaStyles = {
  maxWidth: '100%',
  height: '100vh',
  position: "relative",
  objectPosition: "top",
  objectFit: 'cover',
  backgroundColor: "black",
     
};

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",

};
const darkOverlayStyles = {
    content: '""',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
    width: "100%", 
    height: "100%",
    background: "radial-gradient(at right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 90%)",
  };

const showStyles = {
  position: "absolute",
  bottom: "10px",
  left: "30px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  bottom: "4.5rem",
  marginLeft: '5rem'
};

const linkStyles = {
    width: '120px',
    height: '40px',
    marginTop: '200px',
    border: '1px solid #E50914',
    background: '#E50914',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    overflow: 'hidden',
    WebkitTextFillColor: 'white',
    boxShadow: '0 0px 20px #ffffff50',
    marginBottom: '40px'  
};



function SlideCard({
  id,
  name,
  image,
  genres,
  summary,

}) {
    const { actorData } = useTitleActors({id});

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Abel', 'Roboto', 'Bungee Spice'], 
          },
        });
      }, []);
  return (
    <Card style={slideMediaStyles} className="slideCard">
      <CardMedia
        component="img"
        style={slideMediaStyles}
        image={image || DEFAULT_IMAGE}
        alt={name}
      />
      <Box sx={overlayStyles}>
      <Box sx={darkOverlayStyles}></Box>
      <Grid container>
          <Grid item xs={12}>
        <Box sx={showStyles}>
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
                width: '900px',
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
            {actorData?.slice(0, 6).map((actor) => actor.person.name).join(", ")}
            {actorData && actorData.length > 6 && ", etc"}
            </span>
        </Typography>
          <Link to={`/show/${id}`} style={linkStyles}>
            Show more
          </Link>
        </Box>
        </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default SlideCard;