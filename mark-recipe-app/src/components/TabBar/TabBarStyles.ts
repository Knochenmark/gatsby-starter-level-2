import { style } from 'typestyle';

export const tabBarStyle = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-start',
});

export const tabBarItemStyle = style({
  $nest: {
    '&.active': {
      color: 'lightseagreen',
    }
  },
  cursor: 'pointer',
  marginRight: '1rem',
});
