import { style } from 'typestyle';

// const $bg = '#313841';
const $red = '#f34541';
const $black = '#1d242b';
const $blue = '#2492ff';

// body { background: $bg; color: #fff; font - family: "Roboto", sans - serif; font - size: 13px; } .centerMe { position: absolute; top: 50 %; left: 50 %; transform: translate(-50 %, -50 %); }

export const confirmationButtonStyle = style({
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  display: 'flex',
  margin: '1rem',
  outline: 0,
  overflow: 'hidden',
});

export const confirmationButtonIconStyle = style({
  $nest: {
    '& i': {
      $nest: {
        '& svg': {
          height: '18px',
          margin: '6px',
          width: '18px',
        }
      },
      transition: '0.2s color, 0s fill',
    },
    '&.confirm': {
      $nest: {
        '& svg': {
          transform: 'translateY(-40px)',
        }
      },
      fill: $blue,
    },
    '&.delete': {
      fill: $red
    },
    '&::after': {
      background: $black,
      content: ' ',
      display: 'block',
      height: '5px',
      position: 'absolute',
      right: '1px',
      top: '12.5px',
      transform: 'rotate(45deg)',
      width: '5px',
      zIndex: 1,
    },
  },
  background: $black,
  borderBottomLeftRadius: '2px',
  borderTopLeftRadius: '2px',
  fill: '#fff',
  fontSize: '18px',
  height: '30px',
  lineHeight: '30px',
  position: 'relative',
  textAlign: 'center',
  transition: '0.2s color, 0s fill',
  width: '30px',
});

export const confirmationButtonTextStyle = style({
  $nest: {
    '&.confirm': {
      background: $blue
    }
  },
  background: $red,
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
