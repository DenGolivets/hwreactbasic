import React, { useEffect, useState } from 'react';
import Rating from "@mui/material/Rating";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import GoogleIcon from '@mui/icons-material/Google';
import { styled } from '@mui/system';
import WebFont from 'webfontloader';
import './singleitemheader.css'
import { DEFAULT_IMAGE } from '../../constans/constans';


const StyledWhiteCircle = styled('div')({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  // backgroundColor: 'rgba(53,58,58,1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '2px'
  
});

const StyledGrayCircle = styled('div')({
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  backgroundColor: 'rgba(53,58,58,1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '15px'
});

const StyledGraySquare = styled('div')({
  width: '24px',
  height: '24px',
  backgroundColor: 'rgba(53,58,58,1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

});

const dot = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const eye = (
    <Box
    component="icon"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.6)', color: 'white' }}
  >
    <VisibilityIcon />
  </Box>
  )

  const googleIcon = (
    <Box
    component="icon"
    sx={{ display: 'inline-block', justifyContent: 'center', alignItems: 'center', mx: '2px', transform: 'scale(0.6)', color: 'white' }}
  >
    <GoogleIcon />
  </Box>
  )




function SingleItemHeader({ name, rating, genres, averageRuntime, premiered, image, views }) {

      useEffect(() => {
        WebFont.load({
          google: {
            families: ['Abel', 'Roboto', 'Bungee Spice'], 
          },
        });
      }, []);

    return (
      <>
       {genres && genres.length > 0 && (
        <div
          className='Main'
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
              {genres[0]}
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
            <IconButton aria-label="share" >
                <FavoriteIcon 
                className='iconhover' 
                sx={{ color: 'red', width: '15px' 
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
            <Typography variant="body2" sx={{fontWeight:'400', fontSize: '1em', marginTop: '40px'}} color="white">
              {genres.join(', ')} 
            </Typography>
        </Grid>
        </div>
        </div>
        )}
        </>
);
}

  export default SingleItemHeader;