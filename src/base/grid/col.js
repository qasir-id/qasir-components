import React from 'react';
import PropTypes from 'prop-types';
import { Col as AntdCol } from 'antd/es/grid';

import styles from './grid.styles';

const propTypes = {
  span: PropTypes.number,
  order: PropTypes.number,
  offset: PropTypes.number,
  push: PropTypes.number,
  pull: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  xxl: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

const Col = props => <AntdCol {...props} css={styles} />;

Col.propTypes = propTypes;

export default Col;
