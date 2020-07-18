import styled from '@emotion/styled';
import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import Icon from './icon';
import { flexCenter } from './_shared/styled-mixins';

const StyledContainer = styled.div`
  ${flexCenter};
  padding: 0.5rem;
  cursor: pointer;
  color: var(--title-color);

  &:hover {
    color: var(--primary-color);
  }
`;

const ScrollToTop = () => {
  return (
    <ScrollUpButton
      ContainerClassName="scroll-top-button-container"
      TransitionClassName="scroll-top-button-transition"
      ShowAtPosition={500}
      AnimationDuration={200}
    >
      <StyledContainer title="Scroll to top">
        <Icon icon="arrow-up" />
      </StyledContainer>
    </ScrollUpButton>
  );
};

ScrollToTop.propTypes = {};

export default ScrollToTop;
