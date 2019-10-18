import styled from 'styled-components';
import * as c from '../../shared/constants/color';
import * as v from '../../shared/constants/variables';
import * as easing from '../../shared/constants/easing';

export const Wrapper = styled.div`
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    visibility: visible;
    white-space: nowrap;
    visibility: inherit;

    &:checked + .label {
      .radio {
        border: 2px solid ${c.color.RedPrimary};
        background: ${c.color.RedPrimary};
        &:before {
          content: '';
          border: 2px solid ${c.color.RedPrimary};
          background: ${c.color.LightPrimary};
          transform: scale(1);
        }
      }
    }

    &:disabled + .label {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const Label = styled.label`
  margin: 0 0 ${v.spacing.s}px;
  cursor: pointer;
  display: block;
`;

export const Radio = styled.span`
  background-color: transparent;
  border-radius: 24px;
  border: 2px solid ${c.color.DarkSecondary};
  height: 24px;
  width: 24px;
  margin-right: 12px;
  transition: all 0.2s ${easing.easeInOutQuad};

  display: inline-block;
  vertical-align: top;
  position: relative;

  &:before {
    content: '';
    border: 2px solid transparent;
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: transparent;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transition: all 0.2s ${easing.easeInOutQuad};
    transform: scale(0);
  }
`;

export const LabelContent = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: calc(100% - 40px);
`;
