/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// import Bio from '@src/components/bio';
import SEO from '@view/components/seo';
import { rhythm } from '@style/typography';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import CategoryList from '@molecule/list/Category';
import Ditto from '@molecule/Ditto';
import Link from '@atom/Link';
import GridAndListToggle from '@atom/toggle/GridAndList';

const StyledContainer = styled(Container)`
  padding: ${rhythm(1)} 0;
`;
const DittoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const IndexPage = ({ data }: any) => {
  const [isGrid, setIsGrid] = useState(false);
  const { posts } = data.wpgql;
  const _handleClick = () => {
    setIsGrid(!isGrid);
  };
  return (
    <>
      <SEO title="매일매일 1%씩 성장하기" />
      <StyledContainer>
        <Row>
          <Col col>
            <GridAndListToggle onClick={_handleClick} />
          </Col>
          <DittoWrap>
            {posts.edges.map(({ node }: any) => {
              const props = {
                imgSrc: node.featuredImage?.mediaItemUrl,
                excerpt: node.excerpt,
                date: node.date,
                footer: () => <CategoryList data={node.categories} />,
                title: () => <Link to={`/${node.slug}`}>{node.title}</Link>,
                isGrid: isGrid,
                key: node.id,
              };
              return <Ditto {...props} />;
            })}
          </DittoWrap>
        </Row>
      </StyledContainer>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    wpgql {
      posts(where: { status: PUBLISH }) {
        edges {
          node {
            id
            slug
            date
            title
            featuredImage {
              mediaItemUrl
            }
            excerpt
            categories {
              edges {
                node {
                  name
                  slug
                  id
                  _acf_taxonomy {
                    icon {
                      mediaItemUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
