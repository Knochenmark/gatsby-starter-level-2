import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import ProjectList from '../components/project-list';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { StyledFullHeightSection } from '../components/_shared/styled-section';
import { StyledSeparator } from '../components/_shared/styled-separator';

const StyledProjectsH1 = styled(StyledH1)`
  margin-top: 3rem;
`;
const Projects = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  return (
    <Layout menuLinks={blogMenuLinks}>
      <SEO title="Projects" />
      <StyledFullHeightSection>
        <StyledProjectsH1>Projects</StyledProjectsH1>
        <StyledSeparator />
        <ProjectList projects={nodes} />
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
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          repo_link
          demo_link
          techs
        }
        html
      }
    }
  }
`;
