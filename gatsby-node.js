const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(__dirname, 'src/components/templates/blog-post.tsx');
  const tagTemplate = path.resolve(__dirname, 'src/components/templates/tags.tsx');
  const result = await graphql(
    `
      {
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
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
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
      alias: {
        '@src': path.resolve(__dirname, 'src/'),
        '@atom': path.resolve(__dirname, 'src/components/atoms'),
        '@molecule': path.resolve(__dirname, 'src/components/molecules'),
        '@organism': path.resolve(__dirname, 'src/components/organisms'),
        '@template': path.resolve(__dirname, 'src/components/templates'),
      },
    },
  });
};
