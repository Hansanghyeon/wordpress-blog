import React from 'react';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
// Utils
import SEO from '@view/components/seo';
// components
import PostTemplate from '@template/post/index';
import TOC from '@molecule/TOC/context';
import SerieList from '@molecule/list/Serie';
import options from './options';

interface ContentReactMemoType {
  wpData: Array<string>;
}
const ContentMemo = React.memo(({ wpData }: ContentReactMemoType): any => {
  return wpData.map((block: string) => parse(block, options));
});

const WpPostLayout = ({ data }: any) => {
  const { title, excerpt, date, content, featuredImage, id } = data.wpgql.post;
  const series = data.wpgql.post.serieses.nodes[0];
  const wpData = content.split('\n\n\n\n');
  const header = {
    title,
    date,
  };
  const tocData: string[] = [];
  wpData.forEach((e: string, index: number) => {
    if (e.search(/<h[0-4].+>/) !== -1) {
      tocData.push(e);

      const findHeadingRule = new RegExp(
        '<(s*h[0-9])([^>]*)>(.*?<s*/s*h[0-9]>)',
      );
      const divider = findHeadingRule.exec(e);
      wpData[index] = `<${divider![1]} id='toc-${tocData.length - 1}'${
        divider![2]
      }>${divider![3]}`;
    }
  });

  return (
    <>
      <SEO
        title={title}
        description={excerpt}
        thumnail={featuredImage?.node.mediaItemUrl}
      />
      <PostTemplate imgSrc={featuredImage?.node.mediaItemUrl} header={header}>
        {series && <SerieList data={{ query: series, currentPostId: id }} />}
        <TOC data={tocData} />
        <ContentMemo wpData={wpData} />
      </PostTemplate>
    </>
  );
};

export default WpPostLayout;
export const pageQuery = graphql`
  query GET_WP_POST($postId: ID!) {
    wpgql {
      post(id: $postId) {
        id
        date
        title
        content
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        serieses {
          nodes {
            id
            name
            posts {
              edges {
                node {
                  id
                  title
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
`;
