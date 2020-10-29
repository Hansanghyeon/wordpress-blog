import React from 'react';
import styled from 'styled-components';
import NotionStyle from '@bit/hansanghyeon.list-item.notion-style';
// Components
import Link from '@atom/Link';

const NotionStyleListItemStyled = styled(NotionStyle)`
  margin-bottom: 4px;
  font-family: 'Fira Code';
`;

const CategoryList: React.FC = ({ data }: any) => {
  return (
    <>
      {data.edges.map(({ node }: any) => (
        <Link key={node.id} to={`/${node.slug}`} activeClassName="active">
          <NotionStyleListItemStyled
            imgSrc={node._acf_taxonomy_category_list.icon.mediaItemUrl}
          >
            {node.name}
          </NotionStyleListItemStyled>
        </Link>
      ))}
    </>
  );
};
export default CategoryList;
