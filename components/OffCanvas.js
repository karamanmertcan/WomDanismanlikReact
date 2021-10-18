import { useState } from 'react';
import Link from 'next/link';
import { Button, Offcanvas } from 'react-bootstrap';

import { GiHamburgerMenu } from 'react-icons/gi';

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="bg-dark">
        <GiHamburgerMenu />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="bg-dark"
        style={{ width: '75%' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-light">WOM Danışmanlık</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-5 text-light">
          <span className="d-block">
            <Link href="/">
              <a style={{ textDecoration: 'none' }} className="text-light fs-2">
                Anasayfa
              </a>
            </Link>
          </span>
          <span className="d-block pt-3">
            <Link href="/hakkimizda">
              <a style={{ textDecoration: 'none' }} className="text-light fs-2">
                Hakkımızda
              </a>
            </Link>
          </span>
          <span className="d-block pt-3">
            <Link href="/ekibimiz">
              <a style={{ textDecoration: 'none' }} className="text-light fs-2">
                Ekibimiz
              </a>
            </Link>
          </span>
          <span className="d-block pt-3">
            <Link href="/blog">
              <a style={{ textDecoration: 'none' }} className="text-light fs-2">
                Blog
              </a>
            </Link>
          </span>
          <span className="d-block pt-3">
            <Link href="/iletisim">
              <a style={{ textDecoration: 'none' }} className="text-light fs-2 ">
                İletişim
              </a>
            </Link>
          </span>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
