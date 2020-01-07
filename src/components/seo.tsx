/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { globalHistory } from '@reach/router';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

interface Props {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

const SEO = ({
  description, lang = 'ko', meta, title,
}: Props) => {
  const themeContext = useContext(ThemeManagerContext);
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
      bodyAttributes={{ class: themeContext.isDark ? 'dark-mode' : 'light-mode' }}
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
