import React from 'react';
import { getClient } from '../../client';
import BlogCard from '../../components/BlogCard';
import Layout from '../../components/Layout';

const Posts = ({ data }) => {
  // console.log('data', data);
  return (
    <Layout
      title='WOM Danışmanlık | Blog'
      description='WOM Danışmanlık uzman kadrosu ile Trendyol, Amazon,  Hepsiburada, N11 ve ETSY pazaryerlerindeki 20 den fazla mağazaya eğitim ve danışmanlık hizmeti sunmuştur.'>
      <div style={{ marginTop: '100px' }}>
        <section className=' mt-5 py-5' style={{ height: 'auto', backgroundColor: '#F8F9FA' }}>
          <div className='w-100 container'>
            <h2 style={{ color: '#007BFF' }} className='fw-bold text-center'>
              Blog Yazıları
            </h2>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
              {data &&
                data.map((item, index) => {
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
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const data = await getClient().fetch(
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
    }
  };
}

export default Posts;
