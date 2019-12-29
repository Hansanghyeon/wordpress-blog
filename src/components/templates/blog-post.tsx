/* eslint-disable react/no-danger */
import React from 'react';
import { Link, graphql } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  GridThemeProvider,
  Container,
  Row,
  Col,
} from 'styled-bootstrap-grid';
import styled from 'styled-components';
import gridTheme from '@src/utils/gridTheme';
import Bio from '@src/components/bio';
import Layout from '@src/components/layout';
import SEO from '@src/components/seo';
import { rhythm, scale } from '@src/utils/typography';

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

const CardWrap = styled.div`
  background: #fff;
  border-radius: ${rhythm(1 / 4)};
  padding: ${rhythm(1)};
  margin-bottom: ${rhythm(1)};
`;

const FeaturedImageWrap = styled.div`
  border-bottom-left-radius: ${rhythm(1 / 4)};
  border-bottom-right-radius: ${rhythm(1 / 4)};
  overflow: hidden;
  font-size: 0;
  margin-bottom: ${rhythm(2)};
`;

const BlogPostTemplate = ({ data, pageContext }: Props) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const GridTheme = {
    ...gridTheme,
    container: {
      maxWidth: {
        xl: 960,
      },
    },
  };

  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <GridThemeProvider gridTheme={GridTheme}>
        <Container>
          <Row>
            <Col col>
              <FeaturedImageWrap>
                <img src={post.frontmatter.featuredImage?.childImageSharp.original.src} alt="" style={{ marginBottom: 0 }} />
              </FeaturedImageWrap>
            </Col>
          </Row>
          <Row>
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
          </Row>
          <Row>
            <Col col>
              <Bio />
            </Col>
          </Row>
          <Row>
            <Col col>
              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  listStyle: 'none',
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ←&nbsp;
                      {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title}
                      &nbsp;→
                    </Link>
                  )}
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </GridThemeProvider>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
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
