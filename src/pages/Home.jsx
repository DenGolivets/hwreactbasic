import { useEffect, useState, useRef } from "react";
import useRequest from "../hooks/useRequest";
import Grid from "@mui/material/Grid";
import SingleCard from "../components/SingleCard/SingleCard";
import { useDispatch, useSelector } from "react-redux";
import { action, setSearch } from "../store/SearchSlice";
import { DEFAULT_IMAGE } from "../constans/constans";
import BackBanner from '../img/bannerbackground.jpg';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './home.css'


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

  const HeroImage = styled('img')({
    position: 'absolute',
    top: '0',
    left: '1070px',
    width: '90px',
    height: '90px',

    zIndex: '1', 
  });

    

function Home() {

    const [favorites, setFavorites] = useState([]);
    const [setSelectedFilm] = useState(null);
    const apiSearch = useSelector((state) => state.search.search);
    const searchRef = useRef("");
    const dispatch = useDispatch();
    const apiData = useRequest(apiSearch);

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
    }
        return (
            <>
            
            <div style={{
                background: `url(${BackBanner}) center/cover no-repeat`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                }} 
            className="main-container"
            >
            <Grid container pt={5}
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}        
            >
            <input type='text' style={{
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                height: '30px',
                border: 'none',
                marginLeft: '50px',
              }}
              value={apiSearch} onChange={handleSearch} ref={searchRef} />
              </Grid>
              {visibleData.length > 0 && (
              <Grid container spacing={2} sx={{ padding: "20px" }} className="film-container">
              {visibleData?.map(({ id, name, image }, index) => (
              <Grid item xs={3} key={index}>
              <SingleCard
              id={id}
              name={name}
              image={image ? image.medium || DEFAULT_IMAGE : DEFAULT_IMAGE}
            //   onClick={handleCardClick}
            //   onAddToFavorites={addToFavorites}
              onClick={() => handleCardClick(id)}
              onAddToFavorites={() => addToFavorites({ id, name, image })}
              />
              </Grid>
              ))}
              </Grid>
              )}
              </div>
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
              </>
        );
        }
    
    export default Home;
