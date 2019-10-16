import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as Style from './modal.styles';

class ModalBody extends PureComponent {
  render() {
    const { children, className } = this.props;
    return <Style.Body className={className}>{children}</Style.Body>;
  }
}

ModalBody.propTypes = {
  /**
   * A prop that should not be visible in the documentation.
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Class name of the root element.
   */
  className: PropTypes.string
};

ModalBody.defaultProps = {
  children: undefined,
  className: undefined
};

export default ModalBody;
