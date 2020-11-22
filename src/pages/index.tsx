import Head from 'next/head';
import Container from '@src/components/container';
import MoreStories from '@molecule/MoreStories';
import HeroPost from '@src/components/hero-post';
import Intro from '@src/components/intro';
// import Layout from "@src/components/layout";
import { getAllPostsForHome } from '@src/lib/api';
import { CMS_NAME } from '@src/lib/constants';
import * as LayoutT from '@template/Layout';

export default function Index({ allPosts: { edges }, preview }: any) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <LayoutT.default>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </LayoutT.default>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
