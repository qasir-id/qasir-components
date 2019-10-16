import styled from 'styled-components';

import * as v from '../../shared/constants/variables';
import * as ease from '../../shared/constants/easing';

export const Container = styled.div`
  border-radius: ${v.inputBorderRadiusLg}px;
  border: 1px solid ${v.inputBorderColor};
  transition: border 0.3s ${ease.easeInQuad};
  display: table;
  border-spacing: 0;
  border-collapse: separate;
  width: 100%;

  &[data-error] {
    border-color: ${v.stateRedText};

    label {
      color: ${v.stateRedText};
    }
  }
`;

export const InputTag = styled.input`
  font-size: ${v.FontSize.small}px;
  background: ${v.inputBg};
  padding: ${v.inputPaddingY}px ${v.inputPaddingX}px;
  width: 100%;
  border-radius: ${v.inputBorderRadiusLg}px;
  border: 0;
  transition: border 0.3s ${ease.easeInQuad};
  font-family: ${v.fontFamilyBase};
  position: relative;
  color: ${v.color.black};
  display: table-cell;

  &[type='password'] {
    letter-spacing: 5px;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus,
  &:active {
    border-color: ${v.inputBorderColor};
    outline: 0;

    & ~ label {
      top: -10px;
      font-size: 14px;
      /* color: #b0b2bb; */
      background: white;
      padding: 0 ${v.spacing.xs}px;
      left: ${v.spacing.xs}px;
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin: ${v.spacing.ml}px 0;
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
