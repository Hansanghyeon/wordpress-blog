/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import parse, { domToReact } from 'html-react-parser';
import Prism from 'prismjs';

import SEO from '@view/components/seo';
import { rhythm, scale } from '@style/typography';
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
  const { title, excerpt, date, content } = data.wpgql.post;
  const wpContentArray = content.split('\n\n\n\n');

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  });
  return (
    <>
      <SEO title={title} description={excerpt} />
      <PostTemplate>
        <h1
          style={{
            marginBottom: '4px',
          }}
        >
          {title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
          }}
        >
          <span className="date">
            {moment(date).format('YYYY년 MM월 DD일')}
          </span>
        </p>
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
