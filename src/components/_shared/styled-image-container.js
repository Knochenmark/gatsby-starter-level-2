import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const StyledImageContainer = styled.div`
  min-width: 300px;
  min-height: 200px;
  position: relative;

  .gatsby-image-wrapper {
    overflow: unset !important;
  }

  .gatsby-image-wrapper:before {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 98%;
    height: 98%;
    border: 2px solid var(--primary-color);
    transition: all ease var(--transition-fast);
  }

  .gatsby-image-wrapper:hover:before {
    ${props =>
      props.hasHover &&
      css`
        bottom: -13px;
        right: -13px;
      `}
  }
`;
