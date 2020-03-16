import React from 'react';
import { graphql } from 'gatsby';

// import SEO from '@view/components/seo';
// components
import PostTemplate from '@template/post/index';

const WpPostLayout = () => {
  return (
    <>
      <PostTemplate>
        <div>test</div>
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
        featuredImage {
          mediaItemUrl
        }
      }
    }
  }
`;
