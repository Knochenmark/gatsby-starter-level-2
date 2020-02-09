import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Github from '../assets/github.svg';
import External from '../assets/external.svg';
import { StyledHeading } from './_shared/styled-heading';
import { flexCenter, flexEnd, contentBox } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';

const StyledFeaturedProject = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 60px;
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
  margin-bottom: 40px;
  flex: 1;

  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: -25px;
    border-top: 1px solid var(--link-color);
    border-left: 1px solid var(--link-color);
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: 50%;
    height: 50%;
    border-bottom: 1px solid var(--link-color);
    border-left: 1px solid var(--link-color);
  }
`;
const StyledProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-left: 40px;
  min-width: 350px;
  flex: 1;
  flex-wrap: wrap;

  &:before {
    content: '';
    position: absolute;
    width: 70px;
    height: 70px;
    top: -25px;
    right: -25px;
    border-top: 1px solid var(--link-color);
    border-right: 1px solid var(--link-color);
  }
`;
const StyledDescription = styled.div`
  ${contentBox}
  max-height: 200px;
  flex-wrap: wrap;
  display: flex;
  position: relative;
  padding: 10px;

  > p {
    height: 100%;
    margin: 0;
    font-size: 0.8rem;
    overflow: hidden;
  }
`;
const StyledTechContainer = styled.div`
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
const StyledLinkContainer = styled.div`
  ${flexEnd};
  margin-bottom: 10px;

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

    const techs = project.frontmatter.techs.map((tech, i) => {
      return (
        <React.Fragment key={tech}>
          {i ? <i>|</i> : null}
          <span key={tech}>{tech}</span>
        </React.Fragment>
      );
    });

    return (
      <StyledFeaturedProject key={project.frontmatter.title}>
        <StyledImageContainer>
          <a href={demoLink ? demoLink : repoLink ? repoLink : '#'}>{coverImage && <Img fluid={coverImage} />}</a>
        </StyledImageContainer>
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
      <StyledHeading title="Featured Projects" />
      {featuredProjects}
    </StyledSection>
  );
};

FeaturedProjects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FeaturedProjects;
