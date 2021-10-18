import Link from 'next/link';
import ReactCardFlipper from 'react-card-flipper';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Team.module.css';

const TeamCard = ({ id, instagram, linkedin, name, degree, image }) => {
  return (
    <div
      key={id}
      className={`col d-flex flex-column align-items-center justify-content-center p-3`}>
      <ReactCardFlipper width="300px" height="330px" behavior="hover" levitate={true}>
        <div>
          <img
            src={image}
            className="img-fluid"
            alt=""
            style={{ height: '330px', width: '330px', objectFit: 'cover' }}
          />
        </div>
        <div
          className={`d-flex justify-content-center align-items-center h-100 w-100 ${styles.team}`}>
          <Link href={instagram}>
            <a target="blank">
              <FaInstagramSquare style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
            </a>
          </Link>
          <Link href={linkedin}>
            <a target="_blank">
              <FaLinkedin style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
            </a>
          </Link>
        </div>
      </ReactCardFlipper>
      <h5 className="fw-bold text-center text-lg-start w-100 mt-2 m-0">{name}</h5>
      <p className="text-reset text-center text-lg-start w-100 fw-lighter mt-n3">{degree}</p>
    </div>
  );
};

export default TeamCard;
