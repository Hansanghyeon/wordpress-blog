import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import SEO from '@view/components/seo';
import Layout from '@template/layout';

const TitleWrap = styled.div`
  img {
    max-width: 78px;
    margin-bottom: 0;
  }
`;

const Categories = ({ data }: any) => {
  const { category } = data.wpgql;
  const { mediaItemUrl } = category._acf_taxonomy.icon;
  return (
    <Layout>
      <SEO title="title: text.tsx" />
      <Container>
        <Row>
          <Col col>
            <TitleWrap>
              <img src={mediaItemUrl} alt="" />
              <h1>{data.wpgql.category.name}</h1>
            </TitleWrap>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Categories;
export const pageQuery = graphql`
  query GET_CATEGORY($categoryId: ID!) {
    wpgql {
      category(id: $categoryId) {
        id
        name
        _acf_taxonomy {
          icon {
            mediaItemUrl
          }
        }
      }
    }
  }
`;
