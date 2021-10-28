import React from 'react';
import Link from 'next/link';
const logo = [
  {
    id: 1,
    image: '/images/letwom.png',
    link: 'https://www.letwom.com/'
  },
  {
    id: 2,
    image: '/images/plania.png',
    link: 'https://plania.co/'
  },
  {
    id: 3,
    image: '/images/viskobet.png',
    link: 'https://www.viskobet.com/'
  },
  {
    id: 4,
    image: '/images/saksivecicek.png',
    link: 'https://saksivecicek.com/'
  },
  {
    id: 5,
    image: '/images/minyaturtuglalogo.png',
    link: 'https://www.minyaturtugla.com/'
  },
  {
    id: 6,
    image: '/images/metdekorasyon.png',
    link: 'https://www.metdekorasyon.com/'
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
            <Link href={item.link}>
              <a target="_blank">
                <img
                  src={item.image}
                  alt=""
                  style={{ objectFit: 'contain', width: '100%', height: '100px' }}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
