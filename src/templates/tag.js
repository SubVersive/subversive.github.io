import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout/Layout.jsx';
import { rhythm, scale } from '../utils/typography';

const link = {
  fontSize: '1rem',
  marginRight: '1rem',
  color: '#ccc',
};

const renderLink = (node) => (
  <Link style={link} to={`/posts/${get(node, 'fields.slug')}`}>
    {get(node, 'frontmatter.title')}
  </Link>
);

class TagTemplate extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    return (
      <Layout location={this.props.location}>
        {posts.map(({ node }) => renderLink(node))}
      </Layout>
    )
  }
};

export default TagTemplate;

export const pageQuery = graphql`
  query BlogPostsByTag($tagFilter: String!) {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { tags: { regex: $tagFilter } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`;


