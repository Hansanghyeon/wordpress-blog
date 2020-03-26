import React from 'react';
// Components
import Link from '@atom/Link';
import NotionStyleListItem from '@atom/listItem/NotionStyle';

const CategoryList = ({ data }: any) => {
  const categories = data.edges.filter(
    ({ node }: any) => node.id !== 'Y2F0ZWdvcnk6MQ==',
  );
  return (
    <>
      {categories.map(({ node }: any) => (
        <NotionStyleListItem
          key={node.id}
          imgSrc={node._acf_taxonomy.icon.mediaItemUrl}
        >
          <Link to={`/${node.slug}`} activeClassName="active">
            {node.name}
          </Link>
        </NotionStyleListItem>
      ))}
    </>
  );
};
export default CategoryList;
