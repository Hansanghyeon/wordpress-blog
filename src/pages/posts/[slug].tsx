import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '@src/components/container';
import PostBody from '@src/components/post-body';
import MoreStories from '@molecule/MoreStories';
import Header from '@src/components/header';
import PostHeader from '@src/components/post-header';
import SectionSeparator from '@src/components/section-separator';
import Layout from '@template/Layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '@src/lib/api';
import PostTitle from '@src/components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '@src/lib/constants';
import Tags from '@src/components/tags';

export default function Post({ post, posts, preview }: any) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage?.node}
                date={post.date}
                author={post.author?.node}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({
  params,
  preview = false,
  previewData,
}: any) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }: any) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
}
