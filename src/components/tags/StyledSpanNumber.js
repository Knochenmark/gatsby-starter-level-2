import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const StyledSpan = styled.span`
  padding: 0 10px;
`;

const StyledSpanNumber = ({ number }) => {
  return <StyledSpan>({number})</StyledSpan>;
};

StyledSpanNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default StyledSpanNumber;
