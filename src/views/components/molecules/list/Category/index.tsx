import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// Components
import Link from '@atom/Link';
import NotionStyleList from '@atom/listItem/NotionStyle';

const CategoryList = () => (
  <StaticQuery
    query={graphql`
      query GET_CATEGOERIES {
        wpgql {
          categories {
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
    render={data => {
      const categories = data.wpgql.categories.edges.filter(
        ({ node }: any) => node.id !== 'Y2F0ZWdvcnk6MQ==',
      );
      return (
        <>
          {categories.map(({ node }: any) => (
            <NotionStyleList
              key={node.id}
              imgSrc={node._acf_taxonomy.icon.mediaItemUrl}
            >
              <Link to={`/${node.slug}`} activeClassName="active">
                {node.name}
              </Link>
            </NotionStyleList>
          ))}
        </>
      );
    }}
  />
);
export default CategoryList;
