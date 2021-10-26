import React from 'react';
import Image from 'next/image';

import Letwom from '../public/images/letwom.png';
import Plania from '../public/images/kaan-tasarim-logo.png';
import Viskobet from '../public/images/viskobet.png';
import SaksiVeCicek from '../public/images/saksivecicek.png';
import MinyaturTugla from '../public/images/minyaturtuglalogo.png';

const logo = [
  {
    id: 1,
    image: '/images/letwom.png'
  },
  {
    id: 2,
    image: '/images/plania.png'
  },
  {
    id: 3,
    image: '/images/viskobet.png'
  },
  {
    id: 4,
    image: '/images/saksivecicek.png'
  },
  {
    id: 5,
    image: '/images/minyaturtuglalogo.png'
  },
  {
    id: 6,
    image: '/images/metdekorasyon.png'
  }
];

const References = () => {
  return (
    <div className="mt-5 my-auto">
      <div className="row ">
        {logo.map((item) => (
          <div
            key={item.id}
            className="col-sm-12 p-3 col-md-4 reference d-flex justify-content-center">
            <img
              src={item.image}
              alt=""
              style={{ objectFit: 'contain', width: '100%', height: '100px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
