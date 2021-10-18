import Link from 'next/link';
import { Parallax } from 'react-parallax';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import Form from '../components/Form';
import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

const insideStyles = {
  padding: 100,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};

const image1 = 'https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000_1280.jpg';

const Contact = () => {
  return (
    <Layout>
      <div>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles} className="fw-bold fs-1 text-dark rounded-circle">
              İletişim
            </div>
          </div>
        </Parallax>
        <section
          id="form-section"
          className="container mt-5 pb-5"
          style={{ minHeight: '600px', height: 'auto' }}>
          <div>
            <div className="d-flex justify-content-start">
              <h2 className="fw-bold fs-1" style={{ color: '#899196' }}>
                İletişime Geç
              </h2>
            </div>
            <div className="mt-5 shadow-lg " style={{ borderRadius: '10px' }}>
              <div className="row">
                <div className="col-lg-5 col-sm-12">
                  <div
                    className="contact__left w-100 h-100 p-5"
                    style={{
                      position: 'relative',
                      backgroundColor: '#35B7FF',
                      borderRadius: '10px',
                      minHeight: '700px'
                    }}>
                    <span style={{ position: 'relative', zIndex: '101' }}>
                      <h3 className="fw-bold text-light">İletişim Bilgileri</h3>
                      <h3 className="fs-5" style={{ color: '#8C79BE' }}>
                        Formu doldurduğunuz vakit ekibimiz 24 saat içinde sizinle iletişime
                        geçecektir.
                      </h3>
                      <div className="pt-5 d-flex justify-content-start   align-items-center">
                        <span style={{ marginRight: '10px' }}>
                          <BsFillTelephoneFill style={{ height: '30px', width: '30px' }} />
                        </span>
                        <span className="fw-bold fs-5 text-light  ">+90 532 654 1234</span>
                      </div>
                      <div className="pt-5 d-flex justify-content-start align-items-center">
                        <span style={{ marginRight: '10px' }}>
                          <MdEmail style={{ height: '30px', width: '30px' }} />
                        </span>
                        <span className="fw-bold fs-5 text-light  ">womdanismanlik@gmail.com</span>
                      </div>
                      <div className="pt-5 d-flex justify-content-start   align-items-center">
                        <span style={{ marginRight: '10px' }}>
                          <HiLocationMarker style={{ height: '30px', width: '30px' }} />
                        </span>
                        <span className="fw-bold fs-5 text-light  ">
                          Fulya Mahallesi Yeşilçimen Sokak Polat Tower Bağımsız Bölüm 430
                          Şişli/İstanbul
                        </span>
                      </div>
                      <div className="d-flex align-items-end" style={{ height: '200px' }}>
                        <span>
                          <span className={`${styles.icons} p-3 rounded-circle `}>
                            <Link href="#">
                              <a>
                                <FaFacebookF
                                  className="mx-auto"
                                  style={{
                                    marginRight: '20px',
                                    color: 'white'
                                  }}
                                />
                              </a>
                            </Link>
                          </span>
                          <span className={`${styles.icons} p-3 rounded-circle `}>
                            <Link href="https://twitter.com/WomDanismanlik">
                              <a>
                                <FaTwitter
                                  className="mx-auto"
                                  style={{
                                    marginRight: '20px',
                                    color: 'white'
                                  }}
                                />
                              </a>
                            </Link>
                          </span>
                          <span className={`${styles.icons} p-3 rounded-circle `}>
                            <Link href="https://www.instagram.com/womdanismanlik/">
                              <a target="_blank">
                                <FaInstagram
                                  className="mx-auto"
                                  style={{
                                    marginRight: '20px',
                                    color: 'white'
                                  }}
                                />
                              </a>
                            </Link>
                          </span>
                          <span className={`${styles.icons} p-3 rounded-circle `}>
                            <Link href="#">
                              <a>
                                <FaLinkedinIn
                                  className="mx-auto"
                                  style={{
                                    marginRight: '20px',
                                    color: 'white'
                                  }}
                                />
                              </a>
                            </Link>
                          </span>
                        </span>
                      </div>
                    </span>
                    <div className={`${styles.circle}`}></div>
                    <div className={`${styles.circle__big}`}></div>
                  </div>
                </div>
                <div className="col-lg-7 col-sm-12 p-5">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
