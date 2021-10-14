import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 't4uhdv0f',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: true
});
