import Link from 'next/link';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import ReactCardFlipper from 'react-card-flipper';
import Layout from '../components/Layout';
import styles from '../styles/Team.module.css';
import { Parallax } from 'react-parallax';

const insideStyles = {
  padding: 100,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};

const teamMembers = [
  {
    founder: [
      {
        id: 1,
        name: 'Emre Uzun',
        image: '/images/emreUzun.jpeg',
        linkedin: 'https://www.linkedin.com/in/uzunemre/',
        instagram: 'https://www.instagram.com/emreuzun.eu/',
        degree: 'KURUCU ORTAK'
      },
      {
        id: 2,
        name: 'Ozan Özdemir',
        image: '/images/ozanozdemir.jpeg',
        linkedin: 'https://www.linkedin.com/in/a-ozan-%C3%B6zdemir-584021162/',
        instagram: 'https://www.instagram.com/aozanozdemir/',
        degree: 'KURUCU ORTAK'
      },
      {
        id: 3,
        name: 'Furkan Eraslan',
        image: '/images/uzun.jpeg',
        linkedin: '#',
        instagram: 'https://www.instagram.com/furkneraslan/',
        degree: 'KURUCU ORTAK'
      }
    ],
    dmm: [
      {
        id: 1,
        name: 'Ecem Efekan',
        image: '/images/ecemefekan.webp',
        linkedin: 'https://www.linkedin.com/in/ecem-efekan-b22030164/',
        instagram: 'https://www.instagram.com/ecemefekan/?hl=en',
        degree: 'DIJITAL PAZARLAMA UZMANI'
      },
      {
        id: 2,
        name: 'Su Aleyna Kaya',
        image: '/images/aleyna.jpg',
        linkedin: 'https://www.linkedin.com/in/su-aleyna-kaya-86b8b719b/',
        instagram: 'https://www.instagram.com/kayasuuu/',
        degree: 'DIJITAL PAZARLAMA UZMANI'
      }
    ],
    ydt: [
      {
        id: 1,
        name: 'Muhammed Mustafa Güney',
        image: '/images/musta.jpeg',
        linkedin: '',
        instagram: 'https://www.instagram.com/mmgny/',
        degree: 'YURT DIŞI TEMSILCIMIZ (AMERIKA)'
      },
      {
        id: 2,
        name: 'Muhammed Ali Yücedağ',
        image: '/images/salva.jpeg',
        linkedin: 'https://www.linkedin.com/in/muhammedaliyucedag',
        instagram: 'https://www.instagram.com/muhammedaliyucedag',
        degree: 'YURT DIŞI TEMSILCIMIZ (INGILTERE)'
      }
    ],
    te: [
      {
        id: 1,
        name: 'Çiğdem Polatcan',
        image: '/images/cigdem.jpeg',
        linkedin: 'https://www.linkedin.com/in/çiğdem-polatcan-b929661b5',
        instagram: 'https://www.instagram.com/animationpolatcan/',
        degree: 'ANIMASYON TASARIM UZMANI'
      },
      {
        id: 2,
        name: 'İrem Berçin',
        image: '/images/irem.jpeg',
        linkedin: '',
        instagram: 'https://www.instagram.com/irembercin/',
        degree: 'TASARIM UZMANI'
      }
    ],
    ye: [
      {
        id: 1,
        name: 'Yunus Gözütok',
        image: '/images/yunusgozutok.jpg',
        linkedin: 'https://www.linkedin.com/in/ymgozutok/',
        instagram: 'https://www.instagram.com/mrymg',
        degree: 'YAZILIM MÜHENDISI'
      },
      {
        id: 2,
        name: 'Mertcan Karaman',
        image: '/images/mertcankaraman-2.jpeg',
        linkedin: 'https://www.linkedin.com/in/mertcankaraman/',
        instagram: 'https://www.instagram.com/karaman_mertcan/',
        degree: 'YAZILIM MÜHENDISI'
      },
      {
        id: 3,
        name: 'Ferhat Osanoğlu',
        image: '/images/ferhatosanoglu-2.jpeg',
        linkedin: 'https://www.linkedin.com/in/ferhatosanoglu/',
        instagram: 'https://www.instagram.com/ferhatosanoglu/',
        degree: 'YAZILIM MÜHENDISI'
      }
    ],
    avukat: [
      {
        id: 1,
        name: 'Caner Yıldız',
        image: '/images/caner.jpeg',
        linkedin: '',
        instagram: 'https://www.instagram.com/canerryl',
        degree: 'AVUKAT'
      }
    ]
  }
];

const image1 = 'https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg';

