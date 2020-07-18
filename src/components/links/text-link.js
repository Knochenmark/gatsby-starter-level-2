import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import Icon from '../icon';
import { flexCenter } from './../_shared/styled-mixins';

export const StyledTextLink = styled(Link)`
  ${flexCenter};
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  padding: 0.4rem 0.8rem;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
    text-decoration: underline;
  }

  & > svg {
    height: 0.8rem;
    fill: currentColor;
    margin-left: 0.25rem;
    transition: margin-left var(--transition-fast) ease;
  }

  &:hover > svg {
    margin-left: 0.5rem;
  }
`;

const TextLink = ({ label, link }) => {
  return (
    <React.Fragment>
      {label && link && (
        <StyledTextLink to={link ? link : '#'}>
          {label}
          <Icon icon="arrow-right" />
        </StyledTextLink>
      )}
    </React.Fragment>
  );
};

export default TextLink;
