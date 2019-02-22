'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var impactColors = {
  minor: '#f1c40f',
  moderate: '#e67e22',
  serious: '#e74c3c',
  critical: '#c0392b',
  success: '#2ecc71'
};

var styles = {
  rules: {
    display: 'flex',
    flexDirection: 'column',
    padding: '4px',
    fontWeight: '400'
  },
  rule: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '6px'
  },
  status: {
    height: '16px',
    width: '16px',
    borderRadius: '8px',
    fontSize: '10px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    flex: '0 0 16px'
  },
  message: {
    paddingLeft: '6px'
  }
};

function Rule(_ref) {
  var rule = _ref.rule,
      passes = _ref.passes;

  var color = passes ? impactColors.success : impactColors[rule.impact];

  return _react2.default.createElement(
    'div',
    { style: styles.rule },
    _react2.default.createElement(
      'div',
      {
        style: _extends({}, styles.status, {
          backgroundColor: color
        })
      },
      passes ? '✔' : '✘'
    ),
    _react2.default.createElement(
      'span',
      { style: styles.message },
      rule.message
    )
  );
}

function Rules(_ref2) {
  var rules = _ref2.rules,
      passes = _ref2.passes;

  return _react2.default.createElement(
    'div',
    { style: styles.rules },
    rules.map(function (rule, index) {
      return _react2.default.createElement(Rule, {
        passes: passes,
        rule: rule,
        key: index
      });
    })
  );
}

exports.default = Rules;