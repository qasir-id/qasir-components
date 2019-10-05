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

export const red = '#F04B32';
export const black = '#474955';
export const white = '#FFFFFF';
export const orange = '#FFA000';
export const green = '#33CC59';
export const blue = '#03A9F4';
export const grey = '#E3E5ED';

// Spacing
// ------------------------------------------------------------------------------------------

// Control the default styling of most elements by modifying these
// variables. Mostly focused on spacing.

export const spacer = 16;
export const spacerX = spacer;
export const spacerY = spacer;

export const xxs= 4;
export const xs= 8;
export const s= 12;
export const m= 16;
export const ml= 20;
export const l= 24;
export const xl= 32;
export const xxl= 40;
export const xxxl= 48;
export const xxxxl= 56;

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

export const fontFamilySansSerif = '\'Montserrat\', Arial, sans-serif';
export const fontFamilySerif = 'Georgia, \'Times New Roman\', Times, serif';
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

export const fontSizegigantic = 40;
export const fontSizehuge = 32;
export const fontSizebig = 24;
export const fontSizelarge = 20;
export const fontSizemedium = 16;
export const fontSizeSmall = 14;
export const fontSizetiny = 12;
export const fontSizemicro = 11;

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


// Components
// ------------------------------------------------------------------------------------------
export const borderWidth = 1;
export const borderRadius = 3;
export const borderRadiusXs = 3;
export const borderRadiusSm = 3;
export const borderRadiusLg = 4;

export const componentActiveColor = white;
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
export const inputPaddingX = 12;
export const inputPaddingY = 7;
export const inputLineHeight = lineHeightBase;

export const inputBg = white;
export const inputBgDisabled = grayLightest;
export const inputBgFocus = inputBg;

export const inputColor = bodyColor;
export const inputColorFocus = inputColor;
export const inputColorPlaceholder = grayLight;
export const inputBorderColor = '#ccd1d9';
export const inputBorderFocus = '#9ca3ae';
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

export const inputHeight =
  inputFontSize * inputLineHeight + inputPaddingY * 2 + inputBorderWidth * 2;
export const inputHeightLg = fontSizelarge * lineHeightLg + inputPaddingYLg * 2;
export const inputHeightSm = fontSizeSmall * lineHeightSm + inputPaddingYSm * 2;

export const inputGroupAddonBg = lighten(0.01, bodyBg);
export const inputGroupAddonBorderColor = inputBorderColor;

export const inputControlContainerMarginBottom = spacer;
export const inputErrorIconTransitionDuration = 150;

// Tables
// ------------------------------------------------------------------------------------------

export const tableCellPadding = 11;
export const tableSmCellPadding = 5;
export const tableThPaddingVertical = 12;

export const tableBg = white;

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

// Buttons
// ------------------------------------------------------------------------------------------
//
// For each of buttons, define text, background and border color.

export const btnFontWeight = 500;
export const btnFontSize = fontSizeBase;
export const btnBorderWidth = 1;

export const btnMinWidth = 100;
export const btnMinWidthXs = 60;
export const btnMinWidthSm = 80;
export const btnMinWidthLg = 120;

export const btnDefaultColor = bodyColor;
export const btnDefaultBg = white;
export const btnDefaultBgHover = grayLightest;
export const btnDefaultBorder = inputBorderColor;

export const btnBlueColor = white;
export const btnBlueBg = extranetBlue;
export const btnBlueBgHover = darken(0.05, extranetBlue);
export const btnBlueBorder = btnBlueBg;
export const btnBlueOutlineColor = extranetBlue;
export const btnBlueOutlineBg = 'transparent';
export const btnBlueOutlineBgHover = rgba(extranetBlue, 0.07);
export const btnBlueOutlineBorder = btnBlueOutlineColor;

export const btnGreenColor = white;
export const btnGreenBg = extranetGreen;
export const btnGreenBgHover = darken(0.05, extranetGreen);
export const btnGreenBorder = btnGreenBg;
export const btnGreenOutlineColor = extranetGreen;
export const btnGreenOutlineBg = 'transparent';
export const btnGreenOutlineBgHover = rgba(extranetGreen, 0.07);
export const btnGreenOutlineBorder = btnGreenOutlineColor;

