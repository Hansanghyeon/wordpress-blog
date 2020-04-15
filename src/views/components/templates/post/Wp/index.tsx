/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import parse, { domToReact } from 'html-react-parser';
import Prism from 'prismjs';

import SEO from '@view/components/seo';
// components
import PostTemplate from '@template/post/index';
import SeoPreviewCard from '#/SeoPreviewCard';
import Callout from '#/Callout';

// HTML react parser options
const options = {
  replace: ({ name, children, attribs }: any) => {
    if (!name) return;
    if (name === 'pre' && attribs.class === 'wp-block-code') {
      return <pre>{domToReact(children)}</pre>;
    }
    if (name === 'component') {
      switch (attribs.fc) {
        case 'callout':
          return (
            <Callout bgColor={attribs.bg} icon={attribs.icon}>
              {domToReact(children)}
            </Callout>
          );
        case 'seo-preview':
          return SeoPreviewCard(attribs.url);
        default:
          return;
      }
    }
    if (name === 'code') {
      return <code className="language-text">{domToReact(children)}</code>;
    }
  },
};

const WpPostLayout = ({ data }: any) => {
  const { title, excerpt, date, content, featuredImage } = data.wpgql.post;
  const wpContentArray = content.split('\n\n\n\n');
  const header = {
    title,
    date,
  };
  const tocData: string[] = [];
  wpContentArray.forEach((e: string) => {
    if (e.search(/<h[0-4].+>/) !== -1) tocData.push(e);
  });

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  });
  return (
    <>
      <SEO title={title} description={excerpt} />
      <PostTemplate imgSrc={featuredImage?.mediaItemUrl} header={header}>
        {wpContentArray.map((block: string) => parse(block, options))}
      </PostTemplate>
    </>
  );
};

export default WpPostLayout;
export const pageQuery = graphql`
  query GET_WP_POST($postId: ID!) {
    wpgql {
      post(id: $postId) {
        date
        title
        content
        excerpt
        featuredImage {
          mediaItemUrl
        }
      }
    }
  }
`;
