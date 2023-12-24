import React, { useEffect } from 'react';
import Rating from "@mui/material/Rating";
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WebFont from 'webfontloader';
import './singleitemheader.css'
import { DEFAULT_IMAGE } from '../../constans/constans';
import { StyledWhiteCircle, StyledGrayCircle, StyledGraySquare } from './styledHeader'
import { dot, eye, googleIcon } from './graphicHeader'
import { Navigate, useNavigate } from 'react-router-dom';
import FilmGenreIcon from '../../img/FilmGenre.png'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../store/FavoritesSlice';
import { removeFromFavorites } from '../../store/FavoritesSlice';

function SingleItemHeader({ id, name, rating, genres, averageRuntime, premiered, image, views }) {

  const navigate  = useNavigate();
  const dispatch = useDispatch();

  // const favorites = useSelector((state) => state.favorites.movies);
  // const isFavorite = favorites.some((movie) => movie.id === id);
  

//   const handleAddToFavorites = () => {
//     if (isFavorite) {
//         dispatch(removeFromFavorites({ id }));
//     } else {
//         dispatch(addToFavorites({
//             id,
//             image,
//         }));
//     }
// };



  const handleGenreClick = (genre) => {
    navigate(`/show/Genre/${genre}`);
  }

      useEffect(() => {
        WebFont.load({
          google: {
            families: ['Abel', 'Roboto', 'Bungee Spice'], 
          },
        });
      }, []);

    return (
      <>
        <div
          className='Main'
          style={{ 
              background: `
              linear-gradient(rgba(255, 255, 255, 0.6),
              calc((60vw - 770px) - 370px),
              rgba(0, 0, 0, 0.5)), 
              url(${image?.original}) 
              center/cover no-repeat fixed,
              #f0e9e9
              `,
              backgroundBlendMode: 'multiply'
          }}
        >
          <div
          className='info_block' 
          >
            <div
            className='ratting_name_block'
            >
              <h1 style={{ color: "rgba(228, 228, 228)", fontSize: '38px', fontFamily: 'Bungee Spice' }}>{name}</h1>
              {rating && rating.average !== null && (
                <p
                  className='rating'
                >
                  <Rating
                    name="read-only"
                    value={rating.average / 2}
                    max={5}
                    size="medium"
                    style={{ color: "rgba(209, 46, 39)" }}
                    readOnly
                  />
                  <span
                    className='number_staring'
                  >
                    {rating.average.toFixed(1)}
                  </span>
                </p>
              )}
            </div>
            <div>
            <p
            className='pos_genre_info'
            >
              <a style={{textDecoration:'none'}} onClick={() => handleGenreClick(genres[0])} className='genreclick'>
                <div style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '20px' }}>
              <img src={FilmGenreIcon} alt="Film Genre" style={{ width: '40px', height: '40px', }} />
              </div>
              {genres ? genres[0] : ''} 
              </a>
            </p></div>
            <div className='line_objects'>
            <p
              style={{
                color: "rgb(232, 232, 232)",
                fontSize: "1em",
              }}
            >
            <span 
            style={{ 
              display: 'inline-block', 
              verticalAlign: 'middle',
              marginRight: '5px'
              }}>
              <StyledGraySquare className='graysquare-hover'>
              {googleIcon}
              </StyledGraySquare>
              </span> 
              <span style={{ marginLeft: '5px'}}>
              {averageRuntime}
              min
              </span>
              &nbsp;{dot}&nbsp;
              {premiered} 
              &nbsp;{dot}&nbsp;
              <span 
              style={{ 
                display: 'inline-block', 
                verticalAlign: 'middle' 
                }}>
              {eye}
              </span> 
              {views}
            </p>
            </div>
          </div>
          {/* <Grid style={{}}> */}
          <div style={{                 
                display: "flex",
                position: 'absolute',
                marginTop: '230px',
                marginLeft: '-5px',
                zIndex: 1,
                }}>
            <StyledGrayCircle className='graycircle-hover'>
            <StyledWhiteCircle>
            <IconButton aria-label="add to favorites">
            <ShareIcon 
            className='iconhover' 
            sx={{ 
              color: 'red', 
              width: '15px' 
              }}
              />
                </IconButton >
            </StyledWhiteCircle>
            </StyledGrayCircle>
            <StyledGrayCircle className='graycircle-hover'>
            <StyledWhiteCircle>
            <IconButton aria-label="share" 
            // onClick={handleAddToFavorites}
            >
                <FavoriteIcon 
                className='iconhovershare' 
                sx={{ color: 'red', width: '15px', 
                // color: isFavorite ? 'red' : 'black' 
              }} 
                />
            </IconButton>
            </StyledWhiteCircle>
            </StyledGrayCircle>
            <StyledGrayCircle className='graycircle-hover'>
            <StyledWhiteCircle>
            <IconButton aria-label="add" >
                <AddIcon 
                className='iconhover' 
                sx={{ 
                  color: 'red', 
                  width: '15px' 
                  }} 
                  />
            </IconButton>
            </StyledWhiteCircle>
            </StyledGrayCircle>
            </div>
            {/* </Grid> */}
          <div>
            <img
              className={`Singleimg singleimg-hover ${!image ? 'default-image-size' : ''}`}
              src={image ? image.medium || DEFAULT_IMAGE : DEFAULT_IMAGE}
              alt={name}
            />
          </div>
          <div style={{                 
                display: 'flex',
                position: 'absolute',
                marginTop: '280px',
                marginLeft: '-18px',

                }}> 
          <Grid sx={{display:'flex',
                  direction:"row",
                  justifyContent: 'space-between',
                  marginLeft:'20px',
                }}>
            <LocalOfferIcon sx={{color:'red', marginTop:'40px'}}/>
            <Typography variant="body1"
            className='tags'
            sx={{
              fontWeight:'600', 
              marginRight:'20px', 
              color:'rgb(225, 0, 0)',
              marginTop: '40px',
              }} color="white">
              TAGS: 
            </Typography>
            <Typography variant="body2" className='tagsgenre' sx={{ fontWeight: '400', fontSize: '1em', marginTop: '40px', color: 'white' }} >
  {genres?.map((genre, index) => (
    <React.Fragment key={index}>
      {index > 0 && ', '}
      <a style={{ textDecoration: 'none' }} onClick={() => handleGenreClick(genre)} className='tagsgenre_a'>
        {genre}
      </a>
    </React.Fragment>
  ))}
</Typography>
        </Grid>
        </div>
        </div>
        </>
);
}

  export default SingleItemHeader;