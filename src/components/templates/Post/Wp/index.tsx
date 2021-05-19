import React from 'react';
import parse from 'html-react-parser';
// components
import PostTemplate from '@template/Post/index';
import TOC from '@module/TOC';
import SerieList from '@module/list/Serie';
import options from './options';
import Tags from '@/tags';

interface ContentReactMemoType {
  wpData: Array<string>;
}
const ContentMemo = React.memo(({ wpData }: ContentReactMemoType): any => {
  return wpData.map((block: string) => parse(block, options(block)));
});

export default function WpPost({ post, morePosts }: any) {
  const { content, id } = post;
  const series = post.serieses.nodes[0];
  const wpData = content.split('\n\n\n\n');
  const tocData: string[] = [];
  wpData.forEach((e: string, index: number) => {
    if (e.search(/<h[0-4].+>/) !== -1 && e.search(/<pre/) === -1) {
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
    <PostTemplate morePosts={morePosts} post={post}>
      {series && <SerieList data={{ query: series, currentPostId: id }} />}
      <TOC data={tocData} />
      <ContentMemo wpData={wpData} />
      {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
    </PostTemplate>
  );
}
