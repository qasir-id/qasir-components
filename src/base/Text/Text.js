/** @jsx jsx */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { jsx, css } from "@emotion/core";
import * as v from "../../shared/constants/variables";

export const TEXT_COLOR = {
  red: "red",
  black: "black",
  white: "white",
  orange: "orange",
  green: "green",
  blue: "blue",
  grey: "grey"
};

export const TEXT_DECORATION = {
  underline: "underline",
  "line-trough": "line-through"
};

export const TEXT_WEIGHT = {
  normal: "normal",
  medium: "medium",
  bold: "bold"
};

export const TEXT_VARIANT = {
  hero: "hero",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  "ui-large": "ui-large",
  "ui-baseline": "ui-baseline",
  "ui-small": "ui-small",
  "ui-tiny": "ui-tiny",
  "ui-micro": "ui-micro"
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
     * Color of the text. Must be one of these: `red`, `black`, `white`, `orange`, `green`, `blue`, or `grey`.
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
     * Set the text to disabled state.
     */
    isDisabled: PropTypes.bool,
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
    tag: "span"
  };

  getColorClassName(color) {
    const mixin = color => css`
      color: ${color};
    `;

    switch (color) {
      case TEXT_COLOR.black:
        return mixin(v.black);
      case TEXT_COLOR.blue:
        return mixin(v.blue);
      case TEXT_COLOR.green:
        return mixin(v.green);
      case TEXT_COLOR.grey:
        return mixin(v.grey);
      case TEXT_COLOR.orange:
        return mixin(v.orange);
      case TEXT_COLOR.red:
        return mixin(v.red);
      case TEXT_COLOR.white:
        return mixin(v.white);
      default:
        return false;
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
          font-size: ${v.fontSizegigantic}px;
          font-weight: ${v.fontWeightBold};
        `;
      case TEXT_VARIANT.h1:
        return css`
          font-size: ${v.fontSizeH1}px;
          font-weight: ${v.fontWeightBold};
        `;
      case TEXT_VARIANT.h2:
        return css`
          font-size: ${v.fontSizeH2}px;
          font-weight: ${v.fontWeightBold};
        `;
      case TEXT_VARIANT.h3:
        return css`
          font-size: ${v.fontSizeH3}px;
          font-weight: ${v.fontWeightBold};
        `;
      case TEXT_VARIANT.h4:
        return css`
          font-size: ${v.fontSizeH4}px;
          font-weight: ${v.fontWeightBold};
        `;
      case TEXT_VARIANT.h5:
        return css`
          font-size: ${v.fontSizeH5}px;
          font-weight: ${v.fontWeightBold};
        `;
      case TEXT_VARIANT["ui-large"]:
        return css`
          font-size: ${v.fontSizelarge}px;
        `;
      case TEXT_VARIANT["ui-small"]:
        return css`
          font-size: ${v.fontSizeSmall}px;
        `;
      case TEXT_VARIANT["ui-tiny"]:
        return css`
          font-size: ${v.fontSizetiny}px;
        `;
      case TEXT_VARIANT["ui-micro"]:
        return css`
          font-size: ${v.fontSizemicro}px;
        `;
      default:
        return css`
          font-size: ${v.fontSizeBase}px;
        `;
    }
  }

  handleClick = e => {
    const { isDisabled, onClick } = this.props;

    if (isDisabled) {
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
      color,
      decoration,
      isDisabled,
      isItalic,
      variant,
      tag: Tag,
      weight,
      ...props
    } = this.props;

    // base styles
    const styles = css`
      font-family: ${v.fontFamilyBase};
      text-decoration: ${decoration};
      ${this.getFontWeightClassName(weight)};
      ${this.getColorClassName(color)};
      ${this.getVariant(variant)};
    `;

    if (isDisabled) {
      styles = css`
        ${styles};

        &,
        &:hover,
        &:focus {
          cursor: ${v.cursorDisabled};
          color: ${v.gray};
        }
      `;
    }

    // italic
    if (isItalic) {
      styles = css`
        ${styles};
        font-style: italic;
      `;
    }

    return (
      <Tag
        {...props}
        className={className}
        css={styles}
        onClick={this.handleClick}
      >
        {children}
      </Tag>
    );
  }
}

export default Text;
