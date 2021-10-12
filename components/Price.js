import React from 'react';
import { TiTick } from 'react-icons/ti';
import styles from '../styles/Card.module.css';
const Price = () => {
  return (
    <div className="w-100 container">
      <div className="row">
        <div
          className={`col-md-4 col-sm-12 pt-5  d-flex  flex-column justify-content-start ${styles.my__card}  align-items-center shadow-lg`}
          style={{
            color: '#808080',
            backgroundColor: '#b2bec3',
            height: '600px'
          }}>
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
        </div>
        <div
          className={`col-md-4 col-sm-12 pt-5 ${styles.my__card} d-flex flex-column justify-content-start   align-items-center shadow-lg`}
          style={{
            color: '#808080',
            backgroundColor: '#ecf0f1',
            height: '600px'
          }}>
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
        </div>
        <div
          className={`col-md-4 col-sm-12 pt-5 ${styles.my__card} d-flex flex-column justify-content-start   align-items-center shadow-lg`}
          style={{
            color: '#808080',
            backgroundColor: '#ffffff',
            height: '600px'
          }}>
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
        </div>
      </div>
    </div>
  );
};

export default Price;
