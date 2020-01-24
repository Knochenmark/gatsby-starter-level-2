import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const StyledSpan = styled.span`
  padding: 0 10px;
`;

const Tag = ({ number }) => {
  return <StyledSpan>({number}) aaa</StyledSpan>;
};

Tag.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Tag;
