import React from 'react';

// Components
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Layout from '@src/components/templates/layout';
import SEO from '@src/components/seo';

interface Props {
  data: {
    allMdx: {
      totalCount: number;
      edges: [
        {
          node: {
            frontmatter: {
              title: string;
            };
            fields: {
              slug: string;
            };
          };
        },
      ];
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: any;
}

const Tags = ({ pageContext, data }: Props) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  return (
    <Layout>
      <SEO title={tag} />
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields;
          const { title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

export default Tags;
export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
