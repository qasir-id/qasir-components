import { rgba, darken, lighten } from 'polished';

// Color
// ------------------------------------------------------------------------------------------
export const grayDark = '#aaa';
export const gray = '#a8b0ba';
export const grayLight = '#ced3d9';
export const grayLighter = '#eee';
export const grayLightest = '#f5f6f8';

export const extranetBlue = 'blue';
export const extranetGreen = '#1ed28f';
export const extranetOrange = '#fc9100';
export const extranetRed = '#ff615c';

export const borderColor = '#d9dfe8';

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

// Body
// ------------------------------------------------------------------------------------------

// export const bodyBg = '#f2f4f7';
export const bodyBg = lighten(0.005, '#f2f4f7');
export const bodyColor = grayDark;

// Links
// ------------------------------------------------------------------------------------------

// Style anchor elements.

export const linkColor = darken(0.05, extranetBlue);
export const linkDecoration = 'none';
export const linkHoverColor = lighten(0.1, linkColor);
export const linkHoverDecoration = 'none';

// Typography
// --------------------------------------------------
// Font, line-height, and color for body text, headings, variant and more.
export const fontWeightBase = 400;
export const fontWeightLight = 200;
export const fontWeightMedium = 500;
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

export const fontSelectionColor = bodyColor;
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

export const componentActiveColor = color.white;
export const componentActiveBg = extranetBlue;

export const caretWidth = 5;
export const caretWidthSm = 4;
export const caretWidthLg = 6;

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

export const stateRedText = '#a94442';
export const stateRedBg = '#f2dede';
export const stateRedBorder = darken(0.05, stateRedBg);

// Close
// ------------------------------------------------------------------------------------------

export const closeFontWeight = fontWeightBold;
export const closeColor = '#000';
export const closeTextShadow = '0 1px 0 #fff';

// Forms
// ------------------------------------------------------------------------------------------

export const inputFontSize = fontSizeBase;
export const inputPaddingX = spacing.m + 2;
export const inputPaddingY = spacing.s + 2;
export const inputLineHeight = lineHeightBase;

export const inputBg = color.white;
export const inputBgDisabled = grayLightest;
export const inputBgFocus = inputBg;

export const inputColor = bodyColor;
export const inputColorFocus = inputColor;
export const inputColorPlaceholder = grayLight;
export const inputBorderColor = color.grey;
export const inputBorderFocus = darken(0.08, color.grey);
export const inputBorderWidth = borderWidth;
export const inputBtnBorderWidth = borderWidth; // For form controls and buttons
export const inputBoxShadow = 'inset 0 1px 1px rgba(0, 0, 0, .075)';
export const inputBoxShadowFocus = `${inputBoxShadow}, 0 0 8px rgba(102, 175, 233, .6)`;

export const inputIconSize = 18;
export const inputErrorBorderColor = '#ffaaa8';
export const inputErrorIconSize = 19;

export const inputBorderRadius = borderRadius;
export const inputBorderRadiusLg = borderRadiusLg;
export const inputBorderRadiusSm = borderRadiusSm;

export const inputPaddingXSm = 12;
export const inputPaddingYSm = 6;
export const inputLineHeightSm = lineHeightSm;

export const inputPaddingXLg = 24;
export const inputPaddingYLg = 12;
export const inputLineHeightLg = lineHeightLg;

export const inputHeight = inputFontSize * inputLineHeight + inputPaddingY * 2 + inputBorderWidth * 2;
export const inputHeightLg = FontSize.large * lineHeightLg + inputPaddingYLg * 2;
export const inputHeightSm = FontSize.small * lineHeightSm + inputPaddingYSm * 2;

export const inputGroupAddonBg = lighten(0.01, bodyBg);
export const inputGroupAddonBorderColor = inputBorderColor;

export const inputControlContainerMarginBottom = spacer;
export const inputErrorIconTransitionDuration = 150;

// Tables
// ------------------------------------------------------------------------------------------

export const tableCellPadding = 11;
export const tableSmCellPadding = 5;
export const tableThPaddingVertical = 12;

export const tableBg = color.white;

export const tableInverseBg = grayDark;
export const tableInverseColor = bodyBg;

export const tableBgAccent = '#fbfbfb';
export const tableBgHover = rgba('#000', 0.075);
export const tableBgActive = tableBgHover;

