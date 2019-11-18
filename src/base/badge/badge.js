import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import * as c from '../../shared/constants/color';
import * as v from '../../shared/constants/variables';

export const BADGE_VARIANT = {
  alert: 'alert',
  positive: 'positive',
  warning: 'warning',
  discount: 'discount'
};

class Badge extends PureComponent {
  getStatus(status) {
    switch (status) {
      case BADGE_VARIANT.alert:
        return css`
          background: ${c.RedPrimary};
          color: ${c.LightPrimary};
        `;
      case BADGE_VARIANT.positive:
        return css`
          background: ${c.GreenPrimary1};
          color: ${c.LightPrimary};
        `;
      case BADGE_VARIANT.warning:
        return css`
          background: ${c.YellowPrimary};
        `;
      case BADGE_VARIANT.discount:
        return css`
          color: ${c.LightPrimary};
          background: ${c.OrangePrimary};
        `;
      default:
        return false;
    }
  }

  render() {
    const { content, status, isFloating, ...props } = this.props;
    const multipleWord = Object.keys(content).length > 0 ? 'multiple-word' : undefined;

    const StyledBadge = styled.div`
      margin: 0;
      display: inline-block;
      font-size: ${v.FontSize.tiny}px;
      min-width: 20px;
      height: 20px;
      line-height: 20px;
      white-space: nowrap;
      padding: 0 6px;
      border-radius: 10px;
      box-shadow: 0 0 0 2px ${c.LightPrimary};
      ${this.getStatus(status)}

      &.multiple-word {
        padding: 0 ${v.spacing.xs}px;
      }
    `;

    const BadgeContainer = styled.div`
      position: relative;
      z-index: 10;

      &.floating {
        position: absolute;
        right: -${v.spacing.xs}px;
        top: -${v.spacing.xs}px;
      }
    `;

    return (
      <BadgeContainer
        className={isFloating ? 'floating' : undefined}
        {...props}
      >
        <StyledBadge className={multipleWord}>{content}</StyledBadge>
      </BadgeContainer>
    );
  }
}

Badge.propTypes = {
  /**
   * Content of badge, can be string or number
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Status of badge, Must be one of these: `alert`,`warning` or `positive`.
   */
  status: PropTypes.oneOf(
    Object.keys(BADGE_VARIANT).map(type => BADGE_VARIANT[type])
  ),
  /**
   * Specify badge floating position
   */
  isFloating: PropTypes.bool
};

Badge.defaultProps = {
  content: undefined,
  status: 'alert',
  isFloating: false
};

export default Badge;
