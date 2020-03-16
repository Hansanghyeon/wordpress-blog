import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import SEO from '@view/components/seo';
import Layout from '@template/layout';
import { rhythm } from '@style/typography';
import InboxList from '@molecule/list/Inbox';

const TitleWrap = styled.div`
  img {
    max-width: 78px;
    margin-bottom: ${rhythm(1 / 2)};
  }
  h1 {
    font-family: 'Nanum Gothic';
  }
`;
const StyledContainer = styled(Container)`
  padding-top: ${rhythm(1)};
`;

const Categories = ({ data }: any) => {
  const { category } = data.wpgql;
  const { mediaItemUrl } = category?._acf_taxonomy.icon;
  const { name, description } = category;
  const { posts } = category;
  return (
    <Layout>
      <SEO title={name} />
      <StyledContainer>
        <Row>
          <Col col>
            <TitleWrap>
              <img src={mediaItemUrl} alt="" />
              <h1>{name}</h1>
              <p>
                {description?.split('\n').map((text: string) => (
                  <>
                    <span>{text}</span>
                    <br />
                  </>
                ))}
              </p>
            </TitleWrap>
          </Col>
        </Row>
        <Row>
          <Col col>
            <InboxList data={posts} />
          </Col>
        </Row>
      </StyledContainer>
    </Layout>
  );
};

export default Categories;
export const pageQuery = graphql`
  query GET_WP_CATEGORY_POST($categoryId: ID!) {
    wpgql {
      category(id: $categoryId) {
        id
        name
        description
        _acf_taxonomy {
          icon {
            mediaItemUrl
          }
        }
        posts {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    }
  }
`;
