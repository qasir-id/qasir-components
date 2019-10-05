import { rgba } from 'polished';
import { css, keyframes } from 'styled-components';
import * as v from './variables';

export const fontSubpixelRaw = {
  fontSmoothing: 'subpixel-antialiased',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'subpixel-antialiased',
  MozFontSmoothing: 'subpixel-antialiased',
  OFontSmoothing: 'subpixel-antialiased',
};
export const fontAntialiasedRaw = {
  fontSmoothing: 'antialiased',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  OFontSmoothing: 'antialiased',
};
export const tabFocusRaw = {
  outline: '5px auto -webkit-focus-ring-color',
  outlineOffset: -2,
};

export const fontSubpixel = css(fontSubpixelRaw);

export const fontAntialiased = css(fontAntialiasedRaw);

export const hoverFocus = content => css`
  &:focus,
  &:hover {
    ${content};
  }
`;

export const tabFocus = css(tabFocusRaw);

export const borderTopRadius = (radius = v.borderRadius) => css`
  border-top-right-radius: ${radius}px;
  border-top-left-radius: ${radius}px;
`;

export const borderRightRadius = (radius = v.borderRadius) => css`
  border-bottom-right-radius: ${radius}px;
  border-top-right-radius: ${radius}px;
`;

export const borderBottomRadius = (radius = v.borderRadius) => css`
  border-bottom-right-radius: ${radius}px;
  border-bottom-left-radius: ${radius}px;
`;

export const borderLeftRadius = (radius = v.borderRadius) => css`
  border-bottom-left-radius: ${radius}px;
  border-top-left-radius: ${radius}px;
`;

export const resetFilter = css`
  filter: 'progid:DXImageTransform.Microsoft.gradient(enabled = false)';
`;

export const linkUnderline = (linkHoverColor = v.linkHoverColor) => css`
  /* Horizontal */
  /* https://stackoverflow.com/a/18064496 */
  background: linear-gradient(to right, ${linkHoverColor} 33%, ${rgba(v.white, 0)} 0%) repeat-x
    bottom;
  background-size: 3px 1px;
`;

export const dontBreakOut = css`
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;
  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

export const pulseKeyframes = (boxShadowWidth = 10) => keyframes`
  0% {
    box-shadow: 0 0 0 0 ${rgba(v.extranetGreen, 0.6)};
  }
  
  70% {
    box-shadow: 0 0 0 ${boxShadowWidth}px ${rgba(v.extranetGreen, 0)};
  }
  
  100% {
    box-shadow: 0 0 0 0 ${rgba(v.extranetGreen, 0)};
  }
`;
