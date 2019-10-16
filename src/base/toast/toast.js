import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';

import * as Style from './toast.styles';
import * as v from '../../shared/constants/variables';
import * as c from '../../shared/constants/color';

export const TOAST_VARIANT = {
  success: 'success',
  warning: 'warning',
  danger: 'danger'
};

class Toast extends PureComponent {
  // Variant Style
  getVariant(variant) {
    switch (variant) {
      case TOAST_VARIANT.success:
        return css`
          background: ${c.color.GreenPrimary};
        `;
      case TOAST_VARIANT.warning:
        return css`
          background: ${c.color.OrangePrimary};
        `;
      case TOAST_VARIANT.danger:
        return css`
          background: ${c.color.RedSecondary};
        `;
      default:
        return false;
    }
  }

  render() {
    const { children, className, variant, open, ...props } = this.props;

    const Container = styled.div`
      display: inline-block;
      padding: ${v.spacing.s}px ${v.spacing.m}px;
      color: ${v.color.white};
      border-radius: ${v.borderRadiusLg}px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.24);
      ${this.getVariant(variant)};
    `;

    return (
      <Style.Wrapper className={className} {...props}>
        <TransitionGroup>
          {open && (
            <CSSTransition timeout={300} classNames="anim">
              <Container>{children}</Container>
            </CSSTransition>
          )}
        </TransitionGroup>
      </Style.Wrapper>
    );
  }
}

Toast.propTypes = {
  /**
   * A prop that should not be visible in the documentation.
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Variant of the toast. Must be one of these: `success`, `warning`, or `alert`.
   */
  variant: PropTypes.oneOf(
    Object.keys(TOAST_VARIANT).map(type => TOAST_VARIANT[type])
  ),
  /**
   * Set toast active or not
   */
  open: PropTypes.bool
};

Toast.defaultProps = {
  className: undefined,
  children: undefined,
  variant: 'success',
  open: false
};

export default Toast;
