import { useState, useEffect } from 'react';
import Link from 'next/link';
// components
import Ditto from '@src/components/card/Ditto';
import CategoryList from '@molecule/CategoryList';
import GridAndListToggle from '@atom/toggle/GridAndList';
import PostPreview from '@src/components/post-preview';
// style
import { DittoWrap, GridAndListToggleWrap } from './style';

export default function MoreStories({ posts }: any) {
  const [isGrid, setIsGrid] = useState(false);
  function _handleClick() {
    setIsGrid(!isGrid);
  }
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      {posts.length > 2 && (
        <GridAndListToggleWrap>
          <GridAndListToggle onClick={_handleClick} />
        </GridAndListToggleWrap>
      )}
      <DittoWrap>
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
      </DittoWrap>
    </section>
  );
}
