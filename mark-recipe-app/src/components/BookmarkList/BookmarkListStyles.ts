import { style } from 'typestyle';

export const bookmarkListItemStyle = style({
  $nest: {
    '& >.bookmark': {
      flexBasis: '50%',
      padding: '0.5rem'
    },
    '& >.empty': {
      flexBasis: '100%',
      marginTop: '1rem',
      padding: '0.5rem'
    }
  },
  alignItems: 'flex-start',
  display: 'flex',
  flexWrap: 'wrap'
});

export const bookmarkListRecipeStyle = style({
  $nest: {
    '& >li>span': {
      $nest: {
        '&:hover': {
          color: '#ff6347',
          cursor: 'pointer',
          textDecoration: 'underline'
        }
      },
      color: '#ff5537',
    }
  },
  listStyle: 'none',
});
