import React from 'react';
import Image from 'next/image';
import sanityClient from '../../client.js';
import { useNextSanityImage } from 'next-sanity-image';
import BlockContent from '@sanity/block-content-to-react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
};

const query = `*[_type == "post" && slug.current == $slug] {
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
  }
  `;
const queryAll = `*[_type == "post" && slug.current != ''] {
    'slug': slug.current
  }`;

const PostPage = ({ post }) => {
  const imageProps = useNextSanityImage(sanityClient, post.image);

  const { title, excerpt, mainImage, body, publishedAt } = post[0];
  console.log(mainImage.asset.url);

  return (
    <Layout>
      <div style={{ marginTop: '100px' }}>
        <div className="container">
          <button type="button" class="btn btn-primary">
            <Link href="/post">
              <a style={{ color: 'white', textDecoration: 'none' }}>Geri Dön</a>
            </Link>
          </button>
          <h2>{title}</h2>
          <Image
            {...imageProps}
            layout="responsive"
            src={mainImage.asset.url}
            height={100}
            width={200}
          />
          <div className="d-flex justify-content-between pt-2">
            <h4>Mertcan Karaman</h4>
            <h4>{publishedAt}</h4>
          </div>
          <div className=" mt-5 py-3" style={{ height: 'auto' }}>
            <BlockContent blocks={body} serializers={serializers} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const post = await sanityClient.fetch(query, { slug: context.params.slug });
  return {
    props: {
      post
    }
  };
};

export const getStaticPaths = async () => {
  const pages = (await sanityClient.fetch(queryAll)) || [];
  const paths = pages.map((page) => ({
    params: { slug: page.slug }
  }));
  return { paths, fallback: false };
};

export default PostPage;
