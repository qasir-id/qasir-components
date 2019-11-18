import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import * as v from '../../shared/constants/variables';

class Skeleton extends PureComponent {
  render() {
    const { width, height, radius, style, ...others } = this.props;
    const SkeletonStyles = {
      width,
      height,
      borderRadius: 'radius'
    };
    return <SkeletonContainer style={{ ...SkeletonStyles, ...style }} />;
  }
}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.number,
  style: PropTypes.node
};

Skeleton.defaultProps = {
  width: '140px',
  height: '16px',
  radius: v.borderRadiusLg
};

const shineLines = keyframes`
   0% {
      background-position: -468px 0;
    }
    
    100% {
      background-position: 468px 0; 
    }
`;

const SkeletonContainer = styled.div`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 300px;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shineLines};
  animation-timing-function: linear;

  margin-bottom: ${v.spacing.s}px;
`;

export default Skeleton;
