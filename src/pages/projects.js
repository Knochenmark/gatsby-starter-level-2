import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledFullHeightSection } from '../components/_shared/styled-section';

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <StyledFullHeightSection>
        <h1>Projects Page</h1>
        <p>This is the Projects page. Content coming soon!</p>
        <Link to="/">Go back to the homepage</Link>
      </StyledFullHeightSection>
    </Layout>
  );
};

export default Projects;
