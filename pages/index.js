import Head from 'next/head';
import Image from 'next/image';
import { TiTick } from 'react-icons/ti';
import Accordion from '../components/Accordion';
import BlogCard from '../components/BlogCard';
import Landing from '../components/Landing';
import Layout from '../components/Layout';
import MyGallery from '../components/MyGallery';
import sanityClient from '../client.js';
import Particles from 'react-tsparticles';
import Price from '../components/Price';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import Why from '../components/Why';

export default function Home({ data }) {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Layout>
      <div style={{ height: 'auto', paddingBottom: '100px' }} className="overflow-auto">
        <section className="h-100 w-100 landing">
          <Landing />
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                image: 'https://www.womdanismanlik.com/images/hero_2.jpg'
              },
              fpsLimit: 60,
              interactivity: {
                detectsOn: 'canvas',
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push'
                  },
                  onHover: {
                    enable: true,
                    mode: 'repulse'
                  },
                  resize: true
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40
                  },
                  push: {
                    quantity: 4
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  }
                }
              },
              particles: {
                color: {
                  value: '#ffffff'
                },
                links: {
                  color: '#ffffff',
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1
                },
                collisions: {
                  enable: true
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outMode: 'bounce',
                  random: false,
                  speed: 6,
                  straight: false
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800
                  },
                  value: 80
                },
                opacity: {
                  value: 0.5
                },
                shape: {
                  type: 'circle'
                },
                size: {
                  random: true,
                  value: 5
                }
              },
              detectRetina: true
            }}
          />
          <div id="particles-js"></div>
        </section>
        <section className="about container d-flex pt-5" id="etsy">
          <div className=" w-100 h-100 d-flex flex-column justify-content-center align-items-center ">
            <div className="d-flex  flex-column justify-content-center">
              <h2 style={{ color: '#007BFF' }} className="fw-bold text-center">
                Hakkımızda
              </h2>
              <h2 style={{ fontSize: '1.25rem' }} className="text-center">
                WOMDanışmanlık yurt içi ve yurt dışı e-ticaret pazaryeri çözümleri sunar.
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <Image src="/images/neden.png" width={550} height={400} priority={true} />
              </div>
              <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-content-center">
                <h2>Neden WOM Danışmanlık</h2>
                <p>
                  Eğitimler ve danışmanlıklar bire bir olarak yüz yüze ve/veya görüntülü toplantılar
                  ile yapılır. Her platformun kendine özgü algoritmaları hakkında bilgi ve
                  tecrübeler ile daha az reklam harcamaları ile daha fazla kazanç sağlanmaktadır.
                  WOM Danışmanlık genç ve uzman kadrosu ile Trendyol, Amazon, Gittigidiyor,
                  Hepsiburada, N11, Çiçeksepeti ve ETSY pazaryerlerindeki 20 den fazla mağazaya
                  eğitim ve danışmanlık hizmeti sunmuştur.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-5 pt-5" id="dogru">
          <div className="w-100 h-100 ">
            <div className="row">
              <div className="col-md-4 col-sm-12 text-center d-flex flex-column justify-content-center align-items-center">
                <Image src="/images/seo.png" height={100} width={100} priority={true} />
                <p style={{ fontSize: '1.4rem' }}>DOĞRU SEO</p>
                <p style={{ fontSize: '1.1rem' }}>
                  Seo konusunda eğitim ve danışmanlık vermekteyiz.
                </p>
              </div>
              <div className="col-md-4 col-sm-12 text-center d-flex flex-column justify-content-center align-items-center">
                <Image src="/images/reklam.png" height={100} width={100} priority={true} />
                <p style={{ fontSize: '1.4rem' }}>DOĞRU REKLAM</p>
                <p style={{ fontSize: '1.1rem' }}>
                  Marketing ve remarketing için tüm e-ticaret pazaryerleri için ayrı ayrı eğitim ve
                  danışmanlık sunmaktayız.{' '}
                </p>
              </div>
              <div className="col-md-4 col-sm-12 text-center d-flex flex-column justify-content-center align-items-center">
                <Image src="/images/kar.png" height={100} width={100} priority={true} />
                <p style={{ fontSize: '1.4rem' }}>KARLI SATIŞ</p>

                <p style={{ fontSize: '1.1rem' }}>
                  Doğru ürün doğru reklam ve doğru satış stratejileri ile karlı satış imkanları
                  sunmaktayız.{' '}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-5 pt-5">
          <div className="w-100 h-100 ">
            <div className="row">
              <div className="col-md-7 col-sm-12 text-center d-flex flex-column justify-content-center align-items-center">
                <Image src="/images/etsy.png" height={500} width={450} priority={true} />
              </div>
              <div className="col-md-5 col-sm-12 text-start d-flex flex-column justify-content-start align-items-start">
                <h3>ETSY Danışmanlık</h3>

                <p
                  className="mt-5"
                  style={{ fontSize: '1.3rem', fontWeight: '400', lineHeight: '1.7' }}>
                  Yurt dışı satışı için gözünüzü korkutan bu süreçleri bizimle anında
                  çözebilirsiniz.{' '}
                </p>

                <div
                  className="etsy__list"
                  className="d-flex flex-column justify-content-start align-items-start fs-5">
                  <div>
                    <TiTick style={{ color: 'green', marginRight: '10px' }} />
                    Doğru ürün ve Pazar analizi
                  </div>
                  <div>
                    <TiTick style={{ color: 'green', marginRight: '10px' }} />
                    Yurt dışı kargo anlaşmaları
                  </div>
                  <div>
                    <TiTick style={{ color: 'green', marginRight: '10px' }} />
                    Gümrük işlemleri
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-5 pt-5" id="dogru">
          <div className="w-100 h-100 ">
            <div className="row">
              <h2 style={{ color: '#007BFF' }} className="fw-bold text-center">
                Galeri
              </h2>

              <div className="d-flex justify-content-center align-items-center ">
                <MyGallery />
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-5 pt-5" style={{ height: 'auto' }}>
          <div className="w-100   ">
            <h2 style={{ color: '#007BFF' }} className="fw-bold text-center">
              Hizmetlerimiz
            </h2>
            <Services />
          </div>
        </section>
        <section className=" mt-5 pt-5" style={{ height: 'auto', backgroundColor: '#F8F9FA' }}>
          <div className="w-100 container">
            <h2 style={{ color: '#007BFF' }} className="fw-bold text-center">
              Neden Biz ?
            </h2>
            <Why />
          </div>
        </section>

        <section className=" mt-5 py-5" style={{ height: 'auto' }}>
          <div className="w-100 container   ">
            <h2 style={{ color: '#007BFF' }} className="fw-bold text-center">
              Müşteri Yorumları
            </h2>
            <Testimonials />
          </div>
        </section>
        <section
          className=" mt-5 pt-5"
          style={{
            height: 'auto',

            backgroundColor: '#F8F9FA',
            paddingBottom: '100px'
          }}>
          <div className="w-100">
            <Price />

            <div className="d-flex justify-content-center pt-5" style={{ width: '100%' }}>
              <button className="btn btn-primary btn-lg rounded-pill w-50">Teklif Al</button>
            </div>
          </div>
        </section>
        <section className=" mt-5 pt-5" style={{ height: 'auto', backgroundColor: '#ffffff' }}>
          <div className="w-100 container">
            <h2 style={{ color: '#007BFF' }} className="fw-bold text-center">
              Sık Sorulan Sorular
            </h2>
            <Accordion />
          </div>
        </section>
        <section className=" mt-5 py-5" style={{ height: 'auto', backgroundColor: '#F8F9FA' }}>
          <div className="w-100 container">
            <h2 style={{ color: '#007BFF' }} className="fw-bold text-center">
              Blog Yazıları
            </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {data.map((item, index) => {
                const { title, publishedAt, mainImage, excerpt, slug } = item;
                return (
                  <BlogCard
                    key={index}
                    title={title}
                    publishedAt={publishedAt}
                    mainImage={mainImage}
                    excerpt={excerpt}
                    slug={slug}
                  />
                );
              })}
            </div>
          </div>
        </section>
        {/* <section className=" mt-5 py-5" style={{ height: 'auto', backgroundColor: '#F8F9FA' }}>
          <BlockContent blocks={data[0].body} serializers={serializers} />
        </section> */}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await sanityClient.fetch(
    `*[_type == "post"]{
    title,
    slug,
    mainImage{
      asset->{
        id,
        url
      },
      alt
    },
    publishedAt,
    excerpt,
    body
  }`
  );
  return {
    props: {
      data
    },
    revalidate: 1
  };
}
