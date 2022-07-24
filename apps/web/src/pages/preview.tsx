import type { Page, Post, Dev } from "~web/client";
import { client } from "~web/client";
import { PageComponent } from "./[...pageUri]";
import { DevComponent } from "./dev/[slug]";

export default function Preview() {
  const isLoading = client.useIsLoading();
  const { typeName, node } = client.auth.usePreviewNode();

  if (isLoading || node === undefined) {
    return <p>Loading...</p>;
  }

  if (node === null) {
    return <p>Post not found</p>;
  }

  switch (typeName) {
    case "Page": {
      const page = node as Page;
      return <PageComponent page={page} />;
    }
    case "Dev": {
      const post = node as Dev;
      return <DevComponent post={post} />;
    }
    case "Portfolio": {
      const post = node as Dev;
      return <DevComponent post={post} />;
    }
    // Add custom post types here as needed
    default: {
      throw new Error(`Unknown post type: ${typeName}`);
    }
  }
}
