import Head from 'next/head';
// components
import Layout from '@template/Layout';

export default function Index() {
  return (
    <>
      <Head>
        <title>매일매일 1% | 4log</title>
      </Head>
      <Layout.Main />
    </>
  );
}
