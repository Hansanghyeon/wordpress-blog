/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

// import Bio from '@src/components/bio';
import Layout from '@src/components/templates/layout';
import SEO from '@src/components/seo';
import { rhythm } from '@utile/typography';
import { Container, Row, Col } from 'styled-bootstrap-grid';

interface Props {
  data: {
    allMdx: any;
  };
}

interface Post {
  node: {
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
      description: string;
    };
  };
}

const BlogIndex = ({ data }: Props) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO title="매일매일 1%씩 성장하기" />
      <Container>
        <Row>
          <Col col>
            {posts.map(({ node }: Post) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
