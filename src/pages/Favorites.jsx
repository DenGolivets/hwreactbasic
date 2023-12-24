import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import SingleCard from '../components/SingleCard/SingleCard';
import Fab from '@mui/material/Fab';
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import WebFont from 'webfontloader';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/system';
import './favorites.css';

const StyledButton = styled(Button)({
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'black',
      color: 'red',
      cursor: 'pointer',
    },
});

function Favorites() {

    const navigate = useNavigate();
    const location = useLocation();
    const favorites = useSelector((state) => state.favorites.movies);
    const itemsPerPage = 8;
    const [isHeartClicked, setIsHeartClicked] = React.useState(false);

    const urlParams = new URLSearchParams(location.search);
    const currentPage = parseInt(urlParams.get('page'), 10) || 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleFavorites = favorites.slice(startIndex, endIndex);

    const totalPages = Math.ceil(favorites.length / itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            navigate(`/favorites?page=${nextPage}`);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            
            navigate(`/favorites?page=${prevPage}`);
        }
    };

    useEffect(() => {
        WebFont.load({
            google: {
            families: ['Abel', 'Roboto', 'Staatliches'], 
            },
        });
    }, []);

    const handleCardClick = (id) => {
        navigate(`/favorites/${id}?page=${currentPage}`);
    };

    useEffect(() => {
        if (favorites.length === 0 && currentPage > 1) {

            navigate(`/favorites?page=${currentPage}`);
        }
    }, [favorites, currentPage, navigate]);

    useEffect(() => {
        if (currentPage > 1 && visibleFavorites.length === 0) {
            navigate(`/favorites?page=${currentPage - 1}`);
        }
    }, [visibleFavorites, currentPage, navigate]);

    const handleHeartClick = () => {
        setIsHeartClicked(true);
        setTimeout(() => {
            setIsHeartClicked(false);
        }, 300);
    };

    return (
        <div className={`mainfav ${isHeartClicked ? 'clicked' : ''}`}>
            <Typography 
                variant="h3"
                style={{ fontFamily: 'Staatliches', marginTop: '30px', position: 'relative' }}
                className="names_genre"
            >
                <span style={{ position: 'relative', top: '15px' }}>
                My Favorites
                </span>
                <span 
                className={`heart ${isHeartClicked ? 'clicked' : ''}`}
                style={{ fontSize: '1.7rem', position: 'relative', top: '5px', left: '10px' }}
                onClick={handleHeartClick}
                >
                    &#10084;&#65039;
                    <div className="hammer">🔨</div>
                </span>
                </Typography>
                {favorites.length === 0 ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                <div style={{
                    position: 'relative',
                    top: '160px',
                }}>
                <Typography
                sx={{
                    color: 'White',
                }}
                >
                    Empty. Please, adding something shows...
                </Typography>
                </div>
                <div style={{
                    position: 'relative',
                    top: '200px'
                }}>
                    <Link to="/home">
                <Fab color="primary" aria-label="add">
                <AddIcon sx={{
                    color: 'white',
                }} 
                />
                </Fab>
                </Link>
                </div>
                </div>
                ) : (
                    <>
            <Grid container spacing={2} sx={{ padding: "20px" }} className="card-container">
            {visibleFavorites.map(({ id, name, image }, index) => (
                <Grid item xs={3} key={index} className="single-card-container">
                <SingleCard
                    id={id}
                    name={name}
                    image={image}
                    onClick={() => handleCardClick(id)}
                />
            </Grid>
            ))}
            </Grid>
            <div className="button-container">
            <ButtonGroup>
                <StyledButton onClick={goToPrevPage} disabled={currentPage === 1} variant="contained" disableElevation>
                    Prev
                </StyledButton>
                <Button disabled style={{ margin: '0 10px', backgroundColor: 'rgba(0, 0, 0, 0.2)' ,color: 'white', fontWeight: 'bold', border: '1px solid red', borderRadius: '6px' }}>
                    {`Page ${currentPage} of ${totalPages}`}
                </Button>
                <StyledButton onClick={goToNextPage} disabled={currentPage === totalPages} variant="contained" disableElevation>
                    Next
                </StyledButton>
                </ButtonGroup>
            </div>
            </>
            )}
        </div>
    );
}

export default Favorites;