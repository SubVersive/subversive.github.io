const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    const tagComponent = path.resolve('./src/templates/tag.js');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        const tags = new Set(posts.reduce((prev, { node }) => ([
          ...prev,
          ...(_.get(node, 'frontmatter.tags') || '')
            .split(',')
            .filter(v => v)
            .map(v => v.trim())
        ]), []));


        const aboutPage =  posts.find(post => post.node.fields.slug === '/about/');
        createPage({
          path: `/about/`,
          component: blogPost,
          context: {
            slug: aboutPage.node.fields.slug,
          },
        });

        tags.forEach(tag => {
          console.log({ tag });
          createPage({
            path: `/tags/${tag}`,
            component: tagComponent,
            context: {
              tag,
              tagFilter: `/${tag}/`
            },
          });
        });

        posts
          .filter(post => post.node.fields.slug !== '/about/')
          .forEach((post, index) => {
            const previous = index === posts.length - 1 ? null : posts[index + 1].node;
            const next = index === 0 ? null : posts[index - 1].node;

            const prefix = post.node.fields.slug === '/about/' ? '/' : '/posts';
            createPage({
              path: `${prefix}${post.node.fields.slug}`,
              component: blogPost,
              context: {
                slug: post.node.fields.slug,
                previous,
                next,
              },
            });
          })
        })
      )
  })
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
