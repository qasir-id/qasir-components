import React from 'react';
import PropTypes from 'prop-types';
import { Row as AntdRow } from 'antd';

import styles from './grid.styles';

const styled = {
  position: 'relative',
  height: 'auto',
  marginRight: 0,
  marginLeft: 0,
  zoom: 1,
  display: 'block'
};

const propTypes = {
  align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
  justify: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'space-around',
    'space-between'
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  prefixCls: PropTypes.string
};

const Row = props => <AntdRow {...props} css={styles} style={styled} />;

Row.propTypes = propTypes;

export default Row;
