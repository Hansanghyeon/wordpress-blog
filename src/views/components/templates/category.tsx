import React from 'react';
import { graphql as gql } from 'gatsby';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import SEO from '@view/components/seo';
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
  min-height: calc(100vh - var(--gnb-height) - var(--fnb-height));
`;

const Category = ({ data }: any) => {
  const { category } = data.wpgql;
  const { mediaItemUrl } = category?._acf_taxonomy.icon;
  const { name, description } = category;
  const { posts } = category;
  return (
    <>
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
    </>
  );
};

export default Category;
export const pageQuery = gql`
  query($categoryId: ID!) {
    wpgql {
      category(id: $categoryId) {
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
              databaseId
              id
              title
              slug
              _acf_post {
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
`;