export const btnOrangeColor = white;
export const btnOrangeBg = extranetOrange;
export const btnOrangeBgHover = darken(0.05, extranetOrange);
export const btnOrangeBorder = btnOrangeBg;
export const btnOrangeOutlineColor = extranetOrange;
export const btnOrangeOutlineBg = 'transparent';
export const btnOrangeOutlineBgHover = rgba(extranetOrange, 0.07);
export const btnOrangeOutlineBorder = btnOrangeOutlineColor;

export const btnRedColor = white;
export const btnRedBg = extranetRed;
export const btnRedBgHover = darken(0.05, extranetRed);
export const btnRedBorder = btnRedBg;
export const btnRedOutlineColor = extranetRed;
export const btnRedOutlineBg = 'transparent';
export const btnRedOutlineBgHover = rgba(extranetRed, 0.07);
export const btnRedOutlineBorder = btnRedOutlineColor;

export const btnWhiteColor = bodyColor;
export const btnWhiteBg = white;
export const btnWhiteBgHover = darken(0.05, white);
export const btnWhiteBorder = white;
export const btnWhiteOutlineColor = white;
export const btnWhiteOutlineBg = 'transparent';
export const btnWhiteOutlineBgHover = rgba(white, 0.07);
export const btnWhiteOutlineBorder = btnWhiteOutlineColor;

export const btnPaddingX = 16;
export const btnPaddingY = 7;
export const btnPaddingXXs = 6.4;
export const btnPaddingYXs = 3.2;
export const btnPaddingXSm = inputPaddingXSm;
export const btnPaddingYSm = inputPaddingYSm;
export const btnPaddingXLg = inputPaddingXLg;
export const btnPaddingYLg = inputPaddingYLg;

export const btnBlockSpacingY = 8;
export const btnToolbarMargin = 8;

// Allows for customizing button radius independently from global border radius
export const btnBorderRadius = borderRadius;
export const btnBorderRadiusXs = borderRadiusXs;
export const btnBorderRadiusSm = borderRadiusSm;
export const btnBorderRadiusLg = borderRadiusLg;

// DropDown
// ------------------------------------------------------------------------------------------
export const dropdownMenuPaddingY = 6;
export const dropdownMenuMarginTop = 2;
export const dropdownMenuBg = white;
export const dropdownMenuBorderColor = '#d9dfe8';
export const dropdownMenuBorderWidth = borderWidth;
export const dropdownMenuMinWidth = 160;
export const dropdownMenuMinWidthSm = 120;
export const dropdownMenuMinWidthLg = 180;

export const dropdownItemFontSize = fontSizeBase;
export const dropdownItemfontSizeSmall = 13;
export const dropdownItemFontSizeLg = 16;
export const dropdownItemColor = bodyColor;
export const dropdownItemHoverColor = dropdownItemColor;
export const dropdownItemHoverBg = grayLightest;
export const dropdownItemActiveColor = componentActiveColor;
export const dropdownItemActiveBg = componentActiveBg;
export const dropdownItemDisabledColor = gray;
export const dropdownItemPaddingX = 16;
export const dropdownItemPaddingY = 4;
export const dropdownItemPaddingXSm = 10;
export const dropdownItemPaddingYSm = 2;
export const dropdownItemPaddingXLg = 18;
export const dropdownItemPaddingYLg = 5;

export const dropdownHeaderColor = gray;
export const dropdownHeaderFontSize = 12;
export const dropdownHeaderFontSizeLg = 14;
export const dropdownHeaderFontWeight = fontWeightMedium;

export const dropdownDividerMarginX = dropdownItemPaddingX;
export const dropdownDividerMarginY = spacerY / 2;
export const dropdownDividerMarginXSm = dropdownItemPaddingXSm;
export const dropdownDividerMarginYSm = 5;
export const dropdownDividerMarginXLg = dropdownItemPaddingXLg;
export const dropdownDividerMarginYLg = dropdownDividerMarginY;
export const dropdownDividerBg = grayLighter;

// Tooltip
// ------------------------------------------------------------------------------------------
export const tooltipFontSize = 13;
export const tooltipMaxWidth = 400;
export const tooltipColor = white;
export const tooltipBg = rgba('#263140', 0.85);
export const tooltipPaddingY = 4;
export const tooltipPaddingX = 8;
export const tooltipMargin = 3;

