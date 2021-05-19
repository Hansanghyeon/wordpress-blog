import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
// API
import { getAllSlug } from '@api/wp';
import { getCategoryAndPosts } from '@api/wp/dev';
// components
import { SITE_NAME } from '@src/lib/constants';
import Layout from '@template/Layout';
import Category from '@template/Category';

export default function Categories({ category }: any) {
  const router = useRouter();

  if (!router.isFallback && !category) {
    return <ErrorPage statusCode={404} />;
  }
  if (router.isFallback) return <>Loading…</>;

  return (
    <>
      <Head>
        <title>
          {category.name} | {SITE_NAME}
        </title>
        <meta name="og:title" content={`${category.name} | ${SITE_NAME}`} />
        {category.description && (
          <meta name="description" content={category.description} />
        )}
      </Head>
      <Layout>
        <Category data={category} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  const data = await getCategoryAndPosts(params.slug);
  return {
    props: {
      category: data.category,
    },
  };
}

export async function getStaticPaths() {
  const allCat = await getAllSlug('dev_categories');

  return {
    paths:
      allCat.edges.map(({ node }: any) => `/dev/category/${node.slug}`) || [],
    fallback: true,
  };
}
