import { getNextStaticProps } from "@faustjs/next";
import { client } from "~web/client";
import { Pagination, Posts } from "~web/components";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styles from "~web/scss/pages/posts.module.scss";

const POSTS_PER_PAGE = 10;

export default function Page() {
  const { query = {} } = useRouter();
  const { pageNumber } = query;
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const devs = useQuery().devs({
    where: {
      offsetPagination: {
        offset: Number(pageNumber) * POSTS_PER_PAGE - POSTS_PER_PAGE,
        size: POSTS_PER_PAGE,
      }
    }
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
        <Pagination
          hasPrevious={devs.pageInfo.offsetPagination.hasPrevious}
          hasMore={devs.pageInfo.offsetPagination.hasMore}
          total={devs.pageInfo.offsetPagination.total}
          current={Number(pageNumber)}
          midSize={5}
          per={POSTS_PER_PAGE}
          basePath="/dev"
        />
      </main>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
