import { useEffect, useState, useRef } from "react";
import useRequest from "../hooks/useRequest";
import Grid from "@mui/material/Grid";
import SingleCard from "../components/SingleCard/SingleCard";
import { useDispatch, useSelector } from "react-redux";
import { action, setSearch } from "../store/SearchSlice";
import { DEFAULT_IMAGE } from "../constans/constans";
import BackBanner from '../img/5713094.jpg';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import './home.css'
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import { motion } from "framer-motion";
import WebFont from 'webfontloader';
import TextField from '@mui/material/TextField';

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

const searchInputStyle = {
    '& .MuiInputBase-input': {
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height: '30px',
        borderRadius: '10px',
        paddingLeft: '10px',
        width: '300px',
        transition: 'width 0.5s ease',
        '&:focus': {
            width: '400px',
        },
    },
    '& label': {
        color: 'red',
        transition: 'font-size 0.5s ease',
        '&.MuiInputLabel-outlined': {
            fontSize: '16px',
        },
        '&.MuiInputLabel-outlined.MuiInputLabel-shrink': {
            fontSize: '18px',
        },
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
        transform: 'translate(14px, -6px) scale(0.75)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
    },
};

function Home() {

    const [favorites, setFavorites] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const apiSearch = useSelector((state) => state.search.search);
    const [apiSearchError, setApiSearchError] = useState(false);
    const searchRef = useRef("");
    const dispatch = useDispatch();
    const apiData = useRequest(apiSearch);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [playlist, setPlaylist] = useState([
        "https://www.youtube.com/watch?v=XJMuhwVlca4&ab_channel=WarnerBros.Pictures",
        "https://www.youtube.com/watch?v=4cSkHPW-MPE&ab_channel=WarnerBros.Pictures",
    ]);
    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) =>
          prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
        );
      };



    const addToFavorites = (movie) => {
        setFavorites((prevFavorites) => [...prevFavorites, movie]);
    };

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 8;
    const totalPages = Math.ceil(apiData.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = apiData.slice(startIndex, endIndex);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    
    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect (() => {
        searchRef.current.focus();
    }, [])
    
    const handleCardClick = (id) => {
        setSelectedFilm(id)
    };
    
    const handleSearch = (e) => {
        dispatch(setSearch(e.target.value));
    };

    useEffect(() => {
        WebFont.load({
            google: {
            families: ['Abel', 'Roboto', 'Staatliches'], 
        },
        });
    }, []);

    useEffect(() => {
        if (apiSearch.length >= 1 && apiSearch.length < 3) {
            setPopoverOpen(true);
        } else {
            setPopoverOpen(false);
        }
    }, [apiSearch]);

    
    
        return (
            <>
            
            <div style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${BackBanner}) center/cover no-repeat`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: '100%',
                // backgroundAttachment: 'fixed'
                }} 
            className="main-container"
            >
            <Grid container pt={5}
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}        
            >
            <TextField  
            type='search' 
            sx={searchInputStyle}
            value={apiSearch} 
            onChange={handleSearch} 
            ref={searchRef}
            id="outlined-search"
            label="Search field"
            variant="outlined"
            />
                {popoverOpen && (
                        <Typography
                            sx={{
                                position: 'absolute',
                                marginTop: '64px',
                                left: '45%',
                                transform: 'translateX(-50%)',
                                color: 'red',
                                fontWeight: 'bold'
                            }}
                        >
                            Need more letters
                        </Typography>
                    )}
              </Grid>
              {visibleData?.length > 0 ? (
              <Grid container spacing={2} sx={{ padding: "20px" }} className="film-container">
              {visibleData?.map(({ id, name, image }, index) => (
              <Grid item xs={3} key={index}>
              <SingleCard
              id={id}
              name={name}
              image={image ? image.medium || DEFAULT_IMAGE : DEFAULT_IMAGE}
              onClick={() => handleCardClick(id)}
              onAddToFavorites={() => addToFavorites({ id, name, image })}
              />
              </Grid>
              ))}
              </Grid>
                ) : (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        marginTop: '100px'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, x: -1000 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, delay: 1 }}
                        >
                            <Typography
                                variant="h3"
                                style={{ fontFamily: 'Staatliches' }}
                                className="names_genre"
                            >
                                Coming Soon...
                            </Typography>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 1000 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, delay: 1.5 }}
                        >
                            <VideoPlayer playlist={playlist} currentVideoIndex={currentVideoIndex} handleVideoEnd={handleVideoEnd} />
                        </motion.div>
                    </div>
                )}
              {visibleData.length > 0 && (
              <div className="button-container">
                <ButtonGroup>
                    <StyledButton onClick={goToPrevPage} disabled={currentPage === 1} variant="contained" disableElevation>
                    Previous
                    </StyledButton>
                    <Button disabled style={{ margin: '0 10px', backgroundColor: 'rgba(0, 0, 0, 0.2)' ,color: 'white', fontWeight: 'bold', border: '1px solid red', borderRadius: '6px' }}>
                        {`Page ${currentPage} of ${totalPages}`}
                    </Button>
                    <StyledButton onClick={goToNextPage} disabled={currentPage === totalPages} variant="contained" disableElevation>
                    Next
                    </StyledButton>
                </ButtonGroup>
                </div>
                )}
            </div>
        </>
    );
}

export default Home;