export const tooltipArrowWidth = 5;
export const tooltipArrowBg = tooltipBg;

export const tooltipAnimationDuration = 100; // milliseconds
export const tooltipAnimationEase = 'cubic-bezier(.4, 0, .2, 1)';

// Popovers
// ------------------------------------------------------------------------------------------

export const popoverInnerPadding = 0;
export const popoverBg = white;
export const popoverMaxWidth = 256;
export const popoverBorderWidth = borderWidth;
export const popoverBorderColor = dropdownMenuBorderColor;
export const popoverBoxShadow = elevation1;
export const popoverMargin = 3;

export const popoverTitleBg = white;
export const popoverTitleColor = headingsColor;
export const popoverTitleBorderColor = 'transparent';
export const popoverTitlePaddingY = spacerY * 0.75;
export const popoverTitlePaddingX = spacerX * 0.75;

export const popoverContentColor = bodyColor;
export const popoverContentPaddingY = spacerY * 0.75;
export const popoverContentPaddingX = spacerX * 0.75;

export const popoverArrowWidth = 10;
export const popoverArrowHeight = 5;
export const popoverArrowColor = popoverBg;

export const popoverArrowOuterWidth = popoverArrowWidth + 1;
export const popoverArrowOuterColor = popoverBorderColor;

export const popoverAnimationDuration = 100; // in ms
export const popoverAnimationEase = 'cubicBezier(.4, 0, .2, 1)';

// Modals
// ------------------------------------------------------------------------------------------

// Padding applied to the modal body
export const modalInnerPadding = 20;

export const modalDialogMargin = 10;
export const modalDialogUpMarginY = 30;

export const modalTitlePadding = 20;
export const modalTitleLineHeight = lineHeightBase;

export const modalContentBg = '#fff';
export const modalContentBorderColor = rgba(0, 0, 0, 0.2);
export const modalContentBorderWidth = borderWidth;
export const modalContentBoxShadow =
  'rgba(0, 0, 0, .13) 0 14px 45px, rgba(0, 0, 0, .1) 0 10px 18px';

export const modalBackdropBg = '#000';
export const modalBackdropOpacity = 0.7;
export const modalHeaderBorderColor = '#e5e5e5';
export const modalFooterBorderColor = modalHeaderBorderColor;
export const modalHeaderBorderWidth = modalContentBorderWidth;
export const modalFooterBorderWidth = modalHeaderBorderWidth;

export const modalLg = containerWidth - gridGutterWidth * 2 - 100;
export const modalMd = 600;
export const modalSm = 400;

export const modalAnimation = true;
export const modalAnimationBlur = false;

// Cards
// ------------------------------------------------------------------------------------------

export const cardPaddingX = spacer;
export const cardPaddingY = spacer;
export const cardBorderWidth = 1;
export const cardBorderStyle = 'solid';
export const cardBorderRadius = borderRadius;
export const cardBorderColor = '#e0e6ed';
export const cardBorderRadiusInner = cardBorderRadius - cardBorderWidth;
export const cardBg = white;
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

export const badgeDefaultColor = white;
export const badgeDefaultBg = gray;
export const badgeBlueColor = white;
export const badgeBlueBg = extranetBlue;
export const badgeGreenColor = white;
export const badgeGreenBg = extranetGreen;
export const badgeOrangeColor = white;
export const badgeOrangeBg = extranetOrange;
export const badgeRedColor = white;
export const badgeRedBg = extranetRed;
export const badgeGrayLightColor = white;
export const badgeGrayLightBg = grayLight;

export const badgeLinkHoverColor = white;
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
export const boxBg = white;
export const boxBoxShadow = 'none';
export const boxPulseAnimationDuration = 1000; // ms

// List group
// ------------------------------------------------------------------------------------------

export const listGroupBg = white;
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

// Switch
// ------------------------------------------------------------------------------------------

export const switchWidth = 50; // 100%
export const switchHeight = 26;
export const switchTransition =
  'background-color .2s ease-out, border-color .2s ease-out, left .2s ease-out';

export const switchBackWidth = switchWidth;
export const switchBackHeight = switchHeight;
export const switchBackBorderColor = '#b2bfd1';
export const switchBackBorderStyle = 'solid';
export const switchBackBorderWidth = 1;
export const switchBackBorderRadius = switchHeight / 2 + switchBackBorderWidth;
export const switchBackBg = white;

