import { useEffect, useState } from 'react';
import Logo from '../public/images/logo.png';
import Image from 'next/image';
import Example from './OffCanvas';

import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [bg, setBg] = useState(false);

  const changeBg = () => {
    if (window.pageYOffset > 20) {
      setBg(true);
      console.log(bg);
    } else {
      setBg(false);
    }
  };

  useEffect(() => {
    changeBg();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBg);
  }, [bg]);

  return (
    <header>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-dark border-bottom ${
          bg ? 'bg-dark' : null
        } scrolling-navbar`}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image src={Logo} height={50} width={30} />
          </a>{' '}
          <a className="navbar-brand" href="/">
            <h3>Danışmanlık</h3>
          </a>
          <GiHamburgerMenu
            className="d-lg-none d-md-block"
            style={{ color: 'white', cursor: 'pointer' }}
          />
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Anasayfa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/hakkimizda">
                  Hakkkımızda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ekibimiz
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Blog</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Fiyatlar
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/hakkimizda">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
