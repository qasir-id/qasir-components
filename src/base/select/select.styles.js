import styled from 'styled-components';

import * as v from '../../shared/constants/variables';
import * as ease from '../../shared/constants/easing';

export const Wrapper = styled.div`
  margin: ${v.spacing.ml}px 0;
`;

export const Container = styled.div`
  border-radius: ${v.inputBorderRadiusLg}px;
  border: 1px solid ${v.inputBorderColor};
  transition: border 0.3s ${ease.easeInQuad};
  width: 100%;
  position: relative;

  &[data-error] {
    border-color: ${v.stateRedText};

    label {
      color: ${v.stateRedText};
    }
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    border-width: 7px;
    border-style: solid;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-color: ${v.color.black} transparent transparent;
    width: 0;
    height: 0;
    top: 5px;
    bottom: 0;
    margin: auto;
    right: 10px;
  }

  select {
    font-size: ${v.FontSize.small}px;
    background: ${v.inputBg};
    height: 44px;
    width: 100%;
    border: 0;
    font-family: ${v.fontFamilyBase};
    position: relative;
    color: ${v.color.black};
    padding: ${v.inputPaddingY}px ${v.inputPaddingX}px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus,
    &:active {
      outline: 0;
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
  z-index: 5;

  &[data-active='true'] {
    top: -10px;
    font-size: 14px;
    color: #b0b2bb;
    background: white;
    padding: 0 ${v.spacing.xs}px;
    left: ${v.spacing.xs}px;
  }
`;

export const ErrorLabel = styled.span`
  color: ${v.stateRedText};
  font-family: ${v.fontFamilyBase};
  display: block;
  font-size: ${v.FontSize.tiny};
`;

export const Pref = styled.span`
  display: table-cell;
  font-size: ${v.FontSize.small}px;
  font-family: ${v.fontFamilyBase};
  padding-left: ${v.inputPaddingX}px;
  padding-right: ${v.spacing.xs}px;
  color: ${v.color.black};
  width: 1px;
  vertical-align: middle;
`;

export const Suff = styled.span`
  display: table-cell;
  font-size: ${v.FontSize.small}px;
  font-family: ${v.fontFamilyBase};
  padding-right: ${v.inputPaddingX}px;
  padding-left: ${v.spacing.xs}px;
  color: ${v.color.black};
  width: 1px;
  vertical-align: middle;
`;
