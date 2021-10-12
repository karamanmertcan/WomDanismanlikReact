import styled from 'styled-components';
import img from '../public/images/hero_2.jpg';
import DemoCarousel from './Carousel';

const Landing = () => {
  return (
    <>
      <section className="landing">
        <DemoCarousel />
      </section>
    </>
  );
};

// const Carousel = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-image: url(https://www.womdanismanlik.com/images/hero_2.jpg);
//   background-size: cover;
// `;

export default Landing;
