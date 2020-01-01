import React from 'react';
import { graphql } from 'gatsby';
import { globalHistory } from '@reach/router';

import Layout from '@src/components/templates/layout';
import SEO from '@src/components/seo';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const NotFoundPage = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title;
  const { location } = globalHistory;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
