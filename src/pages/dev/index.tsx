import Head from 'next/head';
// API
import { getAllPostsForHome } from '@src/lib/api';
// components
import Layout from '@template/Layout';

export default function Index({ allPosts, preview }: any) {
  console.log(allPosts);
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
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
