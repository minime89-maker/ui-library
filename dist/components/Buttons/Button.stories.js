"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create a story
var _default = {
  title: 'Example / Buttons',
  component: _Button.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args);
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  variant: 'btn',
  size: 'medium',
  disabled: false
};