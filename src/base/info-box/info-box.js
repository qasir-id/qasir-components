import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import * as v from '../../shared/constants/variables';
import * as c from '../../shared/constants/color';
import * as e from '../../shared/constants/easing';

import Text from '../text';
import Button from '../button';

export const INFO_BOX_VARIANT = {
  alert: 'alert',
  warning: 'warning',
  info: 'info',
  positive: 'positive'
};

class InfoBox extends PureComponent {
  getVariant(variant) {
    switch (variant) {
      case INFO_BOX_VARIANT.alert:
        return css`
          background: ${c.RedOrange05};
          border-left: 5px solid ${c.RedOrange50};
          &:hover {
            background: ${darken(0.04, c.RedOrange05)};
          }
          .label {
            color: ${c.RedOrange50};
          }
        `;
      case INFO_BOX_VARIANT.warning:
        return css`
          background: ${c.Yellow05};
          border-left: 5px solid ${c.Yellow50};
          &:hover {
            background: ${darken(0.04, c.Yellow05)};
          }
          .label {
            color: ${c.Yellow80};
          }
        `;
      case INFO_BOX_VARIANT.info:
        return css`
          background: ${c.Blue05};
          border-left: 5px solid ${c.Blue50};
          &:hover {
            background: ${darken(0.04, c.Blue05)};
          }
          .label {
            color: ${c.Blue50};
          }
        `;
      case INFO_BOX_VARIANT.positive:
        return css`
          background: ${c.Green05};
          border-left: 5px solid ${c.Green50};
          &:hover {
            background: ${darken(0.04, c.Green05)};
          }
          .label {
            color: ${c.Green50};
          }
        `;
      default:
        return false;
    }
  }

  handleClick = e => {
    const { onClick } = this.props;

    e.currentTarget.blur(); // Un-focus on click
    onClick && onClick(e);
  };

  render() {
    const { message, clickMessage, icon, variant } = this.props;
    const Wrapper = styled.div`
      padding-bottom: 12px;
      padding-left: 12px;
      padding-right: 12px;
      padding-top: 12px;
      box-shadow: 0px 0px 11px -4px rgba(0, 0, 0, 0.26);
      transition: all 0.5s ${e.easeInOutCubic};
      ${this.getVariant(variant)};
    `;

    const LeftWrapper = styled.div`
      display: inline-block;
      vertical-align: top;
      width: 24px;
      margin-right: ${v.spacing.xs}px;
    `;

    const RightWrapper = styled.div`
      display: inline-block;
      width: calc(100% - 40px);
    `;
    return (
      <Wrapper>
        {icon && <LeftWrapper>{icon}</LeftWrapper>}
        <RightWrapper>
          <Text tag="div" className="label">
            {message}
          </Text>
          {clickMessage && (
            <Button
              style={{ padding: 0, marginTop: v.spacing.xs }}
              variant="text"
              onClick={this.handleClick}
              tag="div"
              className="label"
            >
              {clickMessage}
            </Button>
          )}
        </RightWrapper>
      </Wrapper>
    );
  }
}

InfoBox.propTypes = {
  /**
   * Message of Infobox, should be title
   */
  message: PropTypes.string,
  /**
   * Dont fill if you want hide this props
   */
  clickMessage: PropTypes.string,
  /**
   * Variant of infobox, Must be one of these: `alert`,`warning`,`info`,`positive`.
   */
  variant: PropTypes.PropTypes.oneOf(
    Object.keys(INFO_BOX_VARIANT).map(type => INFO_BOX_VARIANT[type])
  ),
  /**
   * This is onClick function for `clickMessage` props
   */
  onClick: PropTypes.func,
  /**
   * Dont fill if you want hide this props
   */
  icon: PropTypes.node
};

InfoBox.defaultProps = {
  message: undefined,
  clickMessage: undefined,
  variant: undefined,
  onClick: () => {},
  icon: undefined
};

export default InfoBox;
