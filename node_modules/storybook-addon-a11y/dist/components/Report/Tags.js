'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '12px 0'
  },
  tag: {
    margin: '0 6px',
    padding: '5px',
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '2px',
    color: 'rgb(130, 130, 130)',
    fontSize: '12px'
  }
};

function Tags(_ref) {
  var tags = _ref.tags;

  return _react2.default.createElement(
    'div',
    { style: styles.tags },
    tags.map(function (tag) {
      return _react2.default.createElement(
        'div',
        {
          key: tag,
          style: styles.tag
        },
        tag
      );
    })
  );
}

exports.default = Tags;