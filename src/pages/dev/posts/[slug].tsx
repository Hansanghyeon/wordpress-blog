import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
// API
import { getAllPostsWithSlug, getPostAndMorePosts } from '@src/lib/api';
// components
import { CMS_NAME } from '@src/lib/constants';
import PostTitle from '@/post-title';
import WpPost from '@template/Post/Wp';
import Layout from '@template/Layout';

export default function Post({ post, posts, preview }: any) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) return <PostTitle>Loading…</PostTitle>;

  return (
    <>
      <Head>
        <title>
          {post.title} | {CMS_NAME}
        </title>
        <meta name="og:title" content={`${post.title} | ${CMS_NAME}`} />
        <meta name="description" content={post.excerpt} />
        <meta
          property="og:image"
          content={post.featuredImage?.node?.mediaItemUrl}
        />
      </Head>
      <Layout>
        <WpPost post={post} morePosts={posts?.edges} />
      </Layout>
    </>
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
    paths:
      allPosts.edges.map(({ node }: any) => `/dev/posts/${node.slug}`) || [],
    fallback: true,
  };
}
