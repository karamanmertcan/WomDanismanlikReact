import Fade from 'react-reveal/Fade';
import Layout from '../components/Layout';
import { Parallax } from 'react-parallax';
import TeamCard from '../components/TeamCard';
import TeamMembers from '../data/teamMembers.json';

const insideStyles = {
  padding: 100,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};

const image1 = 'https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg';

const Team = () => {
  return (
    <Layout
      title='WOM Danışmanlık | Ekibimiz'
      keywords='WOM,Danışmanlık,Etsy,E-ticaret,Yurtiçi,Yurtdışı,Emre Uzun,Mertcan Karaman,Ferhat Osanoğlu,Doğru SEO,Doğru Reklam,Karlı Satış,ETSY DANIŞMANLIK,E-Ticaret Danışmanlığı,E-Ticaret Eğitimi,Yazılım Hizmeti,Dijital Pazarlama,Ecem Efekan,Ozan Özdemir,Furkan Eraslan,Yüksek Kazanç,Ödeme Sistemleri,Döviz ile Yüksek Kazanç,Verimli Reklam'
      description='Eğitimler ve danışmanlıklar bire bir olarak yüz yüze ve/veya görüntülü toplantılar ile yapılır. Her platformun kendine özgü algoritmaları hakkında bilgi ve tecrübeler ile daha az reklam harcamaları ile daha fazla kazanç sağlanmaktadır. WOM Danışmanlık genç ve uzman kadrosu ile Trendyol, Amazon, Gittigidiyor, Hepsiburada, N11, Çiçeksepeti ve ETSY pazaryerlerindeki 20 den fazla mağazaya eğitim ve danışmanlık hizmeti sunmuştur.'>
      <div>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>
              <h1 className='fs-1 fw-bold'>Ekibimiz</h1>
            </div>
          </div>
        </Parallax>
        <Fade bottom>
          <section
            id='kurucu'
            className='d-flex flex-column  align-items-center pt-5'
            style={{ minHeight: '600px', height: 'auto' }}>
            <h2 className='fw-bold fs-1 text-primary'>Kurucu Ekibimiz</h2>
            <div className='row'>
              {TeamMembers.founder.map((item, index) => (
                <TeamCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  degree={item.degree}
                  image={item.image}
                  instagram={item.instagram}
                  linkedin={item.linkedin}
                />
              ))}
            </div>
          </section>
          <section
            id='dmm'
            className='d-flex flex-column  align-items-center pt-5'
            style={{ minHeight: '600px', height: 'auto' }}>
            <h2 className='fw-bold fs-1 text-primary'>Dijital Pazarlama Ekibimiz</h2>
            <div className='row justify-content-center'>
              {TeamMembers.dmm.map((item, index) => (
                <TeamCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  degree={item.degree}
                  image={item.image}
                  instagram={item.instagram}
                  linkedin={item.linkedin}
                />
              ))}
            </div>
          </section>
          <section
            id='ydt'
            className='d-flex flex-column  align-items-center pt-5'
            style={{ minHeight: '600px', height: 'auto' }}>
            <h2 className='fw-bold fs-1 text-primary'>Yurt Dışı Temsilcilerimiz</h2>
            <div className='row justify-content-center'>
              {TeamMembers.ydt.map((item, index) => (
                <TeamCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  degree={item.degree}
                  image={item.image}
                  instagram={item.instagram}
                  linkedin={item.linkedin}
                />
              ))}
            </div>
          </section>
          <section
            id='te'
            className='d-flex flex-column  align-items-center pt-5'
            style={{ minHeight: '600px', height: 'auto' }}>
            <h2 className='fw-bold fs-1 text-primary'>Tasarım Ekibimiz</h2>
            <div className='row justify-content-center'>
              {TeamMembers.te.map((item, index) => (
                <TeamCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  degree={item.degree}
                  image={item.image}
                  instagram={item.instagram}
                  linkedin={item.linkedin}
                />
              ))}
            </div>
          </section>
          <section
            id='ye'
            className='d-flex flex-column  align-items-center pt-5'
            style={{ minHeight: '600px', height: 'auto' }}>
            <h2 className='fw-bold fs-1 text-primary'>Yazılım Ekibimiz</h2>
            <div className='row'>
              {TeamMembers.ye.map((item, index) => (
                <TeamCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  degree={item.degree}
                  image={item.image}
                  instagram={item.instagram}
                  linkedin={item.linkedin}
                />
              ))}
            </div>
          </section>
          <section
            id='dmm'
            className='d-flex flex-column  align-items-center pt-5'
            style={{ minHeight: '600px', height: 'auto' }}>
            <h2 className='fw-bold fs-1 text-primary'>Avukatımız</h2>
            <div className='row justify-content-center'>
              {TeamMembers.avukat.map((item, index) => (
                <TeamCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  degree={item.degree}
                  image={item.image}
                  instagram={item.instagram}
                  linkedin={item.linkedin}
                />
              ))}
            </div>
          </section>
        </Fade>
      </div>
    </Layout>
  );
};

export default Team;
