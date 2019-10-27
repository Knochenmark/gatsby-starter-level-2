import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import { Pagination, Row, Col } from 'antd';

export default ({ data }) => {
  let [currentPage, setCurrentPage] = React.useState(1);

  const onPaginaitonChange = page => {
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
              onChange={onPaginaitonChange}
              total={data.allMarkdownRemark.edges.length}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

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
