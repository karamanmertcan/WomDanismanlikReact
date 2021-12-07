import { getClient } from '../../client';

export default async (req, res) => {
  // Fetch data from a CMS.
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

  const routes = data.map((post) => `/blog/${post.slug.current}`);
  const localRoutes = ['/index', '/blog', '/iletisim', '/ekibimiz'];

  const pages = routes.concat(localRoutes);

  const urlSet = pages
    .map((page) => {
      // Remove none route related parts of filename.
      const path = page
        .replace('pages', '')
        .replace('_content', '')
        .replace(/(.jsx|.js)/, '')
        .replace('.mdx', '');
      // Remove the word index from route
      const route = path === '/index' ? '' : path;
      // Build url portion of sitemap.xml
      return `<url><loc>https://www.womdanismanlik.com${route}</loc></url>\n`;
    })
    .join('');

  // Add urlSet to entire sitemap string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

  // set response content header to xml
  res.setHeader('Content-Type', 'text/xml');
  // write the sitemap
  res.write(sitemap);
  res.end();
};
