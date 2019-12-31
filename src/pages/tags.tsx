import React from 'react';
// Utilities
import kebabCase from 'lodash/kebabCase';
import { globalHistory } from '@reach/router';
// Components
import { Link, graphql } from 'gatsby';
import Layout from '@src/components/layout';
import SEO from '@src/components/seo';
import { rhythm } from '@src/utils/typography';

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
  const { location } = globalHistory;
  return (
    <Layout location={location} title={siteTitle}>
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
