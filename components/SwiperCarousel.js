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
    image: '/images/letwom.png',
    link: 'https://www.letwom.com/'
  },
  {
    id: 2,
    image: '/images/plania.png',
    link: 'https://plania.co/'
  },
  {
    id: 3,
    image: '/images/viskobet.png',
    link: 'https://www.viskobet.com/'
  },
  {
    id: 4,
    image: '/images/saksivecicek.png',
    link: 'https://saksivecicek.com/'
  },
  {
    id: 5,
    image: '/images/minyaturtuglalogo.png',
    link: 'https://www.minyaturtugla.com/'
  },
  {
    id: 6,
    image: '/images/metdekorasyon.png',
    link: 'https://www.metdekorasyon.com/'
  }
];

export default function SwiperCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
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
                  style={{ objectFit: 'contain', width: '100%', height: '100px' }}
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
