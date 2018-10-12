import { color, px } from 'csx';
import { style } from 'typestyle';

const DEFAULT_HEIGHT_PX = 30;
const DEFAULT_UNCHECKED_COLOR = '#E25D5D';
const DEFAULT_CHECKED_COLOR = '#3498DB';

const transition = {
  transition: 'all 250ms ease-in',
};

const beforeAfterShared = {
  ...transition,
  content: '""',
  display: 'block',
};

export interface IGetStylesOptions {
  checkedColor?: string;
  height?: number;
  uncheckedColor?: string;
}

export function getStyles(options: IGetStylesOptions = {}) {
  const safeOptions = {
    checkedColor: DEFAULT_CHECKED_COLOR,
    height: DEFAULT_HEIGHT_PX,
    uncheckedColor: DEFAULT_UNCHECKED_COLOR,
    ...options,
  };

  // Sizes & Positions
  const heightPx = safeOptions.height;
  const borderPx = Math.round(heightPx * (5 / 70));
  const borderPaddingPx = Math.round(heightPx * (2 / 70));
  const widthPx = Math.round(heightPx * (125 / 70));
  const translateShiftPx = Math.round(heightPx * (51 / 70));
  const translateFaceShiftPx = Math.round(heightPx * (53 / 70));
  const faceHeightPx = Math.round(heightPx * (56 / 70));
  const eyeHeightPx = Math.round(heightPx / 10);
  const eyeLeftOffsetPx = Math.round(heightPx * (12 / 70));
  const eyeSpaceBetweenPx = Math.round(heightPx * (28 / 70));
  const innerMouthHeightPx = eyeHeightPx;
  const innerMouthWidthPx = Math.round(heightPx * (17 / 70));
  const innerMouthLeftOffsetPx = Math.round(heightPx * (9 / 70));
  const innerMouthTopOffsetPx = Math.round(heightPx * (21 / 70));
  const outerMouthHeightPx = innerMouthWidthPx;
  const outerMouthWidthPx = Math.round(heightPx * (36 / 70));
  const outerMouthLeftOffsetPx = 0;
  const outerMouthTopOffsetPx = Math.round(heightPx * (11 / 70));

  // Colors
  const uncheckedColor = safeOptions.uncheckedColor;
  const uncheckedColorBorder = color(uncheckedColor)
    .darken(0.25)
    .toHexString();
  const checkedColor = safeOptions.checkedColor;
  const checkedColorBorder = color(checkedColor)
    .darken(0.25)
    .toHexString();
  const toggle = style({
    display: 'block',
    position: 'relative',
    textAlign: 'center',
    userSelect: 'none',
  });

  const toggleCheckBox = style(transition, {
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

  const toggleBtn = style(transition, {
    $nest: {
      [`.${toggleCheckBox}:checked + &`]: {
        backgroundColor: checkedColor,
        border: `${px(borderPx)} solid ${checkedColorBorder}`,
      },
      '&::after': {
        ...beforeAfterShared,
      },
      '&::before': {
        ...beforeAfterShared,
        [`.${toggleCheckBox}:checked + &`]: {
          transform: `translate(${px(translateShiftPx)}, 0)`,
        },
        backgroundColor: '#F2DD68',
        border: `${px(borderPx)} solid #E5CE5E`,
        borderRadius: '50%',
        boxSizing: 'border-box',
        height: px(faceHeightPx),
        left: px(borderPaddingPx),
        position: 'absolute',
        top: px(borderPaddingPx),
        width: px(faceHeightPx),
      },
      '&:hover': {
        cursor: 'pointer',
      },
    },
    backgroundColor: uncheckedColor,
    border: `${px(borderPx)} solid ${uncheckedColorBorder}`, // #AD1000
    borderRadius: px(heightPx),
    boxSizing: 'border-box',
    display: 'block',
    height: px(heightPx),
    position: 'relative',
    transition: 'all 350ms ease-in',
    width: px(widthPx),
  });

  const toggleFeature = style(transition, {
    $nest: {
      [`.${toggleCheckBox}:checked + .${toggleBtn} &`]: {
        transform: `translate(${px(translateFaceShiftPx)}, 0)`,
      },
      '&::after': {
        ...beforeAfterShared,
        [`.${toggleCheckBox}:checked + .${toggleBtn} &`]: {
          borderRadius: '50%/50%',
        },
        backgroundColor: '#D8AA2B',
        borderRadius: `${px(innerMouthWidthPx)} ${px(innerMouthWidthPx)} 0 0`,
        height: px(innerMouthHeightPx),
        left: px(innerMouthLeftOffsetPx),
        position: 'absolute',
        top: px(innerMouthTopOffsetPx),
        width: px(innerMouthWidthPx),
      },
      '&::before': {
        ...beforeAfterShared,
        [`.${toggleCheckBox}:checked + .${toggleBtn} &`]: {
          borderRadius: `0 0 ${px(outerMouthWidthPx)} ${px(outerMouthWidthPx)}`,
        },
        backgroundColor: '#995710',
        borderRadius: `${px(outerMouthWidthPx)} ${px(outerMouthWidthPx)} 0 0`,
        height: px(outerMouthHeightPx),
        left: px(outerMouthLeftOffsetPx),
        position: 'absolute',
        top: px(outerMouthTopOffsetPx),
        width: px(outerMouthWidthPx),
      },
    },
    backgroundColor: '#995710',
    borderRadius: '50%',
    boxShadow: `${px(eyeSpaceBetweenPx)} 0 0 0 #995710`,
    height: px(eyeHeightPx),
    left: px(eyeLeftOffsetPx),
    position: 'absolute',
    top: '32%',
    width: px(eyeHeightPx),
  });

  return {
    toggle,
    toggleBtn,
    toggleCheckBox,
    toggleFeature,
  };
}
