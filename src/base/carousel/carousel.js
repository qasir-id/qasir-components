import React, { PureComponent } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from './carousel.styles';

export default class Carousel extends PureComponent {
  render() {
    return <Slider {...this.props} css={styled} />;
  }
}
