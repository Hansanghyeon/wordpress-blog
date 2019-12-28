import React from 'react';
// Utilities
import kebabCase from 'lodash/kebabCase';
// Components
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

interface Props {
  data: {
    allMdx: {
      group: [
        {
          fieldValue: string,
          totalCount: number
        }
      ]
    },
    site: {
      siteMetadata: {
        title: string
      },
    },
  },
}

const TagsPage = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title;
  const { group } = data.allMdx;
  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO title="Tags" />
      <div>
        <h1 style={{ marginBottom: rhythm(1 / 4) }}>Tags</h1>
        <ul>
          {group.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue}
                {' '}
                (
                {tag.totalCount}
                )
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default TagsPage;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