// export const switchLabelPadding = '0 0 0 ' + (switchWidth - switchBackBorderWidth);
export const switchLabelPadding = 0;

export const switchToggleWidth = switchHeight - switchBackBorderWidth * 4;
export const switchToggleHeight = switchToggleWidth;
export const switchToggleBorderColor = white;
export const switchToggleBorderStyle = 'solid';
export const switchToggleBorderWidth = 1;
export const switchToggleBorderRadius = '50%';
export const switchToggleBg = '#b2bfd1';

export const switchTogglePosTop =
  (switchHeight - (switchToggleHeight + switchToggleBorderWidth)) / 2;
export const switchTogglePosLeft = (switchHeight - switchToggleHeight) / 2;
export const switchTogglePosLeftChecked =
  switchBackWidth - switchTogglePosLeft - (switchToggleWidth - switchToggleBorderWidth) - 1;

// Small
export const switchSmRatio = 0.85;
export const switchWidthSm = Math.floor(switchWidth * switchSmRatio);
export const switchHeightSm = Math.floor(switchHeight * switchSmRatio);
export const switchBackWidthSm = switchWidthSm;
export const switchBackHeightSm = switchHeightSm;
export const switchToggleWidthSm = switchHeightSm - switchBackBorderWidth * 4;
export const switchToggleHeightSm = switchToggleWidthSm;

export const switchTogglePosTopSm =
  (switchHeightSm - (switchToggleHeightSm + switchToggleBorderWidth)) / 2;
export const switchTogglePosLeftSm = (switchHeightSm - switchToggleHeightSm) / 2;
export const switchTogglePosLeftCheckedSm =
  switchBackWidthSm - switchTogglePosLeftSm - (switchToggleWidthSm - switchToggleBorderWidth) - 1;

// Notification
// ------------------------------------------------------------------------------------------

export const notificationAnimSpeed = 400; // ms
export const notificationAnimEase = 'cubic-bezier(.4, 0, .2, 1)';

export const notificationLg = 1024;
export const notificationMd = 600;
export const notificationSm = 400;

// Checkbox
// ------------------------------------------------------------------------------------------

export const checkboxWidth = 20;
export const checkboxHeight = 20;
export const checkboxBgColor = white;
export const checkboxBorderColor = gray;
export const checkboxBgColorActive = extranetBlue;
export const checkboxBorderColorActive = extranetBlue;

export const checkboxColorDisabled = gray;
export const checkboxBorderColorDisabled = grayLight;

export const checkboxTransitionDuration = 100;

// Radio
// ------------------------------------------------------------------------------------------

export const radioWidth = 20;
export const radioHeight = 20;
export const radioBgColor = white;
export const radioBorderColor = gray;
export const radioBgColorActive = extranetBlue;
export const radioBorderColorActive = extranetBlue;

export const radioColorDisabled = gray;
export const radioBorderColorDisabled = grayLight;

export const radioTransitionDuration = 100; // ms

// Tab
// ------------------------------------------------------------------------------------------

export const tabBorderWidth = 1;
export const tabBorderRadius = borderRadius;
export const tabBorderColor = borderColor;
export const tabBorderStyle = 'solid';

export const tabMenuBg = lighten(0.03, bodyBg);
export const tabMenuBgActive = white;
export const tabMenuPadding = `10px ${spacerX}px`;
export const tabMenuTitleFontSize = 16;
export const tabMenuTitleFontWeight = 500;
export const tabMenuSubtitleFontSize = fontSizeBase;
export const tabMenuSubtitleFontWeight = 400;

export const tabBodyBg = white;
export const tabBodyPadding = spacer;

export const tabMenuPulseBoxShadowWidth = 8;

// Collapse
// ------------------------------------------------------------------------------------------

export const collapseHeaderFontSize = fontSizeBase;
export const collapseHeaderFontWeight = fontWeightMedium;
export const collapseHeaderBg = white;

// Nav
// ------------------------------------------------------------------------------------------

export const navLinkPadding = '8px 16px';
export const navDisabledLinkColor = gray;

