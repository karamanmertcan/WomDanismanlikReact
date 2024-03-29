import React, { Component } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const comments = [
  {
    id: 1,
    comment: `“E-Ticaret satışlarımı sadece instagram üzerinden yaparken WOM Danışmanlık ile birlikte
    tüm Türkiye'deki platformlarda satış yapıyorum.”`,
    img: `/images/buket.jpeg`,
    customer: 'Buket Çalışkan Çevik'
  },

  {
    id: 2,
    comment: ` “ Türkiye'de satışlarım iyi gidiyordu ancak yurt dışında satış yapmak istedim WOM Danışmanlık sayesinde Etsy ile tanıştım. ” `,
    img: `/images/person_3.jpg`,
    customer: 'MyJeweleryOrganizer'
  }
];

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        {comments.map((item) => (
          <div
            key={item.id}
            className='p-5 text-center mt-5  d-flex flex-column justify-content-center align-items-center w-100 '>
            <p
              style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                lineHeight: '1.7',
                fontFamily: 'OpenSans',
                color: 'gray',
                fontStyle: 'italic'
              }}
              className='text-center w-75'>
              {' '}
              {item.comment}{' '}
            </p>
            <div className='d-flex justify-content-between '>
              <Image
                src={item.img}
                className='rounded-circle'
                height={61}
                width={61}
                priority={true}
              />
              <div className='d-flex justify-content-center align-items-center'>
                <p className=' m-2'>{item.customer}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
