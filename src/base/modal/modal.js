import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { css } from 'styled-components';
import * as Style from './modal.styles';

export const SIZE = {
  small: 'small',
  normal: 'normal',
  large: 'large'
};

class Modal extends PureComponent {
  getSize(size) {
    switch (size) {
      case SIZE.small:
        return css`
          @media screen and (min-width: 767px) {
            max-width: 560px;
            margin: 1.75rem auto;
          }
        `;
      case SIZE.large:
        return css`
          @media screen and (min-width: 767px) {
            max-width: 960px;
            margin: 1.75rem auto;
          }
        `;
      default:
        return css`
          @media screen and (min-width: 767px) {
            max-width: 767px;
            margin: 1.75rem auto;
          }
        `;
    }
  }

  render() {
    const {
      children,
      className,
      isOpen,
      centered,
      size,
      ...props
    } = this.props;
    const modalSize = css`
      ${this.getSize(size)};
    `;

    return (
      <Style.Container
        className={className}
        {...props}
      >
        <TransitionGroup>
          {isOpen && (
            <CSSTransition timeout={300} classNames="anim">
              <Style.Wrapper data-centered={centered}>
                <Style.Dialog className="main" css={modalSize}>
                  {children}
                </Style.Dialog>
                <Style.Overlay className="overlay" />
              </Style.Wrapper>
            </CSSTransition>
          )}
        </TransitionGroup>
      </Style.Container>
    );
  }
}

Modal.propTypes = {
  /**
   * A prop that should not be visible in the documentation.
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Class name of the root element.
   */
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  centered: PropTypes.bool,
  /**
   * corresponds modal sizes, ie. `normal`,`small` or `large`
   */
  size: PropTypes.oneOf(Object.keys(SIZE).map(type => SIZE[type]))
};

Modal.defaultProps = {
  children: undefined,
  className: undefined,
  isOpen: false,
  size: 'normal',
  centered: true
};

export default Modal;
