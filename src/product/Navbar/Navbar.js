import React from 'react';
import PropTypes from 'prop-types';

import * as Style from './Navbar.styles';
import ArrowBack from '../../base/svg-icon/svg/ArrowBack';

class NavBar extends React.Component {
  eventOnClick = item => {
    this.props.onClick && this.props.onClick(item);
  };

  render() {
    const {
      title,
      imageSrc,
      className,
      useLeftIcon,
      rightContent,
      ...other
    } = this.props;

    return (
      <Style.Wrapper className={`qasir-navbar ${className}`} {...other}>
        <Style.Container className="container">
          {useLeftIcon && (
            <Style.Icon onClick={this.eventOnClick}>
              {imageSrc ? (
                <img src={imageSrc} alt={title} />
              ) : (
                <ArrowBack width={20} height={20} fill="#F04B32" />
              )}
            </Style.Icon>
          )}
          <Style.Title>{title}</Style.Title>
        </Style.Container>
        {rightContent && (
          <Style.RightContent> {rightContent} </Style.RightContent>
        )}
      </Style.Wrapper>
    );
  }
}

NavBar.propTypes = {
  /**
   * Class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Title of page
   */
  title: PropTypes.string,
  /**
   * Image Icon of Navbar
   */
  imageSrc: PropTypes.string,
  /**
   * Show / hide left Icon
   */
  useLeftIcon: PropTypes.bool,
  onClick: PropTypes.func,
  /**
   * Add right content element if any, you can use your own component
   */
  rightContent: PropTypes.node
};

NavBar.defaultProps = {
  useLeftIcon: true,
  className: ''
};

export default NavBar;
