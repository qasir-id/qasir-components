import React from 'react';
import PropTypes from 'prop-types';
import * as v from '../../shared/constants/variables';
/**
 * This component is a wrapper for setting default props of SVG icon
 */
export const propTypes = {
  children: PropTypes.node,
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.string,
  strokeLinecap: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

const defaultProps = {
  fill: v.color.black,
  height: 24,
  stroke: 'currentColor',
  strokeLinecap: 'round',
  viewBox: '0 0 24 24',
  width: 24,
  xmlns: 'http://www.w3.org/2000/svg',
  // https://stackoverflow.com/questions/29884930/svg-namespace-prefix-xlink-for-href-on-textpath-is-not-defined?noredirect=1&lq=1
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
};

function SvgPlaceholder(props) {
  const { width, height, fill, stroke, style } = props;
  const backgroundColor = fill || stroke;
  const placeholderStyle = {
    width,
    height,
    backgroundColor,
    opacity: 0.3,
    display: 'inline-block',
    borderRadius: '25%',
    ...style
  };

  let className = 'svg-icons';
  if (props.className) {
    className += ` ${props.className}`;
  }

  return <span className={className} style={placeholderStyle} />;
}

class SvgIcon extends React.Component {
  state = {
    server: true
  };

  componentDidMount() {
    this.setState({ server: false });
  }

  render() {
    const { children, forceSSR, ...props } = this.props;

    if (forceSSR) {
      return <svg {...props}>{children}</svg>;
    }

    if (this.state.server) {
      return <SvgPlaceholder {...props} />;
    }

    return <svg {...props}>{children}</svg>;
  }
}

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = defaultProps;

export default SvgIcon;
