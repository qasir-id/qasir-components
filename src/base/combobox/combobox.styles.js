import styled from 'styled-components';

import * as v from '../../shared/constants/variables';
import * as ease from '../../shared/constants/easing';
import * as c from '../../shared/constants/color';

import Checked from './assets/img/CheckCircle.png';
import Checked2x from './assets/img/CheckCircle@2x.png';

export const Combo = styled.div`
  position: relative;
  .qui {
    position: absolute;
    width: 100%;
    z-index: 9999;
    margin-top: -10px;
    padding: ${v.spacing.s}px;
        box-shadow: ${v.elevation4};
        border-radius: ${v.borderRadiusLg}px;
        background: ${c.LightPrimary};

    &__search {
      display: block;
      background: ${c.LightPrimary};
      padding: ${v.inputPaddingY}px ${v.inputPaddingX}px;
      width: 100%;
      border-radius: ${v.inputBorderRadiusLg}px;
      border: 1px solid ${v.inputBorderColor};
      transition: border 0.3s ${ease.easeInQuad};
      font-family: ${v.fontFamilyBase};
      font-size: ${v.FontSize.small}px;
      color: ${c.DarkPrimary};
      -webkit-appearance: textfield;

      &:focus {
          outline: 0;
      }

      &:-webkit-input-placeholder { /* Edge */
        /* color: white; */
        }

        &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        /* color: white; */
        }

        &::placeholder {
        /* color: white; */
        }
    }

    &__select {
        margin-top: ${v.spacing.xs}px;
        /* height: 240px; */
        overflow-x: scroll;
        
        
        &--display {
            display: block;
            /* z-index: 9999; */
        }
    }

    &__options {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__option {
      padding: ${v.spacing.s}px ${v.spacing.m}px;
      font-size: ${v.FontSize.small}px;
      color: ${c.DarkPrimary};
      background: ${c.LightPrimary};
      transition: all 0.3s ${ease.easeInOutSine};
      cursor: pointer;
      position: relative;
      display: table;
      width: 100%;

      &:hover {
        background: #fbfbfb;
      }

      &:last-child {
        padding-bottom: 0;
      }

      &:after {
        content: '';
        background-image: url(${Checked});
        background-size: 24px;
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        display: table-cell;
        opacity: 0;
    
        @media (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi) { 
            background-image: url(${Checked2x});
        }
      }

      &--selected {
        &:after {
          opacity: 1;
        }
      }
    }

    &__group {
      /* margin-top: ${v.spacing.s}px; */
      &-header {
        padding: ${v.spacing.s}px ${v.spacing.m}px;
        text-transform: uppercase;
        font-weight: ${v.fontWeightBold};
        font-size: ${v.FontSize.small}px;
        color: ${c.DarkNeutral};
        letter-spacing: 1px;
      }
    }

    &__out {
        display: none;
    }
  }

  .qui--focus {
      .qui__search {
        &:-webkit-input-placeholder { /* Edge */
        color: inherit;
        }

        &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: inherit;
        }

        &::placeholder {
        color: inherit;
        }
      }
  }
`;

export const Label = styled.label`
  color: #757575;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: ${v.spacing.m}px;
  top: ${v.spacing.s + 2}px;
  transition: 300ms ease all;
  font-size: ${v.FontSize.small}px;

  &[data-active='true'] {
    top: -10px;
    font-size: 14px;
    color: #b0b2bb;
    background: white;
    padding: 0 ${v.spacing.xs}px;
    left: ${v.spacing.xs}px;
  }
`;
