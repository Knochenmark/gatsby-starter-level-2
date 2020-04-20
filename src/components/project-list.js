import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import External from '../assets/external.svg';
import Github from '../assets/github.svg';
import TextLink from './links/text-link';
import TechList from './tech-list';
import { StyledContentLink } from './_shared/styled-content-link';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { flexCenter, flexEnd } from './_shared/styled-mixins';
import { StyledTextSection } from './_shared/styled-text-section';

const StyledContainer = styled.section`
  width: 100%;
  margin-top: 2.5rem;
`;
const StyledProject = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
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
const StyledInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledArchiveContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;

const ProjectList = ({ projects }) => {
  const projectItems = projects.map(project => {
    const title = project.frontmatter.title;
    const demoLink = project.frontmatter.demo_link;
    const repoLink = project.frontmatter.repo_link;
    const demoLinkLabel = `featured project ${title} demo`;
    const repoLinkLabel = `featured project ${title} repo`;

    return (
      <StyledProject key={title}>
        <StyledHeader>
          <StyledContentLink href={demoLink ? demoLink : repoLink ? repoLink : '#'} target="_blank" rel="noopener">
            <StyledH2>{title}</StyledH2>
          </StyledContentLink>
          <StyledLinkContainer>
            {repoLink && (
              <a href={repoLink} target="_blank" rel="noopener" title="Repository Link" aria-label={repoLinkLabel}>
                <Github />
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener" title="Demo Link" aria-label={demoLinkLabel}>
                <External />
              </a>
            )}
          </StyledLinkContainer>
        </StyledHeader>
        <StyledInfoContainer>
          <StyledTextSection dangerouslySetInnerHTML={{ __html: project.html }} />
          <TechList techs={project.frontmatter.techs} />
        </StyledInfoContainer>
      </StyledProject>
    );
  });

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledH1>Other Noteworthy Projects</StyledH1>
      </StyledHeader>
      {projectItems}
      <StyledArchiveContainer>
        <TextLink label="View All Projects" link="/projects" />
      </StyledArchiveContainer>
    </StyledContainer>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
