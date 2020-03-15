import React from 'react';
import styled from 'styled-components';
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
          <Link to={node.slug}>
            <NotionStyleList key={node.id}>{node.title}</NotionStyleList>
          </Link>
        );
      })}
    </Wrap>
  );
};

export default InboxList;
