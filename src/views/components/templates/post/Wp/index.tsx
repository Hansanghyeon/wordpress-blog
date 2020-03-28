/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';

import SEO from '@view/components/seo';
import { rhythm, scale } from '@style/typography';
// components
import PostTemplate from '@template/post/index';
import CodeHighlight from '@utile/CodeHighlight';

const WpPostLayout = ({ data }: any) => {
  const { title, excerpt, date, content } = data.wpgql.post;
  const wpContentArray = content.split('\n\n\n\n');
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
        {wpContentArray.map((block: string) => {
          let __html = block;
          if (__html.indexOf('<pre') !== -1) {
            return <CodeHighlight code={__html} />;
          }
          const Code = new RegExp('<code>', 'g');
          __html = __html.replace(Code, '<code class="language-text">');
          return <div dangerouslySetInnerHTML={{ __html }} />;
        })}
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
