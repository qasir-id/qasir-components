import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Dependencies
import { Card, Text, Badge } from '../../base';
import ImagePlaceholder from '../../base/svg-icon/svg/ImagePlaceholder';

import * as Style from './GridBoxList.style';

const IconProps = {
  width: 72,
  height: 72,
  fill: '#B0B2BB'
};

class GridBoxList extends PureComponent {
  render() {
    const {
      image,
      title,
      priceBefore,
      priceAfter,
      badgeContent,
      href,
      isEmpty,
      stockNullLabel,
      onClick,
      others
    } = this.props;
    return (
      <Style.Wrapper href={href} onClick={onClick} {...others}>
        <Card className="card" elevation="flat">
          <Style.ImageContainer className={isEmpty ? 'empty' : undefined}>
            {!badgeContent
              || (!isEmpty && (
                <Style.Badge>
                  <Badge content={badgeContent} status="discount" />
                </Style.Badge>
              ))}

            {image !== '' ? (
              <img src={image} alt={title} />
            ) : (
              <ImagePlaceholder {...IconProps} />
            )}

            {isEmpty && (
              <Text color="muted" className="text" variant="ui-small">
                {stockNullLabel}
              </Text>
            )}
          </Style.ImageContainer>
          <Style.MetaInfo>
            <Text tag="div" variant="ui-small" className="title">
              {title}
            </Text>
            <Text
              tag="div"
              variant="ui-small"
              color="neutral"
              style={{ textDecoration: 'line-through' }}
            >
              {priceBefore}
            </Text>
            <Text tag="div" weight="bold" color="highlight">
              {priceAfter}
            </Text>
          </Style.MetaInfo>
        </Card>
      </Style.Wrapper>
    );
  }
}

GridBoxList.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  priceBefore: PropTypes.string,
  priceAfter: PropTypes.string,
  badgeContent: PropTypes.string,
  href: PropTypes.string,
  isEmpty: PropTypes.bool,
  stockNullLabel: PropTypes.string,
  onClick: PropTypes.func
};

GridBoxList.defaultProps = {
  image: '',
  isEmpty: false,
  stockNullLabel: 'Stock Habis'
};

export default GridBoxList;
