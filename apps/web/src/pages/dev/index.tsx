import { getNextStaticProps } from "@faustjs/next";
import { client } from "~web/client";
import { Footer, Header, Pagination, Posts } from "~web/components";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styles from "~web/scss/pages/posts.module.scss";

const POSTS_PER_PAGE = 6;

export default function Page() {
  const { query = {} } = useRouter();
  const { id, cursor } = query;
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const isBefore = id === "before";
  const devs = useQuery().devs({
    after: !isBefore ? (cursor as string) : undefined,
    before: isBefore ? (cursor as string) : undefined,
    first: !isBefore ? POSTS_PER_PAGE : undefined,
    last: isBefore ? POSTS_PER_PAGE : undefined,
  });

  if (useQuery().$state.isLoading) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          {generalSettings.title} - {generalSettings.description}
        </title>
      </Head>

      <main className="content content-index">
        <Posts
          posts={devs.nodes}
          heading="Blog Posts"
          headingLevel="h2"
          postTitleLevel="h3"
          id={styles.post_list}
        />
        <Pagination pageInfo={devs.pageInfo} basePath="/dev" />
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
