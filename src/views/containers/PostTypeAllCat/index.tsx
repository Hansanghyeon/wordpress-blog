import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import CategoryList from '@molecule/list/Category';

const PostTypeAllCat = () => (
  <StaticQuery
    query={graphql`
      query GET_CATEGOERIES {
        wpgql {
          categories(where: { hideEmpty: true, exclude: "1" }, first: 9999) {
            edges {
              node {
                _acf_taxonomy {
                  icon {
                    mediaItemUrl
                  }
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
    render={(data) => {
      const { categories } = data.wpgql;
      return <CategoryList data={categories} />;
    }}
  />
);

export default PostTypeAllCat;
