import Link from 'next/link';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-dark text-muted ">
        <section className="pt-3">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="fw-bold mb-4">Hakkımızda
                </h6>
                <p>
                  Eğitimler ve danışmanlıklar bire bir olarak yüz yüze ve/veya görüntülü toplantılar ile yapılır. Her platformun kendine özgü algoritmaları hakkında bilgi ve tecrübeler ile daha az reklam harcamaları ile daha fazla kazanç sağlanmaktadır.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="fw-bold mb-4">Hızlı Linkler</h6>
                <p>
                  <Link href="/hakkimizda">
                    <a className="text-reset">Hakkkımızda</a>
                  </Link>
                </p>
                <p>
                  <Link href="/hizmetler">
                    <a className="text-reset">
                      Hizmetler
                    </a>
                  </Link>
                </p>
                <p>
                  <Link href="/yorumlar">
                    <a href="#!" className="text-reset">
                      Müşteri Yorumları
                    </a>
                  </Link>
                </p>
                <p>

                  <Link href="/iletisim">
                    <a className="text-reset">
                      İletişim
                    </a>
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="fw-bold mb-4">Bizi Takip Edin!</h6>
                <span>
                  <span className={`p-3 ps-0 rounded-circle `}>
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
                  <span className={`p-3 rounded-circle `}>
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
                  <span className={` p-3 rounded-circle `}>
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
                  <span className={`p-3 pe-0 rounded-circle `}>
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
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          Copyright © 2021 Tüm Hakları Saklıdır by <a className="text-reset fw-bold" href="https://www.womdanismanlik.com/">WOM Danışmanlık</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
