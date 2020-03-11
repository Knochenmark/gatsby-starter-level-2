import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import SocialIcons from './social-icons';
import { socialIconList } from './_config/social-icon-list';
import { mq } from './_shared/media';
import { flexCenter } from './_shared/styled-mixins';

const marginMediaQuery = css`
  ${mq.gt.xs} {
    margin-top: 0;
  }
`;
const StyledFooter = styled.footer`
  ${flexCenter};
  flex-direction: column;
  background-color: var(--bg-content-color);
  padding: calc((var(--space) / 2));
  text-align: center;
  font-size: 0.8rem;

  ${mq.gt.xs} {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  ${mq.lt.md} {
    margin-bottom: var(--header-height);
  }
`;
const StyledSocialContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin-top: 1rem;
  ${marginMediaQuery};

  ${mq.gt.xs} {
    > div {
      margin-right: 0.5rem;
    }
    flex-direction: row;
    align-items: center;
  }
`;
const StyledCopyright = styled.span`
  font-weight: 500;
  margin-bottom: 0.8rem;
  ${mq.gt.xs} {
    margin-right: 0.8rem;
    margin-bottom: 0;
  }
`;
const StyledRotator = styled.div`
  ${flexCenter};
  margin: 0.8rem 0;
  font-size: 0.8rem;

  & > span {
    margin-left: 0.25rem;
  }

  ${mq.gt.xs} {
    margin: 0;
  }
`;

const Footer = ({ author }) => {
  return (
    <StyledFooter>
      <StyledSocialContainer>
        <StyledCopyright>
          © {new Date().getFullYear()} {author}
        </StyledCopyright>
        <SocialIcons icons={socialIconList} />
      </StyledSocialContainer>
      <StyledRotator>
        Made with
        <span role="img" aria-label="heart emoji">
          💖
        </span>
      </StyledRotator>
    </StyledFooter>
  );
};

Footer.propTypes = {
  author: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: '',
};

export default Footer;
