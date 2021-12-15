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
    image: '/images/uefrope.webp',
    link: 'https://www.etsy.com/shop/UEFROPE?ref=simple-shop-header-name&listing_id=1079116295'
  },
  {
    id: 2,
    image: '/images/plania.png',
    link: 'https://www.etsy.com/shop/PlaniaDesign?ref=seller-platform-mcnav'
  },
  {
    id: 3,
    image: '/images/myjewelryorganizer.webp',
    link: 'https://www.etsy.com/shop/MyJewelryOrganizer?ref=simple-shop-header-name&listing_id=1007800267'
  },
  {
    id: 4,
    image: '/images/giftforeveryone.webp',
    link: 'https://www.etsy.com/shop/GiftforEveryoneTR?ref=simple-shop-header-name&listing_id=1072256721'
  }
];

export default function SocialMediaSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
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
