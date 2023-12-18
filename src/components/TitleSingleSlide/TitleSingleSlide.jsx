import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/less/navigation';
import 'swiper/css/effect-fade';
// import './styles.css';
import usePopular from '../../hooks/usePopular';
import SlideCard from './SlideCard';
import { DEFAULT_IMAGE } from '../../constans/constans';
import useReqActor from '../../hooks/useReqActor';
import { Navigation, EffectCube  } from "swiper/modules";
import { Typography } from '@mui/material';


export default function TitleSingleSlide() {
    const { popularData } = usePopular();

  return (
    <>
    
      <Swiper
        // pagination={{
        //   dynamicBullets: true,
        //   clickable: true,
        // }}
        effect={'cube'}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[Navigation, EffectCube]}
        centeredSlides={true}
        speed={2000}
        cubeEffect={{
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="mySwiper"
        style={{padding:0, overflow: 'hidden'}}
      >
        {popularData?.map(({ name, image, id, genres, summary, index }) => (
                <SwiperSlide 
                key={index}
                >
                <SlideCard
                key={id}
                id={id}
                name={name}
                summary={summary}
                genres={genres}
                image={image ? image.original || DEFAULT_IMAGE : DEFAULT_IMAGE}
              />
            </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
     
    </>
  );
}