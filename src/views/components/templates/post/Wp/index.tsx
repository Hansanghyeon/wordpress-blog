import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import Prism from 'prismjs';
import styled from 'styled-components';
// Utils
import SEO from '@view/components/seo';
import respondTo from '@style/_respondTo';
import { rhythm } from '@style/typography';
// components
import PostTemplate from '@template/post/index';
import TOC from '@molecule/TOC';
import options from './options';

const TocView = styled.div`
  margin-bottom: ${rhythm(1)};
  ${respondTo.hg`
    position: fixed;
    top: calc(45px + ${rhythm(1)});
    transform: translateX(960px);
  `};
`;

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
        <TocView>
          <TOC data={tocData} />
        </TocView>
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
