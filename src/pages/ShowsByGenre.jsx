import React, { useEffect, useState, useRef } from "react";
import { Grid, Tabs, Tab } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from '../components/SingleCard/SingleCard'
import useReqGenre from "../hooks/useReqGenre";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const tabsContainerStyles = {
    marginTop: '30px',
    padding: '0 30px',
    '@media (min-width: 2400px)': {
        padding: '0 280px', 
    },
};

const tabStyles = {
    color: 'white',
    backgroundColor: 'rgb(34,37,39)',
    margin: '0',
    position: 'relative',
    borderTop: '2px solid transparent',
    "&.Mui-selected": {
        color: 'red',
        boxShadow: '0 0 2px 1px red',
        borderTopColor: 'red', 
        "&::before, &::after": {
            content: '""',
            position: 'absolute',
            height: '100%',
            width: '2px',
            background: 'red',
            animation: 'neonGlow 2s ease-in-out infinite alternate',
        },
        "&::before": {
            left: '-2px',
        },
        "&::after": {
            right: '-2px',
        },
    },
    "&.Mui-disabled": {
        color: 'white',
    },
    "@keyframes neonGlow": {
        "0%": {
            boxShadow: '0 0 5px 5px rgba(255, 0, 0, 0.5)',
        },
        "100%": {
            boxShadow: '0 0 5px 5px rgba(255, 0, 0, 1)',
        },
    },
};

const divStyles = {
    width: '100%',
    minHeight: '100vh',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    margin: '0', 

};

const containerCard = {
    padding: "20px",
    '@media (min-width: 2400px)': {
        margin: '0 70px',
    },
}

const theme = createTheme({
    palette: {
        primary: {
        main: red[500],
    },
        secondary: {
        main: red[500],
    },
    },
});

function ShowsByGenre () {
    const { genres } = useParams();
    const navigate = useNavigate();
    const genresFilms = useReqGenre(`https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/${genres}`);
    const [selectedGenre, setSelectedGenre] = useState(genres);

    useEffect(() => {
        setSelectedGenre(genres);
    }, [genres]);

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
        navigate(`/show/Genre/${genre}`);
    };

    const genresList = ['Action', 'Drama', 'Thriller', 'Crime', 'Comedy', 'Family', 'Fantasy', 'Horror', 'Supernatural', 'Science-Fiction', 'Romance', 'Music', 'Adventure', 'Anime', 'Medical', 'Sports', 'War', 'History'];

    return(
        <ThemeProvider theme={theme}>
        <div style={divStyles}>
        <Tabs
            value={selectedGenre}
            onChange={(event, newValue) => handleGenreClick(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="genre-tabs"
            sx={{ ...tabsContainerStyles }}
        >
            {genresList.map((genre) => (
        <Tab 
        key={genre} 
        label={genre} 
        value={genre} 
        sx={tabStyles}
        />
        ))}
        </Tabs>
        <Grid container sx={{ marginTop: '20px' }}>
        
            {genresList.includes(selectedGenre) && (
            <h2 style={{ textTransform: 'uppercase', margin: 'auto', color: 'red' }}>
                Genre: {selectedGenre}
                </h2>
            )}
            </Grid>           
            <Grid container spacing={2} className="card-container" sx={containerCard}>
                {genresFilms.map((show, index) =>  (
                    <Grid conteiner key={index}>
                        <SingleCard
                        id={show.id} 
                        name={show.name} 
                        image={show.image.medium}
                        />
                </Grid>
                ))}
            </Grid> 
        </div>
        </ThemeProvider>
    );
}

export default ShowsByGenre;