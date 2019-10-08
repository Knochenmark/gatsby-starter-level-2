import { style } from 'typestyle';

import cookingImage from '../../assets/cooking04.jpg';

export const recipeStyle = style({
  backgroundImage: `url(${cookingImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100%'
});

export const recipeContentStyle = style({
  backgroundColor: 'rgba(255, 255, 255, 0.55)',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '55vh',
  width: '100%'
});

export const recipeOverlayStyle = style({
  $nest: {
    '& span': {
      $nest: {
        '& svg': {
          $nest: {
            '&:hover': {
              cursor: 'pointer'
            }
          },
          fill: '#FF6C79'
        }
      },
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.65)',
      borderRadius: '50%',
      display: 'flex',
      height: '36px',
      justifyContent: 'center',
      width: '36px'
    },
    '& span.back': {
      $nest: {
        '& svg': {
          marginRight: '4px'
        }
      }
    },
    '& span.bookmark': {
      $nest: {
        '& svg': {
          marginTop: '2px'
        }
      }
    }
  },
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  left: '0',
  margin: '0 1rem',
  position: 'absolute',
  right: '0',
  top: '1rem'
});

export const recipeTitleStyle = style({
  color: '#FF6C79',
  marginBottom: '1.5rem',
  marginTop: '1rem',
  textAlign: 'center'
});

export const recipeImageStyle = style({
  height: '45vh',
  margin: '0 auto',
  width: '100%'
});

export const timingWrapperStyle = style({
  $nest: {
    '& h3': {
      color: '#8e8e8e',
      fontSize: '0.8rem',
      textTransform: 'uppercase'
    }
  },
  color: '#333',
  display: 'flex',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  justifyContent: 'space-around',
  textAlign: 'center'
});

export const recipeIngredientStyle = style({
  $nest: {
    '& h3': {
      color: '#8e8e8e',
      fontSize: '1rem',
      margin: '2rem 0 0.8rem 0',
      textTransform: 'uppercase'
    },
    '& span': {
      lineHeight: '1.25rem'
    }
  },
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '0.9rem',
  justifyContent: 'space-around',
  textAlign: 'center',
  margin: '0 3rem'
});

export const recipeInstructionStyle = style({
  $nest: {
    '& h3': {
      color: '#8e8e8e',
      fontSize: '1rem',
      margin: '2rem 0 0.8rem 0',
      textTransform: 'uppercase'
    },
    '& span': {
      lineHeight: '1.25rem',
      margin: '0 3rem',
      whiteSpace: 'pre-line'
    }
  },
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '0.9rem',
  justifyContent: 'space-around',
  textAlign: 'justify'
});

export const buttonWrapperStyle = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'auto'
});
