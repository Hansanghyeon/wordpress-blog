import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
// Components
import Link from '@atom/Link';
import NotionStyleList from '@atom/list/NotionStyle';

const StyleUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoriesNav = () => (
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
                uri
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
        <StyleUl>
          {categories.map(({ node }: any) => (
            <Link key={node.id} to={`/${node.uri}`} activeClassName="active">
              <NotionStyleList imgSrc={node._acf_taxonomy.icon.mediaItemUrl}>
                {node.name}
              </NotionStyleList>
            </Link>
          ))}
        </StyleUl>
      );
    }}
  />
);
export default CategoriesNav;
