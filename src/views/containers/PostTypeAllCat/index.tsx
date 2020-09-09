import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import CategoryList from '@molecule/list/Category';

const PostTypeAllCat = () => (
  <StaticQuery
    query={graphql`
      query GET_CATEGOERIES {
        wpgql {
          categories(where: { hideEmpty: true }, first: 9999) {
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
      }
    `}
    render={({
      wpgql: {
        categories: { edges },
      },
    }) => {
      const data = {
        edges: edges.filter(
          ({ node }: any) =>
            node.id !== 'Y2F0ZWdvcnk6MQ==' &&
            node._acf_taxonomy_category_list.categoryListVisible,
        ),
      };
      return <CategoryList data={data} />;
    }}
  />
);

export default PostTypeAllCat;
