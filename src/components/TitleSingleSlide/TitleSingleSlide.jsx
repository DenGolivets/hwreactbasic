import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/less/navigation';
import 'swiper/css/effect-creative';
// import './styles.css';
import usePopular from '../../hooks/usePopular';
import SlideCard from './SlideCard';
import { DEFAULT_IMAGE } from '../../constans/constans';
import useReqActor from '../../hooks/useReqActor';
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import { Typography } from '@mui/material';


export default function TitleSingleSlide() {
    const { popularData } = usePopular();

  return (
    <>
    <div style={{ overflow: 'hidden', height: '100vh' }}>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        effect={'creative'}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[ Pagination, Navigation, EffectCreative ]}
        speed={1500}
        className="mySwiper"
        style={{padding:0, height: '100%', }}
      >
        {popularData?.map(({ name, image, id, genres, summary}, index ) => (
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
                index={index}
              />
            </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
      </div>
    </>
  );
}