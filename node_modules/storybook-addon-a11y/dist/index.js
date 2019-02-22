'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shared = exports.checkA11y = undefined;

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

var _A11yManager = require('./A11yManager');

var _A11yManager2 = _interopRequireDefault(_A11yManager);

var _shared = require('./shared');

var shared = _interopRequireWildcard(_shared);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var manager = new _A11yManager2.default();

function checkA11y(storyFn, context) {
  var channel = _addons2.default.getChannel();
  return manager.wrapStory(channel, storyFn, context);
}

exports.checkA11y = checkA11y;
exports.shared = shared;