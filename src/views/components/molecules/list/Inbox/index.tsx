import React from 'react';
import styled from 'styled-components';
// components
import NotionStyleList from '@atom/listItem/NotionStyle';
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
        return (
          <NotionStyleList key={node.id}>
            <Link to={`/${node.slug}`}>{node.title}</Link>
          </NotionStyleList>
        );
      })}
    </Wrap>
  );
};

export default InboxList;
