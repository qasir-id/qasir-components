import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as Style from './modal.styles';

import Close from '../svg-icon/svg/close';

class ModalHeader extends PureComponent {
  render() {
    const { children, className, toggle, hideClose } = this.props;
    return (
      <Style.Header className={className}>
        <Style.HeaderContent>{children}</Style.HeaderContent>
        {!hideClose && (
          <Style.Close onClick={toggle}>
            <Close />
          </Style.Close>
        )}
      </Style.Header>
    );
  }
}

ModalHeader.propTypes = {
  /**
   * A prop that should not be visible in the documentation.
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Class name of the root element.
   */
  className: PropTypes.string,
  toggle: PropTypes.func,
  /**
   * Hide close icon
   */
  hideClose: PropTypes.bool
};

ModalHeader.defaultProps = {
  children: undefined,
  className: undefined,
  toggle: undefined,
  hideClose: undefined
};

export default ModalHeader;
