import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Github from '../assets/github.svg';
import { StyledHeading } from './_shared/styled-heading';
import { flexCenter } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';

const StyledFeaturedProject = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const StyledProjectTitle = styled(StyledHeading)`
  color: var(--link-color);
`;
const StyledImageContainer = styled.div`
  min-width: 400px;
  min-height: 200px;
`;

const StyledLinkContainer = styled.div`
  ${flexCenter};
  margin-top: 10px;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: unset;
  }

  & svg {
    fill: currentColor;
    margin: 0 0.5rem;
  }
`;

const FeaturedProjects = ({ data }) => {
  console.log(data);

  const featuredProjects = data.map(project => {
    const coverImage = project.frontmatter.cover_image ? project.frontmatter.cover_image.childImageSharp.fluid : null;
    const demoLink = project.frontmatter.demo_link;
    const repoLink = project.frontmatter.repo_link;

    return (
      <StyledFeaturedProject key={project.frontmatter.title}>
        <StyledProjectTitle>{project.frontmatter.title}</StyledProjectTitle>
        <StyledLinkContainer>
          {repoLink && (
            <a href={repoLink} title="Repository Link">
              <Github />
            </a>
          )}
          {demoLink && (
            <a href={demoLink} title="Demo Link">
              <Github />
            </a>
          )}
        </StyledLinkContainer>
        {coverImage && (
          <StyledImageContainer>
            <Img fluid={coverImage} />
          </StyledImageContainer>
        )}
      </StyledFeaturedProject>
    );
  });

  return (
    <StyledSection id="featured">
      <StyledHeading>Featured Projects</StyledHeading>
      {featuredProjects}
    </StyledSection>
  );
};

FeaturedProjects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FeaturedProjects;
