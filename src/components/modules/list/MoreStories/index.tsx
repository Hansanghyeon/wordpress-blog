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
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  };
  return (
    <section>
      <h2>More Stories</h2>
      {posts.length > 2 && (
        <GridAndListToggleWrap>
          <GridAndListToggle onClick={_handleClick} />
        </GridAndListToggleWrap>
      )}
      <DittoWrap>
        <MasonryStyled>
          <Masonry
            breakpointCols={isGrid ? breakpointColumnsObj : 0}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts.map(({ node }: any) => {
              const { categories, slug, title } = node;
              const props = {
                imgSrc: node.featuredImage?.node.mediaItemUrl,
                excerpt: node.excerpt,
                date: node.date,
                footer: () => <CategoryList data={categories} />,
                title: () => (
                  <Link as={`/posts/${slug}`} href="/posts/[slug]">
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
