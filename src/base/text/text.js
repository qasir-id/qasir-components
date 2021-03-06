import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as v from '../../shared/constants/variables';
import * as c from '../../shared/constants/color';

export const TEXT_COLOR = {
  alert: 'alert',
  warning: 'warning',
  success: 'success',
  primary: 'primary',
  secondary: 'secondary',
  neutral: 'neutral',
  muted: 'muted',
  highlight: 'highlight'
};

export const TEXT_DECORATION = {
  underline: 'underline',
  'line-trough': 'line-through'
};

export const TEXT_WEIGHT = {
  normal: 'normal',
  medium: 'medium',
  bold: 'bold'
};

export const TEXT_VARIANT = {
  hero: 'hero',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  'ui-large': 'ui-large',
  'ui-baseline': 'ui-baseline',
  'ui-small': 'ui-small',
  'ui-tiny': 'ui-tiny',
  'ui-micro': 'ui-micro'
};

/**
 * A component for displaying text.
 */
class Text extends Component {
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
     * Color of the text. Must be one of these: `alert`,`warning`,`success`,`primary`,`secondary`,`neutral`,`muted` or `highlight`
     */
    color: PropTypes.oneOf(
      Object.keys(TEXT_COLOR).map(type => TEXT_COLOR[type])
    ),
    /**
     * Specifies the appearance of decorative lines. The value is either `underline` or `line-through`.
     */
    decoration: PropTypes.oneOf(
      Object.keys(TEXT_DECORATION).map(type => TEXT_DECORATION[type])
    ),
    /**
     * Set the text to italic.
     */
    isItalic: PropTypes.bool,
    /**
     * A prop that should not be visible in the documentation.
     * @ignore
     */
    onClick: PropTypes.func,
    /**
     * Variant of the text, Must be one of these: `hero`, `h1`, `h2`, `h3`, `h3`, `h4`, `h5`, `ui-large`, `ui-baseline`, `ui-small`, `ui-tiny`, `caption-tiny`, or `caption-micro`.
     */
    variant: PropTypes.oneOf(
      Object.keys(TEXT_VARIANT).map(type => TEXT_VARIANT[type])
    ),
    /**
     * HTML tag of the text.
     */
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /**
     * Weight to the text. The value is either `medium` or `bold`.
     */
    weight: PropTypes.oneOf(
      Object.keys(TEXT_WEIGHT).map(type => TEXT_WEIGHT[type])
    )
  };

  static defaultProps = {
    tag: 'span',
    color: 'primary'
  };

  getColorClassName(color) {
    const mixin = color => css`
      color: ${color};
    `;

    switch (color) {
      case TEXT_COLOR.primary:
        return mixin(c.color.DarkPrimary);
      case TEXT_COLOR.success:
        return mixin(c.color.GreenPrimary);
      case TEXT_COLOR.alert:
        return mixin(c.color.RedSecondary);
      case TEXT_COLOR.warning:
        return mixin(c.color.YellowPrimary);
      case TEXT_COLOR.secondary:
        return mixin(c.color.DarkSecondary);
      case TEXT_COLOR.neutral:
        return mixin(c.color.DarkNeutral);
      case TEXT_COLOR.muted:
        return mixin(c.color.LightSecondary);
      case TEXT_COLOR.highlight:
        return mixin(c.color.RedPrimary);
      default:
        return mixin(c.color.DarkPrimary);
    }
  }

  getFontWeightClassName(weight) {
    const mixin = weight => css`
      font-weight: ${weight};
    `;

    switch (weight) {
      case TEXT_WEIGHT.normal:
        return mixin(v.fontWeightBase);
      case TEXT_WEIGHT.medium:
        return mixin(v.fontWeightMedium);
      case TEXT_WEIGHT.bold:
        return mixin(v.fontWeightBold);
      default:
        return false;
    }
  }

  getVariant(variant) {
    switch (variant) {
      case TEXT_VARIANT.hero:
        return css`
          font-size: ${v.FontSize.gigantic}px;
          font-weight: ${v.fontWeightBold};
        `;
      case TEXT_VARIANT.h1:
        return css`
          font-size: ${v.FontSize.H1}px;
          font-weight: ${v.fontWeightBold};
        `;
      case TEXT_VARIANT.h2:
        return css`
          font-size: ${v.FontSize.H2}px;
          font-weight: ${v.fontWeightBold};
        `;
      case TEXT_VARIANT.h3:
        return css`
          font-size: ${v.FontSize.H3}px;
          font-weight: ${v.fontWeightBold};
        `;
      case TEXT_VARIANT.h4:
        return css`
          font-size: ${v.FontSize.H4}px;
          font-weight: ${v.fontWeightBold};
        `;
      case TEXT_VARIANT.h5:
        return css`
          font-size: ${v.FontSize.H5}px;
          font-weight: ${v.fontWeightBold};
        `;
      case TEXT_VARIANT['ui-large']:
        return css`
          font-size: ${v.FontSize.large}px;
        `;
      case TEXT_VARIANT['ui-small']:
        return css`
          font-size: ${v.FontSize.small}px;
        `;
      case TEXT_VARIANT['ui-tiny']:
        return css`
          font-size: ${v.FontSize.tiny}px;
        `;
      case TEXT_VARIANT['ui-micro']:
        return css`
          font-size: ${v.FontSize.micro}px;
        `;
      default:
        return css`
          font-size: ${v.FontSize.medium}px;
        `;
    }
  }

  handleClick = e => {
    e.currentTarget.blur(); // Un-focus on click
  };

  render() {
    const {
      children,
      className,
      color,
      decoration,
      isItalic,
      variant,
      tag: Tag,
      weight,
      ...props
    } = this.props;

    // base styles
    const TagName = styled(Tag)`
      font-family: inherit;
      text-decoration: ${decoration};
      font-weight: ${v.fontWeightBase};
      ${this.getFontWeightClassName(weight)};
      ${this.getColorClassName(color)};
      ${this.getVariant(variant)};
      font-style: ${isItalic ? 'italic' : 'normal'};
    `;

    return (
      <TagName {...props} className={className} onClick={this.handleClick}>
        {children}
      </TagName>
    );
  }
}

export default Text;
