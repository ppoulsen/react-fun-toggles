import { color, px } from 'csx';
import { style } from 'typestyle';

// Sizes & Positions
const HEIGHT_PX = 30;
const BORDER_PX = Math.round(HEIGHT_PX * (5 / 70));
const BORDER_PADDING_PX = Math.round(HEIGHT_PX * (2 / 70));
const WIDTH_PX = Math.round(HEIGHT_PX * (125 / 70));
const TRANSLATE_SHIFT_PX = Math.round(HEIGHT_PX * (51 / 70));
const TRANSLATE_FACE_SHIFT_PX = Math.round(HEIGHT_PX * (53 / 70));
const FACE_HEIGHT_PX = Math.round(HEIGHT_PX * (56 / 70));
const EYE_HEIGHT_PX = Math.round(HEIGHT_PX / 10);
const EYE_LEFT_OFFSET_PX = Math.round(HEIGHT_PX * (12 / 70));
const EYE_SPACE_BETWEEN_PX = Math.round(HEIGHT_PX * (28 / 70));
const INNER_MOUTH_HEIGHT_PX = EYE_HEIGHT_PX;
const INNER_MOUTH_WIDTH_PX = Math.round(HEIGHT_PX * (17 / 70));
const INNER_MOUTH_LEFT_OFFSET_PX = Math.round(HEIGHT_PX * (9 / 70));
const INNER_MOUTH_TOP_OFFSET_PX = Math.round(HEIGHT_PX * (21 / 70));
const OUTER_MOUTH_HEIGHT_PX = INNER_MOUTH_WIDTH_PX;
const OUTER_MOUTH_WIDTH_PX = Math.round(HEIGHT_PX * (36 / 70));
const OUTER_MOUTH_LEFT_OFFSET_PX = 0;
const OUTER_MOUTH_TOP_OFFSET_PX = Math.round(HEIGHT_PX * (11 / 70));

// Colors
const UNCHECKED_COLOR = '#E25D5D';
const UNCHECKED_COLOR_BORDER = color(UNCHECKED_COLOR)
  .darken(0.25)
  .toHexString();
const CHECKED_COLOR = '#3498DB';
const CHECKED_COLOR_BORDER = color(CHECKED_COLOR)
  .darken(0.25)
  .toHexString();

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
      backgroundColor: CHECKED_COLOR,
      border: `${px(BORDER_PX)} solid ${CHECKED_COLOR_BORDER}`,
    },
    '&::after': {
      ...beforeAfterShared,
    },
    '&::before': {
      ...beforeAfterShared,
      [`.${toggleCheckBox}:checked + &`]: {
        transform: `translate(${px(TRANSLATE_SHIFT_PX)}, 0)`,
      },
      backgroundColor: '#F2DD68',
      border: `${px(BORDER_PX)} solid #E5CE5E`,
      borderRadius: '50%',
      boxSizing: 'border-box',
      height: px(FACE_HEIGHT_PX),
      left: px(BORDER_PADDING_PX),
      position: 'absolute',
      top: px(BORDER_PADDING_PX),
      width: px(FACE_HEIGHT_PX),
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  backgroundColor: UNCHECKED_COLOR,
  border: `${px(BORDER_PX)} solid ${UNCHECKED_COLOR_BORDER}`, // #AD1000
  borderRadius: px(HEIGHT_PX),
  boxSizing: 'border-box',
  display: 'block',
  height: px(HEIGHT_PX),
  position: 'relative',
  transition: 'all 350ms ease-in',
  width: px(WIDTH_PX),
});

export const toggleFeature = style(transition, {
  $nest: {
    [`.${toggleCheckBox}:checked + .${toggleBtn} &`]: {
      transform: `translate(${px(TRANSLATE_FACE_SHIFT_PX)}, 0)`,
    },
    '&::after': {
      ...beforeAfterShared,
      [`.${toggleCheckBox}:checked + .${toggleBtn} &`]: {
        borderRadius: '50%/50%',
      },
      backgroundColor: '#D8AA2B',
      borderRadius: `${px(INNER_MOUTH_WIDTH_PX)} ${px(
        INNER_MOUTH_WIDTH_PX
      )} 0 0`,
      height: px(INNER_MOUTH_HEIGHT_PX),
      left: px(INNER_MOUTH_LEFT_OFFSET_PX),
      position: 'absolute',
      top: px(INNER_MOUTH_TOP_OFFSET_PX),
      width: px(INNER_MOUTH_WIDTH_PX),
    },
    '&::before': {
      ...beforeAfterShared,
      [`.${toggleCheckBox}:checked + .${toggleBtn} &`]: {
        borderRadius: `0 0 ${px(OUTER_MOUTH_WIDTH_PX)} ${px(
          OUTER_MOUTH_WIDTH_PX
        )}`,
      },
      backgroundColor: '#995710',
      borderRadius: `${px(OUTER_MOUTH_WIDTH_PX)} ${px(
        OUTER_MOUTH_WIDTH_PX
      )} 0 0`,
      height: px(OUTER_MOUTH_HEIGHT_PX),
      left: px(OUTER_MOUTH_LEFT_OFFSET_PX),
      position: 'absolute',
      top: px(OUTER_MOUTH_TOP_OFFSET_PX),
      width: px(OUTER_MOUTH_WIDTH_PX),
    },
  },
  backgroundColor: '#995710',
  borderRadius: '50%',
  boxShadow: `${px(EYE_SPACE_BETWEEN_PX)} 0 0 0 #995710`,
  height: px(EYE_HEIGHT_PX),
  left: px(EYE_LEFT_OFFSET_PX),
  position: 'absolute',
  top: '32%',
  width: px(EYE_HEIGHT_PX),
});
