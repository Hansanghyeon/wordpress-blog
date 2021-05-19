import useSWR from 'swr';
import { request } from 'graphql-request';

const API_URL: string = process.env.WORDPRESS_API_URL || '';

const fetcher = (query: any) => request(API_URL, query);

function useCategory(postType?: string) {
  const queryTarget = `${postType && `${postType}_`}categories`;
  const query = `
    {
      ${queryTarget}(where: {hideEmpty: true}, first: 9999) {
        edges {
          node {
            _acf_taxonomy_category_list {
              icon {
                mediaItemUrl
              }
              categoryListVisible
            }
            name
            slug
            databaseId
            id
          }
        }
      }
    }
  `;
  const { data, error } = useSWR(query, fetcher);
  return {
    data: data && data[queryTarget],
    isLoading: !error && !data,
    isError: error,
  };
}

export default useCategory;
