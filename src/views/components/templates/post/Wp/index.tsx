import React from 'react';
import { graphql } from 'gatsby';

import SEO from '@view/components/seo';
// components
import PostTemplate from '@template/post/index';

const WpPostLayout = ({ data }: any) => {
  const { title, excerpt, content } = data.wpgql.post;
  const wpContentArray = content.split('\n\n\n\n');

  return (
    <>
      <SEO title={title} description={excerpt} />
      <PostTemplate>
        {wpContentArray.map((block: string) => {
          return <div dangerouslySetInnerHTML={{ __html: block }} />;
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
