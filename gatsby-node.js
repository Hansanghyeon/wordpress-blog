const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  /**
   * Create Post Pages
   */
  const postResults = await graphql(`
    query GET_POST {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  if (postResults.errors) throw postResults.errors;
  // postResults white list
  postResults.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        __dirname,
        'src/views/components/templates/post/Mdx/index.tsx',
      ),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  /**
   * Create Tag Pages
   */
  const tagPageResults = await graphql(`
    query GET_TAGS {
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);
  if (tagPageResults.error) throw tagPageResults.error;
  // Extract tag data from query
  const tags = tagPageResults.data.tagsGroup.group;
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}`,
      component: path.resolve(
        __dirname,
        'src/views/components/templates/tags.tsx',
      ),
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  /**
   * Create Wp Category Pages
   */
  const wpCategory = await graphql(`
    query GET_NODE_WP_CATEGORIES {
      wpgql {
        categories {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    }
  `);
  if (wpCategory.error) throw wpCategory.error;
  // wpCategory white list
  wpCategory.data.wpgql.categories.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(
        __dirname,
        'src/views/components/templates/category.tsx',
      ),
      context: {
        categoryId: node.id,
      },
    });
  });

  /**
   * Create Wp Post page
   */
  const wpPost = await graphql(`
    query GET_NODE_WP_POSTS {
      wpgql {
        posts {
          edges {
            node {
              databaseId
              id
              slug
            }
          }
        }
      }
    }
  `);
  if (!wpPost) throw wpPost.error;

  wpPost.data.wpgql.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(
        __dirname,
        'src/views/components/templates/post/Wp/index.tsx',
      ),
      context: {
        postId: node.id,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
