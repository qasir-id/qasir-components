'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

var _shared = require('./../shared');

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Report = require('./Report');

var _Report2 = _interopRequireDefault(_Report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  passes: {
    color: '#2ecc71'
  },
  violations: {
    color: '#e74c3c'
  }
};

var Panel = function (_Component) {
  _inherits(Panel, _Component);

  function Panel(props) {
    var _ref;

    _classCallCheck(this, Panel);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this, props].concat(args)));

    _this.state = {
      passes: [],
      violations: []
    };
    _this.channel = _addons2.default.getChannel();

    _this.onUpdate = _this.onUpdate.bind(_this);
    return _this;
  }

  _createClass(Panel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.channel.on('addon:a11y:check', this.onUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.channel.removeListener('addon:a11y:check', this.onUpdate);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(_ref2) {
      var passes = _ref2.passes,
          violations = _ref2.violations;

      this.setState({
        passes: passes,
        violations: violations
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          passes = _state.passes,
          violations = _state.violations;


      return _react2.default.createElement(_Tabs2.default, {
        tabs: [{
          label: _react2.default.createElement(
            'span',
            { style: styles.violations },
            'Violations'
          ),
          panel: _react2.default.createElement(_Report2.default, {
            passes: false,
            items: violations,
            empty: 'No a11y violations found.'
          })
        }, {
          label: _react2.default.createElement(
            'span',
            { style: styles.passes },
            'Passes'
          ),
          panel: _react2.default.createElement(_Report2.default, {
            passes: true,
            items: passes,
            empty: 'No a11y check passed'
          })
        }]
      });

      return _react2.default.createElement(
        'div',
        null,
        this.state.text
      );
    }
  }]);

  return Panel;
}(_react.Component);

exports.default = Panel;