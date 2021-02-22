import { fetchAPI } from '@api/index';

export async function getAllDevPostsForHome(
  postType: string,
  preview: boolean,
) {
  const data: any = await fetchAPI(
    `
    query AllPosts {
      ${postType}s(first: 50, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            title
            excerpt
            slug
            date
            uri
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            author {
              node {
                name
                nicename
                avatar {
                  url
                }
                nickname
              }
            }
            dev_categories {
              edges {
                node {
                  name
                  slug
                  id
                  _acf_taxonomy_category_list {
                    icon {
                      mediaItemUrl
                    }
                    categoryListVisible
                  }
                  _acf_taxonomy_category_main {
                    mainVisible
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    },
  );

  data.devs.edges = data.devs.edges.map((_: any) => {
    _.node['categories'] = _.node.dev_categories;
    delete _.node.dev_categories;
    return _;
  });
  return data.devs;
}

const User = `
fragment AuthorFields on User {
  name
  description
  avatar {
    url
  }
  _acf_user_option {
    bmc
    stackexchange {
      ... on User_AcfUserOption_Stackexchange_Stack {
        link
        name
      }
    }
  }
}
`;

const Post = `
fragment DevFields on Dev {
  title
  excerpt
  slug
  date
  uri
  id
  featuredImage {
    node {
      mediaItemUrl
    }
  }
  author {
    node {
      ...AuthorFields
    }
  }
  dev_categories {
    edges {
      node {
        name
        slug
        id
        _acf_taxonomy_category_list {
          icon {
            mediaItemUrl
          }
          categoryListVisible
        }
        _acf_taxonomy_category_main {
          mainVisible
        }
      }
    }
  }
  dev_tags {
    edges {
      node {
        name
      }
    }
  }
  serieses {
    nodes {
      id
      name
      devs {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  }
}
`;

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
  previewData: any,
  postType: string,
) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === 'draft';
  const isRevision = isSamePost && postPreview?.status === 'publish';
  const data: any = await fetchAPI(
    `
    ${User}
    ${Post}
    query PostBySlug($id: ID!, $idType: DevIdType!) {
      ${postType}(id: $id, idType: $idType) {
        ...DevFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ''
        }
      }
      ${postType}s(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...DevFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    },
  );

  // Draft posts may not have an slug
  if (isDraft) data[postType].slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data[postType].revisions) {
    const revision = data[postType].revisions.edges[0]?.node;

    if (revision) Object.assign(data[postType], revision);
    delete data[postType].revisions;
  }

  data[postType].categories = data[postType].dev_categories;
  delete data[postType].dev_categories;
  data[postType].tags = data[postType].dev_tags;
  delete data[postType].dev_tags;

  const devs = postType + 's';
  data[devs].edges = data[devs].edges.map((_: any) => {
    _.node['categories'] = _.node.dev_categories;
    delete _.node.dev_categories;
    return _;
  });

  // Filter out the main post
  data[devs].edges = data[devs].edges.filter(
    ({ node }: any) => node.slug !== slug,
  );

  // If there are still 3 posts, remove the last one
  if (data[devs].edges.length > 2) data[devs].edges.pop();

  return data;
}

// Categories
export async function getCategoryAndPosts(slug: string) {
  const data: any = await fetchAPI(
    `
    query Category($id: ID!, $idType: Dev_categoryIdType!) {
      dev_category(id: $id, idType:$idType) {
        name
        description
        _acf_taxonomy_category_list {
          icon {
            mediaItemUrl
          }
        }
        devs {
          edges {
            node {
              databaseId
              id
              title
              slug
              _acf_post {
                icon {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
    `,
    {
      variables: {
        id: slug,
        idType: 'SLUG',
      },
    },
  );

  data.category = data.dev_category;
  delete data.dev_category;
  data.category.posts = data.category.devs;
  delete data.category.devs;

  return data;
}
