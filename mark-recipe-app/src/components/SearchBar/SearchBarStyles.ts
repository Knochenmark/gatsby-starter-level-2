import { style } from 'typestyle';

export const searchBarStyle = style({
  $nest: {
    '& input': {
      backgroundColor: 'transparent',
      border: 'none',
      borderBottom: '2px solid #849493',
      borderRadius: 0,
      color: '#ff5537',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '16px',
      height: '50px',
      lineHeight: '35px',
      minWidth: '100%',
      outline: 'none',
      padding: 0,
      width: '100%'
    }
  },
  position: 'relative',
});

export const searchbarHighlightStyle = style({
  borderTop: '2px solid #ff5537',
  bottom: 0,
  color: 'transparent',
  fontSize: '16px',
  height: 0,
  left: 0,
  lineHeight: '35px',
  maxWidth: '100%',
  overflow: 'hidden',
  position: 'absolute'
});

export const searchBarClearStyle = style({
  bottom: 0,
  top: 0,
  right: '10px',
  height: '25px',
  margin: 'auto',
  cursor: 'pointer',
  position: 'absolute',
  fill: '#849493'
});
