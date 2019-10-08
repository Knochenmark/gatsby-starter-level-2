import { style } from 'typestyle';

const $black = '#1d242b';
const $green = '#38B87C';
const $red = '#F34541';
const $blue = '#2492FF';

export const iconButtonStyle = style({
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  display: 'flex',
  margin: '1rem',
  outline: 0,
  overflow: 'hidden',
});

export const iconButtonIconStyle = style({
  $nest: {
    '& i': {
      $nest: {
        '& svg': {
          fill: '#fff',
          height: '18px',
          margin: '6px',
          width: '18px',
        }
      },
    },
    '&.blue': {
      $nest: {
        '& svg': {
          fill: $blue,
        }
      }
    },
    '&.green': {
      $nest: {
        '& svg': {
          fill: $green,
        }
      }
    },
    '&.red': {
      $nest: {
        '& svg': {
          fill: $red,
        }
      }
    },
  },
  background: $black,
  borderBottomLeftRadius: '2px',
  borderTopLeftRadius: '2px',
  fill: '#fff',
  fontSize: '18px',
  height: '30px',
  lineHeight: '30px',
  textAlign: 'center',
  width: '30px',
});

export const iconButtonTextStyle = style({
  $nest: {
    '&.blue': {
      background: $blue,
    },
    '&.green': {
      background: $green,
    },
    '&.red': {
      background: $red,
    }
  },
  background: $black,
  borderBottomRightRadius: '2px',
  borderTopRightRadius: '2px',
  color: '#fff',
  fontWeight: 'lighter',
  height: '30px',
  lineHeight: '30px',
  overflow: 'hidden',
  position: 'relative',
  textAlign: 'center',
  transition: '0.2s all',
  width: '130px',
});
