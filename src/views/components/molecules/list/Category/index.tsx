import React from 'react';
import styled from 'styled-components';
import NotionStyle from '@bit/hansanghyeon.list-item.notion-style';
// Components
import Link from '@atom/Link';

import { PostTypeAllCatRootWrap } from './index.style';

const NotionStyleListItemStyled = styled(NotionStyle)`
  margin-bottom: 4px;
`;

const CategoryList = ({ data }: any) => {
  return (
    <PostTypeAllCatRootWrap>
      {data.edges.map(({ node }: any) => (
        <Link key={node.id} to={`/${node.slug}`} activeClassName="active">
          <NotionStyleListItemStyled
            imgSrc={node._acf_taxonomy_category_list.icon.mediaItemUrl}
          >
            {node.name}
          </NotionStyleListItemStyled>
        </Link>
      ))}
    </PostTypeAllCatRootWrap>
  );
};
export default CategoryList;
