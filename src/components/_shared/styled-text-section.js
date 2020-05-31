import styled from '@emotion/styled';
import { contentBox } from './styled-mixins';

export const StyledTextSection = styled.section`
  white-space: pre-line;

  ${contentBox}
  max-width: unset;
  max-height: 180px;
  position: relative;
  padding: 10px;
  margin: 0;

  > p {
    height: 100%;
    margin: 0;
    font-size: 0.8rem;
    overflow: hidden;
  }
`;
