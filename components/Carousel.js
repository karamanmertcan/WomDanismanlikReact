import Slider from 'react-slick';

export default function DemoCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false
  };
  return (
    <Slider {...settings} className="slide__slick">
      <div className="p-5 text-center mt-5 d-flex flex-column justify-content-center align-items-center w-100 ">
        <h3 className="fw-bold fs-2 text-light">Dijital Pazarlama Çözümleri</h3>
        <p className="mt-3  text-light w-75" style={{ fontSize: '1.2rem' }}>
          WOMDanışmanlık Dijital pazarlama sürecinde markalara müşterilerine ulaşmaları, ürün ve
          hizmetlerini tanıtmaları ve satmaları için verimli reklam ve pazarlama eğitimi ve
          danışmanlık hizmeti sunar.
        </p>
      </div>
      <div className="p-5 text-center mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3 className="fw-bold fs-2 text-light">Web Yazılım Çözümleri</h3>
        <p className="mt-3 w-75 text-light " style={{ fontSize: '1.4rem' }}>
          E-ticaret platformları, blog siteleri gibi tüm web platformlarının kuruluşu ve yönetimi
          ile ilgili eğitim ve danışmanlık hizmeti sunar.
        </p>
      </div>
      <div className="p-5 text-center mt-5 d-flex flex-column justify-content-center align-items-center ">
        <h3 className="fw-bold fs-2 text-light">E-Ticaret Çözümleri</h3>
        <p className="mt-3 w-75 text-light" style={{ fontSize: '1.4rem' }}>
          WOM Danışmanlık pazaryerleri, dijital performansları ve iş geliştirme alanlarında eğitim
          ve danışmanlık hizmeti sunar.
        </p>
      </div>
    </Slider>
  );
}
