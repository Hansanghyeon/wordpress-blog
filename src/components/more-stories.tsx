import Link from 'next/link'
// components
import Ditto from '@src/components/card/Ditto';
import CategoryList from '@molecule/CategoryList';
import PostPreview from './post-preview'

export default function MoreStories({ posts }: any) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map(({ node }: any) => {
          const { categories, slug, title } = node;
          const props = {
            imgSrc: node.featuredImage?.node.mediaItemUrl,
            excerpt: node.excerpt,
            date: node.date,
            footer: () => <CategoryList data={categories} />,
            title: () => (
              <Link as={`/posts/${slug}`} href="/posts/[slug]" >
                { title}
              </Link>
            ),
            isGrid: false,
            key: node.slug,
          };
          return (
            <>
              <Ditto {...props} />
            </>
          )
        })}
      </div>
    </section >
  )
}
