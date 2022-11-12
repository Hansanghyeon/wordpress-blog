import { getNextStaticProps, is404 } from "@faustjs/next";
import { client, Post } from "~web/client";
import { Footer, Header, Hero } from "~web/components";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { windowTitle } from '~web/common';

export interface PostProps {
  post: Post | Post["preview"]["node"] | null | undefined;
}

export function PostComponent({ post }: PostProps) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  const title = windowTitle(post?.title(), generalSettings.title);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Hero
        title={post?.title()}
        bgImage={post?.featuredImage?.node?.sourceUrl()}
      />

      <main className="content content-single">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: post?.content() ?? "" }} />
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export default function Page() {
  const { usePost } = client;
  const post = usePost();

  return <PostComponent post={post} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
