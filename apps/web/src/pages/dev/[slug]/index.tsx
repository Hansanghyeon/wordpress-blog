import { getNextStaticProps, is404 } from "@faustjs/next";
import { client, Dev, DevIdType, Query } from "~web/client";
import { Footer, Header, Hero } from "~web/components";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { globalCss } from '~web/stitches.config'
import { windowTitle } from '~web/common';

export interface PostProps {
  post: Dev | Dev["preview"]["node"] | null | undefined;
}

export function DevComponent({ post }: PostProps) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  const title = windowTitle(post?.title(), generalSettings.title);

  globalStyle();

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://hansanghyeon.github.io/prism-themes/main.css" />
        <title key="title">{title}</title>
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
  const dev = useQuery().dev({
    id: slug,
    idType: DevIdType.SLUG,
  });

  return <DevComponent post={dev} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params;
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: null, //await is404(context, { client }),
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

const globalStyle = globalCss({
  'pre.wp-block-code': {
    position: 'relative',
    padding: 0,
    border: 'none',
    fontSize: '85%',
    borderRadius: 0,
    '+ pre': {
      marginTop: '1.25em'
    },
    '&.whitespace-pre-wrap code': {
      whiteSpace: 'pre-wrap',
    },
  },
  'pre.wp-block-code code': {
  }
});