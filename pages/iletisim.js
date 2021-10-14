import { FaLocationArrow, FaClock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Form from '../components/Form';
import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <Layout>
      <div>
        <section
          id="contact-section"
          className={`d-flex justify-content-center  ${styles.contact}`}
          style={{ minHeight: '600px', height: 'auto' }}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white fw-bold fs-1 ">İletişim</h2>
            <p className="text-light">
              Fiyatlar ve Destek Konusunda Bizimle İletişime Geçebilirsiniz
            </p>
          </div>
        </section>
        <section
          id="form-section"
          className="container mt-5"
          style={{ minHeight: '600px', height: 'auto' }}>
          <div>
            <div className="d-flex justify-content-start">
              <h2 className="fw-bold fs-1" style={{ color: '#899196' }}>
                İletişime Geç
              </h2>
            </div>
            <div className="mt-5">
              <div className="row">
                <div className="col-lg-4 d-none d-lg-block ">
                  <div className="d-flex">
                    <span
                      className={`rounded d-flex  justify-content-center align-items-center pr-3`}
                      style={{ backgroundColor: '#74b9ff', height: '44px', minWidth: '88px' }}>
                      <FaLocationArrow />
                    </span>
                    <div className="d-flex flex-column p-2 justify-content-start">
                      <h4>Konum :</h4>
                      <span className="pl-3">
                        Fulya Mahallesi Yeşilçimen Sokak Polat Tower Bağımsız Bölüm 430, 34394
                        Şişli/İstanbul
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <span
                      className={`rounded d-flex  justify-content-center align-items-center`}
                      style={{ backgroundColor: '#74b9ff', height: '44px', minWidth: '88px' }}>
                      <FaClock />
                    </span>
                    <div className="d-flex flex-column p-2 justify-content-start">
                      <h4>Çalışma Saatleri :</h4>
                      <span className="pl-3">
                        Pazartesi-Cuma <br /> 09:00 - 19:00
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <span
                      className={`rounded d-flex  justify-content-center align-items-center`}
                      style={{ backgroundColor: '#74b9ff', height: '44px', minWidth: '88px' }}>
                      <MdEmail />
                    </span>
                    <div className="d-flex flex-column p-2 justify-content-start">
                      <h4>Email : </h4>
                      <span className="pl-3">
                        <a href="mailto:womdanismanlik@gmail.com">womdanismanlik@gmail.com</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
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
