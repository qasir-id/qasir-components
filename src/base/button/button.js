import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import classnames from 'classnames';

import * as v from '../../shared/constants/variables';
import * as c from '../../shared/constants/color';
import Loader, { LOADER_COLOR } from '../loader/loader';

export const BUTTON_VARIANT = {
  primary: 'primary',
  secondary: 'secondary',
  'outline-primary': 'outline-primary',
  'outline-secondary': 'outline-secondary',
  'outline-teritary': 'outline-teritary',
  text: 'text'
};

export const BUTTON_SIZE = {
  small: 'small',
  medium: 'medium',
  normal: 'normal',
  large: 'large'
};

class Button extends Component {
  static propTypes = {
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
     * Variant of the button. Must be one of these: `primary`, `secondary`, `text-button`, or `disabled`.
     */
    variant: PropTypes.oneOf(
      Object.keys(BUTTON_VARIANT).map((type) => BUTTON_VARIANT[type])
    ),
    /**
     * Size of the button.  Must be one of these: `small`, `medium`, `normal`, or `large`.
     */
    size: PropTypes.oneOf(
      Object.keys(BUTTON_SIZE).map((type) => BUTTON_SIZE[type])
    ),
    /**
     * Set the button for blocking option
     */
    isBlock: PropTypes.bool,
    /**
     * A prop that should not be visible in the documentation.
     * @ignore
     */
    onClick: PropTypes.func,
    /**
     * HTML tag of the button.
     */
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /**
     * Controls whether the button is disabled or not.
     */
    isDisabled: PropTypes.bool,
    /**
     * Controls whether the button is on loading state or not.
     */
    isLoading: PropTypes.bool
  };

  static defaultProps = {
    tag: 'button',
    isBlock: false,
    variant: 'primary'
  };

  getVariant(variant) {
    switch (variant) {
      case BUTTON_VARIANT.primary:
        return css`
          background: ${c.color.RedPrimary};
          color: ${c.color.LightPrimary};
          border-color: ${c.color.RedPrimary};
          &:hover {
            background: ${darken(0.1, c.color.RedPrimary)};
          }
        `;
      case BUTTON_VARIANT.secondary:
        return css`
          background: ${c.color.DarkSecondary};
          color: ${c.color.DarkPrimary};
          border-color: ${c.color.DarkSecondary};
          &:hover {
            background: ${darken(0.1, c.color.DarkSecondary)};
          }
        `;
      case BUTTON_VARIANT['outline-primary']:
        return css`
          background: transparent;
          color: ${c.color.RedPrimary};
          border-color: ${c.color.RedPrimary};
          &:hover {
            background: ${c.color.RedPrimary};
            color: ${c.color.LightPrimary};
          }
        `;
      case BUTTON_VARIANT['outline-secondary']:
        return css`
          background: transparent;
          color: ${c.color.DarkPrimary};
          border-color: ${c.color.DarkPrimary};
          &:hover {
            background: ${c.color.DarkSecondary};
            color: ${c.color.DarkPrimary};
            border-color: ${c.color.DarkSecondary};
          }
        `;
      case BUTTON_VARIANT['outline-teritary']:
        return css`
          background: transparent;
          color: ${c.color.RedPrimary};
          border-color: ${c.color.DarkSecondary};
          &:hover {
            background: ${c.color.DarkSecondary};
            color: ${c.color.RedPrimary};
            border-color: ${c.color.DarkSecondary};
          }
        `;
      case BUTTON_VARIANT.text:
        return css`
          color: ${c.color.DarkPrimary};
          border-color: transparent;
        `;
      default:
        return false;
    }
  }

  getSize(size) {
    switch (size) {
      case BUTTON_SIZE.small:
        return css`
          padding: ${v.spacing.xxs}px ${v.spacing.s}px;
        `;
      case BUTTON_SIZE.medium:
        return css`
          padding: ${v.spacing.xs}px ${v.spacing.s}px;
        `;
      case BUTTON_SIZE.large:
        return css`
          padding: ${v.spacing.m}px ${v.spacing.l}px;
        `;
      default:
        return css`
          padding: ${v.spacing.s}px ${v.spacing.m}px;
        `;
    }
  }

  handleClick = (e) => {
    const { isDisabled, onClick } = this.props;

    const btnDisabled = isDisabled;

    if (btnDisabled) {
      e.preventDefault();
      return;
    }

    e.currentTarget.blur(); // Un-focus on click
    onClick && onClick(e);
  };

  render() {
    const {
      children,
      className,
      variant,
      size,
      isBlock,
      onClick,
      isDisabled,
      isLoading,
      tag: Tag,
      ...props
    } = this.props;

    // base styles
    const TagName = styled(Tag)`
      font-family: inherit;
      font-weight: ${v.fontWeightMedium};
      -webkit-appearance: none;
      text-decoration: none;
      border: 0;
      box-shadow: none;
      font-size: ${v.FontSize.small}px;
      border-width: 1px;
      border-style: solid;
      cursor: pointer;
      border-radius: ${v.borderRadiusLg}px;
      transition: all 0.3s ease-in-out;
      position: relative;

      ${this.getVariant(variant)};
      ${this.getSize(size)};

      &:focus,
      &:active {
        outline: 0;
      }

      &.blocking {
        width: 100%;
        display: block;
      }

      &:disabled {
        background: ${c.color.DarkSecondary};
        border-color: ${c.color.DarkSecondary};
        color: ${c.color.LightPrimary};
        cursor: not-allowed;
      }

      .loader {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0;
        right: 0;
      }
    `;

    const btnVariant = variant;

    // Loader color
    let loaderColor;
    switch (btnVariant) {
      case BUTTON_VARIANT.primary:
        loaderColor = LOADER_COLOR.WHITE;
        break;
      case BUTTON_VARIANT.secondary:
      case BUTTON_VARIANT['outline-primary']:
      case BUTTON_VARIANT['outline-teritary']:
        loaderColor = LOADER_COLOR.RED;
        break;
      case BUTTON_VARIANT['outline-secondary']:
      case BUTTON_VARIANT.text:
        loaderColor = LOADER_COLOR.GRAY;
        break;
      default:
    }

    const loaderAttr = {
      color: loaderColor,
      size: 'sm'
    };

    return (
      <TagName
        {...props}
        className={classnames(className, isBlock ? 'blocking' : undefined)}
        disabled={isDisabled}
        onClick={this.handleClick}
      >
        {isLoading && (
          <div>
            <span className={'loader'}>
              <Loader {...loaderAttr} />
            </span>
            <span style={{ opacity: 0 }}>{children}</span>
          </div>
        )}
        {!isLoading && children}
      </TagName>
    );
  }
}

export default Button;
