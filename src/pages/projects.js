import styled from '@emotion/styled';
import React from 'react';
import Layout from '../components/layout';
import TextLink from '../components/links/text-link';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { StyledFullHeightSection } from '../components/_shared/styled-section';
import { StyledSeparator } from '../components/_shared/styled-separator';

const StyledProjectsH1 = styled(StyledH1)`
  margin-top: 3rem;
`;
const Projects = () => {
  return (
    <Layout menuLinks={blogMenuLinks}>
      <SEO title="Projects" />
      <StyledFullHeightSection>
        <StyledProjectsH1>Projects</StyledProjectsH1>
        <StyledSeparator />
        <TextLink label="Take me home" link="/" />
      </StyledFullHeightSection>
    </Layout>
  );
};

export default Projects;
