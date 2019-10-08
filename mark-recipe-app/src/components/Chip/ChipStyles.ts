import { style } from 'typestyle';

export const chipStyle = (active: boolean) =>
  style({
    cursor: 'pointer',
    userSelect: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '1.8rem',
    fontSize: '0.8rem',
    fontWeight: 'normal',
    padding: '0 0.8rem',
    border: '1px solid #ff5537',
    borderRadius: '1rem',
    backgroundColor: active ? '#ff6347' : 'transparent',
    color: active ? 'white' : 'currentColor'
  });
