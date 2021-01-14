import { fetchAPI } from '@api/index';

export async function getAllSlug(postType: string) {
  const data: any = await fetchAPI(`
    {
      ${postType}(first: 10000) {
        edges {
          node {
            slug
            uri
          }
        }
      }
    }
  `);
  return data[postType];
}
