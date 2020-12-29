import styled from '@emotion/styled';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  padding: 30px 0;
  max-width: 1000px;
  margin-bottom: 60px;
`;

export const StyledFullHeightSection = styled(StyledSection)`
  min-height: calc(100vh - var(--header-height));
  justify-content: start;
`;
