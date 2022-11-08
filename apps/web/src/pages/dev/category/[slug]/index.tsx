import { getNextStaticProps, is404 } from "@faustjs/next";
import Head from "next/head";
import { Header, Footer, Posts, Pagination } from "~web/components";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { client, DevCategoryIdType } from "~web/client";

const POSTS_PER_PAGE = 10;

export default function Page() {
  const { useQuery } = client;
  const { query = {} } = useRouter();
  const { slug, cursor } = query;
  const isBefore = cursor === "before";
  const option = {
    after: !isBefore ? (cursor as string) : undefined,
    before: isBefore ? (cursor as string) : undefined,
    first: !isBefore ? POSTS_PER_PAGE : undefined,
    last: isBefore ? POSTS_PER_PAGE : undefined,
  };
  const generalSettings = useQuery().generalSettings;
  const catQuery = {
    id: slug as string,
    idType: DevCategoryIdType.SLUG,
  };
  const { name, devs } = useQuery().devCategory(catQuery);
  const posts = devs(option);

  return (
    <>
      <Head>
        <title>Posts - {generalSettings?.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <h2>Category: {name}</h2>
          <Posts posts={posts.nodes} />

          <Pagination
            pageInfo={posts.pageInfo}
            basePath={`/category/${slug}`}
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
    fallback: "blocking",
  };
}
