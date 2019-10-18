import styled from 'styled-components';
import * as v from '../../shared/constants/variables';
import * as c from '../../shared/constants/color';

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${v.spacing.s}px;
  display: block;

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

    &:checked + .label > .switch {
      &:before {
        background-color: ${c.color.RedPrimary};
      }

      &:after {
        transform: translateX(20px);
        box-shadow: none;
      }

      .toggle-left {
          visibility: hidden;
      }

      .toggle-right {
          visibility: visible;
      }
    }
  }
`;

export const Label = styled.label`
  color: ${c.color.DarkPrimary};
  cursor: pointer;
`;

export const Switch = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: center;
  width: 45px;
  height: 24px;
  margin: 0.5rem 0;
  cursor: pointer;

  &:before {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    display: block;
    width: 45px;
    height: 24px;
    border-radius: 0.9375rem;
    content: '';
    background-color: ${c.color.LightSecondary};
    will-change: box-shadow;
    box-shadow: 0 0 0 1px transparent, 0 0 0 3px transparent;
    transition: box-shadow 70ms cubic-bezier(0.2, 0, 1, 0.9),
      background-color 70ms cubic-bezier(0.2, 0, 1, 0.9);
  }

  &:after {
    box-sizing: border-box;
    position: absolute;
    top: 0.1875rem;
    left: 0.1875rem;
    display: block;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 50%;
    background-color: ${c.color.LightPrimary};
    content: '';
    transition: -webkit-transform 70ms cubic-bezier(0.2, 0, 1, 0.9);
    transition: transform 70ms cubic-bezier(0.2, 0, 1, 0.9);
    transition: transform 70ms cubic-bezier(0.2, 0, 1, 0.9),
      -webkit-transform 70ms cubic-bezier(0.2, 0, 1, 0.9);
    box-shadow: 0px 2px 7px #b0bac5;
  }
`;

export const LabelSpan = styled.span`
  position: absolute;
  margin-left: 3.5rem;
  font-size: ${v.FontSize.small}px;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: 0.16px;
  user-select: none;
  top: 2px;

  &.toggle-left {
      visibility: visible;
  }
  
  &.toggle-right {
      visibility: hidden;
  }
`;
