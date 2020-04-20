import { Col, Pagination, Row } from 'antd';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import { StyledSection } from '../components/_shared/styled-section';

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
      <StyledSection>
        {data.allMarkdownRemark.edges.slice(leftCursor, rightCursor).map(({ node }) => {
          const coverImage = node.frontmatter.cover_image ? node.frontmatter.cover_image.childImageSharp.fluid : null;
          return node.frontmatter.published ? (
            <PostCard
              key={node.frontmatter.title}
              coverImage={coverImage}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
              link={`/blog${node.fields.slug}`}
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
      </StyledSection>
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
            date(formatString: "D MMMM, YYYY")
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
