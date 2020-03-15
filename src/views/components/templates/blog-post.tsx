/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GridThemeProvider, Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import Grid from '@style/Grid';
import Bio from '@view/components/bio';
import Layout from '@template/layout';
import SEO from '@view/components/seo';
import { rhythm, scale } from '@style/typography';

import Utterance from '@molecule/Utterances';

const CardWrap = styled.div`
  background: ${props => props.theme.color.bg[0]};
  border-radius: 3px;
  padding: ${rhythm(1)};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;

const CommentsRow = styled(Row)`
  margin-bottom: ${rhythm(2)};
`;

const FeaturedImageWrap = styled.div`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  overflow: hidden;
  font-size: 0;
  margin-bottom: ${rhythm(1)};
  img {
    margin-bottom: 0;
  }
`;

const StyledRow = styled(Row)`
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(1)};
`;

const BioRow = styled(StyledRow)`
  padding: 0 ${rhythm(1)};
`;

const StyledContainer = styled(Container)`
  margin-bottom: ${rhythm(2)};
`;
interface Props {
  data: {
    mdx: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: any;
}

const BlogPostTemplate = ({ data }: Props) => {
  const post = data.mdx;
  const _Grid = {
    ...Grid,
    container: {
      maxWidth: {
        xl: 960,
      },
    },
  };
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <GridThemeProvider gridTheme={_Grid}>
        <StyledContainer>
          {post.frontmatter.featuredImage?.childImageSharp.original.src && (
            <Row>
              <Col col>
                <FeaturedImageWrap>
                  <img
                    src={
                      post.frontmatter.featuredImage?.childImageSharp.original
                        .src
                    }
                    alt=""
                  />
                </FeaturedImageWrap>
              </Col>
            </Row>
          )}
          <StyledRow>
            <Col col>
              <CardWrap className="prism-previewer">
                <h1
                  style={{
                    marginBottom: 0,
                  }}
                >
                  {post.frontmatter.title}
                </h1>
                <p
                  style={{
                    ...scale(-1 / 5),
                    display: 'block',
                    marginBottom: rhythm(1),
                  }}
                >
                  {post.frontmatter.date}
                </p>
                <MDXRenderer>{post.body}</MDXRenderer>
              </CardWrap>
            </Col>
          </StyledRow>
          <BioRow>
            <Col col>
              <Bio />
            </Col>
          </BioRow>
          {process.env.NODE_ENV === 'production' && (
            <CommentsRow>
              <Col col>
                <Utterance />
              </Col>
            </CommentsRow>
          )}
        </StyledContainer>
      </GridThemeProvider>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`;
