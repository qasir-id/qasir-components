import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Skeleton from '../../base/skeleton';

class Uploadimageskeleton extends PureComponent {
  render() {
    const { PropTypes } = this.props;
    return (
      <div>
        <Skeleton style={{ marginBottom: 14 }} />
        <Skeleton style={{ marginBottom: 0 }} height="150px" width="100%" />
      </div>
    );
  }
}

export default Uploadimageskeleton;
