import Head from 'next/head';
// Components
import Layout from '@template/Layout';
import Resume from '@template/Resume';

const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/d2coding@1.3.2/d2coding-ligature-full.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap"
          rel="stylesheet"
        ></link>
        <title>999번만큼 코딩해</title>
      </Head>
      <Layout msbType="hidden">
        <Resume />
      </Layout>
    </>
  );
};

export default Home;
export async function getStaticProps() {
  return {
    props: {},
  };
}
