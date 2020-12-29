import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const skewNumber = 0.09719;
const StyledSkewedSection = styled.section`
  margin: 6rem 0;
  position: relative;
  padding: calc(100% * ${skewNumber}) 0;

  & > .content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1.5em;
    position: relative;

    /* uncomment for debuggind purposes */
    /* border: 2px dashed #fff8; */
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: skewy(-11deg);
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
    background-color: var(--bg-content-color);
  }
`;

// x = tan(α) * a / 2

const SkewedSection = (props) => {
  return (
    <StyledSkewedSection>
      <div className="content">{props.children}</div>
    </StyledSkewedSection>
  );
};

SkewedSection.propTypes = {
  angle: PropTypes.number,
};

SkewedSection.defaultProps = {
  angle: 10,
};

export default SkewedSection;
