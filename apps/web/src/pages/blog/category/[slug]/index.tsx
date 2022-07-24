import { getNextStaticProps } from '@faustjs/next';
import Head from 'next/head';
import { Header, Footer, Posts, Pagination } from '~web/components';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { client, BlogCategoryIdType } from '~web/client';

const POSTS_PER_PAGE = 10;

export default function Page() {
  const { useQuery } = client;
  const { query = {} } = useRouter();
  const { pageNumber, slug } = query;
  const option = {};
  const generalSettings = useQuery().generalSettings;
  const catQuery = {
    id: slug as string,
    idType: BlogCategoryIdType.SLUG,
  };
  const { name, blogs } = useQuery().blogCategory(catQuery);
  const posts = blogs(option);

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>Posts - {generalSettings?.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <h2>Category: {name}</h2>
          <Posts posts={posts.nodes} />

          <Pagination
            hasPrevious={posts.pageInfo.offsetPagination.hasPrevious}
            hasMore={posts.pageInfo.offsetPagination.hasMore}
            total={posts.pageInfo.offsetPagination.total}
            current={Number(pageNumber)}
            midSize={5}
            per={POSTS_PER_PAGE}
            basePath="/dev"
          />
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    // notFound: await is404(context, { client }),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
