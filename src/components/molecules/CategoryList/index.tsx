import Link from 'next/link';
import styled from 'styled-components';
import NotionStyle from '@bit/hansanghyeon.list-item.notion-style';

const NotionStyleListItemStyled = styled(NotionStyle)`
  margin-bottom: 4px;
  font-family: 'Fira Code';
`;

const CategoryList: React.FC = ({ data }: any) => {
  return (
    <>
      {data.edges.map(({ node }: any) => (
        <Link key={`cat-posts-${node.slug}`} as={`/posts/${node.slug}`} href={`/posts/[slug]`}>
          <NotionStyleListItemStyled
            imgSrc={node?._acf_taxonomy_category_list?.icon.mediaItemUrl}
          >
            {node.name}
          </NotionStyleListItemStyled>
        </Link>
      ))}
    </>
  );
};
export default CategoryList;
