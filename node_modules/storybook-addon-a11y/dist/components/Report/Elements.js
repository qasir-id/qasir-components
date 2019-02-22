'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Rules = require('./Rules');

var _Rules2 = _interopRequireDefault(_Rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styles = {
  element: {
    fontWeight: 600
  },
  target: {
    borderBottom: '1px solid rgb(130, 130, 130)',
    width: '100%',
    display: 'inline-block',
    paddingBottom: '4px',
    marginBottom: '4px'
  }
};

function Element(_ref) {
  var element = _ref.element,
      passes = _ref.passes;
  var any = element.any,
      all = element.all,
      none = element.none;


  var rules = [].concat(_toConsumableArray(any), _toConsumableArray(all), _toConsumableArray(none));

  return _react2.default.createElement(
    'li',
    { style: styles.element },
    _react2.default.createElement(
      'span',
      { style: styles.target },
      element.target[0]
    ),
    _react2.default.createElement(_Rules2.default, {
      rules: rules,
      passes: passes
    })
  );
}

function Elements(_ref2) {
  var elements = _ref2.elements,
      passes = _ref2.passes;

  return _react2.default.createElement(
    'ol',
    { style: styles.element },
    elements.map(function (element, index) {
      return _react2.default.createElement(Element, {
        passes: passes,
        element: element,
        key: index
      });
    })
  );
}

exports.default = Elements;