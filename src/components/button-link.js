import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import External from '../assets/external.svg';

export const StyledButtonLink = styled.a`
  text-decoration: none;
  color: var(--bg-content-color) !important;
  background-color: var(--title-color);
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  border: none;
  padding: 0.4rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1 !important;
    color: var(--link-color) !important;
  }

  &:before {
    content: '';
    border: 1px solid var(--title-color);
    position: absolute;
    top: 1px;
    left: 1px;
    width: 100%;
    height: 100%;
    z-index: -3;
    transition: all ease var(--transition-fast);
  }

  &:hover:before {
    border: 1px solid var(--link-color);
  }

  & > svg {
    fill: var(--bg-content-color);
    height: 0.8rem;
    margin-left: 0.25rem;
  }

  &:hover > svg {
    fill: var(--link-color);
  }
`;

const ButtonLink = ({ label, link }) => {
  return (
    <React.Fragment>
      {label && link && (
        <StyledButtonLink href={link ? link : '#'} target="_blank">
          {label}
          <External />
        </StyledButtonLink>
      )}
    </React.Fragment>
  );
};

ButtonLink.propTypes = {
  label: PropTypes.string.required,
  link: PropTypes.string.required,
};

export default ButtonLink;
