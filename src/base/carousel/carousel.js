import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import { Wrapper } from './carousel.styles';

export default class Carousel extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Slider {...this.props} />
      </Wrapper>
    );
  }
}
