import styled from '@emotion/styled';

export const StyledImageContainer = styled.div`
  min-width: 300px;
  min-height: 200px;
  position: relative;

  &:hover .gatsby-image-wrapper * {
    transition: all var(--transition-fast) ease-in-out 0s;
    transform: scale(1.025);
  }
`;

export const StyledStaticImageContainer = styled.div`
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
`;
