import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const logo = [
  {
    id: 1,
    image: '/images/kaantasarım.webp',
    link: 'https://www.instagram.com/kaantasarim/?hl=en'
  }
];

export default function SocialMediaSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        className='mySwiper'>
        {logo.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={item.link}>
              <a target='_blank'>
                <img
                  src={item.image}
                  alt=''
                  style={{ objectFit: 'contain', width: '100%', height: '200px' }}
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
