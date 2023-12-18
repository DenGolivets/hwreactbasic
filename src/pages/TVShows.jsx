import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import { DEFAULT_IMAGE } from '../constans/constans'
import './tvshows.css'
import useReqGenre from "../hooks/useReqGenre";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import Button from '@mui/material/Button';
import WebFont from 'webfontloader';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


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

  const handleButtonClick = (genre) => {
    setGenres(genre);
    setShowAll(false);
  };

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
        <Grid container item xs={12}>
                    <Grid item xs={12} style={{marginTop: '100px' }}>
                    <Typography 
                    variant="h3"
                    style={{ fontFamily: 'Staatliches' }}
                    className="names_genre"
                    >
                      Action Shows
                      </Typography>
                      <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <a style={{textDecoration:'none'}} href={`/show/Genre/${genres}`}>
                        <Button onClick={() => handleButtonClick('Action')} variant="text" style={{color: 'red', backgroundColor: 'rgb(87, 85, 85)'}}>
                          Show all
                          </Button>
                        </a>
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
                      // freeMode={true}
                      style={{height:'450px', marginRight: '30px', marginLeft: '30px' }}
                      // autoplay={{
                      //   delay: 2800,
                      //   disableOnInteraction: false,
                      // }}
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
                        <SwiperSlide className="actionslide">
                        <a href={`/show/${show.id}`}>
                    <img src={show.image.original || DEFAULT_IMAGE} />
                        </a>
                      </SwiperSlide>
                      </Grid>
                        ))
                      : 
                      actionFilms.slice(0, 8).map((show, index) => (
                      <Grid item xs={3} key={index}>
                      <SwiperSlide className="actionslide">
                        <a href={`/show/${show.id}`}>
                        <img src={show.image.original} />
                        </a>
                    </SwiperSlide>
                    </Grid>
                    ))}
                    </Swiper>
                      </Grid> 
              </div>
          </Grid>

          <Grid item xs={12} style={{marginTop: '100px' }}>
                    <Typography 
                    variant="h3"
                    style={{ fontFamily: 'Staatliches' }}
                    className="names_genre"
                    >
                      Comedy Shows
                      </Typography>
                      <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <a style={{textDecoration:'none'}} href={`/show/Genre/${genres}`}>
                        <Button onClick={() => handleButtonClick('Comedy')} variant="text" style={{color: 'red', backgroundColor: 'rgb(87, 85, 85)'}}>
                          Show all
                          </Button>
                        </a>
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
                      // freeMode={true}
                      style={{height:'450px', marginRight: '30px', marginLeft: '30px' }}
                      // autoplay={{
                      //   delay: 2800,
                      //   disableOnInteraction: false,
                      // }}
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
                        <SwiperSlide className="actionslide">
                        <a href={`/show/${show.id}`}>
                    <img src={show.image.original} />
                        </a>
                      </SwiperSlide>
                      </Grid>
                        ))
                      : 
                      comedyFilms.slice(0, 8).map((show, index) => (
                      <Grid item xs={3} key={index}>
                      <SwiperSlide className="actionslide">
                        <a href={`/show/${show.id}`}>
                        <img src={show.image.original} />
                        </a>
                    </SwiperSlide>
                    </Grid>
                    ))}
                    </Swiper>
                      </Grid> 
              </div>
          </Grid>
                  
          <Grid item xs={12} style={{marginTop: '100px' }}>
                    <Typography 
                    variant="h3"
                    style={{ fontFamily: 'Staatliches' }}
                    className="names_genre"
                    >
                      Fantasy Shows
                      </Typography>
                      <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <a style={{textDecoration:'none'}} href={`/show/Genre/${genres}`}>
                        <Button onClick={() => handleButtonClick('Fantasy')} variant="text" style={{color: 'red', backgroundColor: 'rgb(87, 85, 85)'}}>
                          Show all
                          </Button>
                        </a>
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
                      // freeMode={true}
                      style={{height:'450px', marginRight: '30px', marginLeft: '30px' }}
                      // autoplay={{
                      //   delay: 2800,
                      //   disableOnInteraction: false,
                      // }}
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
                        <SwiperSlide className="actionslide">
                        <a href={`/show/${show.id}`}>
                    <img src={show.image.original} />
                        </a>
                      </SwiperSlide>
                      </Grid>
                        ))
                      : 
                      fantasyFilms.slice(0, 8).map((show, index) => (
                      <Grid item xs={3} key={index}>
                      <SwiperSlide className="actionslide">
                        <a href={`/show/${show.id}`}>
                        <img src={show.image.original} />
                        </a>
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