import { style } from 'typestyle';

const transition = {
  transition: 'all 250ms ease-in',
};

const beforeAfterShared = {
  ...transition,
  content: '""',
  display: 'block',
};

export const toggle = style({
  display: 'block',
  position: 'relative',
  textAlign: 'center',
  userSelect: 'none',
});

export const toggleCheckBox = style(transition, {
  $nest: {
    '&::after': {
      ...beforeAfterShared,
    },
    '&::before': {
      ...beforeAfterShared,
    },
  },
  display: 'none',
});

export const toggleBtn = style(transition, {
  $nest: {
    [`.${toggleCheckBox}:checked + &`]: {
      backgroundColor: '#3498DB',
      border: '5px solid #0865B0',
    },
    '&::after': {
      ...beforeAfterShared,
    },
    '&::before': {
      ...beforeAfterShared,
      [`.${toggleCheckBox}:checked + &`]: {
        transform: 'translate(51px, 0)',
      },
      backgroundColor: '#F2DD68',
      border: '5px solid #E5CE5E',
      borderRadius: '50%',
      boxSizing: 'border-box',
      height: '56px',
      left: '4px',
      position: 'absolute',
      top: '2px',
      width: '56px',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  backgroundColor: '#E25D5D',
  border: '5px solid #AD1000',
  borderRadius: '70px',
  boxSizing: 'border-box',
  display: 'block',
  fontSize: '1.4em',
  height: '70px',
  margin: '0 auto',
  position: 'relative',
  transition: 'all 350ms ease-in',
  width: '125px',
});

export const toggleFeature = style(transition, {
  $nest: {
    [`.${toggleCheckBox}:checked + .${toggleBtn} &`]: {
      transform: 'translate(53px, 0)',
    },
    '&::after': {
      ...beforeAfterShared,
      [`.${toggleCheckBox}:checked + .${toggleBtn} &`]: {
        borderRadius: '50%/50%',
      },
      backgroundColor: '#D8AA2B',
      borderRadius: '17px 17px 0 0',
      height: '7px',
      left: '9px',
      position: 'absolute',
      top: '21px',
      width: '17px',
    },
    '&::before': {
      ...beforeAfterShared,
      [`.${toggleCheckBox}:checked + .${toggleBtn} &`]: {
        borderRadius: '0 0 36px 36px',
      },
      backgroundColor: '#995710',
      borderRadius: '36px 36px 0 0',
      height: '17px',
      left: '0',
      position: 'absolute',
      top: '11px',
      width: '36px',
    },
  },
  backgroundColor: '#995710',
  borderRadius: '50%',
  boxShadow: '28px 0 0 0 #995710',
  height: '7px',
  left: '14px',
  position: 'absolute',
  top: '32%',
  width: '7px',
});
