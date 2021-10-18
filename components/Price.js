import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { TiTick } from 'react-icons/ti';
import styles from '../styles/Card.module.css';
const Price = () => {
  const [mouse, setMouse] = useState(false);
  return (
    <div className="w-100 container">
      <div className="row">
        <div
          className={`col-lg-4  col-sm-12 pt-5  d-flex  flex-column justify-content-start ${styles.my__card} ${styles.my__card_color}  align-items-center shadow-lg`}
          style={{
            color: 'black',
            backgroundColor: '#b2bec3',
            height: '600px'
          }}>
          <Fade left>
            <div>
              <h2 className="text-center fw-bold" style={{ color: 'black' }}>
                Bronz Paket
              </h2>
              <ul className="text-start" style={{ listStyle: 'none' }}>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  MAĞAZA AÇILIŞINIZI GERÇEKLEŞTİRİYORUZ
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  MAĞAZANIZI DÜZENLİYORUZ
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  GÜMRÜK HAKKINDA GEREKLİ BİLGİYİ SAĞLIYORUZ
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  KARGO ANLAŞMALARINI SAĞLIYORUZ{' '}
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  ÜRÜN ANALİZİ YAPIYORUZ{' '}
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  PAZAR ANALİZİ YAPIYORUZ{' '}
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  HER AY 10 ADETE KADAR ÜRÜN SEO'NUZU YAPIYORUZ + ÜRÜN SEO'SU ÜRÜN BAŞI 25TL'DİR{' '}
                </li>
              </ul>
            </div>
          </Fade>
        </div>
        <div
          className={`col-lg-4 col-sm-12 pt-5 ${styles.my__card} d-flex flex-column justify-content-start   align-items-center shadow-lg`}
          style={{
            color: 'black',
            backgroundColor: '#ecf0f1',
            height: '600px'
          }}>
          <Fade top>
            <div>
              <h2 className="text-center fw-bold" style={{ color: 'black' }}>
                Gold Paket
              </h2>
              <ul className="text-start " style={{ listStyle: 'none' }}>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  BRONZ PAKETE EK OLARAK
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  HER AY 30 ADETE KADAR ÜRÜN SEO'NUZU YAPIYORUZ + ÜRÜN SEO'SU ÜRÜN BAŞI 25TL'DİR
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  DOĞRU FİYATLANDIRMA DESTEĞİ SUNUYORUZ
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  ETSY İÇİ REKLAM DESTEĞİ SUNUYORUZ
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  SOSYAL MEDYA YÖNETİMİ BİLGİ DESTEĞİ SAĞLIYORUZ
                </li>
              </ul>
            </div>
          </Fade>
        </div>
        <div
          className={`col-lg-4 col-sm-12 pt-5 ${styles.my__card} d-flex flex-column justify-content-start   align-items-center shadow-lg`}
          style={{
            color: 'black',
            backgroundColor: '#ffffff',
            height: '600px'
          }}>
          <Fade right>
            <div>
              <h2 className="text-center fw-bold" style={{ color: 'black' }}>
                Premium Paket
              </h2>
              <ul className="text-start" style={{ listStyle: 'none' }}>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  BRONZ VE GOLD PAKETE EK OLARAK
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  KATEGORİDE SATAN YENİ ÜRÜN FİKİRLERİ SUNUYORUZ
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  HER AY 40 ADETE KADAR ÜRÜN SEO'NUZU YAPIYORUZ + ÜRÜN SEO'SU ÜRÜN BAŞI 25TL'DİR
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  SOSYAL MEDYA YÖNETİMİ SAĞLIYORUZ (PİNTEREST & INSTAGRAM)
                </li>
                <li className="pt-3">
                  <TiTick style={{ color: 'green', marginRight: '10px' }} />
                  AYDA 4 SAAT TÜRKİYE E-TİCARET VE SEO EĞİTİMİ
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Price;
