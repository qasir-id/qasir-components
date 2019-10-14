import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import * as v from '../../shared/constants/variables';

class Skeleton extends PureComponent {
  render() {
    const { width, height, radius } = this.props;
    return (
      <SkeletonContainer
        style={{ width, height, borderRadius: radius }}
      />
    );
  }
}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.number
};

Skeleton.defaultProps = {
  width: '140px',
  height: '16px',
  radius: v.borderRadiusLg
};

const shineLines = keyframes`
    0% {
        background-position: -100px
    }

    40%, 100% {
        background-position: 140px
    }
`;

const SkeletonContainer = styled.div`
  background-image: linear-gradient(
    90deg,
    #f4f4f4 0px,
    rgba(229, 229, 229, 0.8) 40px,
    #f4f4f4 80px
  );
  background-size: 500px;
  animation: ${shineLines} 2s infinite ease-out;
`;

export default Skeleton;
