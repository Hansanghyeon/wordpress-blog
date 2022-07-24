import { getNextStaticProps } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { DateTime } from 'luxon';
// components
import { client, Portfolio, PortfolioIdType } from '~web/client';
import { WPGBlocks, is404c } from '~web/lib';
import Post from '~web/components/template/Post';
import '@wordpress/block-library/build-style/common.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';

export interface PostProps {
  post: Portfolio | Portfolio['preview']['node'] | null | undefined;
}

export function PortfolioComponent({ post }: PostProps) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  const postMeta = {
    title: post.title(),
    date: DateTime.fromISO(post.date).toFormat('yyyy년 MM월 dd일'),
    modified: DateTime.fromISO(post.modified).toFormat('yyyy년 MM월 dd일'),
  };
  return (
    <>
      <Head>
        <title>
          {post?.title()} - {generalSettings.title}
        </title>
      </Head>
      {/* <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Hero
        title={post?.title()}
        bgImage={post?.featuredImage?.node?.sourceUrl()}
      /> */}

      <div className="container md:max-w-[800px]">
        <Post meta={postMeta}>
          <WPGBlocks blocks={post?.blocks ?? ''} />
        </Post>
      </div>

      {/* <Footer copyrightHolder={generalSettings.title} /> */}
    </>
  );
}

export default function Page({ slug }: { slug: string }) {
  const { useQuery } = client;
  const post = useQuery().portfolio({
    id: slug,
    idType: PortfolioIdType.SLUG,
  });

  return <PortfolioComponent post={post} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params;
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404c(context, { client }, 'portfolio'),
    props: {
      slug,
    },
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
