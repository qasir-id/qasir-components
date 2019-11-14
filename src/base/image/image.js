import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as v from '../../shared/constants/variables';
import * as c from '../../shared/constants/color';

import defaultImg from './assets/images/defaultImage.png';

export const IMAGE_RADIUS = {
  roundedPrimary: 'Rounded Primary',
  roundedSecondary: 'Rounded Secondary',
  circle: 'Circle'
};
export const IMAGE_SIZE = {
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
  xlarge: 'Extra Large'
};
class Image extends PureComponent {
  getImageSize(imageSize) {
    switch (imageSize) {
      case IMAGE_SIZE.small:
        return css`
          width: 24px;
          height: 24px;
        `;
      case IMAGE_SIZE.medium:
        return css`
          width: 64px;
          height: 64px;
        `;
      case IMAGE_SIZE.large:
        return css`
          width: 100px;
          height: 100px;
        `;
      case IMAGE_SIZE.xlarge:
        return css`
          width: 164px;
          height: 164px;
        `;
      default:
        return css`
          width: 42px;
          height: 42px;
        `;
    }
  }
  getImageRadius(imageRadius) {
    switch (imageRadius) {
      case IMAGE_RADIUS.roundedSecondary:
        return css`
          border-radius: ${v.spacing.xxs}px;
        `;
      case IMAGE_RADIUS.roundedPrimary:
        return css`
          border-radius: ${v.spacing.xs}px;
        `;
      case IMAGE_RADIUS.circle:
        return css`
          border-radius: 50%;
        `;
      default:
        return css`
          border-radius: 0;
        `;
    }
  }
  render() {
    const { src, width, height, imageRadius, imageSize } = this.props;
    const ImgWrapper = styled.div`
      overflow: hidden;
      display: inline-block;
      ${this.getImageSize(imageSize)};
      ${this.getImageRadius(imageRadius)};
    `;
    const Image = styled.img`
      width: 100%;
    `;
    return (
      <ImgWrapper>
        <Image
          src={src}
          width={width}
          height={height}
          imageRadius={imageRadius}
          imageSize={imageSize}
        />
      </ImgWrapper>
    );
  }
}

Image.propTypes = {
  /**
   * src for image.
   */
  src: PropTypes.string,
  /**
   * Width of image.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOf(
    Object.keys(IMAGE_RADIUS).map(type => IMAGE_RADIUS[type])
  ),
  imageSize: PropTypes.oneOf(
    Object.keys(IMAGE_SIZE).map(type => IMAGE_SIZE[type])
  )
};

Image.defaultProps = {
  src: { defaultImg },
  width: undefined,
  height: undefined,
  borderRadius: undefined,
  imageSize: undefined
};

export default Image;