const Team = () => {
  return (
    <Layout>
      <div>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 500 }}>
          </div>
        </Parallax>
        <section
          id="kurucu"
          className="d-flex flex-column  align-items-center pt-5"
          style={{ minHeight: '600px', height: 'auto' }}>
          <h2 className="fw-bold fs-1 text-primary">Kurucu Ekibimiz</h2>
          <div className="row">
            {teamMembers[0].founder.map((item, index) => (
              <div
                key={item.id}
                className={`col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center p-3`}>
                <ReactCardFlipper width="300px" height="330px" behavior="hover" levitate={true}>
                  <div>
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt=""
                      style={{ height: '330px', width: '330px', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className={`d-flex justify-content-center align-items-center h-100 w-100 ${styles.team}`}>
                    <Link href={item.instagram}>
                      <a target="blank">
                        <FaInstagramSquare
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
                    <Link href={item.linkedin}>
                      <a target="_blank">
                        <FaLinkedin
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
                  </div>
                </ReactCardFlipper>
                <h5 className="fw-bold text-start w-100 mt-2 m-0">{item.name}</h5>
                <p className="text-reset text-start w-100 fw-lighter mt-n3">{item.degree}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="dmm"
          className="d-flex flex-column  align-items-center pt-5"
          style={{ minHeight: '600px', height: 'auto' }}>
          <h2 className="fw-bold fs-1 text-primary">Dijital Pazarlama Ekibimiz</h2>
          <div className="row justify-content-center">
            {teamMembers[0].dmm.map((item, index) => (
              <div
                key={item.id}
                className="col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center p-3">
                <ReactCardFlipper width="330px" height="330px" behavior="hover" levitate={true}>
                  <div>
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt=""
                      style={{ height: '330px', width: '330px', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className={`d-flex justify-content-center align-items-center h-100 w-100 ${styles.team}`}>
                    <Link href={item.instagram}>
                      <a target="blank">
                        <FaInstagramSquare
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
                    <Link href={item.linkedin}>
                      <a target="_blank">
                        <FaLinkedin
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
                  </div>
                </ReactCardFlipper>
                <h5 className="fw-bold text-start w-100 fw-bold mt-2">{item.name}</h5>
                <p className="text-reset text-start w-100 fw-lighter mt-n3">{item.degree}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="ydt"
          className="d-flex flex-column  align-items-center pt-5"
          style={{ minHeight: '600px', height: 'auto' }}>
          <h2 className="fw-bold fs-1 text-primary">Yurt Dışı Temsilcilerimiz</h2>
          <div className="row justify-content-center">
            {teamMembers[0].ydt.map((item, index) => (
              <div
                key={item.id}
                className="col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center p-3">
                <ReactCardFlipper width="300px" height="330px" behavior="hover" levitate={true}>
                  <div>
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt=""
                      style={{ height: '330px', width: '330px', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className={`d-flex justify-content-center align-items-center h-100 w-100 ${styles.team}`}>
                    <Link href={item.instagram}>
                      <a target="blank">
                        <FaInstagramSquare
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
                    <Link href={item.linkedin}>
                      <a target="_blank">
                        <FaLinkedin
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
                  </div>
                </ReactCardFlipper>
                <h5 className="fw-bold text-start w-100 fw-bold mt-2">{item.name}</h5>
                <p className="text-reset text-start w-100 fw-lighter mt-n3">{item.degree}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="te"
          className="d-flex flex-column  align-items-center pt-5"
          style={{ minHeight: '600px', height: 'auto' }}>
          <h2 className="fw-bold fs-1 text-primary">Tasarım Ekibimiz</h2>
          <div className="row justify-content-center">
            {teamMembers[0].te.map((item, index) => (
              <div
                key={item.id}
                className="col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center p-3">
                <ReactCardFlipper width="300px" height="330px" behavior="hover" levitate={true}>
                  <div>
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt=""
                      style={{ height: '330px', width: '330px', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className={`d-flex justify-content-center align-items-center h-100 w-100 ${styles.team}`}>
                    <Link href={item.instagram}>
                      <a target="blank">
                        <FaInstagramSquare
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
                    <Link href={item.linkedin}>
                      <a target="_blank">
                        <FaLinkedin
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
                  </div>
                </ReactCardFlipper>
                <h5 className="fw-bold text-start w-100 fw-bold mt-2">{item.name}</h5>
                <p className="text-reset text-start w-100 fw-lighter mt-n3">{item.degree}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="ye"
          className="d-flex flex-column  align-items-center pt-5"
          style={{ minHeight: '600px', height: 'auto' }}>
          <h2 className="fw-bold fs-1 text-primary">Yazılım Ekibimiz</h2>
          <div className="row">
            {teamMembers[0].ye.map((item, index) => (
              <div
                key={item.id}
                className={`col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center p-3`}>
                <ReactCardFlipper width="300px" height="330px" behavior="hover" levitate={true}>
                  <div>
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt=""
                      style={{ height: '330px', width: '330px', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className={`d-flex justify-content-center align-items-center h-100 w-100 ${styles.team}`}>
                    <Link href={item.instagram}>
                      <a target="blank">
                        <FaInstagramSquare
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
                    <Link href={item.linkedin}>
                      <a target="_blank">
                        <FaLinkedin
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
                  </div>
                </ReactCardFlipper>
                <h5 className="fw-bold text-start w-100 mt-2">{item.name}</h5>
                <p className="text-reset text-start w-100 fw-lighter mt-n3">{item.degree}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="dmm"
          className="d-flex flex-column  align-items-center pt-5"
          style={{ minHeight: '600px', height: 'auto' }}>
          <h2 className="fw-bold fs-1 text-primary">Avukatımız</h2>
          <div className="row justify-content-center">
            {teamMembers[0].avukat.map((item, index) => (
              <div
                key={item.id}
                className="col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center w-100 p-3">
                <ReactCardFlipper width="300px" height="330px" behavior="hover" levitate={true}>
                  <div>
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt=""
                      style={{ height: '330px', width: '330px', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className={`d-flex justify-content-center align-items-center h-100 w-100 ${styles.team}`}>
                    <Link href={item.instagram}>
                      <a target="blank">
                        <FaInstagramSquare
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
                    <Link href={item.linkedin}>
                      <a target="_blank">
                        <FaLinkedin
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        />
                      </a>
                    </Link>
                  </div>
                </ReactCardFlipper>
                <h5 className="fw-bold text-start w-100 fw-bold mt-2">{item.name}</h5>
                <p className="text-reset text-start w-100 fw-lighter mt-n3">{item.degree}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Team;
