import React from 'react';
import styled from 'styled-components';
// components
import NotionStyle from '@bit/hansanghyeon.list-item.notion-style';
import Link from '@atom/Link';

const Wrap = styled.div``;
const TitleWrap = styled.div`
  font-size: 18px;
  padding: 8px 0;
`;

const InboxList = ({ data }: any) => {
  return (
    <Wrap>
      <TitleWrap>
        <span>🗃</span>
        INBOX
      </TitleWrap>
      {data.edges.map(({ node }: any) => {
        const { icon } = node._acf_post;
        return (
          <NotionStyle key={node.id} imgSrc={icon?.mediaItemUrl}>
            <Link direction="left" to={`/post/${node.slug}`}>
              {node.title}
            </Link>
          </NotionStyle>
        );
      })}
    </Wrap>
  );
};

export default InboxList;
