module.exports = {
  images: {
    domains: ['cdn.sanity.io']
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ];
  }
};
