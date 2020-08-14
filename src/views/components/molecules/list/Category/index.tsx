import React from 'react';
import styled from 'styled-components';
// Components
import Link from '@atom/Link';
import NotionStyleListItem from '@atom/listItem/NotionStyle';
import { PostTypeAllCatRootWrap } from './index.style';

const NotionStyleListItemStyled = styled(NotionStyleListItem)`
  margin-bottom: 4px;
`;

const CategoryList = ({ data }: any) => {
  const categories = data.edges.filter(
    ({ node }: any) => node.id !== 'Y2F0ZWdvcnk6MQ==',
  );
  return (
    <PostTypeAllCatRootWrap>
      {categories.map(({ node }: any) => (
        <Link key={node.id} to={`/${node.slug}`} activeClassName="active">
          <NotionStyleListItemStyled
            data={{ imgSrc: node._acf_taxonomy.icon.mediaItemUrl }}
          >
            {node.name}
          </NotionStyleListItemStyled>
        </Link>
      ))}
    </PostTypeAllCatRootWrap>
  );
};
export default CategoryList;
