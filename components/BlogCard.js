import React from 'react';
import { useRouter } from 'next/router';

export default function BlogCard({ title, publishedAt, mainImage, excerpt, slug }) {
  const router = useRouter();

  return (
    <div>
      <div className="col h-100 ">
        <div
          className="card h-100"
          onClick={() => router.push(`/post/${slug.current}`)}
          style={{ cursor: 'pointer', height: 'auto' }}>
          <img src={mainImage.asset.url} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{`${excerpt.slice(0, 100)}...`}</p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <div className="author">Mertcan Karaman</div>
            <div className="date">{publishedAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

BlogCard.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query;
  return await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );
};
