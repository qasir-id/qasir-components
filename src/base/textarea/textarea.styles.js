import styled from 'styled-components';

import * as v from '../../shared/constants/variables';
import * as c from '../../shared/constants/color';
import * as ease from '../../shared/constants/easing';

export const Container = styled.div`
  border-radius: ${v.inputBorderRadiusLg}px;
  border: 1px solid ${v.inputBorderColor};
  transition: border 0.3s ${ease.easeInQuad};
  display: table;
  border-spacing: 0;
  border-collapse: separate;
  width: 100%;
  position: relative;

  &[data-error] {
    border-color: ${v.stateRedText};

    label,
    .label {
      color: ${v.stateRedText};
    }
  }
`;

export const Field = styled.textarea`
  width: 100%;
  font-size: ${v.FontSize.small}px;
  background: ${v.inputBg};
  padding: ${v.inputPaddingY}px ${v.inputPaddingX}px;
  border-radius: ${v.inputBorderRadiusLg}px;
  width: 100%;
  border: 0;
  font-family: ${v.fontFamilyBase};
  position: relative;
  color: ${c.DarkPrimary};
  outline: 0;
  resize: vertical;

  &:disabled {
    background: ${c.LightSecondary};
    opacity: 0.5;
  }

  &:focus ~ label,
  :not(:placeholder-shown) ~ label {
    top: -10px;
    font-size: 14px;
    color: #b0b2bb;
    background: white;
    padding: 0 ${v.spacing.xs}px;
    left: ${v.spacing.xs}px;
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

export const ErrorLabel = styled.span`
  color: ${v.stateRedText};
  font-family: ${v.fontFamilyBase};
  display: block;
  font-size: ${v.FontSize.tiny};
`;