export const navTabsBorderColor = '#ddd';
export const navTabsBorderWidth = borderWidth;
export const navTabsBorderRadius = borderRadius;
export const navTabsLinkHoverBorderColor = grayLighter;
export const navTabsActiveLinkHoverColor = gray;
export const navTabsActiveLinkHoverBg = bodyBg;
export const navTabsActiveLinkHoverBorderColor = '#ddd';

export const navPillsBorderRadius = borderRadius;
export const navPillsActiveLinkColor = componentActiveColor;
export const navPillsActiveLinkBg = componentActiveBg;

export const navbarLinkPaddingX = 20;
export const navbarLinkPaddingY = 16;

// Pagination
// ------------------------------------------------------------------------------------------

export const paginationPaddingX = 8;
export const paginationPaddingY = 3;
export const paginationMarginX = 2;
export const paginationMarginY = 5;

export const paginationColor = bodyColor;
export const paginationBg = white;
export const paginationBorderWidth = borderWidth;
export const paginationBorderColor = borderColor;

export const paginationHoverColor = bodyColor;
export const paginationHoverBg = white;

export const paginationActiveColor = white;
export const paginationActiveBg = extranetGreen;

export const paginationDisabledColor = gray;
export const paginationDisabledBg = white;

// Scroll Up
// ------------------------------------------------------------------------------------------

export const scrollUpWidth = 44;
export const scrollUpHeight = scrollUpWidth;
export const scrollUpBorder = '1px solid #d9dfe8';

// Progress bars
// ------------------------------------------------------------------------------------------

export const progressHeight = 16;
export const progressFontSize = 12;
export const progressFontWeight = fontWeightMedium;
export const progressBg = grayLightest;
export const progressBorderRadius = borderRadius;
export const progressBoxShadow = `inset 0 .1rem .1rem ${rgba('#000', 0.1)}`;
export const progressBarColor = white;
export const progressBarBg = extranetGreen;
export const progressBarAnimationTiming = '1s linear infinite';

// DateTimePicker
// ------------------------------------------------------------------------------------------
export const dtPickerBorderSpacing = 4;
export const dtPickerHeaderHeight = 30;

// Select
// ------------------------------------------------------------------------------------------

// control options
export const selectInputBg = inputBg;
export const selectInputBgDisabled = inputBgDisabled;
export const selectInputBorderColor = inputBorderColor;
export const selectInputBorderRadius = inputBorderRadius;
export const selectInputBorderFocus = inputBorderFocus;
export const selectInputBorderWidth = 1;
export const selectInputHeight = Math.floor(inputHeight);
export const selectInputInternalHeight = (selectInputHeight - (selectInputBorderWidth * 2));
export const selectInputPlaceholder = inputColorPlaceholder;
export const selectTextColor = inputColor;

export const selectPaddingVertical = 8;
export const selectPaddingHorizontal = 10;

// menu options
export const selectMenuMaxHeight = 200;

export const selectOptionColor = lighten(0.1, selectTextColor);
export const selectOptionFocusedColor = selectTextColor;
export const selectOptionFocusedBg = lighten(0.06, stateBlueBg);
export const selectOptionDisabledColor = grayLight;

export const selectNoResultsColor = gray;

// clear "x" button
export const selectClearSize = 18;
export const selectClearColor = '#666';
export const selectClearHoverColor = selectClearColor;
export const selectClearWidth = selectInputInternalHeight / 2;

// arrow indicator
export const selectArrowColor = '#666';
export const selectArrowColorHover = selectArrowColor;
export const selectArrowWidth = 5;

// loading indicator
export const selectLoadingSize = 16;
export const selectLoadingColor = extranetGreen;
export const selectLoadingColorBg = 'transparent';

// multiSelect item
export const selectItemBorderRadius = 2;
export const selectItemGutter = 5;
export const selectItemPaddingVertical = 2;
export const selectItemPaddingHorizontal = 5;
export const selectItemFontSize = 13;
export const selectItemColor = '#08c'; // pale blue
export const selectItemBg = '#f2f9fc';
export const selectItemBorderColor = darken(0.1, selectItemBg);
export const selectItemHoverColor = darken(0.05, selectItemColor); // pale blue
export const selectItemHoverBg = darken(0.05, selectItemBg);
export const selectItemDisabledColor = '#888';
export const selectItemDisabledBg = '#f2f2f2';
export const selectItemDisabledBorderColor = darken(0.1, selectItemDisabledBg);
