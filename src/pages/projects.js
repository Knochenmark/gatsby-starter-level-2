import styled from '@emotion/styled';
import { Pagination } from 'antd';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { StyledFullHeightSection } from '../components/_shared/styled-section';
import { flexCenter } from '../components/_shared/styled-mixins';
import { StyledSeparator } from '../components/_shared/styled-separator';
import ProjectCard from '../components/project-card';

const StyledPaginationContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;

  & ul.ant-pagination {
    cursor: pointer;
    display: flex;
    list-style: none;

    & > li {
      ${flexCenter};
      min-width: 1rem;
    }
    & > li.ant-pagination-item {
      font-size: 1.5rem;
      padding: 0 0.25rem;
    }
    & > li.ant-pagination-disabled > a {
      color: var(--disabled-color);
    }
    & > li.ant-pagination-item-active > a {
      text-decoration: underline;
    }
  }
`;

const StyledProjectsH1 = styled(StyledH1)`
  margin-top: 3rem;
`;
const Projects = ({ data }) => {
  console.log('Projects::', data);
  let [currentPage, setCurrentPage] = React.useState(1);

  const onPaginationChange = (page) => {
    setCurrentPage(page);
  };

  let paginationSize = data.site.siteMetadata.paginationPageSize;
  let leftCursor = (currentPage - 1) * paginationSize;
  let rightCursor = leftCursor + paginationSize;

  return (
    <Layout menuLinks={blogMenuLinks}>
      <SEO title="Projects" />
      <StyledFullHeightSection>
        <StyledProjectsH1>Projects</StyledProjectsH1>
        <StyledSeparator />
        {data.allMarkdownRemark.edges.slice(leftCursor, rightCursor).map(({ node }) => {
          return (
            <ProjectCard
              key={node.frontmatter.title}
              title={node.frontmatter.title}
              demoLink={node.frontmatter.demo_link}
              repoLink={node.frontmatter.repo_link}
              techs={node.frontmatter.techs}
              html= {node.html}
            />
          );
        })}
        <StyledPaginationContainer>
          <Pagination
            pageSize={paginationSize}
            current={currentPage}
            onChange={onPaginationChange}
            total={data.allMarkdownRemark.edges.length}
          />
        </StyledPaginationContainer>
      </StyledFullHeightSection>
    </Layout>
  );
};

export default Projects;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/content/projects/" }, frontmatter: { featured: { eq: false } } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "D MMMM, YYYY")
            title
            repo_link
            demo_link
            techs
          }
          html
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
