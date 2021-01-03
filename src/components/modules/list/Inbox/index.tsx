import React from 'react';
import styled from 'styled-components';
// components
import NotionListItem from '@atom/listItem/Notion';
import Link from 'next/link';

const Wrap = styled.div``;

const InboxList = ({ data }: any) => {
  return (
    <Wrap>
      {data.edges.map(({ node }: any) => {
        const { icon } = node._acf_post;
        return (
          <NotionListItem key={node.id} imgSrc={icon?.mediaItemUrl}>
            <Link as={`/dev/posts/${node.slug}`} href="/dev/posts/[slug]">
              {node.title}
            </Link>
          </NotionListItem>
        );
      })}
    </Wrap>
  );
};

export default InboxList;
