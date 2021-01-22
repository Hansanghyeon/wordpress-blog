import { useState } from 'react';
import Link from 'next/link';
import Masonry from 'react-masonry-css';
// components
import Ditto from '@atom/card/Ditto';
import CategoryList from '@module/list/Category';
import GridAndListToggle from '@atom/toggle/GridAndList';
// import PostPreview from '@/post-preview';
// style
import { DittoWrap, GridAndListToggleWrap, MasonryStyled } from './style';

export default function MoreStories({ posts }: any) {
  const [isGrid, setIsGrid] = useState(false);
  function _handleClick() {
    setIsGrid(!isGrid);
  }
  const gridBreakpointColumnsObj = {
    default: 3,
    998: 2,
    500: 1,
  };
  const ListBreakpointColumnsObj = {
    default: 2,
    768: 1,
  };
  return (
    <section>
      {posts.length > 2 && (
        <GridAndListToggleWrap>
          <GridAndListToggle onClick={_handleClick} />
        </GridAndListToggleWrap>
      )}
      <DittoWrap>
        <MasonryStyled>
          <Masonry
            breakpointCols={
              isGrid ? gridBreakpointColumnsObj : ListBreakpointColumnsObj
            }
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts.map(({ node }: any) => {
              const { categories, title, uri } = node;
              const props = {
                imgSrc: node.featuredImage?.node.mediaItemUrl,
                excerpt: node.excerpt,
                date: node.date,
                footer: () => <CategoryList data={categories} />,
                title: () => (
                  <Link as={uri} href="/dev/[slug]">
                    {title}
                  </Link>
                ),
                isGrid: isGrid,
                key: node.slug,
              };
              return <Ditto {...props} />;
            })}
          </Masonry>
        </MasonryStyled>
      </DittoWrap>
    </section>
  );
}
