"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Checkboxes',
  component: _Checkbox.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Checkbox.default, args);
};

var Default = Template.bind();
exports.Default = Default;
Default.args = {
  name: 'checkbox',
  text: 'Checkbox',
  type: 'checkbox',
  id: 1
};