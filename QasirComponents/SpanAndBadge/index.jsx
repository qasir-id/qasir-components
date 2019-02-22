import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge';

const SpanAndBadge = (props) => {
  const { textValue, valueSpan, valueCount, styleCss} = props;
  return (
    <div className={textValue}>
        <span className="font-size-12">{valueSpan}</span>
        <div>
            <Badge {...props} />
        </div>
    </div>  
  );
};

SpanAndBadge.propTypes = {
  textValue: PropTypes.string,
  valueSpan: PropTypes.string,
  valueCount: PropTypes.string,
  styleCss: PropTypes.object,
};

export default SpanAndBadge;
