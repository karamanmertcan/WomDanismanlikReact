import React from 'react';
import Image from 'next/image';
import sanityClient from '../../client.js';
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

const PostPage = (props) => {
  const { title, excerpt, mainImage, body, publishedAt } = props;
  return (
    <Layout title={title} description={excerpt}>
      <div style={{ marginTop: '100px' }}>
        <div className="container">
          <button type="button" className="btn btn-primary">
            <Link href="/blog">
              <a style={{ color: 'white', textDecoration: 'none' }}>Geri Dön</a>
            </Link>
          </button>
          <h2>{title}</h2>
          <Image layout="responsive" src={mainImage.asset.url} height={100} width={200} />
          <div className="d-flex justify-content-between pt-2">
            <h4>Mertcan Karaman</h4>
            <h4>{publishedAt}</h4>
          </div>
          <div className=" mt-5 py-3" style={{ height: 'auto' }}>
            <BlockContent
              blocks={body.filter(({ _type }) => _type === 'block')}
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
  slug,
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

PostPage.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query;
  return await sanityClient.fetch(query, { slug });
};

export default PostPage;