export const tableHeadBg = grayLighter;
export const tableHeadColor = gray;

export const tableBorderWidth = borderWidth;
export const tableBorderColor = borderColor;

export const tableHighlightBg = '#f5f7f9';
export const tableFixedColShadowColor = rgba(27, 27, 27, 0.03);

// Tooltip
// ------------------------------------------------------------------------------------------
export const tooltipFontSize = 13;
export const tooltipMaxWidth = 400;
export const tooltipColor = color.white;
export const tooltipBg = rgba('#263140', 0.85);
export const tooltipPaddingY = 4;
export const tooltipPaddingX = 8;
export const tooltipMargin = 3;

export const tooltipArrowWidth = 5;
export const tooltipArrowBg = tooltipBg;

export const tooltipAnimationDuration = 100; // milliseconds
export const tooltipAnimationEase = 'cubic-bezier(.4, 0, .2, 1)';

// Cards
// ------------------------------------------------------------------------------------------

export const cardPaddingX = spacer;
export const cardPaddingY = spacer;
export const cardBorderWidth = 1;
export const cardBorderStyle = 'solid';
export const cardBorderRadius = borderRadius;
export const cardBorderColor = '#e0e6ed';
export const cardBorderRadiusInner = cardBorderRadius - cardBorderWidth;
export const cardBg = color.white;
export const cardBoxShadow = 'none';

// Icon
// ------------------------------------------------------------------------------------------
export const iconWidth = 24;
export const iconHeight = 24;

// Loader
// ------------------------------------------------------------------------------------------
export const loaderCircularWidth = 18;
export const loaderCircularHeight = loaderCircularWidth;
export const loaderCircularWidthSm = 16;
export const loaderCircularHeightSm = loaderCircularWidthSm;
export const loaderCircularWidthMd = 20;
export const loaderCircularHeightMd = loaderCircularWidthMd;
export const loaderCircularWidthLg = 22;
export const loaderCircularHeightLg = loaderCircularWidthLg;

export const loaderCircularAnimationDuration = '450ms';

// Badges
// ------------------------------------------------------------------------------------------

export const badgeDefaultColor = color.white;
export const badgeDefaultBg = gray;
export const badgeBlueColor = color.white;
export const badgeBlueBg = extranetBlue;
export const badgeGreenColor = color.white;
export const badgeGreenBg = extranetGreen;
export const badgeOrangeColor = color.white;
export const badgeOrangeBg = extranetOrange;
export const badgeRedColor = color.white;
export const badgeRedBg = extranetRed;
export const badgeGrayLightColor = color.white;
export const badgeGrayLightBg = grayLight;

export const badgeLinkHoverColor = color.white;
export const badgeFontSize = '81.25%';
export const badgeFontWeight = fontWeightMedium;
export const badgePaddingX = 8;
export const badgePaddingY = 4;

export const badgePillPaddingX = 8;
export const badgePillPaddingY = 4;

export const badgeBorderRadius = '.25rem';
export const badgePillBorderRadius = 60;

// Box
// ------------------------------------------------------------------------------------------

export const boxPaddingX = spacerX;
export const boxPaddingY = spacerY;
export const boxBorderWidth = 1;
export const boxBorderRadius = borderRadius;
export const boxBorderColor = borderColor;
export const boxBorderStyle = 'solid';
export const boxBg = color.white;
export const boxBoxShadow = 'none';
export const boxPulseAnimationDuration = 1000; // ms

// List group
// ------------------------------------------------------------------------------------------

export const listGroupBg = color.white;
export const listGroupBorderColor = borderColor;
export const listGroupBorderWidth = borderWidth;
export const listGroupBorderRadius = borderRadius;
export const listGroupBorderStyle = 'solid';

export const listGroupActiveColor = componentActiveColor;
export const listGroupActiveBg = extranetGreen;
export const listGroupActiveBorder = extranetGreen;
export const listGroupActiveTextColor = lighten(0.4, listGroupActiveBg);

export const listGroupDisabledColor = '#000';
export const listGroupDisabledBg = grayLightest;
export const listGroupDisabledTextColor = listGroupDisabledColor;

export const listGroupItemPaddingX = 20;
export const listGroupItemPaddingY = 14;

export const listGroupLinkColor = linkColor;
export const listGroupLinkHoverColor = linkHoverColor;
