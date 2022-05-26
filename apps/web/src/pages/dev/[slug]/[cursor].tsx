import { getNextStaticProps } from "@faustjs/next";
import { GetStaticPropsContext } from "next";
import Page from "..";
import { client } from "~web/client";

export default Page;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { cursor } = context.params;

  if (!(cursor === "after" || cursor === "before")) {
    return {
      notFound: true,
    };
  }

  return getNextStaticProps(context, {
    Page,
    client,
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
