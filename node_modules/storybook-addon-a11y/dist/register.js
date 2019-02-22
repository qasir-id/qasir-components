'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

var _Panel = require('./components/Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _shared = require('./shared');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  _addons2.default.register(_shared.ADDON_ID, function (api) {
    _addons2.default.addPanel(_shared.PANEL_ID, {
      title: 'Accessibility',
      render: function render() {
        return _react2.default.createElement(_Panel2.default, null);
      }
    });
  });
}

exports.init = init;