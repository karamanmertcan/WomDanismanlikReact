import Link from 'next/link';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import ReactCardFlipper from 'react-card-flipper';
import Layout from '../components/Layout';
import styles from '../styles/Team.module.css';

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

const Team = () => {
  return (
    <Layout>
      <div>
        <section
          id="contact-section"
          className={`d-flex justify-content-center  ${styles.team}`}
          style={{ minHeight: '600px', height: 'auto' }}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white fw-bold fs-1 ">Ekibimiz</h2>
          </div>
        </section>
        <section
          id="kurucu"
          className="d-flex flex-column  align-items-center pt-5"
          style={{ minHeight: '600px', height: 'auto' }}>
          <h2 className="fw-bold fs-1 text-primary">Kurucu Ekibimiz</h2>
          <div className="row gx-5">
            {teamMembers[0].founder.map((item) => (
              <div className="col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center p-3">
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
                        <FaLinkedin style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
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
