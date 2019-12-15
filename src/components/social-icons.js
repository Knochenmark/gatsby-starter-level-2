import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
const StyledSocialIcons = styled.div`
  display: flex;

  @media (min-width: 768px) {
    margin-right: 0.5rem;
  }

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: unset;
  }

  & svg {
    fill: currentColor;
    margin: 0 0.5rem;
  }
`;

const SocialIcons = ({ icons }) => {
  const socialIcons = icons.map(({ icon, link }) => {
    return (
      <a href={link} key={link}>
        {icon}
      </a>
    );
  });

  return (
    <StyledContainer>
      <StyledSocialIcons>{socialIcons}</StyledSocialIcons>
    </StyledContainer>
  );
};

const iconShape = PropTypes.shape({
  link: PropTypes.string,
  icon: PropTypes.element,
});

SocialIcons.propTypes = {
  icons: PropTypes.arrayOf(iconShape),
};

export default SocialIcons;
