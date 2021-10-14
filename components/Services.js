import React, { Component } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

export const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings} className="slide__slick">
        <div className="p-5 text-center mt-5 d-flex  justify-content-center align-items-center w-100 ">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-end p-0">
              <Image src="/images/ecommerce-2.png" height={500} width={500} priority={true} />
            </div>
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center text-lg-start shadow-lg p-0">
              <h2 style={{ color: '#007BFF' }} className="fw-bold fs-1">
                01. E-Ticaret Danışmanlığı
              </h2>
              <div className=" text-lg-start ">
                <p className="mt-3   w-100" style={{ fontSize: '1rem', color: '#808080' }}>
                  Yurt İçi ve Yurt Dışı Pazaryerleri Yönetim Danışmanlığı Hizmetleri Vermekteyiz
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 text-center mt-5 d-flex  justify-content-center align-items-center w-100 ">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-end p-0">
              <Image src="/images/hero_2.jpg" height={500} width={500} priority={true} />
            </div>
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center text-lg-start shadow-lg p-0">
              <h2 style={{ color: '#007BFF' }} className="fw-bold fs-1">
                02. E-Ticaret Eğitimi
              </h2>
              <div className=" text-lg-start ">
                <p className="mt-3   w-100" style={{ fontSize: '1rem', color: '#808080' }}>
                  Yurt içi ve yurt dışı pazaryerleri yönetim danışmanlığı eğitimleri vermekteyiz
                </p>
              </div>
              <div className=" text-lg-start ">
                <button type="button" className="btn btn-primary btn-sm rounded-pill">
                  Daha Fazlası
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 text-center mt-5 d-flex  justify-content-center align-items-center w-100 ">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-end p-0">
              <Image src="/images/software-1.png" height={500} width={500} priority={true} />
            </div>
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center text-lg-start shadow-lg p-0">
              <h2 style={{ color: '#007BFF' }} className="fw-bold fs-1  ">
                03. Yazılım Hizmeti
              </h2>
              <div className=" text-lg-start ">
                <p className="mt-3   w-100" style={{ fontSize: '1rem', color: '#808080' }}>
                  E-Ticaret çözümlerine özel mobil ve web yazılım hizmeti vermekteyiz.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 text-center mt-5 d-flex  justify-content-center align-items-center w-100 ">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-end p-0">
              <Image src="/images/dmm-1.png" height={500} width={500} priority={true} />
            </div>
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center text-lg-start shadow-lg p-0">
              <h2 style={{ color: '#007BFF' }} className="fw-bold fs-1">
                04. Dijital Pazarlama
              </h2>
              <div className=" text-lg-start ">
                <p className="mt-3   w-100" style={{ fontSize: '1rem', color: '#808080' }}>
                  Satış arttırımı ve sürekliliği için dijital pazarlama danışmanlığı vermekteyiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
