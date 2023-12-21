import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { Grid, Typography, IconButton, Box, Link } from "@mui/material";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import PostAddIcon from '@mui/icons-material/PostAdd';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Stack from '@mui/material/Stack';
import WebFont from 'webfontloader';
import { DEFAULT_IMAGE, DEFAULT_ACTOR_IMAGE } from "../constans/constans";
import './actorPage.css';

function ScrollToTopOnPageChange() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}

function ActorPage() {
    const { actorId } = useParams();
    const [actorInfo, setActorInfo] = useState([]);


    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Abel', 'Roboto', 'Staatliches'], 
          },
        });
      }, []);

    useEffect(() => {
        async function fetchActorData() {
          try {
            const response = await axios.get(
              `https://dolphin-app-pc6ii.ondigitalocean.app/article/actor/${actorId}`
            );
            setActorInfo(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        fetchActorData();
      }, [actorId]);
    
    return (
        <>
        <div className="actor-page-container">
            <ScrollToTopOnPageChange />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <img 
                        src={actorInfo.image ? actorInfo.image.medium || DEFAULT_ACTOR_IMAGE : DEFAULT_ACTOR_IMAGE} 
                        alt={actorInfo.name} 
                        className="actor-image"
                    />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <div style={{ fontFamily: 'Staatliches' }}>
                        <h1 className="actor-name">{actorInfo.name}</h1>
                    </div>
                    <div>
                        <Typography sx={{ color: 'white' }}>
                            {actorInfo.summary}
                        </Typography>
                    </div>
                    <div className="acting-in-container">
                        <Typography variant="h5" className="acting-in-title">
                            Acting in:
                        </Typography>
                        <hr  className="acting-in-divider"/>
                        <div className="swiper-container">
                            <Swiper
                                slidesPerView={5}
                                spaceBetween={10}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                    clickable: true,
                                }}   
                                pagination={{                        
                                    clickable: true,
                                }}
                                modules={[Pagination, Navigation ]}
                                style={{ width: '100%', height: '200px' }}
                            >
                                {actorInfo.casts?.map((cast, index) =>  (
                                    <SwiperSlide key={index} className="slideeffect" style={{ height: '50%'}}>
                                        {cast.image && cast.image.original && (
                                            <a  href={`/show/${cast.id}`}>
                                                <img src={cast.image.medium || DEFAULT_IMAGE} alt={`Cast ${index + 1}`} />
                                            </a>
                                        )}
                                    </SwiperSlide>
                                ))}
                                <div className="slider-controler">
                                    <div className="swiper-button-prev slider-arrow">
                                        <ion-icon name="arrow-back-outline"></ion-icon>
                                    </div>
                                    <div className="swiper-button-next slider-arrow">
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Box className="personal-info-container">
                <Typography className="personal-info-title">Personal info</Typography>
                <Stack direction="row" spacing={1} className="social-icons-container">
                    <IconButton aria-label="Facebook" style={{ color: 'red' }}>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="Twitter" style={{ color: 'red' }}>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton aria-label="Add Post" style={{ color: 'red' }}>
                        <PostAddIcon />
                    </IconButton>
                </Stack>
                <Box className="info-item">
                    <Typography variant="body2" className="info-label">Birthday:</Typography>
                    <Typography variant="body2" className="info-value">{actorInfo.birthday}</Typography>
                </Box>
                <Box className="info-item">
                    <Typography variant="body2" className="info-label">Country:</Typography>
                    <Typography variant="body2" className="info-value">{actorInfo.country ? actorInfo.country.name : ""}</Typography>
                </Box>
                <Box className="info-item">
                    <Typography variant="body2" className="info-label">Gender:</Typography>
                    <Typography variant="body2" className="info-value">{actorInfo.gender}</Typography>
                </Box>
            </Box>
        </div>
        </>
    );
}

export default ActorPage;