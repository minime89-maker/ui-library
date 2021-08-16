"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Alert = _interopRequireDefault(require("./Alert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example / Alerts',
  component: _Alert.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Alert.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: 'alert',
  label: 'This is a Alert!',
  size: 'medium'
};