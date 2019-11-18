import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Skeleton from '../../base/skeleton';

class Uploadimageskeleton extends PureComponent {
  render() {
    const { PropTypes } = this.props;
    return (
      <div>
        <Skeleton style={{ marginBottom: 16 }} height="150px" width="100%" />
        <Skeleton style={{ margin: 'auto' }} />
      </div>
    );
  }
}

export default Uploadimageskeleton;
