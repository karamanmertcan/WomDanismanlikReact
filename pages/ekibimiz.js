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
        instagram: 'https://www.instagram.com/emreuzun.eu/'
      },
      {
        id: 2,
        name: 'Ozan Özdemir',
        image: '/images/ozanozdemir.jpeg',
        linkedin: 'https://www.linkedin.com/in/a-ozan-%C3%B6zdemir-584021162/',
        instagram: 'https://www.instagram.com/aozanozdemir/'
      },
      {
        id: 3,
        name: 'Furkan Eraslan',
        image: '/images/uzun.jpeg',
        linkedin: '#',
        instagram: 'https://www.instagram.com/furkneraslan/'
      }
    ],
    dmm: [
      {
        id: 1,
        name: 'Ecem Efekan',
        image: '/images/ecemefekan.webp',
        linkedin: 'https://www.linkedin.com/in/ecem-efekan-b22030164/',
        instagram: 'https://www.instagram.com/ecemefekan/?hl=en'
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
            <div style={insideStyles} className="fw-bold fs-1   text-dark rounded-circle">
              Ekibimiz
            </div>
          </div>
        </Parallax>
        <section
          id="kurucu"
          className="d-flex flex-column  align-items-center pt-5"
          style={{ minHeight: '600px', height: 'auto' }}>
          <h2 className="fw-bold fs-1 text-primary">Kurucu Ekibimiz</h2>
          <div className="row gx-5">
            {teamMembers[0].founder.map((item) => (
              <div className="col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center p-3">
                <ReactCardFlipper width="300px" height="330px" behavior="click" levitate={true}>
                  <div>
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt=""
                      style={{ height: '330px', minWidth: '330px' }}
                    />
                  </div>
                  <div
                    className={`d-flex justify-content-center align-items-center h-100 w-100 ${styles.team}`}>
                    <Link href={item.instagram}>
                      <a target="blank">
                        <FaInstagramSquare
                          style={{
                            width: '50px',
                            height: '50px',
                            cursor: 'pointer',
                            color: 'white'
                          }}
                        />
                      </a>
                    </Link>
                    <Link href={item.linkedin}>
                      <a target="_blank">
                        <FaLinkedin
                          style={{
                            width: '50px',
                            height: '50px',
                            cursor: 'pointer',
                            color: 'white'
                          }}
                        />
                      </a>
                    </Link>
                  </div>
                </ReactCardFlipper>
                <h2 className="text-center fw-bold">{item.name}</h2>
              </div>
            ))}
          </div>
          <div>
            <h2 className="fw-bold fs-1 text-primary">Dijital Pazarlama Ekibimiz</h2>
            <div className="row">
              {teamMembers[0].dmm.map((item, index) => (
                <div
                  key={item.id}
                  className={`col-md-${
                    index + 1 < 2 ? '12' : '4'
                  } col-sm-12 d-flex flex-column align-items-center justify-content-center p-3`}>
                  <ReactCardFlipper width="300px" height="330px" behavior="hover" levitate={true}>
                    <div>
                      <img
                        src={item.image}
                        className="img-fluid"
                        alt=""
                        style={{ height: '330px', minWidth: '330px' }}
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
                  <h2 className="text-center fw-bold">{item.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Team;
