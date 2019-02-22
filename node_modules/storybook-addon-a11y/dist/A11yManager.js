'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WrapStory = require('./components/WrapStory');

var _WrapStory2 = _interopRequireDefault(_WrapStory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Run all a11y checks inside
var A11yManager = function () {
  function A11yManager() {
    _classCallCheck(this, A11yManager);
  }

  _createClass(A11yManager, [{
    key: 'wrapStory',
    value: function wrapStory(channel, storyFn, context) {
      var props = { context: context, storyFn: storyFn, channel: channel };

      return _react2.default.createElement(_WrapStory2.default, props);
    }
  }]);

  return A11yManager;
}();

exports.default = A11yManager;