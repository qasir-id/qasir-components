/* eslint-disable react/no-unused-prop-types */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TabItem extends PureComponent {
  static displayName = 'TabItem';

  static propTypes = {
    /**
     * Props for body element.
     */
    bodyProps: PropTypes.object,
    /**
     * Elements inside the tab body.
     */
    children: PropTypes.node.isRequired,
    /**
     * Props for menu element.
     */
    menuProps: PropTypes.object,
    /**
     * Invoked when the user clicks the tab menu. It's passed two arguments:
     * (1) index, which is a number that describes the current index of tab item,
     * (2) the event object.
     */
    onClick: PropTypes.func,
    /**
     * Subtitle for the tab menu.
     */
    subtitle: PropTypes.node,
    /**
     * Title for the tab menu.
     */
    title: PropTypes.node.isRequired
  };

  render() {
    return false;
  }
}

export default TabItem;
