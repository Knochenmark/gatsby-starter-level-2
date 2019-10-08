import { style } from 'typestyle';

export const recipeBookStyle = style({
  $nest: {
    '& .recipe-container': {
      backgroundColor: 'white',
      height: '100%',
      overflowY: 'auto',
      position: 'relative',
      transform: 'translateX(100%)',
      transition: 'all 0.4s ease',
      width: '100%',
      zIndex: 2
    },
    '& .recipe-container.visible': {
      transform: 'translateX(0%)',
    }
  },
  height: '100vh',
  overflowX: 'hidden',
  width: '100vw'
});

export const bugStyle = style({
  $nest: {
    '& svg': {
      $nest: {
        '&:hover': {
          fill: '#ff5537',
          cursor: 'pointer'
        }
      },
      fill: '#666',
      transform: 'rotate(45deg)',
    }
  },
  width: '35px',
  height: '35px',
  borderTopLeftRadius: '100%',
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
