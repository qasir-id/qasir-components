import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as Style from './modal.styles';

class ModalFooter extends PureComponent {
  render() {
    const { children, className } = this.props;
    return <Style.Footer className={className}>{children}</Style.Footer>;
  }
}

ModalFooter.propTypes = {
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

ModalFooter.defaultProps = {
  children: undefined,
  className: undefined
};

export default ModalFooter;
