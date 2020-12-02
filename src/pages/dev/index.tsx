import Head from 'next/head';
// API
import { getAllPostsForHome } from '@src/lib/api';
// components
import Layout from '@template/Layout';

export default function Index({ allPosts, preview }: any) {
  return (
    <>
      <Head>
        <title>매일매일 1% | 4log</title>
      </Head>
      <Layout.Main data={{ allPosts }} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
