import React from 'react';
import Helmet from 'react-helmet';
import { Link,graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout/Layout.jsx';
import { rhythm, scale } from '../utils/typography';

class TagTemplate extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>TAG</h1>
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


