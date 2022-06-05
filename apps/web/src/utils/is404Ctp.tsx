import { selectFields } from "gqty";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { getClient } from "@faustjs/next";

export interface Is404Config {
  client: ReturnType<typeof getClient>;
}

/**
 * Checks if a post is available given a custom post type.
 * Temporary until Faust's is404() is adjusted to account for custom post types.
 * @param {string} slug The slug of the custom post type.
 * @param {string} customPostType The WordPress custom post type.
 * @returns {bool}
 */
export default async function is404Cpt<
  Context extends GetStaticPropsContext | GetServerSidePropsContext
>({ params }: Context, { client }: Is404Config, customPostType) {
  if (!params) {
    return false;
  }

  const { slug } = params;

  const customPostTypePost = await client.client.resolved(() => {
    const node = client.client.query[customPostType]({
      id: slug,
      idType: "SLUG",
    });

    return selectFields(node, ["id"]);
  });

  return customPostTypePost === null;
}
