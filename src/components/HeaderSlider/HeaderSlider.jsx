import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay  } from "swiper/modules";
import { useNavigate } from 'react-router-dom';
import WebFont from 'webfontloader';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import './headerSlider.css'
import SlideImage1 from '../../img/Banner1.jpg'
import SlideImage2 from '../../img/Banner2.jpg'
import SlideImage3 from '../../img/Banner3.jpg'
import SlideImage4 from '../../img/Banner4.jpg'
import SlideImage5 from '../../img/Banner5.jpg'
import SlideImage6 from '../../img/Banner6.jpg'
import SlideImage7 from '../../img/Banner7.jpg'

const imageStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
};

    const overlayStyle = {
    position: 'absolute',
    top: '-10px',
    left: '50%', 
    transform: 'translateX(-50%)',
    width: '100%', 
    height: '60%', 
};

const overlayStyle2 = {
    position: 'absolute',
    top: '-140px', 
    left: '50%', 
    transform: 'translateX(-50%)',
    width: '100%', 
    height: '60%', 
};

function HeaderSlider () {

    const navigate = useNavigate();

    const handleGenreClick = (genre) => {
        navigate(`/show/Genre/${genre}`);
    };

    useEffect(() => {
        WebFont.load({
            google: {
            families: ['Abel', 'Roboto', 'Cinzel Decorative', 'Bebas Neue', 'Roboto Slab', 'Playfair Display', 'Anton', 'Oswald', 'Lobster', 'Enchanted Land' ], 
            },
        });
    }, []);

    return (
        <div className="header_swipe_container">
    <Swiper
    slidesPerView={1} 
    pagination={{
        dynamicBullets: true,
        clickable: true,
    }}
    loop={true}
    modules={[ Pagination, Autoplay ]}
    autoplay={{
        delay: 3000,
        disableOnInteraction: false,
    }}
    speed={1500}
    grabCursor={true}
    style={{padding:0, width: '100%', }}
    >
        <SwiperSlide className="slider-image">
            <img src={SlideImage1} alt="SlideImage" className="img_slider1" />
            <div className="caption" style={{ fontFamily: 'Anton' }} onClick={() => handleGenreClick('Crime')}>Crime</div>       
        </SwiperSlide >
        <SwiperSlide className="slider-image" >
            <img src={SlideImage2} alt="SlideImage" className="img_slider2" />
            <div className="caption2" style={{ fontFamily: 'Anton' }} onClick={() => handleGenreClick('Fantasy')}>Fantasy</div>        
        </SwiperSlide >
        <SwiperSlide className="slider-image">
            <img src={SlideImage3} alt="SlideImage" className="img_slider3" />
            <div className="caption3" style={{ fontFamily: 'Anton' }} onClick={() => handleGenreClick('Family')}>Family</div>       
        </SwiperSlide>
        <SwiperSlide className="slider-image">
        <div style={imageStyle}>
        <div style={overlayStyle}>
            <img src={SlideImage4} alt="SlideImage" style={{ width: '100%',  }}  />
            <div className="caption4" style={{ fontFamily: 'Anton' }} onClick={() => handleGenreClick('Action')}>Action</div>   
        </div>
        </div>     
        </SwiperSlide>
        <SwiperSlide className="slider-image">
        <div style={imageStyle}>
        <div style={overlayStyle2}>
            <img src={SlideImage5} alt="SlideImage" className="img_slider5" />
            <div className="caption5" style={{ fontFamily: 'Anton' }} onClick={() => handleGenreClick('Horror')}>Horror</div> 
        </div>
        </div>      
        </SwiperSlide>
        <SwiperSlide className="slider-image">
            <img src={SlideImage6} alt="SlideImage" className="img_slider6" />
            <div className="caption6" style={{ fontFamily: 'Anton' }} onClick={() => handleGenreClick('Drama')}>Drama</div>       
        </SwiperSlide>
        <SwiperSlide className="slider-image">
            <img src={SlideImage7} alt="SlideImage" className="img_slider7" />
            <div className="caption7" style={{ fontFamily: 'Anton' }} onClick={() => handleGenreClick('Thriller')}>Thriller</div>        
        </SwiperSlide>
    
    </Swiper>
    </div>
    );
};

export default HeaderSlider;