import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import { Pagination, Row, Col } from 'antd';
import PropTypes from 'prop-types';

const Blog = ({ data }) => {
  let [currentPage, setCurrentPage] = React.useState(1);

  const onPaginationChange = page => {
    setCurrentPage(page);
  };

  let paginationSize = data.site.siteMetadata.paginationPageSize;

  let leftCursor = (currentPage - 1) * paginationSize;
  let rightCursor = leftCursor + paginationSize;
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.slice(leftCursor, rightCursor).map(({ node }) => {
          const coverImage = node.frontmatter.cover_image ? node.frontmatter.cover_image.childImageSharp.fluid : null;
          return node.frontmatter.published ? (
            <PostCard
              key={node.frontmatter.title}
              coverImage={coverImage}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              link={`blog${node.fields.slug}`}
              tags={node.frontmatter.tags}
            />
          ) : null;
        })}
        <Row type="flex" justify="center">
          <Col>
            <Pagination
              pageSize={paginationSize}
              current={currentPage}
              onChange={onPaginationChange}
              total={data.allMarkdownRemark.edges.length}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            tags
            date(formatString: "DD MMMM, YYYY")
            published
            description
            cover_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }

    site {
      siteMetadata {
        paginationPageSize
      }
    }
  }
`;
