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
    border: 2px solid var(--link-color);
    transition: all ease 0.4s;
  }

  .gatsby-image-wrapper:hover:before {
    bottom: -13px;
    right: -13px;
  }
`;
