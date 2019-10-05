/** @jsx jsx */
import React, { PureComponent } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import classNames from 'classnames/dedupe';
import styles from './Loader.styles';

export const LOADER_COLOR = {
  GRAY: 'gray',
  BLUE: 'blue',
  GREEN: 'green',
  ORANGE: 'orange',
  RED: 'red',
  WHITE: 'white',
};

export const LOADER_SIZE = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
};

export const LOADER_TYPE = {
  DOTTED: 'dotted',
  CIRCULAR: 'circular',
};

class Loader extends PureComponent {
  static displayName = 'Loader';

  static propTypes = {
    /**
     * Class name of the root element.
     */
    className: PropTypes.string,
    /**
     * Color of the loader. Value must be one of these: `gray`, `blue`, `green`, `orange`, `red`, or `white`.
     */
    color: PropTypes.oneOf(Object.keys(LOADER_COLOR).map(type => LOADER_COLOR[type])),
    /**
     * Size of the loader. Value must be one of these: `sm`, `md`, or `lg`.
     */
    size: PropTypes.oneOf(Object.keys(LOADER_SIZE).map(type => LOADER_SIZE[type])),
    /**
     * Type of the loader. The value is either `dotted` or `circular`.
     */
    type: PropTypes.oneOf(Object.keys(LOADER_TYPE).map(type => LOADER_TYPE[type])),
  };

  static defaultProps = {
    color: LOADER_COLOR.RED,
    type: LOADER_TYPE.DOTTED,
  };

  render() {
    const { className, color, size, type, ...props } = this.props;
    delete props.children;

    const classes = classNames(
      'c-loader',
      `c-loader--${type}`,
      {
        [`c-loader--color-${color}`]: color,
        [`c-loader--size-${size}`]: size,
      },
      className
    );

    if (type === LOADER_TYPE.CIRCULAR) {
      return <div {...props} className={classes} css={styles}/>;
    }

    return (
      <div {...props} className={classes} css={styles}>
        <div className="c-loader__dot" />
        <div className="c-loader__dot" />
        <div className="c-loader__dot" />
      </div>
    );
  }
}

export default Loader;