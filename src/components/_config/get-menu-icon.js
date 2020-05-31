import React from 'react';
import About from '../../assets/about.svg';
import Arrow from '../../assets/arrow.svg';
import Code from '../../assets/code.svg';
import Envelope from '../../assets/envelope.svg';
import Feather from '../../assets/feather.svg';
import Git from '../../assets/git.svg';
import Tags from '../../assets/tags.svg';

export const getMenuIcon = (icon) =>
  ({
    about: <About />,
    projects: <Git />,
    blog: <Feather />,
    contact: <Envelope />,
    portfolio: <Code />,
    tags: <Tags />,
    // Add further navigation links with the icon of choice here
  }[icon.toLowerCase()] || <Arrow />);
