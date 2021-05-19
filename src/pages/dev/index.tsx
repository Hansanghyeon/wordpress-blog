import Head from 'next/head';
// API
import { getAllDevPostsForHome } from '@api/wp/dev';
// components
import Layout from '@template/Layout';

export default function Index({
  allPosts,
}: // preview
any) {
  return (
    <>
      <Head>
        <title>매일매일 1% | Dev</title>
      </Head>
      <Layout.Dev data={{ allPosts }} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllDevPostsForHome('dev', preview);
  return {
    props: { allPosts, preview },
  };
}
