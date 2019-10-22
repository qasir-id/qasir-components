import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../text';
import * as v from '../../shared/constants/variables';

const Wrapper = styled.div`
  width: 767px;
  max-width: 100%;
  margin: auto;
  text-align: center;
`;
const OtherWrapper = styled.div`
  margin-top: ${v.spacing.m}px;
`;

class EmptyState extends PureComponent {
  render() {
    const {
      img,
      img2x,
      imgWidth,
      title,
      subtitle,
      otherComponent,
      className,
      ...props
    } = this.props;
    return (
      <Wrapper {...props} className={className}>
        <img
          src={img}
          srcSet={img2x !== '' && `${img2x} 2x`}
          width={imgWidth}
        />
        <Text
          variant='ui-small'
          weight='bold'
          tag='h2'
          style={{ marginBottom: v.spacing.xs }}
        >
          {title}
        </Text>
        <Text variant='ui-small' tag='span'>
          {subtitle}
        </Text>
        {otherComponent && <OtherWrapper>{otherComponent}</OtherWrapper>}
      </Wrapper>
    );
  }
}

EmptyState.propTypes = {
  /**
   * Class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Width of image.
   */
  imgWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Image for default.
   */
  img: PropTypes.string,
  /**
   * Image for retina.
   */
  img2x: PropTypes.string,
  /**
   * Text for title.
   */
  title: PropTypes.string,
  /**
   * Text for subtitle
   */
  subtitle: PropTypes.string,
  /**
   * Insert other component if any
   */
  otherComponent: PropTypes.node
};

EmptyState.defaultProps = {
  className: undefined,
  imgWidth: '100px',
  img: undefined,
  img2x: undefined,
  title: undefined,
  subtitle: undefined,
  otherComponent: undefined
};

export default EmptyState;
