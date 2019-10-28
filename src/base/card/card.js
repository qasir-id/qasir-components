import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as v from '../../shared/constants/variables';
import * as c from '../../shared/constants/color';

export const CARD_ELEVATION = {
  flat: 'flat',
  container: 'container',
  raised: 'raised',
  float: 'float',
  hover: 'hover'
};

class Card extends PureComponent {
  // modify elevation constant
  getElevation(elevation) {
    switch (elevation) {
      case CARD_ELEVATION.flat:
        return css`
          box-shadow: ${v.elevation1};
        `;
      case CARD_ELEVATION.container:
        return css`
          box-shadow: ${v.elevation2};
        `;
      case CARD_ELEVATION.raised:
        return css`
          box-shadow: ${v.elevation3};
        `;
      case CARD_ELEVATION.float:
        return css`
          box-shadow: ${v.elevation4};
        `;
      case CARD_ELEVATION.hover:
        return css`
          box-shadow: ${v.elevation5};
        `;
      default:
        return false;
    }
  }

  render() {
    const { children, className, elevation, ...props } = this.props;

    // Base Style of Card
    const Wrapper = styled.div`
      background: ${c.color.LightPrimary};
      padding: ${v.spacing.s}px;
      ${this.getElevation(elevation)};
      border-radius: ${v.borderRadiusLg}px;
      overflow: hidden;
    `;

    return (
      <Wrapper className={className} {...props}>
        {children}
      </Wrapper>
    );
  }
}

Card.propTypes = {
  /**
   * A prop that should not be visible in the documentation.
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Specifies the appearance of decorative card. The value is either `flat`, `container`, `raised` , `float` or `hover`.
   */
  elevation: PropTypes.oneOf(
    Object.keys(CARD_ELEVATION).map(type => CARD_ELEVATION[type])
  )
};

Card.defaultProps = {
  children: undefined,
  className: undefined,
  elevation: 'container'
};

export default Card;
