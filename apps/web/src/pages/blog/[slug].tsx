import { getNextStaticProps } from '@faustjs/next';
import { client, Blog, BlogIdType } from '~web/client';
import { Footer, Header, Hero } from '~web/components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { is404c } from '~web/lib';

export interface PostProps {
  post: Blog | Blog['preview']['node'] | null | undefined;
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
          <div dangerouslySetInnerHTML={{ __html: post?.content() ?? '' }} />
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export default function Page({ slug }: { slug: string }) {
  const { useQuery } = client;
  const dev = useQuery().blog({
    id: slug,
    idType: BlogIdType.SLUG,
  });

  return <DevComponent post={dev} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params;
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404c(context, { client }, 'blog'),
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
