import Link from 'next/link';
import NotionListItem from '@atom/listItem/Notion';

const CategoryList = ({ data }: any) => {
  return (
    <>
      {data.edges.map(({ node }: any) => (
        <Link
          key={node.slug}
          as={`/dev/category/${node.slug}`}
          href={`/dev/category/[slug]`}
        >
          <a>
            <NotionListItem
              imgSrc={node?._acf_taxonomy_category_list?.icon?.mediaItemUrl}
            >
              {node.name}
            </NotionListItem>
          </a>
        </Link>
      ))}
    </>
  );
};
export default CategoryList;
