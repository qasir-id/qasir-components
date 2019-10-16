import { rgba, darken, lighten } from 'polished';

// Color
// ------------------------------------------------------------------------------------------
export const color = {
  red: '#F04B32',
  black: '#474955',
  white: '#FFFFFF',
  orange: '#FFA000',
  green: '#33CC59',
  blue: '#03A9F4',
  grey: '#E3E5ED'
};

// Spacing
// ------------------------------------------------------------------------------------------

// Control the default styling of most elements by modifying these
// variables. Mostly focused on spacing.

export const spacer = 16;
export const spacerX = spacer;
export const spacerY = spacer;

export const spacing = {
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  ml: 20,
  l: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
  xxxxl: 56
};


// Typography
// --------------------------------------------------
// Font, line-height, and color for body text, headings, variant and more.
export const fontWeightBase = 500;
export const fontWeightMedium = 600;
export const fontWeightBold = 700;

export const fontFamilySansSerif = '"Montserrat", Arial, sans-serif';
export const fontFamilySerif = 'Georgia, "Times New Roman", Times, serif';
export const fontFamilyMonospace = 'Monaco, Consolas, "Liberation Mono", Menlo, Courier, monospace';
export const fontFamilyBase = fontFamilySansSerif;

export const fontSizeRoot = 16;
export const fontSizeBase = 16;

export const fontSizeH1 = 24;
export const fontSizeH2 = 22;
export const fontSizeH3 = 20;
export const fontSizeH4 = 18;
export const fontSizeH5 = 16;
export const fontSizeH6 = 14;

export const fontSelectionBg = '#fff2a8';

export const headingsMarginBottom = 0;
export const headingsFontFamily = 'inherit';
export const headingsFontWeight = fontWeightMedium;
export const headingsLineHeight = 1.1;
export const headingsColor = 'inherit';

export const lineColor = '#d9dfe8';
export const lineHeightBase = 1.375;
export const lineHeightSm = 1.4;
export const lineHeightLg = lineHeightBase;
export const lineHeightComputed = fontSizeBase * lineHeightBase;

export const FontSize = {
  gigantic: 40,
  huge: 32,
  big: 24,
  large: 20,
  medium: 16,
  small: 14,
  tiny: 12,
  micro: 11,
  H1: 24,
  H2: 22,
  H3: 20,
  H4: 18,
  H5: 16,
  H6: 14
};

// Components
// ------------------------------------------------------------------------------------------
export const borderWidth = 1;
export const borderRadius = 3;
export const borderRadiusXs = 3;
export const borderRadiusSm = 3;
export const borderRadiusLg = 4;


export const cursorDisabled = 'not-allowed';

// Shadow
// ------------------------------------------------------------------------------------------

export const elevation1 = '0 1px 5px rgba(27, 27, 27, .1)';
export const elevation2 = '0 2px 8px rgba(27, 27, 27, .18)';
export const elevation3 = '0 8px 16px rgba(27, 27, 27, .18), 0 2px 8px rgba(27, 27, 27, .1)';
export const elevation4 = '0 14px 28px rgba(27, 27, 27, .24), 0 10px 10px rgba(27, 27, 27, .2)';
export const elevation5 = '0 19px 38px rgba(27, 27, 27, .3), 0 15px 12px rgba(27, 27, 27, .2)';

// Grid
// ------------------------------------------------------------------------------------------
//
// Set the number of columns and specify the width of the gutters.

export const gridColumns = 12;
export const gridGutterWidth = 15;

export const containerWidth = 1040;
export const containerWidthMd = 800;
export const containerWidthSm = 500;

// Z-index master list
// ------------------------------------------------------------------------------------------

export const zIndexDropdown = 1000;
export const zIndexSelectMenu = 1000;
export const zIndexDateTimePicker = 1010;
export const zIndexModalBg = 1020;
export const zIndexModal = 1030;
export const zIndexTooltip = 1040;
export const zIndexPopover = 1040;
export const zIndexNotification = 1050;
export const zIndexNavSubmenu = 1060;

// States and alerts
// ------------------------------------------------------------------------------------------

export const stateBlueText = '#31708f';
export const stateBlueBg = '#d9edf7';
export const stateBlueBorder = '#b3dbef';

export const stateGreenText = '#3c763d';
export const stateGreenBg = '#dff0d8';
export const stateGreenBorder = darken(0.05, stateGreenBg);

export const stateOrangeText = '#8a6d3b';
export const stateOrangeBg = '#fcf8e3';
export const stateOrangeBorder = darken(0.05, stateOrangeBg);

export const stateRedText = '#F32013';
export const stateRedBg = '#f2dede';
export const stateRedBorder = darken(0.05, stateRedBg);

// Close
// ------------------------------------------------------------------------------------------

export const closeFontWeight = fontWeightBold;
export const closeColor = '#000';
export const closeTextShadow = '0 1px 0 #fff';

// Forms
// ------------------------------------------------------------------------------------------
export const inputPaddingX = spacing.m + 2;
export const inputPaddingY = spacing.s + 2;
export const inputLineHeight = lineHeightBase;
