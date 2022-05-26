import { getNextStaticProps, is404 } from "@faustjs/next";
import { client, Post } from "~web/client";
import { Footer, Header, Hero } from "~web/components";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

export interface PostProps {
  post: Post | Post["preview"]["node"] | null | undefined;
}

export function PostComponent({ post }: PostProps) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>
          {post?.title()} - {generalSettings.title}
        </title>
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
  // const { usePost, useQuery } = client;
  // const dev = useQuery().dev;

  // return <PostComponent post={post} />;
  return <>test</>;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params;
  console.log(slug);
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
