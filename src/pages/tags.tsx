import React from 'react';
// Utilities
import kebabCase from 'lodash/kebabCase';
// Components
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Layout from '@src/components/templates/layout';
import SEO from '@src/components/seo';
import { rhythm } from '@utile/typography';

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
  },
}

const TagsPage = ({ data }: Props) => {
  const { group } = data.allMdx;
  return (
    <Layout>
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
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
