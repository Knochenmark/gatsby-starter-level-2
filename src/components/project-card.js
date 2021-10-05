import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from './icon';
import TechList from './tech-list';
import { StyledContentLink } from './_shared/styled-content-link';
import { StyledH2 } from './_shared/styled-headings';
import { flexEnd } from './_shared/styled-mixins';
import { StyledTextSection } from './_shared/styled-text-section';

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
    color: var(--body-color);

    &:hover {
      color: var(--primary-color);
    }
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
const StyledProjectText = styled(StyledTextSection)`
  > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;

const ProjectCard = ({ title, demoLink, repoLink, techs, html }) => {
  const demoLinkLabel = `featured project ${title} demo`;
  const repoLinkLabel = `featured project ${title} repo`;
  return (
    <StyledProject>
        <StyledHeader>
          <StyledContentLink href={demoLink ? demoLink : repoLink ? repoLink : '#'} target="_blank" rel="noopener">
            <StyledH2>{title}</StyledH2>
          </StyledContentLink>
          <StyledLinkContainer>
            {repoLink && (
              <a href={repoLink} target="_blank" rel="noopener" title="Repository Link" aria-label={repoLinkLabel}>
                <Icon icon="github" prefix="fab" />
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener" title="Demo Link" aria-label={demoLinkLabel}>
                <Icon icon="external-link-alt" />
              </a>
            )}
          </StyledLinkContainer>
        </StyledHeader>
        <StyledInfoContainer>
          <StyledProjectText dangerouslySetInnerHTML={{ __html: html }} />
          <TechList techs={techs} />
        </StyledInfoContainer>
      </StyledProject>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
};

export default ProjectCard;
