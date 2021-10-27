import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../public/images/logo.png';
import Image from 'next/image';
import OffCanvas from './OffCanvas';

const Header = () => {
  // const [bg, setBg] = useState(false);

  // const changeBg = () => {
  //   if (window.pageYOffset > 20) {
  //     setBg(true);
  //   } else {
  //     setBg(false);
  //   }
  // };

  // useEffect(() => {
  //   changeBg();
  //   // adding the event when scroll change background
  //   window.addEventListener('scroll', changeBg);
  // }, [bg]);

  return (
    <header>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark border-bottom 
         bg-dark
         scrolling-navbar`}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image src={Logo} height={50} width={30} />
          </a>{' '}
          <a className="navbar-brand" href="/">
            <h3>Danışmanlık</h3>
          </a>
          <div className="d-lg-none d-md-block">
            <OffCanvas />
          </div>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link " aria-current="page">
                    Anasayfa
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#about">
                  <a className="nav-link">Hakkkımızda</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/ekibimiz">
                  <a className="nav-link">Ekibimiz</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog">
                  <a className="nav-link">Blog</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/iletisim">
                  <a className="nav-link">İletişim</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
