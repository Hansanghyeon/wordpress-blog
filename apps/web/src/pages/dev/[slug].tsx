import { getNextStaticProps, is404 } from "@faustjs/next";
import { client, Dev, DevIdType } from "~web/client";
import { Footer, Header, Hero } from "~web/components";
import { is404c } from "~web/lib";
import { GetStaticPropsContext } from "next";
import Head from "next/head";

export interface PostProps {
  post: Dev | Dev["preview"]["node"] | null | undefined;
}

export function DevComponent({ post }: PostProps) {
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

export default function Page({ slug }) {
  const { useQuery } = client;
  const post = useQuery().dev({
    id: slug,
    idType: DevIdType.SLUG,
  });

  return <DevComponent post={post} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params;
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404c(context, { client }, "dev"),
    props: {
      slug,
    },
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
