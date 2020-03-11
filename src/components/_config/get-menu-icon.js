import React from 'react';
import About from '../../assets/about.svg';
import Arrow from '../../assets/arrow.svg';
import Envelope from '../../assets/envelope.svg';
import Feather from '../../assets/feather.svg';
import Git from '../../assets/git.svg';

export const getMenuIcon = icon =>
  ({
    about: <About />,
    projects: <Git />,
    blog: <Feather />,
    contact: <Envelope />,
  }[icon.toLowerCase()] || <Arrow />);
