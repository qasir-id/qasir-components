import styled from 'styled-components';
import * as c from '../../shared/constants/color';
import * as v from '../../shared/constants/variables';
import * as easing from '../../shared/constants/easing';

export const Wrapper = styled.div`
  margin-bottom: ${v.spacing.s}px;
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

    &:disabled + .label {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:checked + .label {
      .box {
        background-color: ${c.color.RedPrimary};
        border-color: ${c.color.RedPrimary};
        border-width: 1px;
      }

      .box:after {
        transform: rotate(-45deg);
        opacity: 1;
      }
    }
    &:indeterminate + .label .box,
    label[data-contained-checkbox-state='true'] .box,
    label[data-contained-checkbox-state='mixed'] .box {
      background-color: ${c.color.RedPrimary};
      border-color: ${c.color.RedPrimary};
      border-width: 1px;
    }

    &:indeterminate + .label .box:after,
    label[data-contained-checkbox-state='true'] .box:after,
    label[data-contained-checkbox-state='mixed'] .box:after {
      width: 0.5rem;
      height: 0;
      top: 2px;
      bottom: 0;
      transform: scale(1) rotate(0deg);
    }
  }

  &[data-error] {
    label {
      &:before {
        border-color: ${c.RedPrimary};
      }
    }
  }
`;

export const Label = styled.label`
  font-weight: 400;
  position: relative;
  cursor: pointer;
  min-height: 1.5rem;
  user-select: none;
`;

export const LabelContent = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 40px);
`;

export const Box = styled.div`
  background-color: transparent;
  border-radius: ${v.borderRadiusLg}px;
  border: 2px solid ${c.color.DarkSecondary};
  height: 24px;
  width: 24px;
  margin-right: 12px;
  transition: all 0.2s ${easing.easeInOutQuad};
  display: inline-block;
  vertical-align: middle;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 0;
    width: 10px;
    height: 5px;
    background: none;
    border-left: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    transform: rotate(-45deg);
    transform-origin: bottom right;
    display: inline-block;
    opacity: 0;
    transition: all 0.2s ${easing.easeInOutQuad};
  }
`;
