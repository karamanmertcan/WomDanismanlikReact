import React from 'react';
import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { groq } from 'next-sanity';
import { getClient } from '../../client';

const serializers = {
  types: {
    code: (props) => {
      const { language, code } = props?.node;
      return (
        <div
          style={{
            paddingTop: '10px'
          }}>
          {code || ''}
        </div>
      );
    }
  }
};

const PostPage = ({ currentPost }) => {
  // const { title, excerpt, mainImage, body, publishedAt } = props;

  return (
    <Layout title={currentPost?.title} description={currentPost?.excerpt}>
      <div style={{ marginTop: '100px' }}>
        <div className='container'>
          <button type='button' className='btn btn-primary'>
            <Link href='/blog'>
              <a style={{ color: 'white', textDecoration: 'none' }}>Geri Dön</a>
            </Link>
          </button>
          <h2>{currentPost?.title}</h2>
          <Image
            layout='responsive'
            src={currentPost?.mainImage.asset.url}
            objectFit='cover'
            height={100}
            width={200}
          />
          <div className='d-flex justify-content-between pt-2'>
            <h4>Mertcan Karaman</h4>
            <h4>{currentPost?.publishedAt}</h4>
          </div>
          <div className=' mt-5 py-3' style={{ height: 'auto' }}>
            <BlockContent
              blocks={currentPost?.body}
              dataset='production'
              projectId='t4uhdv0f'
              serializers={serializers}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
const query = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug" : slug.current,
  mainImage{
    asset->{
      id,
      url
    },
    alt
  },
  publishedAt,
  body,
  excerpt,
}
`;

// export async function getStaticProps({ params, preview = false }) {
//   const currentPost = await getClient(preview).fetch(query, {
//     slug: params.slug
//   });

//   return {
//     props: {
//       currentPost
//     }
//   };
// }

// export const getStaticPaths = async () => {
//   const pages = await getClient().fetch(
//     groq`*[_type == "post" && defined(slug.current)][].slug.current`
//   );

//   return {
//     paths: pages.map((slug) => `/blog/${slug}`),
//     fallback: true
//   };
// };

export const getServerSideProps = async (context, preview = false) => {
  // you also have access to the param postId from the context
  const currentPost = await getClient(preview).fetch(query, {
    slug: context.params.slug
  });

  return {
    props: {
      currentPost
    }
  };
};
export default PostPage;
