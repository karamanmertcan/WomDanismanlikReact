import React from 'react';

const cta = [
  {
    id: 1,
    title: 'Yüksek Kazanç',
    desc: 'E-Ticaret pazarında yer alabilmek için genç ve uzman ekip ile doğru E-Ticaret stratejileri sunmaktadır.',
    img: '/images/001-wallet.svg'
  },
  {
    id: 2,
    title: 'Ödeme Sistemleri',
    desc: 'Web sitenize özel iyzico ödeme yöntemi entegresi',
    img: '/images/006-credit-card.svg'
  },
  {
    id: 3,
    title: 'Döviz ile Yüksek Kazanç',
    desc: 'Yurt dışı satışlarıyla döviz kazanın ve kazançlarınızı katlayın. Yurt dışı satışlarında yüksek kargo maliyetleri, gümrük işlemleri ve mağaza suspendleri gibi sorunlardan kurtulun. ',
    img: '/images/002-rich.svg'
  },
  {
    id: 4,
    title: 'Verimli Reklam',
    desc: 'E-Ticaret satışlarının olmazsa olmazı olan reklamları verimli kullanarak daha fazla kazanç sağlayın. ',
    img: '/images/003-notes.svg'
  },
  {
    id: 5,
    title: 'Markanıza Özel Websitesi',
    desc: 'Markanıza özel websiteleri ile başka platformlara ödediğiniz yüksek komisyonlardan kurtulun. ',
    img: '/images/004-cart.svg'
  },
  {
    id: 6,
    title: 'Dijital Pazarlama',
    desc: 'Online satışlarınızda yüksek kar marjı ve satış sürekliliğini yakalayabilmek için uzman Dijital Pazarlama ekibimizle yanınızdayız. ',
    img: '/images/005-megaphone.svg'
  }
];

const Why = () => {
  return (
    <div className="pt-4">
      <div className="row">
        {cta.map((item) => (
          <div
            key={item.id}
            className="col-md-4 col-sm-12 d-flex flex-column align-items-md-start align-items-center ">
            <img src={item.img} alt="" height="87" width="87" />
            <h4 className="pt-3">{item.title}</h4>
            <p style={{ color: '#8B8B8B' }} className="text-md-start text-center">
              {item.desc}{' '}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
