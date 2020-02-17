import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import External from '../assets/external.svg';
import Github from '../assets/github.svg';
import { mq } from './_shared/media';
import { StyledHeading } from './_shared/styled-heading';
import { contentBox, flexEnd } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';

const StyledFeaturedProject = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 50px;
  padding: 70px 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  &:nth-of-type(even) {
    direction: rtl;
  }
  &:nth-of-type(even) * {
    direction: ltr;
  }
`;
const StyledProjectTitle = styled.a`
  color: var(--title-color) !important;
  text-decoration: none;
  font-weight: 800;
  margin: 20px 0;
  position: relative;

  &:hover {
    color: var(--link-color) !important;
    opacity: 1 !important;
  }

  &:after {
    background-color: var(--link-color);
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 30px;
    height: 2px;
  }
`;
const StyledImageContainer = styled.div`
  min-width: 300px;
  min-height: 200px;
  position: relative;

  &:before {
    background-color: var(--link-color);
    content: '';
    position: absolute;
    bottom: -10px;
    left: -10px;
    width: 50%;
    height: 50%;
  }
`;
const StyledProjectInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
const StyledDescription = styled.section`
  ${contentBox}
  max-height: 180px;
  position: relative;
  padding: 10px;

  > p {
    height: 100%;
    margin: 0;
    font-size: 0.8rem;
    overflow: hidden;
  }
`;
const StyledTechContainer = styled.section`
  padding: 0 10px;

  > span {
    font-size: 0.8rem;
    color: var(--body-color);
    margin-bottom: 7px;
    white-space: nowrap;
  }
  > i {
    cursor: default;
    margin: 0 10px;
  }
`;
const StyledLinkContainer = styled.section`
  ${flexEnd};
  margin: 10px 0;

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
  const featuredProjects = data.map(project => {
    const coverImage = project.frontmatter.cover_image ? project.frontmatter.cover_image.childImageSharp.fluid : null;
    const demoLink = project.frontmatter.demo_link;
    const repoLink = project.frontmatter.repo_link;

    const techs = project.frontmatter.techs.map((tech, i) => {
      return (
        <React.Fragment key={tech}>
          {i ? <i>+</i> : null}
          <span key={tech}>{tech}</span>
        </React.Fragment>
      );
    });

    return (
      <StyledFeaturedProject key={project.frontmatter.title}>
        <a href={demoLink ? demoLink : repoLink ? repoLink : '#'}>
          {coverImage && (
            <StyledImageContainer>
              <Img fluid={coverImage} />
            </StyledImageContainer>
          )}
        </a>
        <StyledProjectInfoContainer>
          <StyledProjectTitle href={demoLink ? demoLink : repoLink ? repoLink : '#'}>
            {project.frontmatter.title}
          </StyledProjectTitle>
          <StyledDescription dangerouslySetInnerHTML={{ __html: project.html }} />
          <StyledTechContainer>{techs}</StyledTechContainer>
          <StyledLinkContainer>
            {repoLink && (
              <a href={repoLink} title="Repository Link">
                <Github />
              </a>
            )}
            {demoLink && (
              <a href={demoLink} title="Demo Link">
                <External />
              </a>
            )}
          </StyledLinkContainer>
        </StyledProjectInfoContainer>
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
