import styled from '@emotion/styled';

// TODO: Improve the h1 styles
export const StyledH1 = styled.h1`
  width: 100%;
  margin: 10px 0 40px;
  white-space: nowrap;
`;

export const StyledH2 = styled.h2`
  color: var(--title-color);
  font-weight: 800;
  margin: 20px 0;
  position: relative;

  &:after {
    background-color: var(--link-color);
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 30px;
    height: 2px;
  }
`;
