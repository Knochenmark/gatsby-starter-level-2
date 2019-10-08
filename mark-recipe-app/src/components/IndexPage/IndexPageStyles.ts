import { style } from 'typestyle';

import cookingImage from '../../assets/cooking01.jpg';

export const indexPageStyle = style({
  $nest: {
    '& .button-wrapper': {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: 'auto auto 0 auto'
    }
  },
  backgroundColor: '#fff',
  backgroundImage: `url(${cookingImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  left: 0,
  margin: 0,
  overflow: 'hidden',
  padding: '0.5rem',
  position: 'fixed',
  top: 0,
  width: '100vw',
  zIndex: 1
});

export const indexPageContentStyle = style({
  backgroundColor: 'rgba(255,255,255,0.75)',
  borderRadius: '24px',
  color: '#666',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '1rem',
  position: 'relative',
  width: '100%'
});

export const indexPageBackgroundStyle = style({
  $nest: {
    '& svg': {
      fill: 'rgba(0,0,0,0.1)',
      height: '200px',
      width: '200px'
    }
  },
  pointerEvents: 'none',
  position: 'absolute',
  right: '0',
  top: '0'
});

export const dangerButtonStyle = style({
  display: 'none !important'
});

export const chipContainerStyle = style({
  margin: '1rem 0',
  $nest: {
    '*': {
      marginRight: '0.5rem'
    }
  }
});
