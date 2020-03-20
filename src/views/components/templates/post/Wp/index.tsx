/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import SEO from '@view/components/seo';
// components
import PostTemplate from '@template/post/index';
import CodeHighlight from '@utile/CodeHighlight';

const WpPostLayout = ({ data }: any) => {
  const { title, excerpt, content } = data.wpgql.post;
  const wpContentArray = content.split('\n\n\n\n');
  return (
    <>
      <SEO title={title} description={excerpt} />
      <PostTemplate>
        {wpContentArray.map((block: string) => {
          let __html = block;
          if (__html.indexOf('<pre') !== -1) {
            return <CodeHighlight code={__html} />;
          }
          __html = __html.replace('<code>', '<code class="language-text">');
          return <div dangerouslySetInnerHTML={{ __html: __html }} />;
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
