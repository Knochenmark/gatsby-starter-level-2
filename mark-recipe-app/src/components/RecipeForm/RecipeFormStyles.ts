import { style } from 'typestyle';

import cookingImage from '../../assets/cooking04.jpg';

const red = '#F34541';
const green = '#38B87C';

export const buttonWrapperStyle = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'auto',
});

export const recipeFormContentStyle = style({
  backgroundColor: 'rgba(255,255,255,0.55)',
  color: '#666',
  height: '100%',
  padding: '1rem',
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
});

export const formStyle = style({
  alignItems: 'flex-start',
  backgroundImage: `url(${cookingImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
});

export const recipeFormFieldStyle = style({
  $nest: {
    '& >small': {
      color: red
    },
    '& label>small': {
      fontWeight: 'bold'
    },
    '& >textarea': {
      resize: 'none'
    }
  },
  display: 'flex',
  flexDirection: 'column',
  margin: '0.5rem 0',
});

export const recipeFormFieldInputStyle = style({
  display: 'flex',
  margin: '0.2rem',
});

export const recipeFormIngredientIconStyle = style({
  $nest: {
    '& >svg': {
      height: '18px',
      width: '18px',
      margin: '6px',
    },
    '&.remove >svg': {
      fill: red
    },
    '&.add >svg': {
      fill: green
    },
  },
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});
