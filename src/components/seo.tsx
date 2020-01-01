/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { globalHistory } from '@reach/router';

interface Props {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

const SEO = ({
  description, lang = 'ko', meta, title,
}: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const { location } = globalHistory;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        location.pathname === '/'
          ? `${site.siteMetadata.title} | %s` : `%s | ${site.siteMetadata.title}`
      }
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'github:card',
          content: 'summary',
        },
        {
          name: 'github:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'github:title',
          content: title,
        },
        {
          name: 'github:description',
          content: metaDescription,
        },
      ].concat(meta || [])}
    />
  );
};

export default SEO;
