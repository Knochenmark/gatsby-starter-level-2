import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledSection } from '../components/_shared/styled-section';

const StyledProjectsSection = styled(StyledSection)`
  min-height: calc(100vh - var(--header-height));
`;

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <StyledProjectsSection>
        <h1>Projects Page</h1>
        <p>This is the Projects page. Content coming soon!</p>
        <Link to="/">Go back to the homepage</Link>
      </StyledProjectsSection>
    </Layout>
  );
};

export default Projects;
