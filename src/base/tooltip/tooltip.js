import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const TOOLTIP_POSITION = {
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom'
};

class Tooltip extends PureComponent {
  getVariant(position) {
    switch (position) {
      case TOOLTIP_POSITION.right:
        return css`
          top: -10px;
          left: 105%;
          &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 100%;
            margin-top: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent black transparent transparent;
          }
        `;
      case TOOLTIP_POSITION.left:
        return css`
          top: -10px;
          bottom: auto;
          right: 105%;
          &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 100%;
            margin-top: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent transparent black;
          }
        `;
      case TOOLTIP_POSITION.top:
        return css`
          bottom: 125%;
          left: 0%;
          /* margin-left: -60px; */
          &::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: black transparent transparent transparent;
          }
        `;
      case TOOLTIP_POSITION.bottom:
        return css`
          top: 100%;
          left: 65%;
          margin-left: -60px;
          &::after {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent black transparent;
          }
        `;
      default:
        return false;
    }
  }

  render() {
    const { text, textTooltip, position, ...props } = this.props;
    const Tooltiptext = styled.div`
      display: none;
      z-index: -1;
      position: absolute;
      transition: left 300ms;
      top: calc(0% - 53px);
      height: 50px;
      border: 1px solid #fff;
      z-index: 1;
      padding: 0 10px;
      ${this.getVariant(position)}
    `;
    const TooltipContainer = styled.div`
      position: relative;
      cursor: pointer;
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
      }
      &:hover > ${Tooltiptext} {
        display: block;
        z-index: 1;
        font-size: 12px;
        background: black;
        width: 100%;
      }
      &:hover {
        color: ${darken(0.1, '#EDECF3')};
        transition: all 200ms;
      }
    `;
    const Tooltip = styled.div`
      user-select: none;
      z-index: 9;
      color: black;
      font-size: 22px;
      letter-spacing: 2px;
      line-height: 32px;
    `;
    return (
      <TooltipContainer {...props}>
        <Tooltip>{text}</Tooltip>
        <Tooltiptext>{textTooltip}</Tooltiptext>
      </TooltipContainer>
    );
  }
}

Tooltip.propTypes = {
  /**
   * Content of tooltip, can be string or number
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
  /**
   * Content of tooltip, can be string or number
   */
  textTooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Status of tooltip, Must be one of these: `alert`,`warning` or `positive`.
   */
  position: PropTypes.oneOf(
    Object.keys(TOOLTIP_POSITION).map(type => TOOLTIP_POSITION[type])
  )
};

Tooltip.defaultProps = {
  text: undefined,
  textTooltip: undefined,
  position: 'right'
};

export default Tooltip;
