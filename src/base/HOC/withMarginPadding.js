/* eslint-disable default-case */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import isBoolean from 'lodash/isBoolean';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import * as v from '../../shared/constants/variables';

const spacerSize = ['xs', 'sm', 'md', 'lg'];
const propTypes = {
  margin: PropTypes.oneOfType([PropTypes.oneOf(spacerSize), PropTypes.bool, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.oneOf(spacerSize), PropTypes.bool, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.oneOf(spacerSize), PropTypes.bool, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([
    PropTypes.oneOf(spacerSize),
    PropTypes.bool,
    PropTypes.number,
  ]),
  marginLeft: PropTypes.oneOfType([PropTypes.oneOf(spacerSize), PropTypes.bool, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.oneOf(spacerSize), PropTypes.bool, PropTypes.number]),
  paddingTop: PropTypes.oneOfType([PropTypes.oneOf(spacerSize), PropTypes.bool, PropTypes.number]),
  paddingRight: PropTypes.oneOfType([
    PropTypes.oneOf(spacerSize),
    PropTypes.bool,
    PropTypes.number,
  ]),
  paddingBottom: PropTypes.oneOfType([
    PropTypes.oneOf(spacerSize),
    PropTypes.bool,
    PropTypes.number,
  ]),
  paddingLeft: PropTypes.oneOfType([PropTypes.oneOf(spacerSize), PropTypes.bool, PropTypes.number]),
  style: PropTypes.object,
};

const withMarginPadding = WrappedComponent => {
  class Enhance extends Component {
    static displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    static propTypes = {
      ...propTypes,
      ...WrappedComponent.propTypes,
    };

    static defaultProps = {
      ...WrappedComponent.defaultProps,
    };

    wrappedInstance; // Expose wrapped component methods

    render() {
      const {
        className,
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        padding,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        style,
        ...props
      } = this.props;

      const newStyles = { ...style };
      const xs = 0.25;
      const sm = 0.5;
      const md = 1.5;
      const lg = 3;

      // Margin all
      if (!isNull(margin) || !isUndefined(margin)) {
        if (isBoolean(margin)) {
          newStyles.margin = margin === true ? v.spacing.spacer : 0;
        } else if (isNumber(margin)) {
          newStyles.margin = margin;
        } else if (isString(margin)) {
          switch (margin) {
            case 'xs':
              newStyles.margin = v.spacing.spacer * xs;
              break;
            case 'sm':
              newStyles.margin = v.spacing.spacer * sm;
              break;
            case 'md':
              newStyles.margin = v.spacing.spacer * md;
              break;
            case 'lg':
              newStyles.margin = v.spacing.spacer * lg;
              break;
          }
        }
      }

      // Margin top
      if (!isNull(marginTop) || !isUndefined(marginTop)) {
        if (isBoolean(marginTop)) {
          newStyles.marginTop = marginTop === true ? v.spacing.spacerY : 0;
        } else if (isNumber(marginTop)) {
          newStyles.marginTop = marginTop;
        } else if (isString(marginTop)) {
          switch (marginTop) {
            case 'xs':
              newStyles.marginTop = v.spacing.spacerY * xs;
              break;
            case 'sm':
              newStyles.marginTop = v.spacing.spacerY * sm;
              break;
            case 'md':
              newStyles.marginTop = v.spacing.spacerY * md;
              break;
            case 'lg':
              newStyles.marginTop = v.spacing.spacerY * lg;
              break;
          }
        }
      }

      // Margin right
      if (!isNull(marginRight) || !isUndefined(marginRight)) {
        if (isBoolean(marginRight)) {
          newStyles.marginRight = marginRight === true ? v.spacing.spacerX : 0;
        } else if (isNumber(marginRight)) {
          newStyles.marginRight = marginRight;
        } else if (isString(marginRight)) {
          switch (marginRight) {
            case 'xs':
              newStyles.marginRight = v.spacing.spacerX * xs;
              break;
            case 'sm':
              newStyles.marginRight = v.spacing.spacerX * sm;
              break;
            case 'md':
              newStyles.marginRight = v.spacing.spacerX * md;
              break;
            case 'lg':
              newStyles.marginRight = v.spacing.spacerX * lg;
              break;
          }
        }
      }

      // Margin bottom
      if (!isNull(marginBottom) || !isUndefined(marginBottom)) {
        if (isBoolean(marginBottom)) {
          newStyles.marginBottom = marginBottom === true ? v.spacing.spacerY : 0;
        } else if (isNumber(marginBottom)) {
          newStyles.marginBottom = marginBottom;
        } else if (isString(marginBottom)) {
          switch (marginBottom) {
            case 'xs':
              newStyles.marginBottom = v.spacing.spacerY * xs;
              break;
            case 'sm':
              newStyles.marginBottom = v.spacing.spacerY * sm;
              break;
            case 'md':
              newStyles.marginBottom = v.spacing.spacerY * md;
              break;
            case 'lg':
              newStyles.marginBottom = v.spacing.spacerY * lg;
              break;
          }
        }
      }

      // Margin left
      if (!isNull(marginLeft) || !isUndefined(marginLeft)) {
        if (isBoolean(marginLeft)) {
          newStyles.marginLeft = marginLeft === true ? v.spacing.spacerX : 0;
        } else if (isNumber(marginLeft)) {
          newStyles.marginLeft = marginLeft;
        } else if (isString(marginLeft)) {
          switch (marginLeft) {
            case 'xs':
              newStyles.marginLeft = v.spacing.spacerX * xs;
              break;
            case 'sm':
              newStyles.marginLeft = v.spacing.spacerX * sm;
              break;
            case 'md':
              newStyles.marginLeft = v.spacing.spacerX * md;
              break;
            case 'lg':
              newStyles.marginLeft = v.spacing.spacerX * lg;
              break;
          }
        }
      }

      // Padding all
      if (!isNull(padding) || !isUndefined(padding)) {
        if (isBoolean(padding)) {
          newStyles.padding = padding === true ? v.spacing.spacer : 0;
        } else if (isNumber(padding)) {
          newStyles.padding = padding;
        } else if (isString(padding)) {
          switch (padding) {
            case 'xs':
              newStyles.padding = v.spacing.spacer * xs;
              break;
            case 'sm':
              newStyles.padding = v.spacing.spacer * sm;
              break;
            case 'md':
              newStyles.padding = v.spacing.spacer * md;
              break;
            case 'lg':
              newStyles.padding = v.spacing.spacer * lg;
              break;
          }
        }
      }

      // Padding top
      if (!isNull(paddingTop) || !isUndefined(paddingTop)) {
        if (isBoolean(paddingTop)) {
          newStyles.paddingTop = paddingTop === true ? v.spacing.spacerY : 0;
        } else if (isNumber(paddingTop)) {
          newStyles.paddingTop = paddingTop;
        } else if (isString(paddingTop)) {
          switch (paddingTop) {
            case 'xs':
              newStyles.paddingTop = v.spacing.spacerY * xs;
              break;
            case 'sm':
              newStyles.paddingTop = v.spacing.spacerY * sm;
              break;
            case 'md':
              newStyles.paddingTop = v.spacing.spacerY * md;
              break;
            case 'lg':
              newStyles.paddingTop = v.spacing.spacerY * lg;
              break;
          }
        }
      }

      // Padding right
      if (!isNull(paddingRight) || !isUndefined(paddingRight)) {
        if (isBoolean(paddingRight)) {
          newStyles.paddingRight = paddingRight === true ? v.spacing.spacerX : 0;
        } else if (isNumber(paddingRight)) {
          newStyles.paddingRight = paddingRight;
        } else if (isString(paddingRight)) {
          switch (paddingRight) {
            case 'xs':
              newStyles.paddingRight = v.spacing.spacerX * xs;
              break;
            case 'sm':
              newStyles.paddingRight = v.spacing.spacerX * sm;
              break;
            case 'md':
              newStyles.paddingRight = v.spacing.spacerX * md;
              break;
            case 'lg':
              newStyles.paddingRight = v.spacing.spacerX * lg;
              break;
          }
        }
      }

      // Padding bottom
      if (!isNull(paddingBottom) || !isUndefined(paddingBottom)) {
        if (isBoolean(paddingBottom)) {
          newStyles.paddingBottom = paddingBottom === true ? v.spacing.spacerY : 0;
        } else if (isNumber(paddingBottom)) {
          newStyles.paddingBottom = paddingBottom;
        } else if (isString(paddingBottom)) {
          switch (paddingBottom) {
            case 'xs':
              newStyles.paddingBottom = v.spacing.spacerY * xs;
              break;
            case 'sm':
              newStyles.paddingBottom = v.spacing.spacerY * sm;
              break;
            case 'md':
              newStyles.paddingBottom = v.spacing.spacerY * md;
              break;
            case 'lg':
              newStyles.paddingBottom = v.spacing.spacerY * lg;
              break;
          }
        }
      }

      // Padding left
      if (!isNull(paddingLeft) || !isUndefined(paddingLeft)) {
        if (isBoolean(paddingLeft)) {
          newStyles.paddingLeft = paddingLeft === true ? v.spacing.spacerX : 0;
        } else if (isNumber(paddingLeft)) {
          newStyles.paddingLeft = paddingLeft;
        } else if (isString(paddingLeft)) {
          switch (paddingLeft) {
            case 'xs':
              newStyles.paddingLeft = v.spacing.spacerX * xs;
              break;
            case 'sm':
              newStyles.paddingLeft = v.spacing.spacerX * sm;
              break;
            case 'md':
              newStyles.paddingLeft = v.spacing.spacerX * md;
              break;
            case 'lg':
              newStyles.paddingLeft = v.spacing.spacerX * lg;
              break;
          }
        }
      }

      const attrs = {
        ...props,
        ref: c => (this.wrappedInstance = c),
        className,
        style: newStyles,
      };

      return <WrappedComponent {...attrs} />;
    }
  }

  return hoistNonReactStatic(Enhance, WrappedComponent);
};

export default withMarginPadding;
