import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import { DEFAULT_IMAGE } from '../constans/constans'
import './tvshows.css'
import useReqGenre from "../hooks/useReqGenre";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import WebFont from 'webfontloader';
import BackBanner from '../img/8284344.jpg';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Button } from "@mui/material";
import { useSpring, animated } from "react-spring";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AnimatedButton = animated(Button);

function TvShows() {
  const actionFilms = useReqGenre('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Action');
  const comedyFilms = useReqGenre('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Comedy');
  const fantasyFilms = useReqGenre('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Fantasy');
  const [genres, setGenres] = useState([]);
  const [actionSwiperInitialized, setActionSwiperInitialized] = useState(false);
  const [comedySwiperInitialized, setComedySwiperInitialized] = useState(false);
  const [fantasySwiperInitialized, setFantasySwiperInitialized] = useState(false);
  const actionSwiperRef = useRef(null);
  const comedySwiperRef = useRef(null);
  const fantasySwiperRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  
  const [style, set] = useSpring(() => ({
    backgroundColor: "red",
    border: "2px solid black",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.55)",
  }));

  const handleSwiperSlideClick = (showId) => {
    navigate(`/show/${showId}`);
  };

  const handleShowMoreGenres = () => {
    navigate('/show/Genre/all'); 
  };

  const handleButtonClick = (genre) => {
    navigate(`/show/Genre/${genre}`);
  };

  const [fantasyRef, fantasyInView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    if (actionSwiperRef.current && actionSwiperRef.current.swiper) {
      const visibleSlides = 8;
      const middleIndex = Math.floor(visibleSlides / 2);
      const initialSlide = Math.max(0, middleIndex);
      actionSwiperRef.current.swiper.slideTo(initialSlide);
      setActionSwiperInitialized(true);
    }
  }, [actionFilms]);

  useEffect(() => {
    if (comedySwiperRef.current && comedySwiperRef.current.swiper) {
      const visibleSlides = 8;
      const middleIndex = Math.floor(visibleSlides / 2);
      const initialSlide = Math.max(0, middleIndex);
      comedySwiperRef.current.swiper.slideTo(initialSlide);
      setComedySwiperInitialized(true);
    }
  }, [comedyFilms]);

  useEffect(() => {
    if (fantasySwiperRef.current && fantasySwiperRef.current.swiper) {
      const visibleSlides = 8;
      const middleIndex = Math.floor(visibleSlides / 2);
      const initialSlide = Math.max(0, middleIndex);
      fantasySwiperRef.current.swiper.slideTo(initialSlide);
      setFantasySwiperInitialized(true);
    }
  }, [comedyFilms]);

        useEffect(() => {
        WebFont.load({
          google: {
            families: ['Abel', 'Roboto', 'Staatliches'], 
          },
        });
      }, []);

  return (
    <>      
        <Grid container item xs={12} sx={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${BackBanner}) top/cover no-repeat`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: '100%',
        }}>
          <div style={{  }}>
          <AnimatedButton 
            onClick={handleShowMoreGenres} 
            style={style} sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'absolute',
            left: '50%', 
            transform: 'translateX(-50%)',
            color: 'white',
            marginTop: '10px',
            '&:hover': {  
              scale: '1.1',
              transition: 'ease 2s ease-in-out',
              '@media screen and (max-width: 2400px)': {
                left: '50% !important',
                transform: 'translateX(-40%)',
              },            
            },
            }}
            >
              Show More Genres
          </AnimatedButton>
          </div>
                    <Grid item xs={12} style={{marginTop: '70px' }}>
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
                      Action Shows
                      </Typography>
                    </motion.div>
                      <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <Button onClick={() => handleButtonClick('Action')} variant="text" style={{color: 'red', backgroundColor: 'rgb(87, 85, 85)'}}>
                          Show all
                          </Button>
                        </Grid>
                    <div className="content">
                    <Grid container >
                    <Swiper
                      effect={'coverflow'}
                      loop={true}
                      rewind={true}
                      grabCursor={true}
                      centeredSlides={true}
                      spaceBetween={20}
                      slidesPerView={6}
                      coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 2.5,
                      }}
                      style={{height:'450px', marginRight: '30px', marginLeft: '30px' }}
                      speed={1500}
                      pagination={{clickable: true, bulletClass: 'my-custom-bullet', bulletActiveClass: 'my-custom-bullet-active' }}
                      modules={[EffectCoverflow, Pagination ]}
                      ref={actionSwiperRef}
                      className={`mySwiper ${actionSwiperInitialized  ? 'initialized' : ''}`}
                      >
                        {showAll
                      ? 
                      actionFilms.map((show, index) => (
                      <Grid item xs={3} key={index}>
                        <SwiperSlide className="actionslide" onClick={() => handleSwiperSlideClick(show.id)}>
                    <img src={show.image.original || DEFAULT_IMAGE} />
                      </SwiperSlide>
                      </Grid>
                        ))
                      : 
                      actionFilms.slice(0, 8).map((show, index) => (
                      <Grid item xs={3} key={index}>
                      <SwiperSlide className="actionslide" onClick={() => handleSwiperSlideClick(show.id)}>
                        <img src={show.image.original} />
                    </SwiperSlide>
                    </Grid>
                    ))}
                    </Swiper>
                      </Grid> 
              </div>
          </Grid>

          <Grid item xs={12} style={{marginTop: '100px', overflowX: 'hidden' }}>
                    <motion.div
                      initial={{ opacity: 0, x: 1000 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5, delay: 1.5 }}
                    >
                    <Typography 
                    variant="h3"
                    style={{ fontFamily: 'Staatliches' }}
                    className="names_genre"
                    >
                      Comedy Shows
                      </Typography>
                      </motion.div>
                      <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <Button onClick={() => handleButtonClick('Comedy')} variant="text" style={{color: 'red', backgroundColor: 'rgb(87, 85, 85)'}}>
                          Show all
                          </Button>
                        </Grid>
                    <div className="content">
                    <Grid container >
                    <Swiper
                      effect={'coverflow'}
                      loop={true}
                      rewind={true}
                      grabCursor={true}
                      centeredSlides={true}
                      spaceBetween={20}
                      slidesPerView={6}
                      coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 2.5,
                      }}
                      style={{height:'450px', marginRight: '30px', marginLeft: '30px' }}
                      speed={1500}
                      pagination={{clickable: true, bulletClass: 'my-custom-bullet', bulletActiveClass: 'my-custom-bullet-active' }}
                      modules={[EffectCoverflow, Pagination ]}
                      ref={comedySwiperRef}
                      className={`mySwiper ${comedySwiperInitialized  ? 'initialized' : ''}`}
                      >
                        {showAll
                      ? 
                      comedyFilms.map((show, index) => (
                      <Grid item xs={3} key={index}>
                        <SwiperSlide className="actionslide" onClick={() => handleSwiperSlideClick(show.id)}>
                    <img src={show.image.original} />
                      </SwiperSlide>
                      </Grid>
                        ))
                      : 
                      comedyFilms.slice(0, 8).map((show, index) => (
                      <Grid item xs={3} key={index}>
                      <SwiperSlide className="actionslide" onClick={() => handleSwiperSlideClick(show.id)}>
                        <img src={show.image.original} />
                    </SwiperSlide>
                    </Grid>
                    ))}
                    </Swiper>
                      </Grid> 
              </div>
          </Grid>
                  
          
          <Grid item xs={12} style={{marginBottom: '50px', marginTop: '50px', overflowX: 'hidden' }}>
            <div ref={fantasyRef}>
                    <motion.div
                      initial={{ opacity: 0, x: -1000 }}
                      animate={{ opacity: fantasyInView ? 1 : 0, x: fantasyInView ? 0 : -1000 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    >
                    <Typography 
                    variant="h3"
                    style={{ fontFamily: 'Staatliches' }}
                    className="names_genre"
                    >
                      Fantasy Shows
                      </Typography>
                      </motion.div>
                      </div>
                      <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <Button onClick={() => handleButtonClick('Fantasy')} variant="text" style={{color: 'red', backgroundColor: 'rgb(87, 85, 85)'}}>
                          Show all
                          </Button>
                        </Grid>
                    <div className="content">
                    <Grid container >
                    <Swiper
                      effect={'coverflow'}
                      loop={true}
                      rewind={true}
                      grabCursor={true}
                      centeredSlides={true}
                      spaceBetween={20}
                      slidesPerView={6}
                      coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 2.5,
                      }}
                      style={{height:'450px', marginRight: '30px', marginLeft: '30px' }}
                      speed={1500}
                      pagination={{clickable: true, bulletClass: 'my-custom-bullet', bulletActiveClass: 'my-custom-bullet-active' }}
                      modules={[EffectCoverflow, Pagination ]}
                      ref={fantasySwiperRef}
                      className={`mySwiper ${fantasySwiperInitialized  ? 'initialized' : ''}`}
                      >
                        {showAll
                      ? 
                      fantasyFilms.map((show, index) => (
                      <Grid item xs={3} key={index}>
                        <SwiperSlide className="actionslide" onClick={() => handleSwiperSlideClick(show.id)}>
                    <img src={show.image.original} />
                      </SwiperSlide>
                      </Grid>
                        ))
                      : 
                      fantasyFilms.slice(0, 8).map((show, index) => (
                      <Grid item xs={3} key={index}>
                      <SwiperSlide className="actionslide" onClick={() => handleSwiperSlideClick(show.id)}>
                        <img src={show.image.original} />
                    </SwiperSlide>
                    </Grid>
                    ))}
                    </Swiper>
                      </Grid> 
              </div>
          </Grid>
    </Grid>
      </>
  );
}

export default TvShows;