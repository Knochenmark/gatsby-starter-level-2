import styled from '@emotion/styled';
import Arrow from '../../assets/arrow.svg';
import React from 'react';

export const StyledButton = styled.button`
  font-weight: 800;
  margin: 10px 0;
  white-space: nowrap;
  position: relative;
  border: none;
  padding: 6px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    border: 1px solid #fff;
    background: black;
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 100%;
    height: 100%;
    z-index: -3;
    transition: all ease 0.4s;
  }

  &:hover:before {
    border: 1px solid var(--link-color);
  }
`;

const StyledLink = styled.a`
  text-decoration: none;

  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }
`;

const ButtonComponent = props => {
  return (
    <>
      <StyledLink href={props.link ? props.link : '#'} target="_blank">
        <StyledButton>
          {props.label}{' '}
          {props.rightArrow && (
            <span style={{ marginLeft: 10, height: 24 }}>
              <Arrow />
            </span>
          )}
        </StyledButton>
      </StyledLink>
    </>
  );
};

export default ButtonComponent;
